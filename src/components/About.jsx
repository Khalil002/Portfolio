import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full flex flex-col items-center px-4 py-20 max-w-4xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">
        {t.about.heading}
      </Reveal>
      <Reveal as="p" variant="up" delay={150} className="text-white/70 text-sm md:text-base leading-relaxed text-center">
        {t.about.text}
      </Reveal>
    </section>
  );
}
