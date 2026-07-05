import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/10 py-6 text-center text-white/40 text-sm">
      © {new Date().getFullYear()} {profile.name}. {t.footer}
    </footer>
  );
}
