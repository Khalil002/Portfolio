import { skills } from "../data/portfolio";
import SectionHead from "./SectionHead";
import { useLanguage } from "../context/LanguageContext";

// Colour logos from devicon (MIT, see THIRD_PARTY_LICENSES.md), bundled locally.
const logoFiles = import.meta.glob("../assets/logos/*.svg", { eager: true, import: "default" });
const logo = (file) => logoFiles[`../assets/logos/${file}.svg`];

const logoMap = {
  C: logo("c-original"),
  "C++": logo("cplusplus-original"),
  "C#": logo("csharp-original"),
  Python: logo("python-original"),
  Java: logo("java-original"),
  JavaScript: logo("javascript-original"),
  MATLAB: logo("matlab-original"),
  Dart: logo("dart-original"),
  Django: logo("django-plain"),
  FastAPI: logo("fastapi-original"),
  ".NET": logo("dotnetcore-original"),
  Spring: logo("spring-original"),
  "Node.js": logo("nodejs-original"),
  React: logo("react-original"),
  "SQL Server": logo("microsoftsqlserver-original"),
  MySQL: logo("mysql-original"),
  PostgreSQL: logo("postgresql-original"),
  MongoDB: logo("mongodb-original"),
  Neo4j: logo("neo4j-original"),
  Git: logo("git-original"),
  GitHub: logo("github-original"),
  "Azure DevOps": logo("azuredevops-original"),
  Docker: logo("docker-original"),
  Kubernetes: logo("kubernetes-original"),
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <SectionHead eyebrow={t.nav.skills} title={t.skills.heading} />
        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skillgroup" key={group.category}>
              <h3>{t.skills.categories[group.category]}</h3>
              <ul className="s-tools">
                {group.items.map((name) => (
                  <li className={`s-tool${logoMap[name] ? "" : " s-tool--text"}`} key={name}>
                    {logoMap[name] && <img src={logoMap[name]} alt="" width={30} height={30} loading="lazy" />}
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
