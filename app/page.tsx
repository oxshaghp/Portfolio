import Hero from "@/Components/ui/Hero";
import About from "@/Components/ui/About";
import Life from "@/Components/ui/Life";
import Work from "@/Components/ui/Work";
import Education from "@/Components/ui/Education";
import Skils from "@/Components/ui/Skils";
import Projects from "@/Components/ui/Projects";
import Contact from "@/Components/ui/Contact";

export default function Home() {
  return (
    <main className="container mx-auto p-5 max-w-2xl pb-20">
      <Hero />
      <About />
      <Life />
      <Work />
      <Education />
      <Skils />
      <Projects />
      <Contact />
    </main>
  );
}
