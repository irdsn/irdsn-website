import type { Locale } from "@/i18n/config";

const dictionaries = {
  es: {
    accessibility: {
      skipToContent: "Saltar al contenido",
      theme: "Cambiar tema de color",
      language: "Cambiar a inglés",
    },
    navigation: {
      experience: "Experiencia",
      contact: "Contacto",
    },
    home: {
      eyebrow: "Inteligencia Artificial · Datos · Ingeniería",
      title: "Ingeniería aplicada para convertir datos y código en sistemas inteligentes",
      description:
        "Diseño soluciones de IA, automatización y datos para problemas técnicos complejos.",
      projects: "Proyectos",
      downloadCv: "Descargar CV en PDF",
      contact: "Contactar",
    },
    sections: {
      profile: "Perfil profesional",
      profileTitle: "IA y datos con una base sólida de ingeniería",
      expertise: "Capacidades",
      expertiseTitle: "Áreas de especialización",
      experience: "Trayectoria",
      experienceTitle: "Experiencia profesional",
      current: "Actualidad",
      responsibilities: "Responsabilidades y contribuciones",
      projects: "Trabajo seleccionado",
      projectsTitle: "Proyectos con evidencia técnica",
      allProjects: "Ver todos los proyectos",
      education: "Formación",
      educationTitle: "Formación académica",
      certifications: "Certificaciones",
      certificationsTitle: "Certificaciones profesionales",
      achievements: "Reconocimientos",
      achievementsTitle: "Logros destacados",
      recommendationTranslation: "Traducción al español del extracto original en inglés.",
      contact: "Contacto",
      contactTitle: "¿Hablamos?",
      contactDescription:
        "Disponible para conversar sobre inteligencia artificial, datos, ingeniería y nuevas oportunidades profesionales.",
    },
    projects: {
      title: "Proyectos y casos de estudio",
      description:
        "Una selección de sistemas de IA, datos y automatización respaldados por código y documentación públicos.",
      back: "Volver al inicio",
      featured: "Caso destacado",
      view: "Ver caso de estudio",
      problem: "Problema",
      context: "Contexto y restricciones",
      solution: "Solución",
      decisions: "Decisiones técnicas",
      implementation: "Implementación",
      outcome: "Resultado verificado",
      technologies: "Tecnologías",
    },
    recommendations: {
      title: "Recomendación profesional",
      excerpt: "Extracto de una recomendación pública",
      source: "Ver recomendación en LinkedIn",
    },
    notFound: {
      title: "Página no encontrada",
      description: "La dirección solicitada no existe.",
      back: "Volver al inicio",
    },
  },
  en: {
    accessibility: {
      skipToContent: "Skip to content",
      theme: "Change color theme",
      language: "Switch to Spanish",
    },
    navigation: {
      experience: "Experience",
      contact: "Contact",
    },
    home: {
      eyebrow: "Artificial Intelligence · Data · Engineering",
      title: "Applied engineering that turns data and code into intelligent systems",
      description: "I design AI, automation, and data solutions for complex technical problems.",
      projects: "Projects",
      downloadCv: "Download CV as PDF",
      contact: "Get in touch",
    },
    sections: {
      profile: "Professional profile",
      profileTitle: "AI and data grounded in solid engineering",
      expertise: "Capabilities",
      expertiseTitle: "Areas of expertise",
      experience: "Career",
      experienceTitle: "Professional experience",
      current: "Present",
      responsibilities: "Responsibilities and contributions",
      projects: "Selected work",
      projectsTitle: "Projects backed by technical evidence",
      allProjects: "View all projects",
      education: "Education",
      educationTitle: "Academic background",
      certifications: "Certifications",
      certificationsTitle: "Professional certifications",
      achievements: "Recognition",
      achievementsTitle: "Selected achievements",
      recommendationTranslation: "Original English excerpt.",
      contact: "Contact",
      contactTitle: "Let's talk",
      contactDescription:
        "Open to conversations about artificial intelligence, data, engineering, and new professional opportunities.",
    },
    projects: {
      title: "Projects and case studies",
      description:
        "A selection of AI, data, and automation systems supported by public code and documentation.",
      back: "Back to home",
      featured: "Featured case study",
      view: "View case study",
      problem: "Problem",
      context: "Context and constraints",
      solution: "Solution",
      decisions: "Technical decisions",
      implementation: "Implementation",
      outcome: "Verified outcome",
      technologies: "Technologies",
    },
    recommendations: {
      title: "Professional recommendation",
      excerpt: "Excerpt from a public recommendation",
      source: "View recommendation on LinkedIn",
    },
    notFound: {
      title: "Page not found",
      description: "The requested address does not exist.",
      back: "Back to home",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
