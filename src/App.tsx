import { useEffect, useState } from "react"
import Header from "./assets/components/Header/Header"
import { scrollToSection } from "./assets/functions/scrollToSection"
import About from "./assets/sections/About/About"
import Contact from "./assets/sections/Contact/Contact"
import Experience from "./assets/sections/Experience/Experience"
import Home from "./assets/sections/Home/Home"
import Projects from "./assets/sections/Projects/Projects"
import Skills from "./assets/sections/Skills/Skills"

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="relative min-w-full min-h-fit overflow-x-hidden">

      <header className="w-full h-18
      fixed top-0 left-0 z-50">
        <Header scrollToSection={scrollToSection} scrolled={scrolled} />
      </header>

      <main className='w-full mt-18
      bg-linear-to-r from-gray-900 via-navy-blue-1 to-black'>

        <section id="home" className="scroll-mt-18"><Home scrollToSection={scrollToSection} /></section>
        <section id="about" className="scroll-mt-18"><About /></section>
        <section id="skills" className="scroll-mt-18"><Skills /></section>
        <section id="experience" className="scroll-mt-18"><Experience /></section>
        <section id="projects" className="scroll-mt-18"><Projects /></section>
        <section id="contact" className="scroll-mt-18"><Contact  /></section>
      </main>

    </div>
  )
}

export default App