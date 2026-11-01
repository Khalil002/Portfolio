import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

// Layout adapted from aahil-khan/portfolio-canvas (MIT) — see THIRD_PARTY_LICENSES.md.
export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="closer" id="contact">
      <div className="closer__field" aria-hidden="true" />
      <div className="wrap closer__inner">
        <p className="eyebrow">{t.contact.heading}</p>
        <h2 style={{ marginTop: "1rem" }}>{t.contact.headline}</h2>
        <p>{t.contact.sub}</p>
        <a className="closer__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="closer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {t.contact.github} <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {t.contact.linkedin} <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.resume} download="Khalil-El-Hage-Kassem-Resume.pdf">
            {t.nav.resume} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
