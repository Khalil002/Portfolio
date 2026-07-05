export const profile = {
  name: "Khalil El Hage Kassem",
  email: "khalil.elhage@mail.polimi.it",
  github: "https://github.com/Khalil002",
  linkedin: "https://www.linkedin.com/in/khalil002/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "C#", "Python", "Java", "JavaScript", "MATLAB", "PHP", "Dart", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["Django", "FastAPI", ".NET", "Spring", "Node.js", "React", "Laravel"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Neo4j"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Azure DevOps", "Docker", "Kubernetes", "XUnit"],
  },
];

export const projects = [
  {
    title: "My-Blog",
    tags: ["Django", "PostgreSQL", "Docker", "Python"],
    github: "https://github.com/Khalil002/My-Blog",
    live: "https://blog.khalilcodes.com",
  },
  {
    title: "DB-Admin-WebApp",
    tags: ["MongoDB", "Express", "React", "Node.js", "Docker"],
    github: "https://github.com/Khalil002/DB-Admin-WebApp",
  },
  {
    title: "Medical-Appointment-MobileApp",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/Khalil002/Medical-Appointment-MobileApp",
  },
  {
    title: "Emotion-Classifier",
    tags: ["Python", "Machine Learning", "Jupyter", "Tkinter"],
    github: "https://github.com/Khalil002/Emotion-Classifier",
  },
  {
    title: "3D-Briscola",
    tags: ["C++", "Vulkan", "GLSL", "Game Dev"],
    github: "https://github.com/Khalil002/3D-Briscola",
  },
  {
    title: "Miosix-Buddy-Allocator",
    tags: ["C", "Operating Systems", "Memory Management"],
    github: "https://github.com/Khalil002/Miosix-Buddy-Allocator",
  },
];

export const experience = [
  {
    role: "Computer Architectures Instructor",
    place: "Universidad del Norte — Barranquilla, Colombia",
    period: "July 2022 - December 2022",
    points: [
      "Explained the basic logic gates AND, OR, NOT and their combinations to the students.",
      "Showed the students how to build a MIPS architecture based CPU in Logisim.",
      "Introduced different concepts such as ISA, MIPS, pipelines, RAM and cache.",
    ],
  },
  {
    role: "Algorithms & Data Structures Instructor",
    place: "Universidad del Norte — Barranquilla, Colombia",
    period: "January 2022 - May 2022",
    points: [
      "Explained data structures to students, such as graphs and trees.",
      "Showed students the importance of understanding P, NP complexity problems.",
      "Introduced different types of sorting algorithms to students, such as Quick Sort and Heap Sort.",
    ],
  },
];

export const education = [
  {
    school: "Politecnico di Milano — Milan, Italy",
    degree: "Master's Degree in Computer Science and Engineering",
    period: "September 2024 - October 2026 (Expected)",
  },
  {
    school: "Universidad del Norte — Barranquilla, Colombia",
    degree: "Bachelor's Degree in Systems Engineering",
    period: "January 2020 - December 2024",
  },
];
