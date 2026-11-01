import { useEffect, useId, useState } from "react";
import { experience } from "../data/portfolio";
import SectionHead from "./SectionHead";
import { useLanguage } from "../context/LanguageContext";
import { localizeList } from "../i18n/content";

// Layout adapted from aahil-khan/portfolio-canvas (MIT) — see THIRD_PARTY_LICENSES.md.
// Anchors use the English role so they stay the same in every language.
// Same condition as the one-screen block in site.css.
const ONE_SCREEN = "(min-width: 900px) and (min-height: 620px)";
const slug = (i) => experience[i].role.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function JobCard({ job, anchor, shown }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const [place, location] = job.place.split(" — ");

  return (
    <article className="job" id={`job-${anchor}`} data-job data-shown={shown ? "1" : "0"} data-open={open ? "1" : "0"}>
      <p className="job__when">
        <b>{job.period}</b>
        {location || place}
      </p>
      <h3>
        <button type="button" className="job__toggle" aria-expanded={open} aria-controls={bodyId} onClick={() => setOpen((o) => !o)}>
          <span>
            {job.role} <span className="job__at">— {place}</span>
          </span>
          <span className="job__chev" aria-hidden="true" />
          <span className="job__sr">{open ? t.resume.hideDetails : t.resume.showDetails}</span>
        </button>
        <span className="job__title-static">
          {job.role} <span className="job__at">— {place}</span>
        </span>
      </h3>
      <div className="job__body" id={bodyId}>
        <ul className="job__points">
          {job.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const jobs = localizeList(language, "experience", experience);

  // On a one-screen layout (see site.css) the index works as tabs and only the selected job
  // is shown, so the section always fits. Otherwise every job is listed and the index
  // highlights the card currently in view.
  const [tabs, setTabs] = useState(() => window.matchMedia(ONE_SCREEN).matches);
  useEffect(() => {
    const mq = window.matchMedia(ONE_SCREEN);
    const onChange = () => setTabs(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (tabs) return;
    const cards = [...document.querySelectorAll("[data-job]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(cards.indexOf(e.target));
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [tabs]);

  return (
    <section id="experience">
      <div className="wrap xp__grid">
        <aside className="xp__index">
          <SectionHead eyebrow={t.nav.experience} title={t.resume.experience} />
          <ol className="xp__list">
            {jobs.map((job, i) => (
              <li key={slug(i)}>
                <a
                  className="xp__item"
                  href={`#job-${slug(i)}`}
                  data-on={i === active ? "1" : "0"}
                  aria-current={tabs && i === active ? "true" : undefined}
                  onClick={(e) => {
                    if (!tabs) return;
                    e.preventDefault();
                    setActive(i);
                  }}
                >
                  <span className="xp__bullet" aria-hidden="true" />
                  <span>
                    <b>{job.role}</b>
                    <span>{job.period}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <div className="xp__detail">
          {jobs.map((job, i) => (
            <JobCard key={slug(i)} anchor={slug(i)} job={job} shown={!tabs || i === active} />
          ))}
        </div>
      </div>
    </section>
  );
}
