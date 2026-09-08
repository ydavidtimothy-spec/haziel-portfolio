import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Career from "@/components/career";
import WhyHire from "@/components/why-hire";
import Recognition from "@/components/recognition";
import { WorkflowSection } from "@/components/workflow";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Career />
      <WhyHire />
      <Recognition />
      <WorkflowSection />
      <Contact />
    </main>
  );
}
