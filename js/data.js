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
    'Me gusta construir herramientas que la gente usa de verdad, como UniPlanner, que nació de una pregunta que todo estudiante se hace: ¿qué nota necesito para aprobar? Trabajo con JavaScript (React, Node.js, Express, PostgreSQL) y con Python, y me importa que el código se pueda probar.',
    'Antes de programar trabajé en atención al cliente en Walmart, donde aprendí a trabajar en equipo, a tratar con personas y a resolver problemas con calma. Tengo inglés B1 (Cambridge) y una certificación de Introducción a la ciberseguridad de Cisco.',
  ],

  skills: [
    'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Python',
    'discord.py', 'SQLite', 'HTML', 'CSS', 'Vitest', 'GitHub Actions', 'Git',
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
