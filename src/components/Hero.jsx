import { useEffect, useRef } from "react";
import { repos } from "../data/repos";
import { useLanguage } from "../context/LanguageContext";

// Hero layout adapted from aahil-khan/portfolio-canvas (MIT) — see THIRD_PARTY_LICENSES.md.
const NAME_LINES = ["Khalil", "El Hage Kassem"];

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

// The headline is the job title; the supporting line is the tagline after its first sentence.
function splitTagline(text) {
  const m = text.match(/^(.+?[.。])\s+(.+)$/s);
  return m ? [m[1], m[2]] : [text, ""];
}

export default function Hero() {
  const { t } = useLanguage();
  const light = useRef(null);
  const [, sub] = splitTagline(t.hero.tagline);

  // the accent light follows the pointer across the hero
  useEffect(() => {
    const el = light.current;
    const hero = el?.parentElement;
    if (!el || !hero || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e) => {
      const r = hero.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
      el.dataset.on = "1";
    };
    const leave = () => (el.dataset.on = "0");
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <section className="hero" id="top">
      {/* Background: a slowly drifting dot field with two soft orbs (original to this site). */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__dots" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
        <div className="hero__sweep" />
      </div>
      <div className="hero__light" ref={light} aria-hidden="true" />

      <div className="wrap hero__inner">
        <p className="eyebrow hero__eyebrow" aria-hidden="true" />

        <h1 className="name" aria-label={NAME_LINES.join(" ")}>
          {NAME_LINES.map((line) => (
            <span className="name__line" key={line} aria-hidden="true">
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p className="headline">{t.hero.title}</p>
        {sub && <p className="hero__sub">{sub}</p>}

        <div className="hero__actions">
          <a className="cta" href="#projects">
            <span className="cta__fill" aria-hidden="true" />
            <span className="cta__text">{t.hero.seeWork}</span>
            <span className="cta__icon" aria-hidden="true">
              <Arrow />
            </span>
          </a>
          <a className="ghost" href="#search">
            <span className="ghost__dot" aria-hidden="true" />
            {t.hero.searchRepos}
            <span className="ghost__badge">{repos.length}</span>
          </a>
        </div>

        <hr className="hero__rule" />
      </div>
    </section>
  );
}
