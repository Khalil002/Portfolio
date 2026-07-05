import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-6 text-center text-white/40 text-sm">
      © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
    </footer>
  );
}
