import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full flex flex-col items-center px-4 py-20 max-w-6xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">
        {t.projects.heading}
      </Reveal>
      <div className="w-full flex flex-col gap-6">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            variant="up"
            delay={index * 100}
            key={project.title}
            className="w-full bg-gray-900/40 rounded-xl shadow-xl overflow-hidden md:flex gap-6 p-6 border border-white/5"
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-purple-400 hover:underline cursor-pointer">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {t.projects.descriptions[project.title]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-purple-600/20 text-white px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-300 hover:text-white transition"
                >
                  <FaGithub className="w-5 h-5" /> {t.projects.code}
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300 hover:text-white transition"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> {t.projects.live}
                  </a>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 gap-4 mt-6 md:mt-0">
              <div className="bg-gray-800/30 rounded-lg flex items-center justify-center p-8 min-h-[160px]">
                <span className="text-purple-300/60 text-sm tracking-wide">
                  {project.title}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
