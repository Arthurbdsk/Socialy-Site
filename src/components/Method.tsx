import Reveal from "./Reveal";
import { METHOD } from "../lib/site";
import { useCountUp, useScrollLinked } from "../lib/motion";
import "./method.css";

function Half({ when }: { when: string }) {
  const { ref, n } = useCountUp(50, 1200);
  return (
    <div className="pay__half">
      <span className="pay__pct num" ref={ref}>
        {n}%
      </span>
      <span className="pay__when">{when}</span>
    </div>
  );
}

export default function Method() {
  const track = useScrollLinked<HTMLOListElement>();

  return (
    <section className="section mtd" id="metodo">
      <span className="aura aura--pink mtd__aura" aria-hidden="true" />

      <div className="wrap">
        <Reveal className="reveal--mask">
          <h2 className="banner">Método</h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mtd__deck deck">
            Sete etapas com começo, meio e fim. Sem custo escondido e sem{" "}
            <em>letra miúda</em>.
          </p>
        </Reveal>

        <div className="mtd__cols">
          <Reveal className="mtd__aside">
            <div className="pay">
              <div className="pay__split">
                <Half when="no fechamento" />
                <span className="pay__plus" aria-hidden="true">
                  +
                </span>
                <Half when="na entrega" />
              </div>
              <p className="pay__note">
                Pagamento via Pix. Revisões sem limite até você aprovar, e nada vai ao
                ar antes disso.
              </p>
            </div>
          </Reveal>

          <ol className="mtd__steps" ref={track}>
            {METHOD.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="mtd__step">
                <span className="mtd__marker" aria-hidden="true" />
                <span className="mtd__num num">{String(i + 1).padStart(2, "0")}</span>
                <div className="mtd__text">
                  <h3 className="mtd__title">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
