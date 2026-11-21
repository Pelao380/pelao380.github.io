/**
 * ============================================================
 *  EDITA ESTE ARCHIVO con tu información.
 *  Todo el contenido del sitio sale de aquí.
 * ============================================================
 */
const PORTFOLIO = {
  name: 'Cristopher Soriano',
  role: 'Estudiante de Ingeniería en Informática',
  tagline: 'Desarrollo web full stack: construyo aplicaciones que resuelven problemas concretos, con tests y CI en cada proyecto.',
  email: 'cristophersoriano1@gmail.com',
  photo: 'assets/img/profile.png',
  cv: 'assets/cv/CV.pdf',                // exportado desde Canva ("CV")

  // Párrafos de la sección "Sobre mí"
  about: [
    'Soy Cristopher, estudiante de Ingeniería en Informática en la Universidad Bernardo O\'Higgins (Santiago, Chile). Me interesa el desarrollo web y busco un puesto donde seguir aprendiendo.',
    'Me gusta construir herramientas que la gente usa de verdad, como UniPlanner, que nació de una pregunta que todo estudiante se hace: ¿qué nota necesito para aprobar? Trabajo con JavaScript y TypeScript (React, Next.js, Node.js, Express, PostgreSQL) con Python (FastAPI, Celery) y con Java (Swing, JDBC), y me importa que el código se pueda probar.',
    'Antes de programar trabajé en atención al cliente en Walmart, donde aprendí a trabajar en equipo, a tratar con personas y a resolver problemas con calma. Hoy me estoy formando en la nube con AWS (Cloud Foundations y Cloud Practitioner Essentials), y tengo cursos de redes y ciberseguridad de Cisco Networking Academy e inglés B1 (Cambridge).',
  ],

  skills: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Python',
    'FastAPI', 'Celery', 'Docker', 'Java', 'JUnit', 'discord.py', 'SQLite', 'HTML', 'CSS', 'Vitest', 'GitHub Actions', 'Git', 'AWS',
  ],

  /**
   * Certificaciones. Cada una:
   *  - title, issuer, date ('AAAA-MM-DD'), hours (opcional)
   *  - file: PDF del certificado en assets/certs/ (opcional)
   *  - verify: link de verificación, p. ej. Credly (opcional)
   */
  certifications: [
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2026-11-18',
      hours: 20,
      file: 'assets/certs/aws-academy-cloud-foundations.pdf',
      verify: 'https://www.credly.com/go/HekpsQAx',
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS Training & Certification',
      date: '2026-11-19',
      file: 'assets/certs/aws-cloud-practitioner-essentials.pdf',
    },
    {
      title: 'Job Roles in the Cloud',
      issuer: 'AWS Training & Certification',
      date: '2026-11-19',
      file: 'assets/certs/aws-job-roles-in-the-cloud.pdf',
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: '2025-04-17',
      file: 'assets/certs/cisco-networking-basics.pdf',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2024-06-30',
      file: 'assets/certs/cisco-introduction-to-cybersecurity.pdf',
    },
    {
      title: 'Inglés nivel intermedio (B1)',
      issuer: 'Universidad de Cambridge',
    },
  ],

  // Deja la url vacía ('') para ocultar una red
  socials: {
    github: 'https://github.com/Pelao380',
    linkedin: '',                        // TODO: tu LinkedIn
    twitter: '',
  },

  /**
   * Proyectos. Cada uno:
   *  - title, description
   *  - images: capturas (la primera es la portada; al hacer clic se ven todas)
   *  - tags: tecnologías (también sirven como filtros)
   *  - demo / repo: links (deja '' si no aplica)
   *  - highlights: puntos destacados (opcional)
   *  - featured: true para destacarlo a lo ancho
   */
  projects: [
    {
      title: 'VetFicha',
      description:
        'Software de escritorio para clínicas veterinarias pequeñas: agenda, ficha clínica con curva de peso, ventas con abonos y caja del día, y recordatorios de vacunas y controles por WhatsApp. Se instala con un solo archivo, funciona sin internet y respalda los datos automáticamente. Lo estoy ofreciendo a clínicas, así que el código es privado y lo muestro a pedido.',
      images: [
        'assets/img/projects/vetficha-inicio.png',
        'assets/img/projects/vetficha-ficha.png',
        'assets/img/projects/vetficha-nueva-venta.png',
        'assets/img/projects/vetficha-oscuro-inicio.png',
      ],
      tags: ['Java', 'Swing', 'H2', 'JDBC', 'Maven', 'JUnit'],
      highlights: [
        'Actualizaciones que conservan los datos: migraciones con respaldo previo automático',
        'Permisos por rol verificados en la capa de servicios, con registro de actividad',
        '62 pruebas e instalador para Windows con Java incluido',
      ],
      demo: '',
      repo: '',
      featured: true,
    },
    {
      title: 'Radar de precios',
      description:
        'Sistema que sigue precios de supermercados chilenos: jobs programados recolectan y normalizan los datos, reconocen el mismo producto entre tiendas aunque cada una lo nombre distinto, y muestran historial, mínimos de 90 días y alertas en un dashboard con búsqueda en lenguaje natural. La demo usa una fuente de datos simulada, porque las cadenas no ofrecen una API pública.',
      images: [
        'assets/img/projects/radar-precios-inicio.png',
        'assets/img/projects/radar-precios-producto.png',
      ],
      tags: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'pgvector', 'Next.js', 'TypeScript', 'Docker'],
      highlights: [
        'Deduplicación entre tiendas con embeddings: F1 0,96 frente a 0,84 con reglas exactas',
        'Claude solo traduce la pregunta a filtros: cada precio sale de SQL',
        '51 pruebas, con integración contra Postgres + pgvector en CI',
      ],
      demo: 'https://radar-precios-kappa.vercel.app',
      repo: 'https://github.com/Pelao380/radar-precios',
      featured: true,
    },
    {
      title: 'UniPlanner',
      description:
        'Aplicación full stack para organizar los ramos de la universidad: registra evaluaciones con su ponderación y te dice al instante tu promedio y qué nota necesitas para aprobar (escala chilena 1.0–7.0). Se usa sin crear cuenta.',
      images: [
        'assets/img/projects/uniplanner-dashboard-claro.png',
        'assets/img/projects/uniplanner-detalle-ramo.png',
        'assets/img/projects/uniplanner-dashboard-oscuro.png',
      ],
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
      highlights: [
        'Modo invitado con localStorage y la misma API que el servidor',
        'Paridad cliente/servidor verificada con 20.000 casos en CI',
        'Tema claro, oscuro o del sistema sin parpadeo',
      ],
      demo: 'https://uniplanner-sable.vercel.app',
      repo: 'https://github.com/Pelao380/uniplanner',
      featured: true,
    },
    {
      title: 'Graal',
      description:
        'Bot de Discord para jugar guerras del santo grial al estilo de Fate: combate por turnos con decisiones ocultas y simultáneas, 348 Servants derivados de datos y una IA que llena los cupos vacíos.',
      images: ['assets/img/projects/graal-batalla.svg'],
      tags: ['Python', 'discord.py', 'SQLite'],
      highlights: [
        'Balance calibrado con un simulador propio',
        '628 pruebas que corren sin red ni token',
        'Lógica del juego independiente de Discord',
      ],
      demo: '',
      repo: 'https://github.com/Pelao380/Graal',
      featured: true,
    },
  ],
};
