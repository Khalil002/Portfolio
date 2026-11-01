// Translations of the long-form content in src/data (experience, education and
// repo descriptions). English lives in the data files themselves; each array here
// follows the same order as its English source, and anything missing falls back
// to English (see localize below).

export const content = {
  es: {
    experience: [
      {
        role: "Desarrollador de Software en Prácticas",
        place: "Casa Real — Maicao, La Guajira, Colombia",
        period: "Febrero 2024 - Septiembre 2024",
        points: [
          "Participé en la migración de un sistema ERP/CRM heredado, local y de un tercero, a una solución propia en la nube construida sobre ERPNext y el framework Frappe, reduciendo los costos de infraestructura en ~20% y los de suscripción en ~30%.",
          "Automaticé la extracción de datos con pipelines ETL para migrar de forma segura el historial de clientes y transacciones a la nueva plataforma.",
        ],
      },
      {
        role: "Instructor de Arquitectura de Computadores",
        place: "Universidad del Norte — Barranquilla, Colombia",
        period: "Julio 2022 - Diciembre 2022",
        points: [
          "Expliqué a los estudiantes las compuertas lógicas básicas AND, OR, NOT y sus combinaciones.",
          "Enseñé a los estudiantes a construir en Logisim una CPU basada en la arquitectura MIPS.",
          "Introduje conceptos como ISA, MIPS, pipelines, RAM y caché.",
        ],
      },
      {
        role: "Instructor de Algoritmos y Estructuras de Datos",
        place: "Universidad del Norte — Barranquilla, Colombia",
        period: "Enero 2022 - Mayo 2022",
        points: [
          "Expliqué a los estudiantes estructuras de datos como grafos y árboles.",
          "Mostré a los estudiantes la importancia de entender los problemas de complejidad P y NP.",
          "Introduje distintos algoritmos de ordenamiento, como Quick Sort y Heap Sort.",
        ],
      },
    ],
    education: [
      {
        school: "Politecnico di Milano — Milán, Italia",
        degree: "Maestría en Ciencias de la Computación e Ingeniería",
        period: "Septiembre 2024 - Diciembre 2026 (Previsto)",
      },
      {
        school: "Universidad del Norte — Barranquilla, Colombia",
        degree: "Ingeniería de Sistemas",
        period: "Enero 2020 - Diciembre 2024",
      },
    ],
    repos: {
      "DB-Admin-WebApp": "Aplicación web para administrar una base de datos de personas, dividida en microservicios de creación, lectura, actualización, borrado y log detrás de un API gateway en Express, cada uno en su propio contenedor Docker.",
      "My-Blog": "Blog con publicaciones, comentarios y cuentas de usuario, renderizado en el servidor con las plantillas MVT de Django sobre PostgreSQL, en contenedores y servido en vivo detrás de Caddy.",
      "Flutter-Hospital-App": "App de citas médicas: un cliente en Flutter que se comunica con una API REST en Laravel (autenticación por token con Sanctum, MySQL) ejecutada con Laravel Sail.",
      "Medical-Appointment-MobileApp": "App móvil de citas médicas en Flutter con Firebase Auth, Cloud Firestore y Firebase Storage como backend.",
      "Emotion-Classifier": "Red neuronal convolucional entrenada con TensorFlow/Keras para distinguir caras felices de tristes, con una app de escritorio en Tkinter para probar tus propias imágenes.",
      "Artworks-Artists-Data-Integration-Quality-Project": "Pipeline de preparación de datos sobre los datasets de obras y artistas del MoMA: perfilado, evaluación de calidad, imputación, deduplicación y limpieza.",
      "3D-Briscola": "El juego de cartas italiano Briscola en una escena 3D completa, escrito en C++ sobre Vulkan con shaders GLSL propios (PBR, Cook-Torrance, skybox) y personajes animados.",
      "Miosix-Buddy-Allocator": "Asignador de memoria buddy (iterativo y recursivo, basado en un árbol binario) integrado en el pool de procesos del kernel del sistema operativo embebido Miosix.",
      Parallel_Huffman_Coding: "Codificador y decodificador Huffman paralelizado entre procesos con MPI (mpi4py).",
      Huffman_Coding: "Codificador, decodificador y verificador Huffman secuencial en Python, medido sobre el texto completo de la Biblia.",
      BattleShip: "Batalla naval jugador contra bot, con un motor de juego en Python y una interfaz HTML/JS conectada mediante Eel.",
      TelegramBot: "Bot de Telegram (python-telegram-bot) que cifra y descifra textos con cifrado César usando un diccionario.",
      Komunika4: "App de chat en red en Java con un servidor de sockets, manejadores de clientes multihilo y mensajes de voz.",
      RochiCoin: "Simulador de libro contable de criptomonedas con transacciones firmadas, billeteras, bloques y una vista en grafo de las transferencias.",
      DataStructures_Lab01: "Bloques de transacciones con hash guardados en un árbol binario de búsqueda, con un visualizador del árbol en Swing.",
      "Cartesian-Plane": "JPanel reutilizable de Swing que dibuja un plano cartesiano que se puede desplazar y ampliar.",
      Tetris: "Tetris orientado a objetos en Processing con piezas en reserva y siguiente, un hilo de juego, música y una tabla de puntuaciones.",
      Parchis: "Juego de mesa Parchís 1v1v1 en Processing construido sobre listas enlazadas y listas enlazadas circulares propias.",
      "Oscillatory-System-Simulator": "Simulación interactiva de sistemas de resortes amortiguados y no amortiguados en Processing.",
      Portfolio: "Este sitio: un portafolio en React + Vite + Tailwind con búsqueda por etiquetas en todos mis repositorios, en cuatro idiomas.",
    },
  },

  ar: {
    experience: [
      {
        role: "متدرّب تطوير برمجيات",
        place: "Casa Real — مايكاو، لا غواخيرا، كولومبيا",
        period: "فبراير 2024 - سبتمبر 2024",
        points: [
          "ساهمت في نقل نظام ERP/CRM قديم مُثبّت محلياً من طرف ثالث إلى حل سحابي مخصص مبني على ERPNext وإطار عمل Frappe، مما خفّض تكاليف البنية التحتية بنحو 20% وتكاليف الاشتراك بنحو 30%.",
          "أتمتُّ استخراج البيانات عبر مسارات ETL لنقل بيانات العملاء والمعاملات التاريخية بأمان إلى المنصة الجديدة.",
        ],
      },
      {
        role: "مدرّس معمارية الحاسوب",
        place: "Universidad del Norte — بارانكيا، كولومبيا",
        period: "يوليو 2022 - ديسمبر 2022",
        points: [
          "شرحت للطلاب البوابات المنطقية الأساسية AND وOR وNOT وطرق دمجها.",
          "علّمت الطلاب كيفية بناء معالج قائم على معمارية MIPS باستخدام Logisim.",
          "قدّمت مفاهيم مختلفة مثل ISA وMIPS وخطوط المعالجة (pipelines) وذاكرة RAM والذاكرة المخبئية.",
        ],
      },
      {
        role: "مدرّس الخوارزميات وهياكل البيانات",
        place: "Universidad del Norte — بارانكيا، كولومبيا",
        period: "يناير 2022 - مايو 2022",
        points: [
          "شرحت للطلاب هياكل البيانات مثل البيانات الشبكية (graphs) والأشجار.",
          "بيّنت للطلاب أهمية فهم مسائل التعقيد P وNP.",
          "قدّمت للطلاب أنواعاً مختلفة من خوارزميات الترتيب مثل Quick Sort وHeap Sort.",
        ],
      },
    ],
    education: [
      {
        school: "Politecnico di Milano — ميلانو، إيطاليا",
        degree: "ماجستير في علوم وهندسة الحاسوب",
        period: "سبتمبر 2024 - ديسمبر 2026 (متوقع)",
      },
      {
        school: "Universidad del Norte — بارانكيا، كولومبيا",
        degree: "بكالوريوس في هندسة النظم",
        period: "يناير 2020 - ديسمبر 2024",
      },
    ],
    repos: {
      "DB-Admin-WebApp": "تطبيق ويب لإدارة قاعدة بيانات أشخاص، مقسّم إلى خدمات مصغّرة للإنشاء والقراءة والتحديث والحذف والسجل خلف بوابة API مبنية بـ Express، كل منها في حاوية Docker خاصة بها.",
      "My-Blog": "مدونة فيها منشورات وتعليقات وحسابات مستخدمين، تُعرض من الخادم بقوالب MVT في Django على PostgreSQL، داخل حاويات ومنشورة خلف Caddy.",
      "Flutter-Hospital-App": "تطبيق لحجز مواعيد الأطباء: واجهة Flutter تتواصل مع واجهة REST مبنية بـ Laravel (مصادقة برموز Sanctum وقاعدة MySQL) تعمل عبر Laravel Sail.",
      "Medical-Appointment-MobileApp": "تطبيق جوال لحجز المواعيد الطبية مبني بـ Flutter، يستخدم Firebase Auth وCloud Firestore وFirebase Storage كخلفية.",
      "Emotion-Classifier": "شبكة عصبية التفافية مدرّبة بـ TensorFlow/Keras للتمييز بين الوجوه السعيدة والحزينة، مع تطبيق سطح مكتب بـ Tkinter لتجربة صورك الخاصة.",
      "Artworks-Artists-Data-Integration-Quality-Project": "مسار لتحضير البيانات على مجموعات أعمال وفناني متحف MoMA: توصيف البيانات وتقييم جودتها وتعويض القيم الناقصة وإزالة التكرار والتنظيف.",
      "3D-Briscola": "لعبة الورق الإيطالية Briscola في مشهد ثلاثي الأبعاد كامل، مكتوبة بـ C++ على Vulkan مع مظلّلات GLSL مخصصة (PBR وCook-Torrance وskybox) وشخصيات متحركة.",
      "Miosix-Buddy-Allocator": "مخصّص ذاكرة من نوع buddy (تكراري وعودي، قائم على شجرة ثنائية) مدمج في مجمّع العمليات في نواة نظام التشغيل المضمّن Miosix.",
      Parallel_Huffman_Coding: "مُرمِّز ومفكّك ترميز Huffman موزّع على عدة عمليات بالتوازي باستخدام MPI (mpi4py).",
      Huffman_Coding: "مُرمِّز ومفكّك ترميز ومدقّق Huffman تسلسلي بلغة Python، تم قياس أدائه على النص الكامل للكتاب المقدس.",
      BattleShip: "لعبة معركة السفن بين لاعب وروبوت، بمحرك لعب بلغة Python وواجهة HTML/JS متصلة عبر Eel.",
      TelegramBot: "بوت Telegram (python-telegram-bot) يشفّر نصوص شيفرة قيصر ويكسرها باستخدام قاموس.",
      Komunika4: "تطبيق دردشة شبكي بلغة Java مع خادم sockets ومعالجات عملاء متعددة الخيوط ورسائل صوتية.",
      RochiCoin: "محاكي لسجل عملة رقمية مع معاملات موقّعة ومحافظ وكتل وعرض بياني للتحويلات.",
      DataStructures_Lab01: "كتل معاملات مُجزّأة (hashed) مخزنة في شجرة بحث ثنائية، مع أداة عرض للشجرة مبنية بـ Swing.",
      "Cartesian-Plane": "مكوّن JPanel قابل لإعادة الاستخدام في Swing يرسم مستوى ديكارتياً يمكن تحريكه وتكبيره.",
      Tetris: "لعبة Tetris كائنية التوجه في Processing مع قطع محفوظة وتالية وخيط للعبة وموسيقى ولوحة نتائج.",
      Parchis: "لعبة اللوح Parchís بثلاثة لاعبين في Processing، مبنية على قوائم مترابطة وقوائم مترابطة دائرية مكتوبة يدوياً.",
      "Oscillatory-System-Simulator": "محاكاة تفاعلية لأنظمة النوابض المخمّدة وغير المخمّدة في Processing.",
      Portfolio: "هذا الموقع: معرض أعمال مبني بـ React وVite وTailwind، مع بحث بالوسوم في جميع مستودعاتي، بأربع لغات.",
    },
  },

  it: {
    experience: [
      {
        role: "Software Developer Intern",
        place: "Casa Real — Maicao, La Guajira, Colombia",
        period: "Febbraio 2024 - Settembre 2024",
        points: [
          "Ho contribuito alla migrazione di un sistema ERP/CRM legacy on-premise di terze parti verso una soluzione cloud personalizzata basata su ERPNext e sul framework Frappe, riducendo i costi di infrastruttura di circa il 20% e quelli di abbonamento di circa il 30%.",
          "Ho automatizzato l'estrazione dei dati con pipeline ETL per migrare in modo sicuro lo storico di clienti e transazioni sulla nuova piattaforma.",
        ],
      },
      {
        role: "Tutor di Architettura dei Calcolatori",
        place: "Universidad del Norte — Barranquilla, Colombia",
        period: "Luglio 2022 - Dicembre 2022",
        points: [
          "Ho spiegato agli studenti le porte logiche di base AND, OR, NOT e le loro combinazioni.",
          "Ho mostrato agli studenti come costruire in Logisim una CPU basata sull'architettura MIPS.",
          "Ho introdotto concetti come ISA, MIPS, pipeline, RAM e cache.",
        ],
      },
      {
        role: "Tutor di Algoritmi e Strutture Dati",
        place: "Universidad del Norte — Barranquilla, Colombia",
        period: "Gennaio 2022 - Maggio 2022",
        points: [
          "Ho spiegato agli studenti strutture dati come grafi e alberi.",
          "Ho mostrato agli studenti l'importanza di comprendere i problemi di complessità P e NP.",
          "Ho introdotto diversi algoritmi di ordinamento, come Quick Sort e Heap Sort.",
        ],
      },
    ],
    education: [
      {
        school: "Politecnico di Milano — Milano, Italia",
        degree: "Laurea Magistrale in Computer Science and Engineering",
        period: "Settembre 2024 - Dicembre 2026 (Prevista)",
      },
      {
        school: "Universidad del Norte — Barranquilla, Colombia",
        degree: "Laurea in Ingegneria dei Sistemi",
        period: "Gennaio 2020 - Dicembre 2024",
      },
    ],
    repos: {
      "DB-Admin-WebApp": "Web app per amministrare un database di persone, divisa in microservizi di creazione, lettura, modifica, cancellazione e log dietro un API gateway in Express, ognuno nel proprio container Docker.",
      "My-Blog": "Blog con post, commenti e account utente, renderizzato lato server con i template MVT di Django su PostgreSQL, containerizzato e pubblicato dietro Caddy.",
      "Flutter-Hospital-App": "App per appuntamenti medici: un client Flutter che comunica con una REST API in Laravel (autenticazione a token con Sanctum, MySQL) eseguita con Laravel Sail.",
      "Medical-Appointment-MobileApp": "App mobile per appuntamenti medici in Flutter, con Firebase Auth, Cloud Firestore e Firebase Storage come backend.",
      "Emotion-Classifier": "Rete neurale convoluzionale addestrata con TensorFlow/Keras per distinguere volti felici da volti tristi, con un'app desktop in Tkinter per provare le tue immagini.",
      "Artworks-Artists-Data-Integration-Quality-Project": "Pipeline di preparazione dei dati sui dataset di opere e artisti del MoMA: profilazione, valutazione della qualità, imputazione, deduplicazione e pulizia.",
      "3D-Briscola": "Il gioco di carte Briscola in una scena 3D completa, scritto in C++ su Vulkan con shader GLSL personalizzati (PBR, Cook-Torrance, skybox) e personaggi animati.",
      "Miosix-Buddy-Allocator": "Allocatore di memoria buddy (iterativo e ricorsivo, basato su albero binario) integrato nel pool dei processi del kernel del sistema operativo embedded Miosix.",
      Parallel_Huffman_Coding: "Codificatore e decodificatore di Huffman parallelizzato tra processi con MPI (mpi4py).",
      Huffman_Coding: "Codificatore, decodificatore e verificatore di Huffman sequenziale in Python, testato sul testo completo della Bibbia.",
      BattleShip: "Battaglia navale giocatore contro bot, con un motore di gioco in Python e un'interfaccia HTML/JS collegata tramite Eel.",
      TelegramBot: "Bot Telegram (python-telegram-bot) che cifra e decifra il cifrario di Cesare usando un dizionario.",
      Komunika4: "App di chat in rete in Java con un server socket, gestori dei client multithread e messaggi vocali.",
      RochiCoin: "Simulatore di registro di criptovaluta con transazioni firmate, wallet, blocchi e una vista a grafo dei trasferimenti.",
      DataStructures_Lab01: "Blocchi di transazioni con hash memorizzati in un albero binario di ricerca, con un visualizzatore dell'albero in Swing.",
      "Cartesian-Plane": "JPanel Swing riutilizzabile che disegna un piano cartesiano spostabile e zoomabile.",
      Tetris: "Tetris a oggetti in Processing con pezzi in riserva e successivo, un thread di gioco, musica e una classifica.",
      Parchis: "Gioco da tavolo Parchís 1v1v1 in Processing, costruito su liste concatenate e liste circolari scritte da zero.",
      "Oscillatory-System-Simulator": "Simulazione interattiva di sistemi a molla smorzati e non smorzati in Processing.",
      Portfolio: "Questo sito: un portfolio in React + Vite + Tailwind con ricerca per tag su tutti i miei repository, in quattro lingue.",
    },
  },
};

// Returns the English list with each item's fields replaced by the translation, where one exists.
export function localizeList(language, key, english) {
  const list = content[language]?.[key];
  return list ? english.map((item, i) => ({ ...item, ...list[i] })) : english;
}

export function repoDescription(language, repo) {
  return content[language]?.repos?.[repo.name] ?? repo.description;
}
