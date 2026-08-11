import Reveal from "./Reveal";
import { SERVICES } from "../lib/site";
import { usePointerGlow } from "../lib/motion";
import "./services.css";

function Cell({ item, index }: { item: (typeof SERVICES)[number]; index: number }) {
  const glow = usePointerGlow<HTMLDivElement>();

  return (
    <Reveal as="li" delay={(index % 3) * 80} className="svc__cell">
      <div className="svc__inner" ref={glow}>
        <span className="svc__glow" aria-hidden="true" />
        <span className="svc__num num">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="svc__title">{item.title}</h3>
        <p className="svc__note">{item.note}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section svc" id="servicos">
      <span className="aura aura--orange svc__aura" aria-hidden="true" />

      <div className="wrap">
        <Reveal className="reveal--mask">
          <h2 className="banner">Serviços</h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="svc__deck deck">
            Tudo que o seu site precisa já vem <em>incluso</em>. Sem pacote extra
            aparecendo no meio do caminho.
          </p>
        </Reveal>

        <ul className="svc__grid">
          {SERVICES.map((s, i) => (
            <Cell key={s.title} item={s} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
