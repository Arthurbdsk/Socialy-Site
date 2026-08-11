import { useEffect, useState, type CSSProperties } from "react";
import Wordmark from "./Wordmark";
import { ArrowUpRight } from "./Icons";
import { NAV, whatsappLink } from "../lib/site";
import Logo from "./Logo";
import { useDocProgress, useHideOnScroll } from "../lib/motion";
import "./header.css";

const ORCAMENTO = whatsappLink(
  "Olá! Vim pelo site e quero um orçamento para o meu site.",
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useDocProgress();
  const hidden = useHideOnScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do fundo e permite fechar o menu no Esc.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="progress" style={{ "--p": progress } as CSSProperties} aria-hidden="true" />

      <header
        className={`hdr ${scrolled ? "is-stuck" : ""} ${hidden && !open ? "is-hidden" : ""}`}
      >
        <div className="hdr__bar">
          <a href="#topo" className="hdr__brand" aria-label="Socialy, ir para o topo">
            <Logo className="hdr__mark" />
            <Wordmark />
          </a>

          <nav className="hdr__nav" aria-label="Seções do site">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hdr__link">
                <span className="hdr__link-in">{item.label}</span>
                <span className="hdr__link-in hdr__link-in--ghost" aria-hidden="true">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hdr__end">
            <a
              className="btn hdr__cta"
              href={ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Solicite um orçamento</span>
              <span className="btn__dot">
                <ArrowUpRight />
              </span>
            </a>

            <button
              className={`burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Nada de atributo hidden aqui: o display:flex do CSS anula o
          display:none do UA e o painel volta a cobrir a tela inteira,
          bloqueando clique e seleção no site todo. Quem esconde é o CSS,
          com visibility e pointer-events, e o inert tira do foco. */}
      <div
        id="menu-mobile"
        className={`sheet ${open ? "is-open" : ""}`}
        inert={!open}
      >
        <nav className="sheet__nav" aria-label="Menu">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${90 + i * 55}ms` }}
            >
              <span className="sheet__idx num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--light sheet__cta"
          href={ORCAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <span>Solicite um orçamento</span>
          <span className="btn__dot">
            <ArrowUpRight />
          </span>
        </a>
      </div>
    </>
  );
}
