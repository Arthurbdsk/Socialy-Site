import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { PROJECTS, whatsappLink, type Project } from "../lib/site";
import { useMagnetic, useTilt } from "../lib/motion";
import "./work.css";

const CTA = whatsappLink("Olá! Vi o portfólio da Socialy e quero um site assim.");

function Card({ project, index }: { project: Project; index: number }) {
  const tilt = useTilt<HTMLDivElement>(5);

  // Com url o card inteiro vira link para o site no ar; sem url continua
  // sendo só um cartão.
  const Shell = project.url ? "a" : "div";
  const shellProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal
      as="li"
      delay={(index % 2) * 100}
      className={`work__card ${project.featured ? "is-featured" : ""}`}
    >
      <article>
        <Shell className="work__shell" {...shellProps}>
          <div className="work__cover" ref={tilt}>
            {project.image ? (
              <img
                src={project.image}
                alt={`Página inicial do site ${project.name}`}
                loading="lazy"
              />
            ) : (
              <div className="work__slot">
                <span className="work__slot-name">{project.name}</span>
                <span className="work__slot-tag">prévia em breve</span>
              </div>
            )}

            <span className="work__sheen" aria-hidden="true" />
            {project.featured && <span className="work__flag">Destaque</span>}

            <span className="work__peek" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </div>

          <div className="work__meta">
            <h3 className="work__name">{project.name}</h3>
            <p className="work__tags">
              {project.segment} <i aria-hidden="true" /> {project.kind}{" "}
              <i aria-hidden="true" /> <span className="num">{project.year}</span>
            </p>
          </div>
        </Shell>
      </article>
    </Reveal>
  );
}

export default function Work() {
  const magnet = useMagnetic<HTMLAnchorElement>(0.22);

  return (
    <section className="section work" id="portfolio">
      <span className="aura aura--orange work__aura" aria-hidden="true" />

      <div className="wrap">
        <Reveal className="reveal--mask">
          <h2 className="banner">Portfólio</h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="work__deck deck">
            Projetos no ar, cada um com a <em>cara do seu dono</em>.
          </p>
        </Reveal>

        <ul className="work__grid">
          {PROJECTS.map((p, i) => (
            <Card key={p.name} project={p} index={i} />
          ))}
        </ul>

        <Reveal delay={80}>
          <div className="work__cta">
            <p>Quer ver algum destes de perto ou conversar sobre o seu?</p>
            <a
              ref={magnet}
              className="btn"
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Falar com a Socialy</span>
              <span className="btn__dot">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
