import { useEffect, useRef, useState } from "react";
import { languages } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function LanguagePicker() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.misc.language}
        className="text-xl p-2 rounded-md hover:bg-purple-600/20 transition"
      >
        🌐
      </button>

      {open && (
        <ul className="absolute end-0 mt-2 w-36 bg-gray-900 border border-white/10 rounded-md shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full text-start px-4 py-2 text-sm hover:bg-purple-600/20 transition ${
                  language === lang.code ? "text-purple-300 font-semibold" : "text-white/80"
                }`}
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
