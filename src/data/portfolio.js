export const profile = {
  name: "Khalil El Hage Kassem",
  title: "Full-Stack Software Engineer",
  tagline:
    "Skilled in API development and Machine Learning algorithms. Passionate about Web Development, Artificial Intelligence and Cloud Computing.",
  about:
    "I'm a full-stack software engineer currently pursuing a Master's degree in Computer Science and Engineering at Politecnico di Milano. I define myself as a dedicated person towards developing new technological solutions, open to new challenges to grow as a person and a professional. From building web apps, mobile apps, APIs to training machine learning models, I enjoy tackling problems across the whole stack.",
  email: "khalil.elhage@mail.polimi.it",
  github: "https://github.com/Khalil002",
  linkedin: "https://www.linkedin.com/in/khalil002/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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
    description:
      "A blog platform built with Django and PostgreSQL, fully containerized with Docker. The frontend is server-side rendered through Django's MVT architecture, with views pulling data straight from Postgres into HTML templates.",
    tags: ["Django", "PostgreSQL", "Docker", "Python"],
    github: "https://github.com/Khalil002/My-Blog",
    live: "https://blog.khalilcodes.com",
  },
  {
    title: "DB-Admin-WebApp",
    description:
      "A full-stack MERN web application for administrating a database, split into independent microservices (create, modify, consult, delete, logs) behind an API gateway, each containerized so a single service failing doesn't take the app down.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Docker"],
    github: "https://github.com/Khalil002/DB-Admin-WebApp",
  },
  {
    title: "Medical-Appointment-MobileApp",
    description:
      "A Flutter mobile application for booking medical appointments, backed by Firebase for authentication and real-time data storage.",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/Khalil002/Medical-Appointment-MobileApp",
  },
  {
    title: "Emotion-Classifier",
    description:
      "An image-based emotion classifier trained through a machine learning pipeline to distinguish happy from sad faces, wrapped in an interactive Tkinter GUI so users can test it on their own images.",
    tags: ["Python", "Machine Learning", "Jupyter", "Tkinter"],
    github: "https://github.com/Khalil002/Emotion-Classifier",
  },
  {
    title: "3D-Briscola",
    description:
      "A 3D rendition of Briscola, the classic Italian card game, built from scratch in C++ with the Vulkan graphics API — playable 1v1 against the CPU in a fully 3D environment.",
    tags: ["C++", "Vulkan", "GLSL", "Game Dev"],
    github: "https://github.com/Khalil002/3D-Briscola",
  },
  {
    title: "Miosix-Buddy-Allocator",
    description:
      "A buddy memory allocator implementation for the Miosix embedded OS kernel, handling low-level memory block splitting and coalescing.",
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
