import { useState } from "react";
import { projects } from "../data/portfolio";
import { repoByName, TAGS } from "../data/repos";
import SectionHead from "./SectionHead";
import { useLanguage } from "../context/LanguageContext";

// Case layout adapted from aahil-khan/portfolio-canvas (MIT) — see THIRD_PARTY_LICENSES.md.
// Shown one project at a time so the section always fits on one screen.
const CHIP_LIMIT = 5;
const pad = (n) => String(n).padStart(2, "0");

function Chevron({ dir }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "prev" ? <path d="M10 3L5 8l5 5" /> : <path d="M6 3l5 5-5 5" />}
    </svg>
  );
}

export default function Projects({ onTagClick }) {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const repo = repoByName[project.title];
  const go = (i) => setIndex(Math.max(0, Math.min(projects.length - 1, i)));
  const rtl = language === "ar";

  return (
    <section className="work" id="projects">
      <div className="wrap">
        <SectionHead eyebrow={t.nav.projects} title={t.projects.heading} />
        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.projects.heading}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(index + (rtl ? -1 : 1));
            if (e.key === "ArrowLeft") go(index + (rtl ? 1 : -1));
          }}
        >
          <article className={`case case--enter${index % 2 ? " case--flip" : ""}`} key={project.title} aria-live="polite">
            <a
              className={`case__shot${project.image ? "" : " case__shot--none"}`}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              {project.image ? <img src={project.image} alt="" /> : <span>{project.title}</span>}
            </a>
            <div className="case__body">
              <p className="case__no">
                {pad(index + 1)} / {repo?.language}
              </p>
              <h3>{project.title.replace(/-/g, " ")}</h3>
              <p className="case__lede">{t.projects.descriptions[project.title]}</p>
              <div className="s-chips">
                {(repo?.tags ?? []).slice(0, CHIP_LIMIT).map((id) => (
                  <button type="button" className="s-chip" key={id} title={t.projects.searchTag} onClick={() => onTagClick?.(id)}>
                    {TAGS[id].label}
                  </button>
                ))}
              </div>
              <div className="case__links">
                <a className="case__go" href={project.github} target="_blank" rel="noopener noreferrer">
                  {t.projects.code} <span aria-hidden="true">↗</span>
                </a>
                {project.live && (
                  <a className="case__go case__go--accent" href={project.live} target="_blank" rel="noopener noreferrer">
                    {t.projects.live} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>

          <div className="carousel__nav">
            <button type="button" className="carousel__btn" onClick={() => go(index - 1)} disabled={index === 0} aria-label={t.projects.prev}>
              <Chevron dir="prev" />
            </button>
            <span className="carousel__count" dir="ltr">
              {pad(index + 1)} / {pad(projects.length)}
            </span>
            <button type="button" className="carousel__btn" onClick={() => go(index + 1)} disabled={index === projects.length - 1} aria-label={t.projects.next}>
              <Chevron dir="next" />
            </button>
            <div className="carousel__dots">
              {projects.map((p, i) => (
                <button type="button" key={p.title} aria-label={p.title} aria-current={i === index} onClick={() => go(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
