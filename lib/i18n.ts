export type Locale = "es" | "en"

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
      education: "Educación",
    },
    hero: {
      title: "Fullstack e Ingeniero de Datos",
      subtitle: "apasionado por Java/Spring, Python y visualización de datos",
      tagline: "Transformando datos en soluciones y construyendo APIs robustas para impulsar el éxito de tu negocio.",
      downloadCV: "Descargar CV",
      viewProjects: "Ver Proyectos",
      discoverMore: "Descubre más",
    },
    about: {
      title: "Sobre Mí",
      quote: "\"La calidad nunca es un accidente; siempre es el resultado de un esfuerzo inteligente.\"",
      profileTitle: "Perfil Profesional",
      profileDesc: "FullStack e Ingeniero de Datos con experiencia en desarrollo de APIs REST reactivas, integración de sistemas y visualización de datos. Apasionado por crear soluciones eficientes y escalables que resuelvan problemas reales.",
      education: "Formación",
      educationValue: "4to semestre de Ing. Sistemas, UFPS Ocaña",
      experience: "Experiencia",
      experienceAt: "en Ikitech Solutions",
      softSkills: "Habilidades blandas",
      skills: ["Liderazgo", "Resolución de problemas", "Trabajo en equipo", "Comunicación efectiva", "Adaptabilidad", "Pensamiento analítico y crítico"],
      languages: "Idiomas",
      spanish: "Español (Nativo)",
      english: "Inglés (B2)",
    },
    technologies: {
      title: "Tecnologías",
      subtitle: "Estas son las principales tecnologías con las que trabajo para desarrollar soluciones robustas y escalables.",
      searchPlaceholder: "Buscar tecnología...",
      filters: {
        all: "Todas",
        languages: "Lenguajes",
        frameworks: "Frameworks",
        databases: "Bases de Datos",
        messaging: "Mensajería",
        integration: "Integración",
        containers: "Contenedores",
        visualization: "Visualización",
        cloud: "Cloud",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Mi trayectoria profesional en el desarrollo fullstack y la integración de sistemas",
      fullTime: "Tiempo completo",
      remote: "Remoto",
      present: "Presente",
      techUsed: "Tecnologías utilizadas",
      yearsExp: "de experiencia",
      projectsCompleted: "proyectos completados",
      systemsIntegrated: "sistemas integrados",
    },
    education: {
      title: "Educación",
      subtitle: "Mi formación académica y profesional",
      present: "Presente",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis proyectos más relevantes",
      viewMore: "Ver más",
      viewLess: "Ver menos",
      viewCode: "Ver código",
      details: "Detalles",
      description: "Descripción del Proyecto",
      challenges: "Desafíos Técnicos",
      learnings: "Aprendizajes Clave",
      techStack: "Stack Tecnológico",
      features: "Características Principales",
      gallery: "Galería",
      codeHighlight: "Código Destacado",
      close: "Cerrar",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? No dudes en contactarme",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente",
      infoTitle: "Información de contacto",
      location: "Ubicación",
      phone: "Teléfono",
      schedule: "Horario",
      scheduleValue: "Lun - Vie: 9:00 AM - 6:00 PM",
      socialMedia: "Redes sociales",
    },
    terminal: {
      title: "Terminal Interactivo",
      welcome: "Portfolio Terminal v1.0.0\n© 2026 Full Stack e Ingeniero de Datos\nEscribe 'help' para ver los comandos disponibles",
      helpText: `Comandos disponibles:
  help        - Muestra la lista de comandos disponibles
  about       - Muestra información sobre mí
  skills      - Lista mis habilidades técnicas
  experience  - Muestra mi experiencia laboral
  projects    - Lista mis proyectos destacados
  contact     - Muestra mi información de contacto
  clear       - Limpia la pantalla del terminal
  date        - Muestra la fecha y hora actual
  echo <text> - Repite el texto ingresado
  whoami      - Muestra quién eres
  theme       - Muestra el tema actual
  exit        - Cierra el terminal`,
      aboutText: "Soy Jeferson Mesa, Fullstack e Ingeniero de Datos con experiencia en desarrollo de APIs REST reactivas, integración de sistemas y visualización de datos. Actualmente cursando 4to semestre de Ingeniería de Sistemas en la UFPS Ocaña.",
      skillsText: "Habilidades técnicas:\n- Java, Spring Boot, Spring WebFlux\n- Python, Streamlit, Plotly, Scikit-learn\n- MongoDB, PostgreSQL, OracleDB, MySQL\n- Kafka, Apache NiFi, Apache Airflow\n- Docker, AWS S3, Google Cloud, Azure\n- NestJS, Node.js, Next.js, React\n- Power BI",
      experienceText: "Experiencia laboral:\n1. Ingeniero de Datos - Ikitech Solutions (2025-04 - Presente)\n2. Desarrollador Java - Ikitech Solutions (2024-11 - 2025-04)\n3. DBA - Ikitech Solutions (2024-09 - 2024-11)",
      projectsText: "Proyectos destacados:\n1. CRUD con Spring Boot\n2. Dashboard de Healthcare Analytics\n3. Sistema de integración con NiFi\n4. API de microservicios reactivos",
      contactText: "Información de contacto:\nEmail: jefersonmesa13@gmail.com\nTeléfono: +57 3185766550\nUbicación: Ocaña, Norte de Santander\nGitHub: github.com/JefersonMesaUFPSO",
      whoamiText: "visitante@portfolio:~$ Eres un visitante del portfolio de Jeferson Mesa",
      unknownCmd: "Comando no reconocido. Escribe 'help' para ver los comandos disponibles.",
    },
    themeCustomizer: {
      title: "Personalizar tema",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
      education: "Education",
    },
    hero: {
      title: "Fullstack & Data Engineer",
      subtitle: "passionate about Java/Spring, Python, and data visualization",
      tagline: "Transforming data into solutions and building robust APIs to drive your business success.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      discoverMore: "Discover more",
    },
    about: {
      title: "About Me",
      quote: "\"Quality is never an accident; it is always the result of intelligent effort.\"",
      profileTitle: "Professional Profile",
      profileDesc: "FullStack & Data Engineer with experience in reactive REST API development, systems integration, and data visualization. Passionate about creating efficient and scalable solutions that solve real problems.",
      education: "Education",
      educationValue: "4th semester, Systems Engineering, UFPS Ocana",
      experience: "Experience",
      experienceAt: "at Ikitech Solutions",
      softSkills: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Teamwork", "Effective Communication", "Adaptability", "Analytical and Critical Thinking"],
      languages: "Languages",
      spanish: "Spanish (Native)",
      english: "English (B2)",
    },
    technologies: {
      title: "Technologies",
      subtitle: "These are the main technologies I work with to develop robust and scalable solutions.",
      searchPlaceholder: "Search technology...",
      filters: {
        all: "All",
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        messaging: "Messaging",
        integration: "Integration",
        containers: "Containers",
        visualization: "Visualization",
        cloud: "Cloud",
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My professional journey in fullstack development and systems integration",
      fullTime: "Full-time",
      remote: "Remote",
      present: "Present",
      techUsed: "Technologies used",
      yearsExp: "of experience",
      projectsCompleted: "projects completed",
      systemsIntegrated: "systems integrated",
    },
    education: {
      title: "Education",
      subtitle: "My academic and professional training",
      present: "Present",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most relevant projects",
      viewMore: "View more",
      viewLess: "View less",
      viewCode: "View code",
      details: "Details",
      description: "Project Description",
      challenges: "Technical Challenges",
      learnings: "Key Learnings",
      techStack: "Technology Stack",
      features: "Key Features",
      gallery: "Gallery",
      codeHighlight: "Featured Code",
      close: "Close",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Feel free to reach out",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully",
      infoTitle: "Contact Information",
      location: "Location",
      phone: "Phone",
      schedule: "Schedule",
      scheduleValue: "Mon - Fri: 9:00 AM - 6:00 PM",
      socialMedia: "Social media",
    },
    terminal: {
      title: "Interactive Terminal",
      welcome: "Portfolio Terminal v1.0.0\n(C) 2026 Full Stack & Data Engineer\nType 'help' to see available commands",
      helpText: `Available commands:
  help        - Shows the list of available commands
  about       - Shows information about me
  skills      - Lists my technical skills
  experience  - Shows my work experience
  projects    - Lists my featured projects
  contact     - Shows my contact information
  clear       - Clears the terminal screen
  date        - Shows the current date and time
  echo <text> - Repeats the entered text
  whoami      - Shows who you are
  theme       - Shows the current theme
  exit        - Closes the terminal`,
      aboutText: "I'm Jeferson Mesa, a Fullstack & Data Engineer with experience in reactive REST API development, systems integration, and data visualization. Currently in my 4th semester of Systems Engineering at UFPS Ocana.",
      skillsText: "Technical skills:\n- Java, Spring Boot, Spring WebFlux\n- Python, Streamlit, Plotly, Scikit-learn\n- MongoDB, PostgreSQL, OracleDB, MySQL\n- Kafka, Apache NiFi, Apache Airflow\n- Docker, AWS S3, Google Cloud, Azure\n- NestJS, Node.js, Next.js, React\n- Power BI",
      experienceText: "Work experience:\n1. Data Engineer - Ikitech Solutions (2025-04 - Present)\n2. Java Developer - Ikitech Solutions (2024-11 - 2025-04)\n3. DBA - Ikitech Solutions (2024-09 - 2024-11)",
      projectsText: "Featured projects:\n1. CRUD with Spring Boot\n2. Healthcare Analytics Dashboard\n3. NiFi Integration System\n4. Reactive Microservices API",
      contactText: "Contact information:\nEmail: jefersonmesa13@gmail.com\nPhone: +57 3185766550\nLocation: Ocana, Norte de Santander\nGitHub: github.com/JefersonMesaUFPSO",
      whoamiText: "visitor@portfolio:~$ You are a visitor of Jeferson Mesa's portfolio",
      unknownCmd: "Command not recognized. Type 'help' to see available commands.",
    },
    themeCustomizer: {
      title: "Customize theme",
    },
  },
} as const

export type Translations = typeof translations.es
