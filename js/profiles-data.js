// Contenido del CV por idioma y perfil.
// Fuente de verdad: cv.md y cv/fuentes/*.html del repo privado buscador-vacantes
// (son los CV que se adjuntan en las postulaciones). Los hechos —empresas, puestos,
// fechas— son los mismos en todos los perfiles; solo cambia el énfasis.

const JOBS = {
  es: {
    tecnomotum: "TECNOMOTUM · Ixtaczoquitlán, Veracruz (remoto)",
    bizlink: "BIZLINK · Querétaro, México",
    dataEngineer: { title: "Data Engineer", date: "Feb 2023 – Ago 2026" },
    junior: { title: "Junior Programmer", date: "Mar 2022 – Feb 2023" },
    fullstack: { title: "Full Stack Software Engineer", date: "Dic 2021 – Mar 2022" }
  },
  en: {
    tecnomotum: "TECNOMOTUM · Ixtaczoquitlán, Veracruz (remote)",
    bizlink: "BIZLINK · Querétaro, Mexico",
    dataEngineer: { title: "Data Engineer", date: "Feb 2023 – Aug 2026" },
    junior: { title: "Junior Programmer", date: "Mar 2022 – Feb 2023" },
    fullstack: { title: "Full Stack Software Engineer", date: "Dec 2021 – Mar 2022" }
  }
};

// Arma la experiencia de un perfil: mismos puestos y fechas, viñetas propias.
function experience(lang, dataEngineer, junior, bizlink) {
  const j = JOBS[lang];
  return [
    { company: j.tecnomotum, ...j.dataEngineer, bullets: dataEngineer },
    { company: j.tecnomotum, ...j.junior, bullets: junior },
    { company: j.bizlink, ...j.fullstack, bullets: bizlink }
  ];
}

const cvProfiles = {
  es: {
    general: {
      tab: "General",
      role: "Data Engineer / Backend (Java, Spring Boot) · IA",
      summary: "Ingeniero de Software con casi 5 años de experiencia (trabajo 100% remoto) en ingeniería de datos, desarrollo backend con Java y Spring Boot, e inteligencia artificial. Pipelines ETL en Python hacia BigQuery, APIs REST, microservicios y procesos en Google Cloud. Maestría en Inteligencia Artificial.",
      skills: [
        { category: "Lenguajes y frameworks", icon: "fa-code", color: "var(--accent-indigo)",
          items: ["Java (avanzado)", "Spring Boot", "Python (Pandas, NumPy)", "SQL", "Node.js", "Angular", "React", "TypeScript"] },
        { category: "Datos e IA", icon: "fa-microchip", color: "var(--accent-teal)",
          items: ["BigQuery", "Dataform", "Data Fusion", "Looker", "ETL", "Modelado analítico", "Machine Learning", "Deep Learning", "TensorFlow", "LLMs", "Ingeniería de prompts"] },
        { category: "Arquitectura", icon: "fa-cubes", color: "var(--accent-blue)",
          items: ["Microservicios", "APIs REST", "SOAP", "Sistemas distribuidos de alta disponibilidad"] },
        { category: "Cloud y DevOps", icon: "fa-cloud", color: "var(--accent-purple)",
          items: ["Google Cloud (Cloud Run, Vertex AI)", "AWS", "Azure", "Docker", "Kubernetes", "Git", "Jenkins", "SonarQube", "CI/CD", "Linux / Bash"] },
        { category: "Bases de datos", icon: "fa-database", color: "var(--accent-pink)",
          items: ["PostgreSQL", "MySQL", "BigQuery", "MongoDB"] }
      ],
      experience: experience("es",
        [
          "Pipelines ETL escalables en Python hacia BigQuery para decisiones corporativas.",
          "Optimización de consultas SQL complejas para reportes de alto rendimiento y KPIs.",
          "Flujos automatizados en Google Colab y procesos en contenedores con Google Cloud Run.",
          "Pipelines de limpieza y preprocesamiento de datos para entrenamiento y ajuste de LLMs.",
          "APIs en Python; control de versiones de consultas y modelado de datos con Dataform.",
          "Microservicios con Java 21 y Spring Boot 3.x (Clean Architecture, SOLID), APIs seguras con Spring Security, JWT y OAuth2, FeignClient; MongoDB, Oracle y PostgreSQL; pruebas con JUnit 5 y Mockito; Docker y Git."
        ],
        [
          "APIs REST con Spring Boot y mantenimiento de servicios SOAP heredados.",
          "Integración de pantallas en Angular y páginas JSP.",
          "Módulos nuevos para sistemas core, diagramas de arquitectura y documentación técnica.",
          "Control de versiones con GitLab y Subversion."
        ],
        [
          "Microservicios y APIs REST con Spring Boot integradas a interfaces Angular.",
          "Desarrollo y mantenimiento de apps móviles iOS y Android.",
          "Modelado y optimización de bases de datos SQL (MySQL).",
          "Pipelines CI/CD con Jenkins (pruebas, compilación y entrega)."
        ])
    },

    data: {
      tab: "Datos y Cloud",
      role: "Data & Cloud Engineer (GCP, BigQuery, Python) · IA",
      summary: "Ingeniero de Software con casi 5 años de experiencia (100% remoto) en ingeniería de datos en la nube y desarrollo full stack. Construcción y orquestación de pipelines ETL/ELT en Python para la migración de datos desde SQL Server / Azure Data Factory hacia Google Cloud Platform (BigQuery), optimización de consultas SQL avanzadas y stored procedures, microservicios contenerizados en Cloud Run y APIs REST con Python, Node.js y Java. Integración de servicios de IA (LLMs como Gemini / Vertex AI vía API, RAG y búsquedas vectoriales). Maestría en Inteligencia Artificial y certificación Microsoft Azure Fundamentals.",
      skills: [
        { category: "Datos y nube", icon: "fa-cloud", color: "var(--accent-teal)",
          items: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Vertex AI", "Data Fusion", "Dataform", "Looker", "ETL / ELT", "Migración de datos", "Modelado analítico", "Azure Data Factory", "AWS"] },
        { category: "SQL y bases de datos", icon: "fa-database", color: "var(--accent-blue)",
          items: ["SQL avanzado", "Stored procedures", "Optimización de consultas", "SQL Server", "BigQuery", "PostgreSQL", "MySQL", "Oracle", "MongoDB"] },
        { category: "Back-end y APIs", icon: "fa-server", color: "var(--accent-indigo)",
          items: ["Python (Pandas, NumPy)", "Node.js", "Java 21 / Spring Boot", "APIs REST", "Microservicios", "Docker", "Kubernetes"] },
        { category: "Inteligencia Artificial", icon: "fa-microchip", color: "var(--accent-purple)",
          items: ["LLMs (Vertex AI / Gemini vía API)", "RAG", "Búsquedas vectoriales (embeddings)", "Ingeniería de prompts", "Preparación de datos para LLMs", "Machine Learning", "Deep Learning", "TensorFlow"] },
        { category: "Front-end y DevOps", icon: "fa-tools", color: "var(--accent-pink)",
          items: ["Angular", "TypeScript", "React", "Git / GitLab / GitHub", "Jenkins", "SonarQube", "CI/CD", "Linux / Bash"] }
      ],
      experience: experience("es",
        [
          "Construcción y orquestación de pipelines ETL/ELT escalables en Python para la ingesta, transformación y migración de datos desde SQL Server / Azure Data Factory hacia BigQuery (GCP).",
          "Optimización de consultas SQL avanzadas y stored procedures (cruces masivos) para reportes de alto rendimiento y KPIs, con foco en el uso eficiente de recursos.",
          "Despliegue de procesos y microservicios contenerizados en Google Cloud Run; flujos automatizados en Google Colab.",
          "APIs REST en Python para exponer información a otros sistemas; control de versiones de consultas y modelado de datos con Dataform.",
          "Pipelines de limpieza y preprocesamiento de datos para entrenamiento y ajuste de LLMs; integración con LLMs (Gemini / Vertex AI vía API), RAG y búsquedas vectoriales.",
          "Microservicios con Java 21 y Spring Boot 3.x; MongoDB, Oracle y PostgreSQL; Docker, Kubernetes y Git."
        ],
        [
          "Integración de pantallas web en Angular y páginas JSP con servicios back-end.",
          "APIs REST con Spring Boot y mantenimiento de servicios SOAP heredados.",
          "Módulos nuevos para sistemas core, diagramas de arquitectura y documentación técnica."
        ],
        [
          "Interfaces web en Angular integradas a microservicios y APIs REST.",
          "Modelado y optimización de bases de datos SQL (MySQL).",
          "Pipelines CI/CD con Jenkins (pruebas, compilación y entrega); apps móviles iOS y Android."
        ])
    },

    backend: {
      tab: "Java Backend",
      role: "Desarrollador Backend Java (Java 21, Spring Boot, Microservicios)",
      summary: "Ingeniero de Software con casi 5 años de experiencia (100% remoto) en desarrollo backend con Java. Especializado en Java 11+ / 21 y Spring Boot (Spring Security, Spring Data JPA), microservicios, APIs REST y colas de mensajería (Kafka / RabbitMQ). Manejo avanzado de PostgreSQL y MySQL con optimización de consultas complejas. Trabajo diario con Docker, Kubernetes, Git/GitLab y nube (AWS, Azure y GCP). Autónomo, orientado a resultados y a entregables estables en producción. Maestría en Inteligencia Artificial.",
      skills: [
        { category: "Java y Spring", icon: "fa-server", color: "var(--accent-blue)",
          items: ["Java 11+ / 21", "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "JPA / Hibernate", "JdbcTemplate", "FeignClient", "JWT", "OAuth2"] },
        { category: "Arquitectura", icon: "fa-cubes", color: "var(--accent-teal)",
          items: ["Microservicios", "APIs REST", "SOAP", "Mensajería asíncrona (Kafka / RabbitMQ)", "Clean Architecture", "SOLID"] },
        { category: "Bases de datos", icon: "fa-database", color: "var(--accent-purple)",
          items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "BigQuery", "SQL complejo y optimización"] },
        { category: "DevOps y nube", icon: "fa-cloud", color: "var(--accent-pink)",
          items: ["Docker", "Kubernetes", "Git / GitLab / GitHub", "Jenkins", "SonarQube", "CI/CD", "AWS", "Azure", "Google Cloud (Cloud Run)", "Linux / Bash"] },
        { category: "Calidad y otros", icon: "fa-check-double", color: "var(--accent-indigo)",
          items: ["JUnit 5", "Mockito", "Pruebas unitarias e integración", "Code review", "Python", "ETL", "Scrum"] }
      ],
      experience: experience("es",
        [
          "Desarrollo, pruebas y despliegue de microservicios con Java 21 y Spring Boot 3.x (Clean Architecture, SOLID).",
          "Persistencia con Spring Data JPA / Hibernate y JdbcTemplate sobre PostgreSQL, Oracle y MongoDB.",
          "Comunicación asíncrona entre servicios con colas de mensajería (Kafka / RabbitMQ) e integración síncrona con FeignClient.",
          "APIs REST seguras con Spring Security, JWT y OAuth2.",
          "Optimización de consultas SQL complejas y diagnóstico de cuellos de botella para reportes de alto rendimiento y KPIs.",
          "Pruebas unitarias e integración con JUnit 5 y Mockito; code review con pull/merge requests en Git.",
          "Contenedores con Docker y Kubernetes; despliegues en la nube (Google Cloud Run) y pipelines ETL en Python hacia BigQuery."
        ],
        [
          "APIs REST con Spring Boot y mantenimiento de servicios SOAP heredados.",
          "Módulos nuevos para sistemas core, diagramas de arquitectura y documentación técnica.",
          "Integración de pantallas Angular y JSP con servicios back-end.",
          "Control de versiones con GitLab (merge requests) y Subversion."
        ],
        [
          "Microservicios y APIs REST con Spring Boot.",
          "Modelado y optimización de bases de datos SQL (MySQL).",
          "Pipelines CI/CD con Jenkins (pruebas, compilación y entrega).",
          "Integración con interfaces Angular y apps móviles iOS / Android."
        ])
    },

    fullstack: {
      tab: "Java Full Stack",
      role: "Desarrollador Full Stack Java (Java/JEE, Spring, React, Angular)",
      summary: "Ingeniero de Software con casi 5 años de experiencia (100% remoto) en desarrollo de aplicaciones web y servicios con Java y React. Desarrollo end-to-end: back-end con Java/JEE, Spring Framework / Spring Boot, JPA/Hibernate, JdbcTemplate, Servlets y JSP; front-end con React, Angular, JavaScript, HTML5 y CSS3. Flujo de trabajo con Git (pull requests, code review, merges) y experiencia en Google Cloud Platform. Maestría en Inteligencia Artificial.",
      skills: [
        { category: "Back-end", icon: "fa-server", color: "var(--accent-blue)",
          items: ["Java 21 / JEE", "Spring Framework", "Spring Boot 3.x", "Spring Security", "JPA / Hibernate", "JdbcTemplate", "Servlets / JSP", "APIs REST", "SOAP", "Microservicios", "JWT / OAuth2"] },
        { category: "Front-end", icon: "fa-laptop-code", color: "var(--accent-teal)",
          items: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
        { category: "Bases de datos", icon: "fa-database", color: "var(--accent-purple)",
          items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "BigQuery", "SQL complejo y optimización"] },
        { category: "Cloud, DevOps y pruebas", icon: "fa-cloud", color: "var(--accent-pink)",
          items: ["Google Cloud (Cloud Run, BigQuery, Vertex AI)", "AWS", "Azure", "Docker", "Git / GitHub / GitLab", "Jenkins", "SonarQube", "CI/CD", "JUnit 5", "Mockito", "Scrum"] }
      ],
      experience: experience("es",
        [
          "Microservicios con Java 21 y Spring Boot 3.x (Clean Architecture, SOLID); persistencia con JPA/Hibernate y JdbcTemplate sobre Oracle, PostgreSQL y MongoDB.",
          "APIs REST seguras con Spring Security, JWT y OAuth2; integración entre servicios con FeignClient.",
          "Interfaces web con React y JavaScript consumiendo APIs REST.",
          "Pruebas unitarias y de integración con JUnit 5 y Mockito; contenedores con Docker; flujo de pull requests y code review con Git.",
          "Optimización de consultas SQL complejas para reportes de alto rendimiento y KPIs.",
          "Pipelines ETL en Python hacia BigQuery y procesos en contenedores con Google Cloud Run (GCP)."
        ],
        [
          "APIs REST con Spring Boot y mantenimiento de servicios SOAP heredados (Java/JEE, Servlets).",
          "Integración de pantallas en Angular y páginas JSP con servicios back-end.",
          "Módulos nuevos para sistemas core, diagramas de arquitectura y documentación técnica.",
          "Control de versiones con GitLab (merge requests) y Subversion."
        ],
        [
          "Microservicios y APIs REST con Spring Boot integradas a interfaces web (Angular).",
          "Modelado y optimización de bases de datos SQL (MySQL).",
          "Pipelines CI/CD con Jenkins (pruebas, compilación y entrega).",
          "Desarrollo y mantenimiento de apps móviles iOS y Android."
        ])
    }
  },

  en: {
    general: {
      tab: "General",
      role: "Data Engineer / Backend (Java, Spring Boot) · AI",
      summary: "Software Engineer with nearly 5 years of experience (100% remote) in data engineering, backend development with Java and Spring Boot, and artificial intelligence. Python ETL pipelines into BigQuery, REST APIs, microservices and Google Cloud processes. Master's degree in Artificial Intelligence.",
      skills: [
        { category: "Languages and frameworks", icon: "fa-code", color: "var(--accent-indigo)",
          items: ["Java (advanced)", "Spring Boot", "Python (Pandas, NumPy)", "SQL", "Node.js", "Angular", "React", "TypeScript"] },
        { category: "Data and AI", icon: "fa-microchip", color: "var(--accent-teal)",
          items: ["BigQuery", "Dataform", "Data Fusion", "Looker", "ETL", "Analytical modeling", "Machine Learning", "Deep Learning", "TensorFlow", "LLMs", "Prompt engineering"] },
        { category: "Architecture", icon: "fa-cubes", color: "var(--accent-blue)",
          items: ["Microservices", "REST APIs", "SOAP", "Highly available distributed systems"] },
        { category: "Cloud and DevOps", icon: "fa-cloud", color: "var(--accent-purple)",
          items: ["Google Cloud (Cloud Run, Vertex AI)", "AWS", "Azure", "Docker", "Kubernetes", "Git", "Jenkins", "SonarQube", "CI/CD", "Linux / Bash"] },
        { category: "Databases", icon: "fa-database", color: "var(--accent-pink)",
          items: ["PostgreSQL", "MySQL", "BigQuery", "MongoDB"] }
      ],
      experience: experience("en",
        [
          "Scalable Python ETL pipelines into BigQuery for corporate decision-making.",
          "Optimization of complex SQL queries for high-performance reports and KPIs.",
          "Automated workflows in Google Colab and containerized processes on Google Cloud Run.",
          "Data cleaning and preprocessing pipelines for LLM training and fine-tuning.",
          "Python APIs; query version control and data modeling with Dataform.",
          "Microservices with Java 21 and Spring Boot 3.x (Clean Architecture, SOLID), secure APIs with Spring Security, JWT and OAuth2, FeignClient; MongoDB, Oracle and PostgreSQL; testing with JUnit 5 and Mockito; Docker and Git."
        ],
        [
          "REST APIs with Spring Boot and maintenance of legacy SOAP services.",
          "Angular screen integration and JSP pages.",
          "New modules for core systems, architecture diagrams and technical documentation.",
          "Version control with GitLab and Subversion."
        ],
        [
          "Microservices and REST APIs with Spring Boot integrated with Angular interfaces.",
          "Development and maintenance of iOS and Android mobile apps.",
          "SQL database modeling and optimization (MySQL).",
          "CI/CD pipelines with Jenkins (testing, build and delivery)."
        ])
    },

    data: {
      tab: "Data & Cloud",
      role: "Data & Cloud Engineer (GCP, BigQuery, Python) · AI",
      summary: "Software Engineer with nearly 5 years of experience (100% remote) in cloud data engineering and full stack development. Building and orchestrating Python ETL/ELT pipelines to migrate data from SQL Server / Azure Data Factory into Google Cloud Platform (BigQuery), tuning advanced SQL queries and stored procedures, containerized microservices on Cloud Run, and REST APIs with Python, Node.js and Java. Integration of AI services (LLMs such as Gemini / Vertex AI via API, RAG and vector search). Master's degree in Artificial Intelligence and Microsoft Azure Fundamentals certification.",
      skills: [
        { category: "Data and cloud", icon: "fa-cloud", color: "var(--accent-teal)",
          items: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Vertex AI", "Data Fusion", "Dataform", "Looker", "ETL / ELT", "Data migration", "Analytical modeling", "Azure Data Factory", "AWS"] },
        { category: "SQL and databases", icon: "fa-database", color: "var(--accent-blue)",
          items: ["Advanced SQL", "Stored procedures", "Query optimization", "SQL Server", "BigQuery", "PostgreSQL", "MySQL", "Oracle", "MongoDB"] },
        { category: "Back-end and APIs", icon: "fa-server", color: "var(--accent-indigo)",
          items: ["Python (Pandas, NumPy)", "Node.js", "Java 21 / Spring Boot", "REST APIs", "Microservices", "Docker", "Kubernetes"] },
        { category: "Artificial Intelligence", icon: "fa-microchip", color: "var(--accent-purple)",
          items: ["LLMs (Vertex AI / Gemini via API)", "RAG", "Vector search (embeddings)", "Prompt engineering", "Data preparation for LLMs", "Machine Learning", "Deep Learning", "TensorFlow"] },
        { category: "Front-end and DevOps", icon: "fa-tools", color: "var(--accent-pink)",
          items: ["Angular", "TypeScript", "React", "Git / GitLab / GitHub", "Jenkins", "SonarQube", "CI/CD", "Linux / Bash"] }
      ],
      experience: experience("en",
        [
          "Built and orchestrated scalable Python ETL/ELT pipelines for ingesting, transforming and migrating data from SQL Server / Azure Data Factory into BigQuery (GCP).",
          "Tuned advanced SQL queries and stored procedures (large joins) for high-performance reports and KPIs, with a focus on efficient resource usage.",
          "Deployed containerized processes and microservices on Google Cloud Run; automated workflows in Google Colab.",
          "Python REST APIs exposing data to other systems; query version control and data modeling with Dataform.",
          "Data cleaning and preprocessing pipelines for LLM training and fine-tuning; integration with LLMs (Gemini / Vertex AI via API), RAG and vector search.",
          "Microservices with Java 21 and Spring Boot 3.x; MongoDB, Oracle and PostgreSQL; Docker, Kubernetes and Git."
        ],
        [
          "Integrated Angular web screens and JSP pages with back-end services.",
          "REST APIs with Spring Boot and maintenance of legacy SOAP services.",
          "New modules for core systems, architecture diagrams and technical documentation."
        ],
        [
          "Angular web interfaces integrated with microservices and REST APIs.",
          "SQL database modeling and optimization (MySQL).",
          "CI/CD pipelines with Jenkins (testing, build and delivery); iOS and Android mobile apps."
        ])
    },

    backend: {
      tab: "Java Backend",
      role: "Java Backend Developer (Java 21, Spring Boot, Microservices)",
      summary: "Software Engineer with nearly 5 years of experience (100% remote) in backend development with Java. Focused on Java 11+ / 21 and Spring Boot (Spring Security, Spring Data JPA), microservices, REST APIs and message queues (Kafka / RabbitMQ). Advanced PostgreSQL and MySQL, including complex query optimization. Daily work with Docker, Kubernetes, Git/GitLab and cloud (AWS, Azure and GCP). Autonomous, results-oriented and focused on stable production deliverables. Master's degree in Artificial Intelligence.",
      skills: [
        { category: "Java and Spring", icon: "fa-server", color: "var(--accent-blue)",
          items: ["Java 11+ / 21", "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "JPA / Hibernate", "JdbcTemplate", "FeignClient", "JWT", "OAuth2"] },
        { category: "Architecture", icon: "fa-cubes", color: "var(--accent-teal)",
          items: ["Microservices", "REST APIs", "SOAP", "Async messaging (Kafka / RabbitMQ)", "Clean Architecture", "SOLID"] },
        { category: "Databases", icon: "fa-database", color: "var(--accent-purple)",
          items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "BigQuery", "Complex SQL and optimization"] },
        { category: "DevOps and cloud", icon: "fa-cloud", color: "var(--accent-pink)",
          items: ["Docker", "Kubernetes", "Git / GitLab / GitHub", "Jenkins", "SonarQube", "CI/CD", "AWS", "Azure", "Google Cloud (Cloud Run)", "Linux / Bash"] },
        { category: "Quality and other", icon: "fa-check-double", color: "var(--accent-indigo)",
          items: ["JUnit 5", "Mockito", "Unit and integration testing", "Code review", "Python", "ETL", "Scrum"] }
      ],
      experience: experience("en",
        [
          "Development, testing and deployment of microservices with Java 21 and Spring Boot 3.x (Clean Architecture, SOLID).",
          "Persistence with Spring Data JPA / Hibernate and JdbcTemplate on PostgreSQL, Oracle and MongoDB.",
          "Asynchronous communication between services with message queues (Kafka / RabbitMQ) and synchronous integration with FeignClient.",
          "Secure REST APIs with Spring Security, JWT and OAuth2.",
          "Complex SQL query optimization and bottleneck diagnosis for high-performance reports and KPIs.",
          "Unit and integration testing with JUnit 5 and Mockito; code review with pull/merge requests in Git.",
          "Containers with Docker and Kubernetes; cloud deployments (Google Cloud Run) and Python ETL pipelines into BigQuery."
        ],
        [
          "REST APIs with Spring Boot and maintenance of legacy SOAP services.",
          "New modules for core systems, architecture diagrams and technical documentation.",
          "Integrated Angular screens and JSP pages with back-end services.",
          "Version control with GitLab (merge requests) and Subversion."
        ],
        [
          "Microservices and REST APIs with Spring Boot.",
          "SQL database modeling and optimization (MySQL).",
          "CI/CD pipelines with Jenkins (testing, build and delivery).",
          "Integration with Angular interfaces and iOS / Android mobile apps."
        ])
    },

    fullstack: {
      tab: "Java Full Stack",
      role: "Java Full Stack Developer (Java/JEE, Spring, React, Angular)",
      summary: "Software Engineer with nearly 5 years of experience (100% remote) building web applications and services with Java and React. End-to-end development: back-end with Java/JEE, Spring Framework / Spring Boot, JPA/Hibernate, JdbcTemplate, Servlets and JSP; front-end with React, Angular, JavaScript, HTML5 and CSS3. Git workflow (pull requests, code review, merges) and experience on Google Cloud Platform. Master's degree in Artificial Intelligence.",
      skills: [
        { category: "Back-end", icon: "fa-server", color: "var(--accent-blue)",
          items: ["Java 21 / JEE", "Spring Framework", "Spring Boot 3.x", "Spring Security", "JPA / Hibernate", "JdbcTemplate", "Servlets / JSP", "REST APIs", "SOAP", "Microservices", "JWT / OAuth2"] },
        { category: "Front-end", icon: "fa-laptop-code", color: "var(--accent-teal)",
          items: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
        { category: "Databases", icon: "fa-database", color: "var(--accent-purple)",
          items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Complex SQL and optimization"] },
        { category: "Cloud, DevOps and testing", icon: "fa-cloud", color: "var(--accent-pink)",
          items: ["Google Cloud (Cloud Run, BigQuery, Vertex AI)", "AWS", "Azure", "Docker", "Git / GitHub / GitLab", "Jenkins", "SonarQube", "CI/CD", "JUnit 5", "Mockito", "Scrum"] }
      ],
      experience: experience("en",
        [
          "Microservices with Java 21 and Spring Boot 3.x (Clean Architecture, SOLID); persistence with JPA/Hibernate and JdbcTemplate on Oracle, PostgreSQL and MongoDB.",
          "Secure REST APIs with Spring Security, JWT and OAuth2; service-to-service integration with FeignClient.",
          "Web interfaces with React and JavaScript consuming REST APIs.",
          "Unit and integration testing with JUnit 5 and Mockito; Docker containers; pull request and code review workflow with Git.",
          "Complex SQL query optimization for high-performance reports and KPIs.",
          "Python ETL pipelines into BigQuery and containerized processes on Google Cloud Run (GCP)."
        ],
        [
          "REST APIs with Spring Boot and maintenance of legacy SOAP services (Java/JEE, Servlets).",
          "Integrated Angular screens and JSP pages with back-end services.",
          "New modules for core systems, architecture diagrams and technical documentation.",
          "Version control with GitLab (merge requests) and Subversion."
        ],
        [
          "Microservices and REST APIs with Spring Boot integrated with web interfaces (Angular).",
          "SQL database modeling and optimization (MySQL).",
          "CI/CD pipelines with Jenkins (testing, build and delivery).",
          "Development and maintenance of iOS and Android mobile apps."
        ])
    }
  }
};

// Textos fijos de la página (elementos con data-i18n="clave").
const uiText = {
  es: {
    navHome: "Inicio", navSkills: "Habilidades", navExperience: "Experiencia", navEducation: "Educación", navPortfolio: "Portafolio",
    availability: "Disponible · remoto, Puebla o Querétaro",
    downloadCv: "Descargar CV (PDF)", contact: "Contáctame",
    selector: "Elige el perfil del CV",
    about: "PERFIL", location: "Ubicación", locationValue: "Veracruz, México (remoto)",
    phone: "Teléfono", email: "Correo", languages: "Idiomas", languagesValue: "Español nativo · Inglés intermedio (B1)",
    experience: "Experiencia", education: "Educación", certifications: "Certificaciones", portfolio: "Portafolio",
    master: "Maestría en Inteligencia Artificial",
    masterNote: "Arquitecturas de datos avanzadas, Machine Learning y Deep Learning.",
    bachelor: "Ingeniería de Software",
    bachelorNote: "Arquitectura de software empresarial, programación y bases de datos.",
    p1: "Front-end en Angular + MaterialNG con API REST en Spring Boot. Marketplace municipal para productores y consumidores, con panel de administración.",
    p2: "Portal público del marketplace Mercadito: catálogo, flujo de compra y diseño responsivo.",
    p3: "Automatización de hotel con IoT: cliente web (HTML/CSS/PHP), app Android (Java) y microcontroladores Arduino para luces, aire acondicionado y accesos.",
    p4: "Panel de administración CRUD en Angular con API REST en Spring Boot y autenticación con JWT.",
    p5: "CRUD en memoria con React: manejo de estado, formularios y listas en tiempo real.",
    viewCode: "Ver código",
    mailSubject: "Vacante"
  },
  en: {
    navHome: "Home", navSkills: "Skills", navExperience: "Experience", navEducation: "Education", navPortfolio: "Portfolio",
    availability: "Available · remote, Puebla or Querétaro",
    downloadCv: "Download CV (PDF)", contact: "Contact me",
    selector: "Choose a résumé profile",
    about: "PROFILE", location: "Location", locationValue: "Veracruz, Mexico (remote)",
    phone: "Phone", email: "Email", languages: "Languages", languagesValue: "Spanish (native) · English (intermediate, B1)",
    experience: "Experience", education: "Education", certifications: "Certifications", portfolio: "Portfolio",
    master: "Master's Degree in Artificial Intelligence",
    masterNote: "Advanced data architectures, Machine Learning and Deep Learning.",
    bachelor: "B.Eng. in Software Engineering",
    bachelorNote: "Enterprise software architecture, programming and database systems.",
    p1: "Angular + MaterialNG front end with a Spring Boot REST API. Municipal marketplace for producers and consumers, with an admin panel.",
    p2: "Public portal of the Mercadito marketplace: catalog browsing, purchase flow and responsive design.",
    p3: "IoT hotel automation: web client (HTML/CSS/PHP), Android app (Java) and Arduino microcontrollers for lights, air conditioning and door access.",
    p4: "CRUD admin panel in Angular with a Spring Boot REST API and JWT authentication.",
    p5: "In-memory CRUD built with React: state management, form handling and real-time list updates.",
    viewCode: "View code",
    mailSubject: "Job opportunity"
  }
};

// PDF que se descarga según el idioma (los mismos que adjunta el buscador).
const cvPdf = { es: "CV_Cesar_Mendoza_ES.pdf", en: "CV_Cesar_Mendoza_EN.pdf" };
