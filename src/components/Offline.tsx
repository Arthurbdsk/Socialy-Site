import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { OFFLINE, whatsappLink } from "../lib/site";
import { useMagnetic, usePointerGlow } from "../lib/motion";
import "./offline.css";

const CTA = whatsappLink("Olá! Quero sair do zero e ter um site próprio.");

function Risk({ item, index }: { item: (typeof OFFLINE)[number]; index: number }) {
  const glow = usePointerGlow<HTMLDivElement>();

  return (
    <Reveal as="li" delay={index * 90} className="off__item">
      <div className="off__card" ref={glow}>
        <span className="off__spark" aria-hidden="true" />
        <span className="off__num num">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="off__title">{item.title}</h3>
        <p className="off__body">{item.body}</p>
      </div>
    </Reveal>
  );
}

export default function Offline() {
  const magnet = useMagnetic<HTMLAnchorElement>(0.22);

  return (
    <section className="off" id="custo">
      <div className="off__panel">
        <span className="off__orb off__orb--pink" aria-hidden="true" />
        <span className="off__orb off__orb--orange" aria-hidden="true" />

        <div className="wrap">
          <Reveal className="reveal--mask">
            <h2 className="banner off__banner">Sem site</h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="off__deck deck">
              Quanto custa continuar <em>invisível</em>?
            </p>
          </Reveal>

          <ul className="off__grid">
            {OFFLINE.map((item, i) => (
              <Risk key={item.title} item={item} index={i} />
            ))}
          </ul>

          <Reveal delay={140}>
            <div className="off__close">
              <p>
                Um site profissional resolve os quatro de uma vez e devolve para a sua
                empresa o controle da própria presença digital.
              </p>
              <a
                ref={magnet}
                className="btn btn--light"
                href={CTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Quero meu site</span>
                <span className="btn__dot">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
