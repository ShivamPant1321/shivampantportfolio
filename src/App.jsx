import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased bg-neutral-950 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 w-full h-full bg-neutral-950">
        <div className="bg-neutral-950 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
