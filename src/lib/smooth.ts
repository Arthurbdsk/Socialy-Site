import { useEffect } from "react";
import Lenis from "lenis";
import { tickMotion } from "./motion";

/**
 * Scroll com inércia. O Lenis assume a roda do mouse e o toque, e a cada
 * quadro empurra o loop de animação para que parallax, trilha do método e
 * barra de progresso continuem acompanhando.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      tickMotion();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Âncoras do menu passam pelo Lenis, senão o salto é seco.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88 });
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
