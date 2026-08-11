import { MARQUEE_WORDS } from "../lib/site";
import "./marquee.css";

type Props = { tone?: "bold" | "soft" };

export default function Marquee({ tone = "bold" }: Props) {
  // Duas cópias da mesma sequência: quando a primeira sai, a segunda já
  // ocupou o lugar, então o laço fecha sem emenda visível.
  const track = (
    <div className="marquee__track">
      {MARQUEE_WORDS.map((w) => (
        <span key={w} className="marquee__word">
          {w}
          <i className="marquee__sep" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee marquee--${tone}`} aria-hidden="true">
      <div className="marquee__rail">
        {track}
        {track}
      </div>
    </div>
  );
}
