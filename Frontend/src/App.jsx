import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import BackgroundPattern from "./components/BackgroundPattern";
import FloatingDock from "./components/FloatingDock";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const Experience = lazy(() => import("./components/Experiences"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  return (
    <div
      style={{ fontFamily: "font1" }}
      className="relative overflow-hidden bg-chai-bg flex flex-col"
    >
      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-[#fae8ce] rounded-full blur-[120px] opacity-70 pointer-events-none"></div>

      <BackgroundPattern />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full">
        <Hero />

        <Suspense>
          <Experience />
          <Projects />
          <Skills />
        </Suspense>
        {/* <Chatbot /> */}
        <FloatingDock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
