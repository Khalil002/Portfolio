// Every public repository on github.com/Khalil002, tagged by inspecting its code
// (imports, dependency manifests, build files, Dockerfiles, routes), not only the
// GitHub language badge.
//
// PUBLIC REPOS ONLY. The search on the site reads this list and nothing else; it
// never calls the GitHub API, so a repo appears only if it is listed here. Never
// add a private repo (e.g. HiddenThesis is private and deliberately left out).
// If a listed repo is later made private, remove it from this list.
//
// Search treats each word as a tag. A tag matches when a word equals its id,
// its label, or one of its aliases (case-insensitive, punctuation ignored), so
// "node", "nodejs" and "Node.js" all find the same repos.

export const TAGS = {
  // Languages
  java: { label: "Java", group: "language", aliases: [] },
  python: { label: "Python", group: "language", aliases: ["py"] },
  javascript: { label: "JavaScript", group: "language", aliases: ["js"] },
  cpp: { label: "C++", group: "language", aliases: ["cplusplus", "cxx"] },
  c: { label: "C", group: "language", aliases: [] },
  dart: { label: "Dart", group: "language", aliases: [] },
  php: { label: "PHP", group: "language", aliases: [] },
  glsl: { label: "GLSL", group: "language", aliases: ["shaders", "shader"] },
  processing: { label: "Processing", group: "language", aliases: ["pde"] },
  html: { label: "HTML", group: "language", aliases: ["html5"] },
  css: { label: "CSS", group: "language", aliases: ["css3"] },

  // Frameworks & libraries
  react: { label: "React", group: "framework", aliases: ["reactjs"] },
  vite: { label: "Vite", group: "framework", aliases: [] },
  tailwind: { label: "Tailwind CSS", group: "framework", aliases: ["tailwindcss"] },
  node: { label: "Node.js", group: "framework", aliases: ["nodejs"] },
  express: { label: "Express", group: "framework", aliases: ["expressjs"] },
  django: { label: "Django", group: "framework", aliases: [] },
  laravel: { label: "Laravel", group: "framework", aliases: [] },
  flutter: { label: "Flutter", group: "framework", aliases: [] },
  tensorflow: { label: "TensorFlow", group: "framework", aliases: ["tf"] },
  keras: { label: "Keras", group: "framework", aliases: [] },
  opencv: { label: "OpenCV", group: "framework", aliases: ["cv2"] },
  sklearn: { label: "scikit-learn", group: "framework", aliases: ["scikit", "scikitlearn"] },
  pandas: { label: "Pandas", group: "framework", aliases: [] },
  numpy: { label: "NumPy", group: "framework", aliases: [] },
  matplotlib: { label: "Matplotlib", group: "framework", aliases: [] },
  tkinter: { label: "Tkinter", group: "framework", aliases: ["tk"] },
  swing: { label: "Swing", group: "framework", aliases: ["javaswing"] },
  vulkan: { label: "Vulkan", group: "framework", aliases: [] },
  glfw: { label: "GLFW", group: "framework", aliases: [] },
  cmake: { label: "CMake", group: "framework", aliases: [] },
  mpi: { label: "MPI", group: "framework", aliases: ["mpi4py", "openmpi"] },
  eel: { label: "Eel", group: "framework", aliases: [] },
  minim: { label: "Minim", group: "framework", aliases: [] },
  mongoose: { label: "Mongoose", group: "framework", aliases: [] },
  sanctum: { label: "Sanctum", group: "framework", aliases: [] },

  // Databases & backend services
  database: { label: "Database", group: "data", aliases: ["db", "databases"] },
  mongodb: { label: "MongoDB", group: "data", aliases: ["mongo"] },
  postgresql: { label: "PostgreSQL", group: "data", aliases: ["postgres", "psql"] },
  mysql: { label: "MySQL", group: "data", aliases: [] },
  sql: { label: "SQL", group: "data", aliases: [] },
  nosql: { label: "NoSQL", group: "data", aliases: [] },
  firebase: { label: "Firebase", group: "data", aliases: [] },
  firestore: { label: "Firestore", group: "data", aliases: [] },

  // Architecture & concepts
  api: { label: "API", group: "architecture", aliases: ["apis", "restapi", "restful", "rest", "endpoints"] },
  microservices: { label: "Microservices", group: "architecture", aliases: ["microservice", "ms"] },
  apigateway: { label: "API Gateway", group: "architecture", aliases: ["gateway"] },
  backend: { label: "Backend", group: "architecture", aliases: ["server", "serverside"] },
  frontend: { label: "Frontend", group: "architecture", aliases: ["ui", "clientside"] },
  fullstack: { label: "Full-Stack", group: "architecture", aliases: ["fullstackapp"] },
  web: { label: "Web", group: "architecture", aliases: ["webapp", "website"] },
  ssr: { label: "SSR", group: "architecture", aliases: ["serversiderendering", "mvt"] },
  mobile: { label: "Mobile", group: "architecture", aliases: ["mobileapp"] },
  android: { label: "Android", group: "architecture", aliases: [] },
  ios: { label: "iOS", group: "architecture", aliases: [] },
  desktop: { label: "Desktop", group: "architecture", aliases: ["desktopapp"] },
  gui: { label: "GUI", group: "architecture", aliases: ["graphicalinterface"] },
  auth: { label: "Authentication", group: "architecture", aliases: ["authentication", "login"] },
  clientserver: { label: "Client-Server", group: "architecture", aliases: ["clientserver"] },
  networking: { label: "Networking", group: "architecture", aliases: ["network", "sockets", "socket", "tcp"] },
  multithreading: { label: "Multithreading", group: "architecture", aliases: ["threads", "threading", "concurrency"] },
  parallel: { label: "Parallel Computing", group: "architecture", aliases: ["parallelism", "hpc", "parallelcomputing"] },
  os: { label: "Operating Systems", group: "architecture", aliases: ["operatingsystem", "operatingsystems", "kernel"] },
  embedded: { label: "Embedded", group: "architecture", aliases: ["microcontroller", "stm32", "firmware"] },
  bot: { label: "Bot", group: "architecture", aliases: ["chatbot", "bots"] },
  oop: { label: "OOP", group: "architecture", aliases: ["objectoriented"] },

  // DevOps & tooling
  docker: { label: "Docker", group: "devops", aliases: ["containers", "container", "containerized"] },
  dockercompose: { label: "Docker Compose", group: "devops", aliases: ["compose"] },
  nginx: { label: "Nginx", group: "devops", aliases: [] },
  caddy: { label: "Caddy", group: "devops", aliases: [] },
  githubactions: { label: "GitHub Actions", group: "devops", aliases: ["ci", "cicd", "actions"] },
  deployed: { label: "Deployed", group: "devops", aliases: ["live", "production", "hosted"] },
  jupyter: { label: "Jupyter", group: "devops", aliases: ["notebook", "ipynb"] },
  i18n: { label: "i18n", group: "devops", aliases: ["internationalization", "multilanguage", "translations"] },

  // Domains
  ml: { label: "Machine Learning", group: "domain", aliases: ["machinelearning"] },
  dl: { label: "Deep Learning", group: "domain", aliases: ["deeplearning", "neuralnetwork", "neuralnetworks"] },
  cnn: { label: "CNN", group: "domain", aliases: ["convolutional"] },
  ai: { label: "AI", group: "domain", aliases: ["artificialintelligence"] },
  computervision: { label: "Computer Vision", group: "domain", aliases: ["vision", "imageclassification"] },
  datascience: { label: "Data Science", group: "domain", aliases: ["datascience", "dataanalysis", "analytics"] },
  etl: { label: "ETL", group: "domain", aliases: ["datapipeline", "pipeline"] },
  dataquality: { label: "Data Quality", group: "domain", aliases: ["datacleaning", "dataintegration", "cleaning"] },
  graphics: { label: "Computer Graphics", group: "domain", aliases: ["computergraphics", "3d", "rendering"] },
  game: { label: "Game", group: "domain", aliases: ["games", "gamedev", "gaming"] },
  algorithms: { label: "Algorithms", group: "domain", aliases: ["algorithm"] },
  datastructures: { label: "Data Structures", group: "domain", aliases: ["datastructure", "trees", "graphs", "linkedlist"] },
  compression: { label: "Compression", group: "domain", aliases: ["huffman", "encoding"] },
  memory: { label: "Memory Management", group: "domain", aliases: ["memorymanagement", "allocator", "malloc"] },
  blockchain: { label: "Blockchain", group: "domain", aliases: ["ledger"] },
  crypto: { label: "Cryptography", group: "domain", aliases: ["cryptography", "encryption", "cipher", "hashing"] },
  cryptocurrency: { label: "Cryptocurrency", group: "domain", aliases: ["coin", "wallet"] },
  simulation: { label: "Simulation", group: "domain", aliases: ["simulator"] },
  physics: { label: "Physics", group: "domain", aliases: [] },
  math: { label: "Math", group: "domain", aliases: ["maths", "mathematics"] },
  healthcare: { label: "Healthcare", group: "domain", aliases: ["medical", "hospital", "health"] },
  chat: { label: "Chat", group: "domain", aliases: ["messaging"] },
  audio: { label: "Audio", group: "domain", aliases: ["sound", "voice"] },
  telegram: { label: "Telegram", group: "domain", aliases: [] },
  blog: { label: "Blog", group: "domain", aliases: [] },
};

export const repos = [
  {
    name: "DB-Admin-WebApp",
    description:
      "Web app for administrating a person database, split into create/read/update/delete/log microservices behind an Express API gateway, each in its own Docker container.",
    language: "JavaScript",
    tags: [
      "javascript", "node", "express", "mongoose", "mongodb", "nosql", "database",
      "microservices", "apigateway", "api", "backend", "frontend", "fullstack", "web",
      "docker", "dockercompose", "nginx", "html", "css",
    ],
  },
  {
    name: "My-Blog",
    description:
      "Blog with posts, comments and user accounts, server-rendered with Django's MVT templates on PostgreSQL, containerized and served live behind Caddy.",
    language: "Python",
    homepage: "https://blog.khalilcodes.com",
    tags: [
      "python", "django", "postgresql", "sql", "database", "ssr", "web", "fullstack",
      "backend", "auth", "docker", "dockercompose", "caddy", "deployed", "html", "css", "blog",
    ],
  },
  {
    name: "Flutter-Hospital-App",
    description:
      "Doctor appointment app: a Flutter client talking to a Laravel REST API (Sanctum token auth, MySQL) run with Laravel Sail.",
    language: "PHP",
    tags: [
      "dart", "flutter", "php", "laravel", "sanctum", "mysql", "sql", "database", "api",
      "backend", "fullstack", "mobile", "android", "ios", "auth", "docker", "healthcare",
    ],
  },
  {
    name: "Medical-Appointment-MobileApp",
    description:
      "Medical appointment mobile app in Flutter using Firebase Auth, Cloud Firestore and Firebase Storage as the backend.",
    language: "Dart",
    tags: ["dart", "flutter", "firebase", "firestore", "nosql", "database", "mobile", "android", "ios", "auth", "healthcare"],
  },
  {
    name: "Emotion-Classifier",
    description:
      "CNN trained with TensorFlow/Keras to tell happy from sad faces, with a Tkinter desktop app for testing your own images.",
    language: "Jupyter Notebook",
    tags: [
      "python", "tensorflow", "keras", "opencv", "numpy", "matplotlib", "tkinter", "jupyter",
      "ml", "dl", "cnn", "ai", "computervision", "gui", "desktop",
    ],
  },
  {
    name: "Artworks-Artists-Data-Integration-Quality-Project",
    description:
      "Data preparation pipeline over the MoMA artworks/artists datasets: profiling, quality assessment, imputation, deduplication and cleaning.",
    language: "Jupyter Notebook",
    tags: [
      "python", "pandas", "numpy", "sklearn", "matplotlib", "jupyter", "datascience", "etl",
      "dataquality", "ml",
    ],
  },
  {
    name: "3D-Briscola",
    description:
      "The Italian card game Briscola in a full 3D scene, written in C++ on Vulkan with custom GLSL shaders (PBR, Cook-Torrance, skybox) and animated characters.",
    language: "C++",
    tags: ["cpp", "vulkan", "glsl", "glfw", "cmake", "graphics", "game", "desktop"],
  },
  {
    name: "Miosix-Buddy-Allocator",
    description:
      "Buddy memory allocator (iterative and recursive, binary-tree based) integrated into the Miosix embedded OS kernel's process pool.",
    language: "C",
    tags: ["cpp", "c", "os", "embedded", "memory", "algorithms", "datastructures"],
  },
  {
    name: "Parallel_Huffman_Coding",
    description: "Huffman encoder and decoder parallelized across processes with MPI (mpi4py).",
    language: "Python",
    tags: ["python", "mpi", "numpy", "parallel", "compression", "algorithms", "datastructures"],
  },
  {
    name: "Huffman_Coding",
    description: "Sequential Huffman encoder, decoder and verifier in Python, benchmarked on the full text of the Bible.",
    language: "Python",
    tags: ["python", "compression", "algorithms", "datastructures"],
  },
  {
    name: "BattleShip",
    description: "Player vs bot Battleship with a Python game engine and an HTML/JS interface bridged through Eel.",
    language: "Python",
    tags: ["python", "eel", "numpy", "javascript", "html", "css", "game", "gui", "desktop"],
  },
  {
    name: "TelegramBot",
    description: "Telegram bot (python-telegram-bot) that ciphers and cracks Caesar ciphers using a dictionary.",
    language: "Python",
    tags: ["python", "telegram", "bot", "crypto", "algorithms"],
  },
  {
    name: "Komunika4",
    description: "Networked chat app in Java with a socket server, multithreaded client handlers and voice messages.",
    language: "Java",
    tags: ["java", "swing", "networking", "clientserver", "multithreading", "chat", "audio", "gui", "desktop", "backend"],
  },
  {
    name: "RochiCoin",
    description: "Cryptocurrency ledger simulator with signed transactions, wallets, blocks and a graph view of transfers.",
    language: "Java",
    tags: ["java", "swing", "blockchain", "cryptocurrency", "crypto", "datastructures", "gui", "desktop"],
  },
  {
    name: "DataStructures_Lab01",
    description: "Hashed transaction blocks stored in a binary search tree, with a Swing visualizer of the tree.",
    language: "Java",
    tags: ["java", "swing", "datastructures", "blockchain", "crypto", "gui", "desktop"],
  },
  {
    name: "Cartesian-Plane",
    description: "Reusable Swing JPanel that draws a Cartesian plane you can pan and zoom.",
    language: "Java",
    tags: ["java", "swing", "gui", "graphics", "math", "desktop"],
  },
  {
    name: "Tetris",
    description: "Object-oriented Tetris in Processing with hold/next pieces, a game thread, music and a leaderboard.",
    language: "Processing",
    tags: ["processing", "java", "minim", "game", "oop", "multithreading", "audio", "desktop"],
  },
  {
    name: "Parchis",
    description: "1v1v1 Parchís board game in Processing built on custom linked and circular linked lists.",
    language: "Processing",
    tags: ["processing", "java", "minim", "game", "datastructures", "audio", "desktop"],
  },
  {
    name: "Oscillatory-System-Simulator",
    description: "Interactive simulation of damped and undamped spring systems in Processing.",
    language: "Processing",
    tags: ["processing", "java", "minim", "simulation", "physics", "math", "desktop"],
  },
  {
    name: "Portfolio",
    description: "This site: a React + Vite + Tailwind portfolio with a tag search over all my repos, in four languages.",
    language: "JavaScript",
    tags: ["javascript", "react", "vite", "tailwind", "html", "css", "frontend", "web", "i18n", "githubactions", "deployed"],
  },
].map((repo) => ({ ...repo, url: `https://github.com/Khalil002/${repo.name}` }));

export const repoByName = Object.fromEntries(repos.map((r) => [r.name, r]));
