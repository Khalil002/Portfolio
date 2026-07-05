import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col items-center px-4 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">About Me</h2>
      <p className="text-white/70 text-sm md:text-base leading-relaxed text-center">
        {profile.about}
      </p>
    </section>
  );
}
