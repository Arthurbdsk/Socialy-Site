import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Edge from "./components/Edge";
import Offline from "./components/Offline";
import Method from "./components/Method";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { useSmoothScroll } from "./lib/smooth";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Intro />
      <a className="skip-link" href="#servicos">
        Pular para o conteúdo
      </a>
      <Header />
      <div className="shell">
        <main id="topo">
          <Hero />
          <Marquee />
          <Services />
          <Edge />
          <Offline />
          <Method />
          <Work />
          <Marquee tone="soft" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
