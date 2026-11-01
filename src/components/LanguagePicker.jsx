import { useEffect, useRef, useState } from "react";
import { languages } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function LanguagePicker() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div className="lang" ref={ref}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-label={t.misc.language} aria-expanded={open}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        {language}
      </button>
      {open && (
        <ul>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                aria-current={language === lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
