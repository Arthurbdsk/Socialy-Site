import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { Plus } from "./Icons";
import { EDGE } from "../lib/site";
import "./edge.css";

type ItemProps = {
  item: (typeof EDGE)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function Item({ item, index, isOpen, onToggle }: ItemProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Altura medida de verdade. O truque de grid 0fr para 1fr depende de o
  // navegador resolver fr dentro de container de altura automática, e isso
  // falha em alguns contextos. Medir remove a dúvida.
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    if (!("ResizeObserver" in window)) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Reveal as="div" delay={index * 60} className="acc__wrap">
      <h3 className="acc__h">
        <button
          className={`acc__row ${isOpen ? "is-open" : ""}`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`edge-panel-${index}`}
        >
          <span className="acc__num num">{String(index + 1).padStart(2, "0")}</span>
          <span className="acc__title">{item.title}</span>
          <span className="acc__toggle" aria-hidden="true">
            <Plus />
          </span>
        </button>
      </h3>

      <div
        id={`edge-panel-${index}`}
        className={`acc__panel ${isOpen ? "is-open" : ""}`}
        style={{ height: isOpen ? height : 0 }}
      >
        <div className="acc__panel-inner" ref={innerRef}>
          <p>{item.body}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Edge() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section edge" id="diferenciais">
      <span className="aura aura--pink edge__aura" aria-hidden="true" />

      <div className="wrap">
        <Reveal className="reveal--mask">
          <h2 className="banner">Diferenciais</h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="edge__deck deck">
            Por que a <em>Socialy</em> e não a agência do anúncio ao lado.
          </p>
        </Reveal>

        <div className="acc">
          {EDGE.map((item, i) => (
            <Item
              key={item.title}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
