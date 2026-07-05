import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const links = [
  { key: "email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  { key: "linkedin", href: profile.linkedin, icon: FaLinkedin },
  { key: "github", href: profile.github, icon: FaGithub },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full flex flex-col items-center px-4 py-20 max-w-4xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">
        {t.contact.heading}
      </Reveal>

      <Reveal variant="up" delay={150} className="flex flex-col sm:flex-row items-center gap-4">
        {links.map(({ key, href, icon: Icon }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 bg-gray-800 rounded-xl shadow-md py-2 px-6 text-purple-300 hover:text-white transition text-sm md:text-base"
          >
            <Icon className="w-5 h-5" />
            {t.contact[key]}
          </a>
        ))}
      </Reveal>
    </section>
  );
}
