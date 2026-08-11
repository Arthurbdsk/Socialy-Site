import { useEffect, useState } from "react";
import "./intro.css";

/**
 * Cortina de abertura: a marca completa aparece, a cortina sobe e entrega
 * o hero. Roda uma vez por carregamento e some do fluxo depois.
 */
export default function Intro() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const a = setTimeout(() => setPhase("out"), 900);
    const b = setTimeout(() => setPhase("gone"), 2000);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <img
        src="/logo-lockup.png"
        alt=""
        className="intro__lockup"
        width={220}
        height={221}
      />
      <span className="intro__bar" />
    </div>
  );
}
