import { FaDownload, FaEye, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { profile, experience, education } from "../data/portfolio";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Resume() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="w-full flex flex-col items-center px-4 py-20 max-w-5xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">
        {t.resume.heading}
      </Reveal>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal variant="up">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
            <FaBriefcase className="text-purple-400" /> {t.resume.experience}
          </h3>
          <ol className="flex flex-col gap-4">
            {experience.map((job) => (
              <li key={job.role + job.period} className="bg-gray-900/40 border border-white/5 rounded-xl p-5">
                <p className="font-semibold text-purple-300">{job.role}</p>
                <p className="text-sm text-white/60">{job.place}</p>
                <p className="text-xs text-white/40 mt-1">{job.period}</p>
                <ul className="mt-3 list-disc ps-5 text-sm text-white/70 space-y-1">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal variant="up" delay={150}>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
            <FaGraduationCap className="text-purple-400" /> {t.resume.education}
          </h3>
          <ol className="flex flex-col gap-4">
            {education.map((ed) => (
              <li key={ed.school} className="bg-gray-900/40 border border-white/5 rounded-xl p-5">
                <p className="font-semibold text-purple-300">{ed.degree}</p>
                <p className="text-sm text-white/60">{ed.school}</p>
                <p className="text-xs text-white/40 mt-1">{ed.period}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

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
      </div>
    </section>
  );
}
