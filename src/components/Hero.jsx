import { FaDownload, FaEye } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="min-h-screen w-full flex flex-col justify-center items-center px-4 text-center"
    >
      <p className="text-sm text-pink-200 tracking-wider">{t.hero.greeting}</p>
      <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight mt-2">
        {profile.name}
      </h1>
      <h2 className="text-xl md:text-2xl font-serif font-semibold mt-3 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
        {t.hero.title}
      </h2>
      <p className="text-white/80 w-[90%] md:w-[70%] text-base md:text-lg mt-8 leading-relaxed">
        {t.hero.tagline}
      </p>

    </section>
  );
}
