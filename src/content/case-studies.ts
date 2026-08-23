import type { CaseStudy } from "@/content/types";

export const caseStudies = [
  {
    id: "sci-fetch",
    featured: true,
    image: "/images/projects/sci-fetch.png",
    slug: { es: "sci-fetch", en: "sci-fetch" },
    title: { es: "SciFetch", en: "SciFetch" },
    summary: {
      es: "Agente autónomo que recupera, sintetiza y presenta literatura científica procedente de múltiples fuentes académicas.",
      en: "An autonomous agent that retrieves, synthesizes, and presents scientific literature from multiple academic sources.",
    },
    problem: {
      es: "La búsqueda de literatura científica exige consultar fuentes heterogéneas, normalizar resultados y transformar numerosos artículos en una síntesis útil.",
      en: "Scientific literature research requires querying heterogeneous sources, normalizing results, and turning numerous articles into a useful synthesis.",
    },
    context: {
      es: "El sistema debía ofrecer una experiencia completa, desde una consulta en lenguaje natural hasta una vista previa web y un informe PDF descargable.",
      en: "The system needed to provide an end-to-end experience, from a natural-language query to a web preview and a downloadable PDF report.",
    },
    solution: {
      es: "Se construyó un pipeline con FastAPI y LangChain que consulta PubMed, arXiv, OpenAlex, Europe PMC y CrossRef, sintetiza los resultados con modelos de OpenAI y genera informes mediante plantillas HTML.",
      en: "A FastAPI and LangChain pipeline queries PubMed, arXiv, OpenAlex, Europe PMC, and CrossRef, synthesizes the results with OpenAI models, and generates reports from HTML templates.",
    },
    decisions: [
      {
        es: "Separar cada proveedor académico en un cliente especializado con una salida normalizada.",
        en: "Separate each academic provider into a specialized client with normalized output.",
      },
      {
        es: "Mantener el procesamiento cuando una fuente externa falla o devuelve información incompleta.",
        en: "Keep processing when an external source fails or returns incomplete information.",
      },
      {
        es: "Separar el backend FastAPI del frontend Next.js y desplegar ambos de forma independiente.",
        en: "Separate the FastAPI backend from the Next.js frontend and deploy them independently.",
      },
    ],
    implementation: {
      es: "Incluye clientes para cinco APIs científicas, orquestación y ranking de artículos, generación de HTML/PDF, API HTTP, frontend web y pruebas unitarias y de integración.",
      en: "It includes clients for five scientific APIs, article orchestration and ranking, HTML/PDF generation, an HTTP API, a web frontend, and unit and integration tests.",
    },
    outcome: {
      es: "La aplicación está desplegada públicamente y el repositorio documenta 20 pruebas con una cobertura agregada del 89 % en los módulos principales evaluados.",
      en: "The application is publicly deployed, and the repository documents 20 tests with 89% aggregate coverage across the evaluated core modules.",
    },
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "Next.js",
      "Pytest",
      "Vercel",
      "Render",
    ],
    links: [
      {
        label: { es: "Repositorio", en: "Repository" },
        href: "https://github.com/irdsn/sci-fetch",
        external: true,
      },
      {
        label: { es: "Aplicación", en: "Live application" },
        href: "https://scifetch.vercel.app",
        external: true,
      },
    ],
  },
  {
    id: "ai-sudoku-solver",
    featured: true,
    image: "/images/projects/ai-sudoku-solver.png",
    slug: { es: "ai-sudoku-solver", en: "ai-sudoku-solver" },
    title: { es: "AISudokuSolver", en: "AISudokuSolver" },
    summary: {
      es: "Pipeline autónomo que interpreta sudokus desde imágenes, los resuelve y explica su traza mediante un modelo de lenguaje.",
      en: "An autonomous pipeline that reads Sudoku puzzles from images, solves them, and explains the solving trace with a language model.",
    },
    problem: {
      es: "Resolver un sudoku desde una fotografía combina detección visual, clasificación de dígitos, razonamiento simbólico y presentación comprensible del proceso.",
      en: "Solving a Sudoku puzzle from a photograph combines visual detection, digit classification, symbolic reasoning, and a clear presentation of the process.",
    },
    context: {
      es: "El proyecto debía integrar modelos entrenados, procesamiento de imágenes y algoritmos clásicos dentro de un pipeline modular y comprobable.",
      en: "The project needed to integrate trained models, image processing, and classic algorithms within a modular and testable pipeline.",
    },
    solution: {
      es: "La imagen se rectifica y divide en 81 celdas, una CNN clasifica su contenido y un solver con backtracking, MRV y forward checking obtiene la solución antes de generar una traza y un informe.",
      en: "The image is rectified and divided into 81 cells, a CNN classifies their contents, and a backtracking solver with MRV and forward checking finds the solution before generating a trace and report.",
    },
    decisions: [
      {
        es: "Desacoplar visión, clasificación, resolución, resumen mediante LLM y reporting.",
        en: "Decouple vision, classification, solving, LLM summarization, and reporting.",
      },
      {
        es: "Entrenar el clasificador con un dataset propio de celdas segmentadas y etiquetadas manualmente.",
        en: "Train the classifier with a custom dataset of segmented and manually labeled cells.",
      },
      {
        es: "Combinar MRV y forward checking para reducir el espacio de búsqueda del solver.",
        en: "Combine MRV and forward checking to reduce the solver search space.",
      },
    ],
    implementation: {
      es: "El repositorio contiene entrenamiento y evaluación de la CNN, segmentación OpenCV, solver simbólico, generación de trazas JSON e informes Markdown, API FastAPI y una suite Pytest.",
      en: "The repository contains CNN training and evaluation, OpenCV segmentation, a symbolic solver, JSON trace and Markdown report generation, a FastAPI API, and a Pytest suite.",
    },
    outcome: {
      es: "El repositorio documenta 13 pruebas superadas y cobertura detallada de los módulos principales, además de métricas del clasificador sobre sus particiones de datos.",
      en: "The repository documents 13 passing tests and detailed coverage of its core modules, alongside classifier metrics for its dataset partitions.",
    },
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "FastAPI", "OpenAI", "Pytest"],
    links: [
      {
        label: { es: "Repositorio", en: "Repository" },
        href: "https://github.com/irdsn/ai-sudoku-solver",
        external: true,
      },
    ],
  },
  {
    id: "neuro-goalkeeper",
    featured: false,
    image: "/images/projects/neuro-goalkeeper.png",
    slug: { es: "neuro-goalkeeper", en: "neuro-goalkeeper" },
    title: { es: "NeuroGoalkeeper", en: "NeuroGoalkeeper" },
    summary: {
      es: "Simulador de entrenamiento para porteros de balonmano basado en una red neuronal implementada desde cero.",
      en: "A handball goalkeeper training simulator based on a neural network implemented from scratch.",
    },
    problem: {
      es: "Explorar cómo una red neuronal puede aprender patrones de respuesta de un portero a partir de distancia, velocidad y coordenadas de lanzamiento.",
      en: "Explore how a neural network can learn goalkeeper response patterns from shot distance, speed, and coordinates.",
    },
    context: {
      es: "El proyecto nació como Trabajo Fin de Grado en la Universidad Politécnica de Madrid y posteriormente fue modularizado como aplicación independiente.",
      en: "The project began as a bachelor thesis at Universidad Politécnica de Madrid and was later modularized as a standalone application.",
    },
    solution: {
      es: "Una red neuronal feedforward procesa datos normalizados y se integra con una interfaz Tkinter que permite entrenamientos generales, externos y personalizados.",
      en: "A feedforward neural network processes normalized data and integrates with a Tkinter interface supporting general, external, and custom training modes.",
    },
    decisions: [
      {
        es: "Implementar y aislar la propagación hacia delante, backpropagation y el bucle de entrenamiento.",
        en: "Implement and isolate forward propagation, backpropagation, and the training loop.",
      },
      {
        es: "Separar las distintas pantallas de la interfaz y generar informes persistentes por sesión.",
        en: "Separate the interface screens and generate persistent reports for each session.",
      },
    ],
    implementation: {
      es: "Incluye lógica ANN, tres modos de entrenamiento, visualización de predicciones, evolución del error, mapas de lanzamientos e informes Markdown.",
      en: "It includes ANN logic, three training modes, prediction visualization, error evolution, shot maps, and Markdown reports.",
    },
    outcome: {
      es: "El trabajo académico obtuvo una calificación de 10, fue propuesto para matrícula de honor y dispone de publicación oficial en el archivo de la UPM.",
      en: "The academic work received a grade of 10, was nominated for honors, and has an official publication in the UPM repository.",
    },
    technologies: ["Python", "NumPy", "Matplotlib", "Tkinter", "Artificial Neural Networks"],
    links: [
      {
        label: { es: "Repositorio", en: "Repository" },
        href: "https://github.com/irdsn/neuro-goalkeeper",
        external: true,
      },
      {
        label: { es: "Publicación UPM", en: "UPM publication" },
        href: "https://oa.upm.es/62850/",
        external: true,
      },
    ],
  },
  {
    id: "mongo-data-ops",
    featured: false,
    image: "/images/projects/mongo-data-ops.png",
    slug: { es: "mongo-data-ops", en: "mongo-data-ops" },
    title: { es: "MongoDataOps", en: "MongoDataOps" },
    summary: {
      es: "Toolkit modular para automatizar operaciones frecuentes de mantenimiento, transferencia y control de calidad en MongoDB.",
      en: "A modular toolkit for automating common MongoDB maintenance, transfer, and data-quality operations.",
    },
    problem: {
      es: "Las operaciones repetitivas sobre colecciones grandes requieren consistencia, control de alcance y mecanismos reutilizables de conexión, logging y procesamiento por lotes.",
      en: "Repetitive operations on large collections require consistency, scope controls, and reusable connection, logging, and batch-processing mechanisms.",
    },
    context: {
      es: "El repositorio preserva y generaliza prácticas adquiridas durante una etapa profesional de ingeniería de datos, sin incorporar datos ni lógica propietaria.",
      en: "The repository preserves and generalizes practices acquired during a data-engineering role without including proprietary data or business logic.",
    },
    solution: {
      es: "Una colección de scripts configurables cubre actualización de campos, transferencia de documentos, detección de duplicados, borrado controlado y recuentos optimizados.",
      en: "A collection of configurable scripts covers field updates, document transfers, duplicate detection, controlled deletion, and optimized counts.",
    },
    decisions: [
      {
        es: "Centralizar la conexión MongoDB con timeouts, reintentos y credenciales de entorno.",
        en: "Centralize MongoDB connections with timeouts, retries, and environment-based credentials.",
      },
      {
        es: "Aplicar procesamiento por lotes y multithreading únicamente a operaciones que pueden beneficiarse de ello.",
        en: "Apply batch processing and multithreading only to operations that can benefit from them.",
      },
      {
        es: "Advertir y hacer configurable el alcance de operaciones destructivas.",
        en: "Make the scope of destructive operations configurable and explicitly warn about them.",
      },
    ],
    implementation: {
      es: "Incluye trece scripts operativos, una conexión reutilizable con PyMongo, logging común y herramientas de análisis de duplicados sobre colecciones y ficheros JSON.",
      en: "It includes thirteen operational scripts, a reusable PyMongo connection, shared logging, and duplicate-analysis tools for collections and JSON files.",
    },
    technologies: ["Python", "MongoDB", "PyMongo", "Multithreading", "Batch processing"],
    links: [
      {
        label: { es: "Repositorio", en: "Repository" },
        href: "https://github.com/irdsn/mongo-data-ops",
        external: true,
      },
    ],
  },
] as const satisfies ReadonlyArray<CaseStudy>;
