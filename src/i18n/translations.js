export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "it", label: "Italiano" },
];

export const translations = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I am",
      title: "Full-Stack Software Engineer",
      tagline:
        "Skilled in API development and Machine Learning algorithms. Passionate about Web Development, Artificial Intelligence and Cloud Computing.",
      downloadResume: "Download Resume",
      viewResume: "View Resume",
    },
    about: {
      heading: "About Me",
      text: "I'm a full-stack software engineer currently pursuing a Master's degree in Computer Science and Engineering at Politecnico di Milano. I define myself as a dedicated person towards developing new technological solutions, open to new challenges to grow as a person and a professional. From building web apps, mobile apps, APIs to training machine learning models, I enjoy tackling problems across the whole stack.",
    },
    skills: {
      heading: "Skills",
      categories: {
        "Programming Languages": "Programming Languages",
        Frameworks: "Frameworks",
        Databases: "Databases",
        "DevOps & Tools": "DevOps & Tools",
      },
    },
    projects: {
      heading: "Projects",
      code: "Code",
      live: "Live",
      descriptions: {
        "My-Blog":
          "A blog platform built with Django and PostgreSQL, fully containerized with Docker. The frontend is server-side rendered through Django's MVT architecture, with views pulling data straight from Postgres into HTML templates.",
        "DB-Admin-WebApp":
          "A full-stack MERN web application for administrating a database, split into independent microservices (create, modify, consult, delete, logs) behind an API gateway, each containerized so a single service failing doesn't take the app down.",
        "Medical-Appointment-MobileApp":
          "A Flutter mobile application for booking medical appointments, backed by Firebase for authentication and real-time data storage.",
        "Emotion-Classifier":
          "An image-based emotion classifier trained through a machine learning pipeline to distinguish happy from sad faces, wrapped in an interactive Tkinter GUI so users can test it on their own images.",
        "3D-Briscola":
          "A 3D rendition of Briscola, the classic Italian card game, built from scratch in C++ with the Vulkan graphics API — playable 1v1 against the CPU in a fully 3D environment.",
        "Miosix-Buddy-Allocator":
          "A buddy memory allocator implementation for the Miosix embedded OS kernel, handling low-level memory block splitting and coalescing.",
      },
    },
    contact: { heading: "Contact Me", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    footer: "Built with React & Tailwind CSS.",
    misc: { toggleMenu: "Toggle menu", language: "Language" },
  },

  es: {
    nav: { about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      title: "Ingeniero de Software Full-Stack",
      tagline:
        "Especializado en desarrollo de APIs y algoritmos de Machine Learning. Apasionado por el desarrollo web, la inteligencia artificial y la computación en la nube.",
      downloadResume: "Descargar CV",
      viewResume: "Ver CV",
    },
    about: {
      heading: "Sobre mí",
      text: "Soy un ingeniero de software full-stack que actualmente cursa una Maestría en Ciencias de la Computación e Ingeniería en el Politecnico di Milano. Me defino como una persona dedicada al desarrollo de nuevas soluciones tecnológicas, abierta a nuevos desafíos para crecer como persona y como profesional. Desde construir aplicaciones web y móviles y APIs, hasta entrenar modelos de machine learning, disfruto abordando problemas en toda la pila tecnológica.",
    },
    skills: {
      heading: "Habilidades",
      categories: {
        "Programming Languages": "Lenguajes de Programación",
        Frameworks: "Frameworks",
        Databases: "Bases de Datos",
        "DevOps & Tools": "DevOps y Herramientas",
      },
    },
    projects: {
      heading: "Proyectos",
      code: "Código",
      live: "En vivo",
      descriptions: {
        "My-Blog":
          "Una plataforma de blog construida con Django y PostgreSQL, totalmente contenedorizada con Docker. El frontend se renderiza en el servidor mediante la arquitectura MVT de Django, con vistas que traen los datos directamente desde Postgres hacia las plantillas HTML.",
        "DB-Admin-WebApp":
          "Una aplicación web full-stack con el stack MERN para administrar una base de datos, dividida en microservicios independientes (crear, modificar, consultar, eliminar, registros) detrás de un API gateway, cada uno contenedorizado para que la falla de un servicio no derribe toda la aplicación.",
        "Medical-Appointment-MobileApp":
          "Una aplicación móvil en Flutter para reservar citas médicas, respaldada por Firebase para la autenticación y el almacenamiento de datos en tiempo real.",
        "Emotion-Classifier":
          "Un clasificador de emociones basado en imágenes, entrenado mediante un pipeline de machine learning para distinguir rostros felices de tristes, envuelto en una interfaz interactiva con Tkinter para que los usuarios prueben sus propias imágenes.",
        "3D-Briscola":
          "Una versión en 3D de la Briscola, el clásico juego de cartas italiano, construida desde cero en C++ con la API gráfica Vulkan, jugable 1 contra 1 contra la CPU en un entorno completamente 3D.",
        "Miosix-Buddy-Allocator":
          "Una implementación de un asignador de memoria buddy para el kernel del sistema operativo embebido Miosix, encargado de dividir y fusionar bloques de memoria de bajo nivel.",
      },
    },
    contact: { heading: "Contáctame", email: "Correo", linkedin: "LinkedIn", github: "GitHub" },
    footer: "Construido con React y Tailwind CSS.",
    misc: { toggleMenu: "Alternar menú", language: "Idioma" },
  },

  ar: {
    nav: { about: "نبذة عني", skills: "المهارات", projects: "المشاريع", contact: "تواصل معي" },
    hero: {
      greeting: "مرحباً، أنا",
      title: "مهندس برمجيات متكامل (Full-Stack)",
      tagline:
        "متمكّن في تطوير واجهات برمجة التطبيقات وخوارزميات تعلّم الآلة. شغوف بتطوير الويب، والذكاء الاصطناعي، والحوسبة السحابية.",
      downloadResume: "تحميل السيرة الذاتية",
      viewResume: "عرض السيرة الذاتية",
    },
    about: {
      heading: "نبذة عني",
      text: "أنا مهندس برمجيات متكامل أتابع حالياً درجة الماجستير في علوم وهندسة الحاسوب في جامعة بوليتكنيكو دي ميلانو. أعرّف نفسي بأنني شخص ملتزم بتطوير حلول تكنولوجية جديدة، ومنفتح على تحديات جديدة للنمو كشخص ومحترف. من بناء تطبيقات الويب والهاتف المحمول وواجهات البرمجة، إلى تدريب نماذج تعلّم الآلة، أستمتع بمواجهة المشكلات عبر كامل مكونات التطوير.",
    },
    skills: {
      heading: "المهارات",
      categories: {
        "Programming Languages": "لغات البرمجة",
        Frameworks: "أطر العمل",
        Databases: "قواعد البيانات",
        "DevOps & Tools": "DevOps والأدوات",
      },
    },
    projects: {
      heading: "المشاريع",
      code: "الكود",
      live: "معاينة مباشرة",
      descriptions: {
        "My-Blog":
          "منصة مدونة مبنية باستخدام Django وPostgreSQL، معبأة بالكامل داخل حاويات Docker. يتم عرض الواجهة الأمامية من جانب الخادم عبر بنية MVT الخاصة بـDjango، حيث تسحب طرق العرض البيانات مباشرة من Postgres وتُدرجها في قوالب HTML.",
        "DB-Admin-WebApp":
          "تطبيق ويب متكامل باستخدام حزمة MERN لإدارة قاعدة بيانات، مقسّم إلى خدمات مصغّرة مستقلة (إنشاء، تعديل، استعلام، حذف، سجلات) خلف بوابة API، وكل منها معبأ في حاوية بحيث لا يؤدي فشل خدمة واحدة إلى تعطيل التطبيق بأكمله.",
        "Medical-Appointment-MobileApp":
          "تطبيق هاتف محمول بلغة Flutter لحجز المواعيد الطبية، مدعوم بـFirebase للمصادقة وتخزين البيانات في الوقت الفعلي.",
        "Emotion-Classifier":
          "مصنّف مشاعر يعتمد على الصور، تم تدريبه عبر خط أنابيب تعلّم آلة للتمييز بين الوجوه السعيدة والحزينة، ومغلّف بواجهة رسومية تفاعلية باستخدام Tkinter تتيح للمستخدمين اختبار صورهم الخاصة.",
        "3D-Briscola":
          "نسخة ثلاثية الأبعاد من لعبة بريسكولا، لعبة الورق الإيطالية الكلاسيكية، مبنية من الصفر بلغة ++C باستخدام واجهة Vulkan الرسومية، وقابلة للعب فردياً ضد الحاسوب في بيئة ثلاثية الأبعاد بالكامل.",
        "Miosix-Buddy-Allocator":
          "تطبيق لمخصص ذاكرة من نوع Buddy لنواة نظام التشغيل المدمج Miosix، يتولى تقسيم كتل الذاكرة ودمجها على المستوى المنخفض.",
      },
    },
    contact: { heading: "تواصل معي", email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "غيتهب" },
    footer: "تم البناء باستخدام React وTailwind CSS.",
    misc: { toggleMenu: "القائمة", language: "اللغة" },
  },

  it: {
    nav: { about: "Chi sono", skills: "Competenze", projects: "Progetti", contact: "Contatti" },
    hero: {
      greeting: "Ciao, sono",
      title: "Ingegnere Software Full-Stack",
      tagline:
        "Esperto nello sviluppo di API e negli algoritmi di Machine Learning. Appassionato di sviluppo web, intelligenza artificiale e cloud computing.",
      downloadResume: "Scarica CV",
      viewResume: "Visualizza CV",
    },
    about: {
      heading: "Chi sono",
      text: "Sono un ingegnere software full-stack, attualmente iscritto a una Laurea Magistrale in Ingegneria Informatica presso il Politecnico di Milano. Mi definisco una persona dedita allo sviluppo di nuove soluzioni tecnologiche, aperta a nuove sfide per crescere sia come persona che come professionista. Dalla costruzione di applicazioni web e mobile, alle API, fino all'addestramento di modelli di machine learning, mi piace affrontare problemi lungo l'intero stack tecnologico.",
    },
    skills: {
      heading: "Competenze",
      categories: {
        "Programming Languages": "Linguaggi di Programmazione",
        Frameworks: "Framework",
        Databases: "Database",
        "DevOps & Tools": "DevOps e Strumenti",
      },
    },
    projects: {
      heading: "Progetti",
      code: "Codice",
      live: "Live",
      descriptions: {
        "My-Blog":
          "Una piattaforma di blog realizzata con Django e PostgreSQL, completamente containerizzata con Docker. Il frontend viene renderizzato lato server tramite l'architettura MVT di Django, con le view che recuperano i dati direttamente da Postgres inserendoli nei template HTML.",
        "DB-Admin-WebApp":
          "Un'applicazione web full-stack basata sullo stack MERN per amministrare un database, suddivisa in microservizi indipendenti (crea, modifica, consulta, elimina, log) dietro un API gateway, ciascuno containerizzato in modo che il guasto di un servizio non blocchi l'intera applicazione.",
        "Medical-Appointment-MobileApp":
          "Un'applicazione mobile Flutter per prenotare appuntamenti medici, basata su Firebase per l'autenticazione e l'archiviazione dei dati in tempo reale.",
        "Emotion-Classifier":
          "Un classificatore di emozioni basato su immagini, addestrato tramite una pipeline di machine learning per distinguere volti felici da volti tristi, racchiuso in un'interfaccia grafica interattiva con Tkinter che permette agli utenti di testare le proprie immagini.",
        "3D-Briscola":
          "Una versione 3D della Briscola, il classico gioco di carte italiano, sviluppata da zero in C++ con le API grafiche Vulkan, giocabile 1 contro 1 contro la CPU in un ambiente completamente 3D.",
        "Miosix-Buddy-Allocator":
          "Un'implementazione di un allocatore di memoria buddy per il kernel del sistema operativo embedded Miosix, che gestisce la suddivisione e l'unione dei blocchi di memoria a basso livello.",
      },
    },
    contact: { heading: "Contattami", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    footer: "Realizzato con React e Tailwind CSS.",
    misc: { toggleMenu: "Menu", language: "Lingua" },
  },
};
