import { type CSSProperties } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, ArrowRight } from "./Icons";
import { STATS, whatsappLink } from "../lib/site";
import { useCountUp, useMagnetic, useParallax, usePointerDrift } from "../lib/motion";
import "./hero.css";

const ORCAMENTO = whatsappLink("Olá! Vim pelo site e quero um orçamento para o meu site.");

function Stat({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, n } = useCountUp(stat.count ?? 0);

  return (
    <li className="stats__item" style={{ "--i": index } as CSSProperties}>
      <span className="stats__value num" ref={ref}>
        {stat.count != null ? (
          <>
            {n}
            {stat.suffix ? <em>{stat.suffix}</em> : null}
          </>
        ) : (
          stat.text
        )}
      </span>
      <span className="stats__label">{stat.label}</span>
    </li>
  );
}

export default function Hero() {
  const magnet1 = useMagnetic<HTMLAnchorElement>(0.22);
  const magnet2 = useMagnetic<HTMLAnchorElement>(0.22);
  const meshRef = useParallax<HTMLDivElement>(90);
  const panelRef = usePointerDrift<HTMLDivElement>(34);

  return (
    <section className="hero">
      <div className="hero__panel" ref={panelRef}>
        <div className="mesh" ref={meshRef} aria-hidden="true">
          <span className="mesh__blob mesh__blob--1" />
          <span className="mesh__blob mesh__blob--2" />
          <span className="mesh__blob mesh__blob--3" />
          <span className="mesh__blob mesh__blob--4" />
        </div>
        <div className="hero__grain" aria-hidden="true" />

        <div className="hero__inner">
          {/* Uma máscara por linha visual, com nowrap: se a linha quebrasse
              dentro da máscara, sobraria um vão extra só naquele ponto.
              O texto segue inteiro em cada span, então copia normal. */}
          <h1 className="display hero__title">
            {["Sites que", "transformam", "visitantes em", "clientes"].map((linha, i) => (
              <span className="hero__mask" key={linha}>
                <span
                  className="hero__line"
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  {linha}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero__foot">
            <div className="hero__pitch">
              <p>
                A Socialy constrói a presença digital de quem cansou de depender do
                Instagram para ser encontrado.
              </p>
              <div className="hero__actions">
                <a
                  ref={magnet1}
                  className="btn btn--light"
                  href={ORCAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Solicite um orçamento</span>
                  <span className="btn__dot">
                    <ArrowUpRight />
                  </span>
                </a>
                <a ref={magnet2} className="btn hero__btn-outline" href="#portfolio">
                  <span>Ver portfólio</span>
                  <span className="btn__dot">
                    <ArrowRight />
                  </span>
                </a>
              </div>
            </div>

            <a className="cue" href="#servicos" aria-label="Descer para os serviços">
              <span className="cue__label">role</span>
              <span className="cue__rail">
                <span className="cue__dot" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <Reveal>
        <ul className="stats wrap">
          {STATS.map((s, i) => (
            <Stat key={s.label} stat={s} index={i} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
