import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, WhatsAppGlyph, InstagramGlyph } from "./Icons";
import {
  FACTS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "../lib/site";
import { useMagnetic } from "../lib/motion";
import "./contact.css";

const GOALS = [
  "Ser encontrado no Google",
  "Passar mais credibilidade",
  "Receber pedidos de orçamento",
  "Vender pelo site",
  "Ainda não sei",
] as const;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const magnet = useMagnetic<HTMLButtonElement>(0.18);

  // Sem servidor: o formulário monta a mensagem e abre a conversa no WhatsApp.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const negocio = String(data.get("negocio") ?? "").trim();
    const objetivo = String(data.get("objetivo") ?? "").trim();
    const detalhes = String(data.get("detalhes") ?? "").trim();

    const linhas = [
      `Olá! Sou ${nome || "um interessado"} e quero um orçamento.`,
      negocio && `Negócio: ${negocio}`,
      objetivo && `Objetivo: ${objetivo}`,
      detalhes && `Detalhes: ${detalhes}`,
    ].filter(Boolean);

    window.open(whatsappLink(linhas.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="section ctt" id="contato">
      <div className="wrap">
        <div className="ctt__panel">
          <div className="ctt__mesh" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="ctt__side">
            <Reveal className="reveal--mask">
              <h2 className="display ctt__title">Pronto para crescer online?</h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="ctt__sub">
                Conte o que o seu negócio faz e devolvemos uma proposta com escopo,
                prazo e valor fechados. Sem compromisso e sem enrolação.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="ctt__direct">
                <a
                  className="ctt__direct-item"
                  href={whatsappLink("Olá! Vim pelo site da Socialy.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppGlyph />
                  <span className="ulink">{WHATSAPP_DISPLAY}</span>
                </a>
                <a
                  className="ctt__direct-item"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramGlyph />
                  <span className="ulink">@{INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="ctt__form-wrap">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__field">
                <label htmlFor="nome">Seu nome</label>
                <input id="nome" name="nome" type="text" required placeholder="Como te chamamos" />
              </div>

              <div className="form__field">
                <label htmlFor="negocio">Seu negócio</label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  required
                  placeholder="Pizzaria, clínica, academia..."
                />
              </div>

              <div className="form__field">
                <label htmlFor="objetivo">O que o site precisa resolver</label>
                <select id="objetivo" name="objetivo" defaultValue={GOALS[2]}>
                  {GOALS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="detalhes">Algum detalhe importante</label>
                <textarea
                  id="detalhes"
                  name="detalhes"
                  rows={3}
                  placeholder="Prazo, referências que você gosta, se já tem logo..."
                />
              </div>

              <button ref={magnet} className="btn form__submit" type="submit">
                <span>Enviar pelo WhatsApp</span>
                <span className="btn__dot">
                  <ArrowUpRight />
                </span>
              </button>

              <p className="form__fine" role="status">
                {sent
                  ? "Conversa aberta no WhatsApp. Se a janela não subiu, libere os pop-ups ou chame direto no número ao lado."
                  : "O botão abre o WhatsApp com a mensagem já escrita. Você confere antes de enviar."}
              </p>
            </form>
          </Reveal>
        </div>

        <ul className="facts">
          {FACTS.map((f, i) => (
            <Reveal as="li" key={f.label} delay={i * 60} className="facts__item">
              <span className="facts__label">{f.label}</span>
              {"href" in f && f.href ? (
                <a
                  className="facts__value ulink"
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {f.value}
                </a>
              ) : (
                <span className="facts__value">{f.value}</span>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
