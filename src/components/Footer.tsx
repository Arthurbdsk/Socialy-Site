import Logo from "./Logo";
import Wordmark from "./Wordmark";
import Reveal from "./Reveal";
import { NAV, INSTAGRAM_URL, whatsappLink } from "../lib/site";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      <div className="wrap ftr__inner">
        <Reveal className="ftr__brand">
          <Logo className="ftr__mark" />
          <div>
            <Wordmark className="ftr__word" />
            <p>Estúdio digital para empresas que querem crescer.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <nav className="ftr__nav" aria-label="Rodapé">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="ulink">
                {item.label}
              </a>
            ))}
            <a className="ulink" href="#contato">
              Contato
            </a>
          </nav>
        </Reveal>

        <Reveal delay={140}>
          <div className="ftr__social">
            <a
              className="ulink"
              href={whatsappLink("Olá! Vim pelo site da Socialy.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="ulink" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </Reveal>
      </div>

      {/* assinatura gigante fechando a página */}
      <div className="ftr__sign" aria-hidden="true">
        <span>socialy</span>
      </div>

      <div className="wrap ftr__base">
        <p>
          <span className="num">{year}</span> Socialy. Todos os direitos reservados.
        </p>
        <a href="#topo" className="ftr__top">
          <span className="ulink">Voltar ao topo</span>
          <span className="ftr__top-dot" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path
                d="M8 13V3M3.6 7.4 8 3l4.4 4.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </footer>
  );
}
