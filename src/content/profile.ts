import { caseStudies } from "@/content/case-studies";
import { recommendations } from "@/content/recommendations";
import type { ProfessionalProfile } from "@/content/types";

export const professionalProfile = {
  name: "Íñigo Rodríguez Sánchez",
  headline: {
    es: "Ingeniero Senior de Inteligencia Artificial y Datos",
    en: "Senior Artificial Intelligence & Data Engineer",
  },
  summary: {
    es: [
      "Ingeniero de Datos e Inteligencia Artificial con una sólida formación académica en Telecomunicaciones e IA, y experiencia práctica en el diseño de sistemas basados en IA, canalización de datos y soluciones de automatización inteligente.",
      "Grado y Máster por la Universidad Politécnica de Madrid, con investigación centrada en redes neuronales y extracción de información basada en PLN, implementando un sistema de reconocimiento de entidades con nombre (NER).",
      "Experiencia en la aplicación de LLMs (OpenAI, Ollama, Hugging Face), el desarrollo de flujos de trabajo ETL escalables, y la integración de diversos sistemas de datos (grafos, SQL, NoSQL, vectoriales) en proyectos innovadores.",
    ],
    en: [
      "Artificial Intelligence and Data Engineer with a solid academic background in Telecommunications and AI, and hands-on experience designing AI-powered systems, data pipelines, and intelligent automation solutions.",
      "BSc and MSc from Universidad Politécnica de Madrid, with research focused on neural networks and NLP-based information extraction, implementing a Named Entity Recognition (NER) system.",
      "Experienced in applying LLMs (OpenAI, Ollama, Hugging Face), developing scalable ETL workflows, and integrating diverse data systems (graph, SQL, NoSQL, vector databases) in innovative projects.",
    ],
  },
  experience: [
    {
      id: "base-100",
      organization: "BASE 100, S.A.",
      website: "https://base100.com/",
      logo: "/images/companies/base-100.png",
      location: { es: "Madrid, España", en: "Madrid, Spain" },
      period: { start: "2025-07", current: true },
      description: {
        es: [
          "Consultora tecnológica especializada en el desarrollo de sistemas de información complejos y en la modernización de sistemas legacy (mainframe IBM z / IBM i).",
          "Fomenta la innovación con I+D, herramientas propias y servicios de consultoría para migración, reingeniería y mantenimiento de sistemas críticos.",
        ],
        en: [
          "Technology consultancy specialized in the development of complex information systems and the modernization of legacy systems (IBM z / IBM i mainframe).",
          "It promotes innovation through R&D, proprietary tools, and consulting services for migration, reengineering, and maintenance of critical systems.",
        ],
      },
      roles: [
        {
          id: "senior-ai-data-engineer",
          title: {
            es: "Ingeniero de IA y Datos Senior",
            en: "Senior AI & Data Engineer",
          },
          period: { start: "2025-07", current: true },
          summary: {
            es: "Como Ingeniero de IA y Datos Senior, participo en el diseño y desarrollo de soluciones basadas en inteligencia artificial, centradas en la automatización de procesos y la mejora de la documentación técnica en entornos complejos. Mi trabajo combina el uso de modelos de lenguaje de última generación con herramientas de procesamiento de datos para optimizar la eficiencia y la calidad de la información generada.",
            en: "As a Senior AI and Data Engineer, I participate in the design and development of artificial intelligence-based solutions focused on process automation and improving technical documentation in complex environments. My work combines the use of state-of-the-art language models with data processing tools to optimize the efficiency and quality of the information generated.",
          },
          responsibilities: [
            {
              es: "Aplicación de IA generativa con LLM avanzados (suite Ollama, DeepSeek, Qwen y modelos de código abierto -Hugging Face-) para la documentación técnica y enriquecimiento automático de información en sistemas software.",
              en: "Application of generative AI with advanced LLMs (Ollama suite, DeepSeek, Qwen, and open-source models -Hugging Face-) for technical documentation and automatic information enrichment in software systems.",
            },
            {
              es: "Diseño y desarrollo de un sistema de análisis y generación de documentación Javadoc en programas Java mediante parsers y modelos de IA.",
              en: "Design and development of a system for analyzing and generating Javadoc documentation in Java programs using parsers and AI models.",
            },
            {
              es: "Creación de frameworks para el procesamiento y estandarización de código legacy (COBOL, JCL, PL/I) con el objetivo de facilitar su análisis, trazabilidad y futura modernización (migración a código Java).",
              en: "Creation of frameworks for processing and standardizing legacy code (COBOL, JCL, PL/I) to facilitate its analysis, traceability, and future modernization (migration to Java code).",
            },
            {
              es: "Integración de metodologías de validación y limpieza automática (parsing, regex, AST, etc.) para asegurar la coherencia y utilidad de la información procesada.",
              en: "Integration of automatic validation and cleaning methodologies (parsing, regex, AST, etc.) to ensure the consistency and usefulness of the processed information.",
            },
          ],
        },
      ],
      technologies: [
        "Python",
        "Java",
        "COBOL",
        "JCL",
        "PL/I",
        "Ollama",
        "DeepSeek",
        "Qwen",
        "Hugging Face",
        "FastAPI",
        "Tree-sitter",
        "AWS",
        "Docker",
        "GitLab",
      ],
    },
    {
      id: "collybrix",
      organization: "COLLYBRIX ACELERADORA, S.L.",
      website: "https://www.collybrix.com/es",
      logo: "/images/companies/collybrix.svg",
      location: { es: "Madrid, España · En remoto", en: "Madrid, Spain · Remote" },
      period: { start: "2025-06", current: true },
      description: {
        es: [
          "Empresa tecnológica que acompaña a startups y organizaciones mediante desarrollo de software, consultoría tecnológica, inteligencia artificial y servicios CTO-as-a-Service.",
        ],
        en: [
          "Technology company supporting startups and organizations through software development, technology consulting, artificial intelligence, and CTO-as-a-Service offerings.",
        ],
      },
      roles: [
        {
          id: "co-founder-cfo-senior-ai-data-engineer",
          title: {
            es: "Co-Fundador | CFO | Ingeniero de IA & Datos Senior",
            en: "Co-Founder | CFO | Senior AI & Data Engineer",
          },
          period: { start: "2025-06", current: true },
          summary: {
            es: "Impulsando Collybrix, una compañía dedicada a acelerar el desarrollo tecnológico de startups y empresas.",
            en: "Driving Collybrix, a company focused on accelerating the technological development of startups and businesses.",
          },
          description: {
            es: [
              "Impulsando Collybrix, una compañía dedicada a acelerar el desarrollo tecnológico de startups y empresas.",
              "Ayudamos a transformar ideas en productos y soluciones escalables, acompañando a las organizaciones con las que colaboramos durante todo el proceso de desarrollo y aportando la experiencia necesaria para convertir desafíos tecnológicos en oportunidades de crecimiento.",
              "A través de servicios de desarrollo, consultoría tecnológica y CTO-as-a-Service, trabajamos junto a nuestros clientes para construir productos y soluciones robustas y escalables.",
              "Como Co-Fundador, compagino la dirección financiera de la compañía con un rol técnico especializado en IA y datos. Además de liderar la planificación y gestión económica de Collybrix, participo en diferentes proyectos junto a las empresas con las que colaboramos, diseñando e implementando soluciones de ingeniería de datos e inteligencia artificial orientadas a resolver problemas reales de negocio.",
            ],
            en: [
              "Driving Collybrix, a company focused on accelerating the technological development of startups and businesses.",
              "We help transform ideas into scalable products and solutions, supporting the organizations we collaborate with throughout the entire development process and providing the expertise needed to turn technological challenges into growth opportunities.",
              "Through software development, technology consulting, and CTO-as-a-Service offerings, we work closely with our clients to build robust and scalable products and solutions.",
              "As Co-Founder, I combine the company's financial leadership with a technical role specialized in AI and data. In addition to leading Collybrix's financial planning and management, I collaborate on projects with the organizations we work with, designing and implementing data engineering and artificial intelligence solutions aimed at solving real business challenges.",
            ],
          },
          responsibilities: [],
        },
      ],
      technologies: [],
    },
    {
      id: "kyra-akaio",
      organization: "KYRA GROUP – AKAIO",
      website: "https://www.akaio.ai/",
      logo: "/images/companies/akaio.png",
      location: { es: "Madrid, España", en: "Madrid, Spain" },
      period: { start: "2024-06", end: "2025-07" },
      description: {
        es: [
          "AKAIO es una innovadora plataforma en línea que aplica la IA para revolucionar la forma en que las entidades impulsan la innovación.",
          "Permite iniciativas más rápidas, ágiles y rentables mediante el uso de metodologías de vanguardia basadas en IA.",
        ],
        en: [
          "AKAIO is a groundbreaking online platform that applies AI to revolutionize how entities drive innovation.",
          "It empowers faster, bolder, and cost-efficient initiatives through the use of cutting-edge AI-driven methodologies.",
        ],
      },
      roles: [
        {
          id: "data-engineering-lead-ai-engineer",
          title: {
            es: "Responsable de Ingeniería de Datos e Ingeniero de IA",
            en: "Data Engineering Lead & Artificial Intelligence Engineer",
          },
          period: { start: "2024-11", end: "2025-07" },
          summary: {
            es: "Como Ingeniero de Inteligencia Artificial y Responsable de Ingeniería de Datos, estoy a cargo del diseño y la implementación de soluciones avanzadas de IA para la extracción, el enriquecimiento y la automatización inteligente de datos. También dirijo la arquitectura y la supervisión flujos ETL de extremo a extremo y sistemas de informes basados en datos para garantizar la eficiencia, la coherencia y la escalabilidad en las operaciones de datos.",
            en: "As Artificial Intelligence Engineer & Data Engineering Lead, I am responsible for designing and implementing advanced AI solutions for data extraction, enrichment, and intelligent automation. I also lead the architecture and supervision of end-to-end ETL pipelines and data-driven reporting systems to ensure efficiency, consistency, and scalability in data operations.",
          },
          responsibilities: [
            {
              es: "Aplicación de IA generativa con LLM avanzados (suite OpenAI, colección Ollama y modelos de código abierto -Hugging Face-) para el enriquecimiento, la extracción y la automatización de datos.",
              en: "Leveraging Generative AI with advanced LLMs (OpenAI suite, Ollama collection and open-source models -Hugging Face-) for data enrichment, extraction, and automation.",
            },
            {
              es: "Diseño, desarrollo, automatización y optimización continua de flujos de trabajo ETL de extremo a extremo para la integración, limpieza y estructuración de datos a gran escala.",
              en: "Design, development, automation, and continuous optimization of end-to-end ETL workflows for large-scale data integration, cleansing, and structuring.",
            },
            {
              es: "Gestión de MongoDB, Neo4j y Milvus para el acceso escalable a datos estructurados y no estructurados.",
              en: "Managed MongoDB, Neo4j, and Milvus for scalable access to structured and unstructured data.",
            },
            {
              es: "Implementación de arquitecturas RAG y sistemas multiagente con CrewAI, LangChain y n8n.",
              en: "Implemented RAG architectures and multi-agent systems with CrewAI, LangChain, and n8n.",
            },
            {
              es: "Desarrollo de sistemas de identificación de tendencias combinando la extracción de información de API científicas (arXiv, PubMed, OpenAlex, etc.) y fuentes web mediante herramientas de procesamiento inteligente.",
              en: "Development of trend identification systems by combining information extraction from scientific APIs (arXiv, PubMed, OpenAlex) and web sources using intelligent processing tools.",
            },
            {
              es: "Exploración y conservación de conjuntos de datos mediante Hugging Face, incluida la limpieza y el enriquecimiento estructurados para mejorar los activos de datos propios.",
              en: "Dataset scouting and curation via Hugging Face, including structured cleaning and enrichment to enhance proprietary data assets.",
            },
            {
              es: "Preparación de informes y KPI para supervisar calidad, integridad y rendimiento operativo de los datos.",
              en: "Prepared reports and KPIs to monitor data quality, integrity, and operational performance.",
            },
          ],
        },
        {
          id: "artificial-intelligence-engineer",
          title: {
            es: "Ingeniero de Inteligencia Artificial",
            en: "Artificial Intelligence Engineer",
          },
          period: { start: "2024-06", end: "2024-11" },
          summary: {
            es: "Como Ingeniero de Inteligencia Artificial, contribuí al diseño e implementación de sistemas impulsados por IA enfocados en el enriquecimiento del dato a través de la generación de contenido, extracción de información y procesamiento automatizado de datos.",
            en: "As an Artificial Intelligence Engineer, I contributed to the design and implementation of AI-powered systems focused on data enrichment through content generation, information extraction, and automated data processing.",
          },
          responsibilities: [
            {
              es: "Aplicación de IA generativa con LLM avanzados (suite OpenAI, colección Ollama y modelos de código abierto -Hugging Face-) para el enriquecimiento y la transformación de datos.",
              en: "Leveraging Generative AI with advanced LLMs (OpenAI suite, Ollama collection, and open-source models -Hugging Face-) for data enrichment and transformation.",
            },
            {
              es: "Desarrollo de técnicas de PLN y reconocimiento de entidades con nombre para extracción selectiva de información.",
              en: "Developed NLP and named entity recognition techniques for targeted information extraction.",
            },
            {
              es: "Gestión de MongoDB y Neo4j para almacenamiento y recuperación optimizados.",
              en: "Managed MongoDB and Neo4j for optimized storage and retrieval.",
            },
            {
              es: "Elaboración de informes analíticos y KPI de calidad de datos y rendimiento del sistema.",
              en: "Produced analytical reports and KPIs for data quality and system performance.",
            },
          ],
        },
      ],
      technologies: [
        "Python",
        "MongoDB",
        "Neo4j",
        "Milvus",
        "LangChain",
        "CrewAI",
        "n8n",
        "FastAPI",
        "OpenAI",
        "Ollama",
        "Hugging Face",
        "TensorFlow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Docker",
        "AWS",
        "GitHub",
        "MS Excel",
      ],
    },
    {
      id: "fi-group",
      organization: "FI GROUP (F. INICIATIVAS)",
      website: "https://www.fi-group.es/es",
      logo: "/images/companies/fi-group.jpeg",
      location: { es: "Madrid, España", en: "Madrid, Spain" },
      period: { start: "2019-10", end: "2024-05" },
      description: {
        es: [
          "FI Group es una consultora internacional con más de 20 años de experiencia, especializada en conseguir financiación pública e incentivos fiscales para apoyar las iniciativas de I+D+i e innovación de las empresas en diversos sectores.",
        ],
        en: [
          "FI Group is an international consultancy firm with over 20 years of experience, specialized in securing public funding and tax incentives to support companies R&D and innovation initiatives across various industries.",
        ],
      },
      roles: [
        {
          id: "rdi-consultant",
          title: {
            es: "Consultor de financiación y gestión de proyectos de I+D+i",
            en: "R&D&I Project Funding and Management Consultant",
          },
          period: { start: "2019-10", end: "2024-05" },
          summary: {
            es: "Asesoré a clientes de diversos sectores en la identificación y obtención de financiación para proyectos de I+D+i, al tiempo que gestionaba eficazmente los procesos administrativos, financieros y técnicos relacionados. Mejoré los flujos de trabajo de los proyectos mediante la implementación de automatizaciones y scripts personalizados de gestión de datos. Entre mis clientes se incluyen, entre otros: El Corte Inglés, Inetum, CGI, Bosch, Banco Caminos o Willis Towers Watson.",
            en: "Advised clients across diverse sectors on identifying and securing funding for R&D&I projects, while efficiently managing the related administrative, financial, and technical processes. Enhanced project workflows by implementing automation and custom data management scripts. Clients included El Corte Inglés, Inetum, CGI, Bosch, Banco Caminos, and Willis Towers Watson, among others.",
          },
          responsibilities: [
            {
              es: "Gestión integral de los incentivos fiscales a la I+D+i: deducciones fiscales por I+D+i, bonificaciones al personal investigador y ayudas públicas nacionales (PERTE VEC, PERTE Agro, Programa de Apoyo al Transporte Sostenible y Digital, entre otras).",
              en: "Comprehensive management of R&D&I tax incentives: tax deductions for R&D&I, research personnel bonuses, and Spanish public grants (PERTE VEC, PERTE Agro, Programa de Apoyo al Transporte Sostenible y Digital, among others).",
            },
            {
              es: "Gestión de cartera propia de clientes.",
              en: "Portfolio client management.",
            },
            {
              es: "Automatización y enriquecimiento de datos mediante scripts a medida.",
              en: "Automated and enriched data through custom scripts.",
            },
            {
              es: "Análisis y diseño de soluciones internas de digitalización basadas en inteligencia artificial.",
              en: "Analyzed and designed internal AI-based digitization solutions.",
            },
          ],
        },
      ],
      technologies: ["Python", "Visual Basic", "MS Excel", "MS Word", "MS PowerPoint"],
    },
    {
      id: "british-telecom",
      organization: "BRITISH TELECOM ESPAÑA",
      website: "https://www.globalservices.bt.com/es",
      logo: "/images/companies/british-telecom.png",
      location: { es: "Madrid, España", en: "Madrid, Spain" },
      period: { start: "2017-10", end: "2019-05" },
      description: {
        es: [
          "BT Group (antes British Telecom) es una multinacional británica líder en el sector de las telecomunicaciones con sede en Londres. Presta servicios de telefonía fija, banda ancha, telefonía móvil y televisión en el Reino Unido y opera en unos 180 países.",
        ],
        en: [
          "BT Group plc (formerly British Telecom) is a leading British multinational telecom company headquartered in London. It provides fixed-line, broadband, mobile, and TV services in the UK and operates in approximately 180 countries.",
        ],
      },
      roles: [
        {
          id: "operations-internship",
          title: {
            es: "Beca de Operaciones — Customer, Solutions, Engineering & Delivery",
            en: "Operations Internship — Customer, Solutions, Engineering & Delivery",
          },
          period: { start: "2017-10", end: "2019-05" },
          summary: {
            es: "Contribuí a la gestión y automatización de extremo a extremo de los procesos de desconexión de servicios Telco de BT, abarcando tanto la fase inicial de bloqueo para la validación de línea/conexión como la fase final de baja para la liberación de recursos. Centrado en la racionalización y optimización de los flujos de trabajo mediante la implementación de scripts de automatización personalizados.",
            en: "Contributed to the end-to-end management and automation of BT’s Telco service disconnection processes, encompassing both the initial blocking phase for line/connection validation and the final deregistration phase for resource release. Focused on streamlining and optimizing workflows through the implementation of custom automation scripts.",
          },
          responsibilities: [
            {
              es: "Gestión integral de las bajas de los servicios Telco de BT.",
              en: "Comprehensive management of BT’s Telco service disconnections.",
            },
            {
              es: "Automatización de los procesos de bloqueo y baja mediante la implementación de scripts propios para mejorar la eficacia.",
              en: "Automated blocking and deregistration processes with custom scripts to improve efficiency.",
            },
            {
              es: "Gestión de incidencias.",
              en: "Incident management.",
            },
            {
              es: "Desarrollo y seguimiento de KPI.",
              en: "KPI development and monitoring.",
            },
          ],
        },
      ],
      technologies: ["Java", "Visual Basic", "MS Excel", "MS Word", "MS PowerPoint"],
    },
  ],
  education: [
    {
      id: "neo4j-graphacademy",
      qualification: {
        es: "Programa de formación Neo4j GraphAcademy",
        en: "Neo4j GraphAcademy Training Program",
      },
      institution: "Neo4j GraphAcademy",
      period: { start: "2025", end: "2025" },
    },
    {
      id: "msc-artificial-intelligence",
      qualification: {
        es: "Máster Universitario en Inteligencia Artificial",
        en: "Master's Degree in Artificial Intelligence",
      },
      institution: "Universidad Politécnica de Madrid",
      period: { start: "2022", end: "2024" },
    },
    {
      id: "bsc-telecommunications",
      qualification: {
        es: "Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación",
        en: "Bachelor's Degree in Telecommunications Engineering",
      },
      institution: "Universidad Politécnica de Madrid",
      period: { start: "2011", end: "2019" },
    },
  ],
  certifications: [
    {
      id: "neo4j-certified-professional",
      name: { es: "Neo4j Certified Professional", en: "Neo4j Certified Professional" },
      issuer: "Neo4j",
      issued: "2025-06",
    },
    {
      id: "neo4j-graph-data-science",
      name: {
        es: "Neo4j Graph Data Science Certification",
        en: "Neo4j Graph Data Science Certification",
      },
      issuer: "Neo4j",
      issued: "2025-06",
    },
    {
      id: "aptis-b2",
      name: {
        es: "Aptis — Certificado de inglés B2",
        en: "Aptis — B2 English Certificate",
      },
      issuer: "British Council",
      issued: "2017-10",
    },
  ],
  achievements: [
    {
      id: "bachelor-thesis",
      title: {
        es: "Trabajo Fin de Grado — Machine learning para un brazo robótico articulado en el entrenamiento de porteros de balonmano",
        en: "Bachelor Thesis — Machine learning for an articulated robotic arm in the training of handball goalkeepers",
      },
      description: {
        es: "Calificación de 10 — Sobresaliente y propuesto para matrícula de honor. El proyecto evolucionó posteriormente a NeuroGoalkeeper.",
        en: "Grade 10 — Outstanding and nominated for honors. The project later evolved into NeuroGoalkeeper.",
      },
    },
    {
      id: "fi-group-ai-competition",
      title: {
        es: "Ganador del Concurso Internacional de Ideas basadas en IA de FI Group",
        en: "FI Group International AI-Based Ideas Competition Winner",
      },
      description: {
        es: "Propuesta ganadora entre las oficinas internacionales de FI Group, con definición del problema, solución, recursos y resultados esperados. El premio incluyó su implementación por una empresa especializada y la participación activa del equipo ganador.",
        en: "Winning proposal across FI Group's international offices, covering the problem, solution, resources, and expected outcomes. The prize included implementation by a specialized company and active participation from the winning team.",
      },
    },
  ],
  recommendations,
  skillGroups: [
    {
      id: "ai-ml",
      label: { es: "IA y machine learning", en: "AI and machine learning" },
      items: [
        "LLMs",
        "RAG",
        "Multi-agent systems",
        "NLP",
        "NER",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI",
        "Ollama",
        "Hugging Face",
      ],
    },
    {
      id: "data",
      label: { es: "Datos", en: "Data" },
      items: [
        "ETL",
        "Pandas",
        "NumPy",
        "MongoDB",
        "Neo4j",
        "Milvus",
        "Graph Data Science",
        "Data quality",
        "KPI reporting",
      ],
    },
    {
      id: "engineering",
      label: { es: "Ingeniería", en: "Engineering" },
      items: [
        "Python",
        "Java",
        "FastAPI",
        "LangChain",
        "CrewAI",
        "n8n",
        "Docker",
        "AWS",
        "GitHub",
        "GitLab",
        "Tree-sitter",
      ],
    },
    {
      id: "legacy-productivity",
      label: { es: "Legacy y productividad", en: "Legacy and productivity" },
      items: ["COBOL", "JCL", "PL/I", "Visual Basic", "MS Excel", "MS Word", "MS PowerPoint"],
    },
  ],
  contact: [
    {
      id: "email",
      label: { es: "Email", en: "Email" },
      value: "inigo.rodsan@gmail.com",
      href: "mailto:inigo.rodsan@gmail.com",
      icon: "/images/contact/email.png",
    },
    {
      id: "phone",
      label: { es: "Teléfono", en: "Phone" },
      value: "+34 666 916 533",
      href: "tel:+34666916533",
      icon: "/images/contact/whatsapp.png",
    },
    {
      id: "linkedin",
      label: { es: "LinkedIn", en: "LinkedIn" },
      value: "linkedin.com/in/inigo-rodsan",
      href: "https://www.linkedin.com/in/inigo-rodsan",
      icon: "/images/contact/linkedin.png",
    },
    {
      id: "github",
      label: { es: "GitHub", en: "GitHub" },
      value: "github.com/irdsn",
      href: "https://github.com/irdsn",
      icon: "/images/contact/github.png",
    },
    {
      id: "linktree",
      label: { es: "Enlaces profesionales", en: "Professional links" },
      value: "linktr.ee/irdsn",
      href: "https://linktr.ee/irdsn",
      icon: "/images/contact/linktree.png",
    },
    {
      id: "graphacademy",
      label: { es: "Neo4j GraphAcademy", en: "Neo4j GraphAcademy" },
      value: "Perfil de formación",
      href: "https://graphacademy.neo4j.com/u/e6adbb22-070e-457b-877d-389a6647d8c5/",
      icon: "/images/contact/neo4j.png",
    },
  ],
  caseStudies,
} as const satisfies ProfessionalProfile;
