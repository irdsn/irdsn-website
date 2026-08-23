import { professionalProfile } from "@/content/profile";
import type { Locale } from "@/i18n/config";

export type TechnologyAreaId = "ai-ml" | "data" | "backend" | "devops" | "legacy" | "productivity";

type TechnologyCompany = Readonly<{ name: string; logo: string }>;

export type TechnologyGraphNode = Readonly<{
  id: string;
  label: string;
  area: TechnologyAreaId;
  companies: ReadonlyArray<TechnologyCompany>;
  icon?: string;
}>;

export type TechnologyGraphEdge = Readonly<{
  source: string;
  target: string;
  crossArea?: boolean;
}>;

const technologyAreas: ReadonlyArray<
  Readonly<{ id: TechnologyAreaId; items: ReadonlyArray<string> }>
> = [
  {
    id: "ai-ml",
    items: [
      "OpenAI",
      "Ollama",
      "DeepSeek",
      "Qwen",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    id: "data",
    items: ["MongoDB", "Neo4j", "Milvus", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    id: "backend",
    items: ["Python", "Java", "FastAPI", "LangChain", "CrewAI", "n8n", "Tree-sitter"],
  },
  {
    id: "devops",
    items: ["Docker", "AWS", "GitHub", "GitLab"],
  },
  {
    id: "legacy",
    items: ["COBOL", "JCL", "PL/I"],
  },
  {
    id: "productivity",
    items: ["MS Excel", "MS Word", "MS PowerPoint", "Visual Basic"],
  },
];

const relations: ReadonlyArray<readonly [string, string]> = [
  ["OpenAI", "LangChain"],
  ["Ollama", "LangChain"],
  ["Hugging Face", "Python"],
  ["TensorFlow", "Python"],
  ["PyTorch", "Python"],
  ["Scikit-learn", "Python"],
  ["MongoDB", "Python"],
  ["Neo4j", "Python"],
  ["Milvus", "LangChain"],
  ["Pandas", "NumPy"],
  ["Pandas", "Python"],
  ["FastAPI", "Python"],
  ["CrewAI", "LangChain"],
  ["n8n", "FastAPI"],
  ["Docker", "AWS"],
  ["COBOL", "Tree-sitter"],
  ["JCL", "COBOL"],
  ["PL/I", "Tree-sitter"],
  ["Java", "Tree-sitter"],
  ["Visual Basic", "MS Excel"],
];

const areaByTechnology = new Map(
  technologyAreas.flatMap((area) => area.items.map((technology) => [technology, area.id] as const)),
);

const technologyIcons: Readonly<Record<string, string>> = {
  OpenAI: "openai.png",
  Ollama: "ollama.png",
  DeepSeek: "deepseek.png",
  Qwen: "qwen.png",
  "Hugging Face": "hugging-face.png",
  TensorFlow: "tensorflow.png",
  PyTorch: "pytorch.png",
  "Scikit-learn": "scikit-learn.png",
  MongoDB: "mongodb.png",
  Neo4j: "neo4j.png",
  Milvus: "milvus.png",
  Pandas: "pandas.png",
  NumPy: "numpy.png",
  Matplotlib: "matplotlib.png",
  "MS Excel": "excel.png",
  Python: "python.png",
  Java: "java.png",
  FastAPI: "fastapi.png",
  LangChain: "langchain.png",
  CrewAI: "crewai.png",
  n8n: "n8n.png",
  Docker: "docker.png",
  AWS: "aws.png",
  GitHub: "github.png",
  GitLab: "gitlab.png",
  "MS Word": "word.png",
  "MS PowerPoint": "powerpoint.png",
};

export const technologyGraphNodes: ReadonlyArray<TechnologyGraphNode> = technologyAreas.flatMap(
  (area) =>
    area.items.map((technology) => ({
      id: technology.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-"),
      label: technology,
      area: area.id,
      icon: technologyIcons[technology]
        ? `/images/technologies/${technologyIcons[technology]}`
        : undefined,
      companies: professionalProfile.experience
        .filter((experience) =>
          (experience.technologies as ReadonlyArray<string>).includes(technology),
        )
        .map((experience) => ({ name: experience.organization, logo: experience.logo })),
    })),
);

const nodeIdByLabel = new Map(technologyGraphNodes.map((node) => [node.label, node.id]));

export const technologyGraphEdges: ReadonlyArray<TechnologyGraphEdge> = relations.map(
  ([source, target]) => ({
    source: nodeIdByLabel.get(source) ?? source,
    target: nodeIdByLabel.get(target) ?? target,
    crossArea: areaByTechnology.get(source) !== areaByTechnology.get(target),
  }),
);

export const technologyAreaLabels: Readonly<
  Record<TechnologyAreaId, Readonly<Record<Locale, string>>>
> = {
  "ai-ml": { es: "IA y machine learning", en: "AI and machine learning" },
  data: { es: "Datos", en: "Data" },
  backend: { es: "Backend", en: "Backend" },
  devops: { es: "DevOps e infraestructura", en: "DevOps and infrastructure" },
  legacy: { es: "Sistemas legacy", en: "Legacy systems" },
  productivity: { es: "Productividad", en: "Productivity" },
};
