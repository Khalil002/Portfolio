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
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl py-3 px-6 transition"
        >
          <FaEye /> {t.hero.viewResume}
        </a>
        <a
          href={profile.resume}
          download="Khalil-El-Hage-Kassem-Resume.pdf"
          className="flex items-center gap-2 border border-purple-400/50 hover:bg-purple-600/20 text-purple-200 font-semibold rounded-xl py-3 px-6 transition"
        >
          <FaDownload /> {t.hero.downloadResume}
        </a>
        <a
          href="#search"
          className="flex items-center gap-2 text-purple-300 hover:text-white font-semibold py-3 px-6 transition"
        >
          {t.hero.searchRepos}
        </a>
      </div>

    </section>
  );
}
