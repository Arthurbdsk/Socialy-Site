import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Um único listener de scroll para o site inteiro. Cada hook se
   inscreve aqui em vez de criar o próprio rAF.
   ------------------------------------------------------------------ */
type Sub = () => void;
const subs = new Set<Sub>();
let queued = false;

function pump() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => {
    try {
      for (const fn of subs) {
        // Um assinante que estoure não pode derrubar os outros: sem este
        // try, uma exceção deixaria queued travado em true e toda animação
        // ligada ao scroll morreria em silêncio pelo resto da sessão.
        try {
          fn();
        } catch {
          /* ignora e segue para o próximo */
        }
      }
    } finally {
      queued = false;
    }
  });
}

function subscribe(fn: Sub) {
  if (subs.size === 0) {
    window.addEventListener("scroll", pump, { passive: true });
    window.addEventListener("resize", pump, { passive: true });
  }
  subs.add(fn);
  fn();
  return () => {
    subs.delete(fn);
    if (subs.size === 0) {
      window.removeEventListener("scroll", pump);
      window.removeEventListener("resize", pump);
    }
  };
}

/** Deixa o loop rodar mesmo quando o scroll vem do Lenis. */
export function tickMotion() {
  pump();
}

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

/* ------------------------------------------------------------------
   Entrou na viewport
   ------------------------------------------------------------------ */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  once = true,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return [ref, inView] as const;
}

/* ------------------------------------------------------------------
   Número que sobe de 0 até o alvo
   ------------------------------------------------------------------ */
export function useCountUp(target: number, duration = 1600) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, n };
}

/* ------------------------------------------------------------------
   Parallax: o elemento anda mais devagar que a página
   ------------------------------------------------------------------ */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 60) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return subscribe(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const t = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      el.style.setProperty("--py", `${(t * strength).toFixed(2)}px`);
    });
  }, [strength]);

  return ref;
}

/* ------------------------------------------------------------------
   Progresso de um elemento atravessando a viewport, de 0 a 1
   ------------------------------------------------------------------ */
export function useScrollLinked<T extends HTMLElement = HTMLDivElement>(
  varName = "--progress",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return subscribe(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.6;
      const done = vh * 0.85 - r.top;
      el.style.setProperty(varName, Math.min(Math.max(done / total, 0), 1).toFixed(4));
    });
  }, [varName]);

  return ref;
}

/* ------------------------------------------------------------------
   Progresso do documento inteiro
   ------------------------------------------------------------------ */
export function useDocProgress() {
  const [p, setP] = useState(0);

  useEffect(
    () =>
      subscribe(() => {
        const de = document.documentElement;
        const max = de.scrollHeight - de.clientHeight;
        setP(max > 0 ? Math.min(de.scrollTop / max, 1) : 0);
      }),
    [],
  );

  return p;
}

/* ------------------------------------------------------------------
   Cabeçalho que se esconde ao descer e volta ao subir
   ------------------------------------------------------------------ */
export function useHideOnScroll(offset = 320) {
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(
    () =>
      subscribe(() => {
        const y = document.documentElement.scrollTop;
        const goingDown = y > last.current;
        // margem de 6px para o cabeçalho não piscar com micro-oscilação
        if (Math.abs(y - last.current) > 6) {
          setHidden(goingDown && y > offset);
          last.current = y;
        }
      }),
    [offset],
  );

  return hidden;
}

/* ------------------------------------------------------------------
   Elemento que se inclina na direção do cursor
   ------------------------------------------------------------------ */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(pull = 0.28) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate3d(${dx * pull}px, ${dy * pull}px, 0)`;
    };
    const reset = () => {
      el.style.transform = "";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [pull]);

  return ref;
}

/* ------------------------------------------------------------------
   Brilho que segue o cursor dentro do elemento
   ------------------------------------------------------------------ */
export function usePointerGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };

    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  return ref;
}

/* ------------------------------------------------------------------
   Inclinação 3D leve seguindo o cursor
   ------------------------------------------------------------------ */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    };
    const reset = () => {
      el.style.transform = "";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [max]);

  return ref;
}

/* ------------------------------------------------------------------
   A malha do hero acompanha o mouse pela seção inteira
   ------------------------------------------------------------------ */
export function usePointerDrift<T extends HTMLElement = HTMLDivElement>(strength = 26) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--dx", `${(px * strength).toFixed(2)}px`);
      el.style.setProperty("--dy", `${(py * strength).toFixed(2)}px`);
    };
    const reset = () => {
      el.style.setProperty("--dx", "0px");
      el.style.setProperty("--dy", "0px");
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return ref;
}
