import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
