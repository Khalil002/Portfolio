import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import LanguagePicker from "./LanguagePicker";
import logo from "../assets/logo-kh.svg";

// Layout adapted from aahil-khan/portfolio-canvas (MIT) — see THIRD_PARTY_LICENSES.md.
export default function Navbar() {
  const { t } = useLanguage();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.setAttribute("data-drawer", "");
    else root.removeAttribute("data-drawer");
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="bar" data-stuck={stuck ? "1" : "0"}>
        <a className="mark" href="#top" aria-label={profile.name}>
          <img src={logo} alt="" />
        </a>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
        <LanguagePicker />
        <a className="bar__cta" href={profile.resume} download="Khalil-El-Hage-Kassem-Resume.pdf">
          <span>{t.nav.resume}</span>
          <span className="long">PDF ↓</span>
        </a>
        <button
          type="button"
          className="burger"
          aria-label={t.misc.toggleMenu}
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <button type="button" className="drawer__scrim" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />
      <aside className="drawer" id="drawer" aria-hidden={!open}>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {t.nav[link.key]}
            </a>
          ))}
          <a className="drawer__desk" href={profile.resume} download tabIndex={open ? 0 : -1}>
            {t.nav.resume} <span className="drawer__badge">pdf</span>
          </a>
        </nav>
      </aside>
    </>
  );
}
