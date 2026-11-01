export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "it", label: "Italiano" },
];

export const translations = {
  en: {
    nav: {
      experience: "Experience",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      search: "Repositories",
      resume: "Resume",
    },
    hero: {
      seeWork: "See the work",
      greeting: "Hi, I am",
      title: "Full-Stack Software Engineer",
      tagline:
        "Skilled in API development and Machine Learning algorithms. Passionate about Web Development, Artificial Intelligence and Cloud Computing.",
      downloadResume: "Download Resume",
      viewResume: "View Resume",
      searchRepos: "Search my repos",
    },
    about: {
      heading: "Hi there!",
      text: [
        "I'm currently pursuing a Master's degree in Computer Science and Engineering at Politecnico di Milano.",
        "I'm a dedicated and curious person who enjoys solving problems and learning new things. I'm always willing to step outside my comfort zone, take on new challenges, and keep growing both personally and professionally.",
        "I speak four languages: English, Spanish, Arabic and Italian.",
        "I build anything from web apps to ML models, and I love to explore what the field of computer science has to offer.",
      ],
    },
    skills: {
      heading: "What I build with",
      categories: {
        "Programming Languages": "Programming Languages",
        Frameworks: "Frameworks",
        Databases: "Databases",
        "DevOps & Tools": "DevOps & Tools",
      },
    },
    projects: {
      prev: "Previous project",
      next: "Next project",
      heading: "Featured Projects",
      code: "Code",
      live: "Live",
      searchTag: "Search repos with this tag",
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
    resume: {
      showDetails: "Show details",
      hideDetails: "Hide details",
      heading: "Resume",
      experience: "Work Experience",
      education: "Education",
    },
    search: {
      heading: "Search My Repositories",
      subheading:
        'Every public repo I have, tagged by what\'s actually in the code. Each word you type is a tag: try "docker api" or "python machine learning".',
      placeholder: "Type tags, e.g. docker api microservices",
      clear: "Clear search",
      matchLabel: "Match mode",
      matchAll: "All tags",
      matchAny: "Any tag",
      suggestions: "Did you mean:",
      remove: "Remove",
      unknownTag: "No repo has this tag",
      tryLabel: "Try:",
      browseTags: "Browse all tags",
      hideTags: "Hide tags",
      results: "Showing {count} of {total} repositories",
      noResults:
        'No repository has all of these tags. Remove one, or switch to "Any tag".',
      groups: {
        language: "Languages",
        framework: "Frameworks & libraries",
        data: "Databases & data",
        architecture: "Architecture",
        devops: "DevOps & tools",
        domain: "Domains",
      },
    },
    contact: {
      headline: "Let's build something.",
      sub: "I'm open to new roles and collaborations. The quickest way to reach me is email.",
      heading: "Contact Me",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Built with React & Tailwind CSS.",
    misc: {
      backToTop: "Back to top",
      toggleMenu: "Toggle menu",
      language: "Language",
    },
  },

  es: {
    nav: {
      experience: "Experiencia",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      search: "Repositorios",
      resume: "CV",
    },
    hero: {
      seeWork: "Ver proyectos",
      greeting: "Hola, soy",
      title: "Ingeniero de Software Full-Stack",
      tagline:
        "Especializado en desarrollo de APIs y algoritmos de Machine Learning. Apasionado por el desarrollo web, la inteligencia artificial y la computación en la nube.",
      downloadResume: "Descargar CV",
      viewResume: "Ver CV",
      searchRepos: "Buscar mis repos",
    },
    about: {
      heading: "¡Hola!",
      text: [
        "Actualmente curso una Maestría en Ciencias de la Computación e Ingeniería en el Politecnico di Milano.",
        "Soy una persona dedicada y curiosa, que disfruta resolviendo problemas y aprendiendo cosas nuevas. Siempre estoy dispuesto a salir de mi zona de confort, asumir nuevos desafíos y seguir creciendo tanto personal como profesionalmente.",
        "Hablo cuatro idiomas: inglés, español, árabe e italiano.",
        "Construyo de todo, desde aplicaciones web hasta modelos de ML, y me encanta explorar todo lo que la informática tiene para ofrecer.",
      ],
    },
    skills: {
      heading: "Con qué construyo",
      categories: {
        "Programming Languages": "Lenguajes de Programación",
        Frameworks: "Frameworks",
        Databases: "Bases de Datos",
        "DevOps & Tools": "DevOps y Herramientas",
      },
    },
    projects: {
      prev: "Proyecto anterior",
      next: "Proyecto siguiente",
      heading: "Proyectos destacados",
      code: "Código",
      live: "En vivo",
      searchTag: "Buscar repos con esta etiqueta",
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
    resume: {
      showDetails: "Ver detalles",
      hideDetails: "Ocultar detalles",
      heading: "Currículum",
      experience: "Experiencia laboral",
      education: "Educación",
    },
    search: {
      heading: "Busca en mis repositorios",
      subheading:
        'Todos mis repositorios públicos, etiquetados según lo que realmente hay en el código. Cada palabra que escribas es una etiqueta: prueba "docker api" o "python machine learning".',
      placeholder: "Escribe etiquetas, p. ej. docker api microservices",
      clear: "Borrar búsqueda",
      matchLabel: "Modo de coincidencia",
      matchAll: "Todas",
      matchAny: "Cualquiera",
      suggestions: "¿Quisiste decir?",
      remove: "Quitar",
      unknownTag: "Ningún repositorio tiene esta etiqueta",
      tryLabel: "Prueba:",
      browseTags: "Ver todas las etiquetas",
      hideTags: "Ocultar etiquetas",
      results: "Mostrando {count} de {total} repositorios",
      noResults:
        'Ningún repositorio tiene todas estas etiquetas. Quita alguna o cambia a "Cualquiera".',
      groups: {
        language: "Lenguajes",
        framework: "Frameworks y librerías",
        data: "Bases de datos y datos",
        architecture: "Arquitectura",
        devops: "DevOps y herramientas",
        domain: "Áreas",
      },
    },
    contact: {
      headline: "Construyamos algo.",
      sub: "Estoy abierto a nuevas oportunidades y colaboraciones. La forma más rápida de contactarme es por correo.",
      heading: "Contáctame",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Construido con React y Tailwind CSS.",
    misc: {
      backToTop: "Volver arriba",
      toggleMenu: "Alternar menú",
      language: "Idioma",
    },
  },

  ar: {
    nav: {
      experience: "الخبرة",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل معي",
      search: "المستودعات",
      resume: "السيرة الذاتية",
    },
    hero: {
      seeWork: "شاهد أعمالي",
      greeting: "مرحباً، أنا",
      title: "مهندس برمجيات متكامل",
      tagline:
        "متمكّن في تطوير واجهات برمجة التطبيقات وخوارزميات تعلّم الآلة. شغوف بتطوير الويب، والذكاء الاصطناعي، والحوسبة السحابية.",
      downloadResume: "تحميل السيرة الذاتية",
      viewResume: "عرض السيرة الذاتية",
      searchRepos: "ابحث في مستودعاتي",
    },
    about: {
      heading: "مرحباً!",
      text: [
        "أتابع حالياً درجة الماجستير في علوم وهندسة الحاسوب في جامعة بوليتكنيكو دي ميلانو.",
        "أنا شخص مثابر وفضولي، أستمتع بحل المشكلات وتعلّم أشياء جديدة. أنا مستعد دائماً للخروج من منطقة راحتي ومواجهة تحديات جديدة والاستمرار في النمو على الصعيدين الشخصي والمهني.",
        "أتحدث أربع لغات: الإنجليزية والإسبانية والعربية والإيطالية.",
        "أبني كل شيء، من تطبيقات الويب إلى نماذج تعلّم الآلة، وأحب استكشاف كل ما يقدمه مجال علوم الحاسوب.",
      ],
    },
    skills: {
      heading: "ما أبني به",
      categories: {
        "Programming Languages": "لغات البرمجة",
        Frameworks: "أطر العمل",
        Databases: "قواعد البيانات",
        "DevOps & Tools": "DevOps والأدوات",
      },
    },
    projects: {
      prev: "المشروع السابق",
      next: "المشروع التالي",
      heading: "مشاريع مختارة",
      code: "الكود",
      live: "معاينة مباشرة",
      searchTag: "ابحث عن المستودعات بهذا الوسم",
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
    resume: {
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
      heading: "السيرة الذاتية",
      experience: "الخبرة العملية",
      education: "التعليم",
    },
    search: {
      heading: "ابحث في مستودعاتي",
      subheading:
        'جميع مستودعاتي العامة، موسومة بحسب ما يحتويه الكود فعلاً. كل كلمة تكتبها هي وسم: جرّب "docker api" أو "python machine learning".',
      placeholder: "اكتب الوسوم، مثل docker api microservices",
      clear: "مسح البحث",
      matchLabel: "طريقة المطابقة",
      matchAll: "كل الوسوم",
      matchAny: "أي وسم",
      suggestions: "هل تقصد:",
      remove: "إزالة",
      unknownTag: "لا يوجد مستودع بهذا الوسم",
      tryLabel: "جرّب:",
      browseTags: "تصفّح كل الوسوم",
      hideTags: "إخفاء الوسوم",
      results: "عرض {count} من {total} مستودعاً",
      noResults:
        'لا يوجد مستودع يحمل كل هذه الوسوم. أزل أحدها أو اختر "أي وسم".',
      groups: {
        language: "اللغات",
        framework: "الأطر والمكتبات",
        data: "قواعد البيانات والبيانات",
        architecture: "البنية",
        devops: "DevOps والأدوات",
        domain: "المجالات",
      },
    },
    contact: {
      headline: "لنبنِ شيئاً معاً.",
      sub: "أنا منفتح على فرص عمل وتعاون جديدة. أسرع طريقة للتواصل معي هي البريد الإلكتروني.",
      heading: "تواصل معي",
      email: "البريد الإلكتروني",
      linkedin: "لينكدإن",
      github: "غيتهب",
    },
    footer: "تم البناء باستخدام React وTailwind CSS.",
    misc: {
      backToTop: "العودة إلى الأعلى",
      toggleMenu: "القائمة",
      language: "اللغة",
    },
  },

  it: {
    nav: {
      experience: "Esperienza",
      about: "Chi sono",
      skills: "Competenze",
      projects: "Progetti",
      contact: "Contatti",
      search: "Repository",
      resume: "CV",
    },
    hero: {
      seeWork: "Guarda i progetti",
      greeting: "Ciao, sono",
      title: "Ingegnere Software Full-Stack",
      tagline:
        "Esperto nello sviluppo di API e negli algoritmi di Machine Learning. Appassionato di sviluppo web, intelligenza artificiale e cloud computing.",
      downloadResume: "Scarica CV",
      viewResume: "Visualizza CV",
      searchRepos: "Cerca nei miei repo",
    },
    about: {
      heading: "Ciao!",
      text: [
        "Attualmente frequento la Laurea Magistrale in Computer Science and Engineering al Politecnico di Milano.",
        "Sono una persona determinata e curiosa, che ama risolvere problemi e imparare cose nuove. Sono sempre pronto a uscire dalla mia zona di comfort, ad affrontare nuove sfide e a continuare a crescere sia sul piano personale che professionale.",
        "Parlo quattro lingue: inglese, spagnolo, arabo e italiano.",
        "Costruisco di tutto, dalle web app ai modelli di ML, e adoro esplorare tutto ciò che l'informatica ha da offrire.",
      ],
    },
    skills: {
      heading: "Con cosa costruisco",
      categories: {
        "Programming Languages": "Linguaggi di Programmazione",
        Frameworks: "Framework",
        Databases: "Database",
        "DevOps & Tools": "DevOps e Strumenti",
      },
    },
    projects: {
      prev: "Progetto precedente",
      next: "Progetto successivo",
      heading: "Progetti in evidenza",
      code: "Codice",
      live: "Live",
      searchTag: "Cerca repo con questo tag",
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
    resume: {
      showDetails: "Mostra dettagli",
      hideDetails: "Nascondi dettagli",
      heading: "Curriculum",
      experience: "Esperienza lavorativa",
      education: "Formazione",
    },
    search: {
      heading: "Cerca nei miei repository",
      subheading:
        'Tutti i miei repository pubblici, taggati in base a ciò che c\'è davvero nel codice. Ogni parola che scrivi è un tag: prova "docker api" o "python machine learning".',
      placeholder: "Scrivi dei tag, es. docker api microservices",
      clear: "Cancella ricerca",
      matchLabel: "Modalità di corrispondenza",
      matchAll: "Tutti i tag",
      matchAny: "Almeno uno",
      suggestions: "Forse cercavi:",
      remove: "Rimuovi",
      unknownTag: "Nessun repository ha questo tag",
      tryLabel: "Prova:",
      browseTags: "Mostra tutti i tag",
      hideTags: "Nascondi tag",
      results: "{count} di {total} repository",
      noResults:
        'Nessun repository ha tutti questi tag. Rimuovine uno o passa ad "Almeno uno".',
      groups: {
        language: "Linguaggi",
        framework: "Framework e librerie",
        data: "Database e dati",
        architecture: "Architettura",
        devops: "DevOps e strumenti",
        domain: "Ambiti",
      },
    },
    contact: {
      headline: "Costruiamo qualcosa.",
      sub: "Sono aperto a nuove opportunità e collaborazioni. Il modo più rapido per contattarmi è via email.",
      heading: "Contattami",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "Realizzato con React e Tailwind CSS.",
    misc: {
      backToTop: "Torna su",
      toggleMenu: "Menu",
      language: "Lingua",
    },
  },
};
