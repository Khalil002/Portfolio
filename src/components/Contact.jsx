import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full flex flex-col items-center px-4 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">Contact Me</h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 bg-gray-800 rounded-xl shadow-md py-2 px-6 text-purple-300 hover:text-white transition text-sm md:text-base"
          >
            <Icon className="w-5 h-5" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
