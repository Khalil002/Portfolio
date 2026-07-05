import {
  SiC,
  SiCplusplus,
  SiSharp,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiPhp,
  SiDart,
  SiHtml5,
  SiCss,
  SiDjango,
  SiFastapi,
  SiDotnet,
  SiSpring,
  SiNodedotjs,
  SiReact,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { VscAzure, VscBeaker } from "react-icons/vsc";
import { TbMatrix, TbDatabase } from "react-icons/tb";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const iconMap = {
  C: SiC,
  "C++": SiCplusplus,
  "C#": SiSharp,
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  MATLAB: TbMatrix,
  PHP: SiPhp,
  Dart: SiDart,
  HTML: SiHtml5,
  CSS: SiCss,
  Django: SiDjango,
  FastAPI: SiFastapi,
  ".NET": SiDotnet,
  Spring: SiSpring,
  "Node.js": SiNodedotjs,
  React: SiReact,
  Laravel: SiLaravel,
  "SQL Server": TbDatabase,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Neo4j: TbDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  "Azure DevOps": VscAzure,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  XUnit: VscBeaker,
};

function SkillItem({ name }) {
  const Icon = iconMap[name];
  return (
    <div className="flex flex-col items-center gap-2 w-20">
      <div className="text-white w-16 h-16 bg-gray-800 rounded-lg p-3 flex items-center justify-center">
        {Icon && <Icon className="w-full h-full" />}
      </div>
      <p className="text-white/80 text-sm text-center">{name}</p>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full flex flex-col items-center px-4 py-20 max-w-6xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400 p-3 border-b-4 border-purple-500">
        {t.skills.heading}
      </Reveal>

      <Reveal variant="up" delay={150} className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-lg text-purple-300 font-bold mb-6">{t.skills.categories[group.category]}</p>
            <div className="flex flex-wrap gap-6">
              {group.items.map((item) => (
                <SkillItem key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
