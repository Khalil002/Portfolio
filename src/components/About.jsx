import { education, profile } from "../data/portfolio";
import SectionHead from "./SectionHead";
import { useLanguage } from "../context/LanguageContext";
import { localizeList } from "../i18n/content";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="wrap">
        <SectionHead eyebrow={t.nav.about} title={t.about.heading} />
        <div className="about__grid">
          {profile.photo ? (
            <div className="about__photo">
              <img src={profile.photo} alt={profile.name} />
            </div>
          ) : (
            <div className="about__photo about__photo--empty" aria-hidden="true">
              <div>
                <b>KE</b>
                <span>{profile.name}</span>
              </div>
            </div>
          )}
          <div>
            <div className="about__lede">
              {t.about.text.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <div className="about__notes">
              {localizeList(language, "education", education).map((ed, i) => (
                <p key={i}>
                  <b>{ed.degree}</b> — {ed.school} · {ed.period}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
