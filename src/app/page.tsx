
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="font-sans bg-slate-50 min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-24 xl:px-40">
      <div className="w-full max-w-7xl flex flex-col gap-8 md:gap-12">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
      <footer className="w-full text-center py-8 text-slate-400 text-xs sm:text-sm px-2">
        © 2025 Jairo Gonzalez. Portafolio profesional. Todos los derechos reservados.
      </footer>
    </main>
  );
}
