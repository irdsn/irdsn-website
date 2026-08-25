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
  iconScale?: number;
}>;

export type TechnologyGraphEdge = Readonly<{
  source: string;
  target: string;
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
  ["OpenAI", "CrewAI"],
  ["Ollama", "LangChain"],
  ["Ollama", "DeepSeek"],
  ["Ollama", "Qwen"],
  ["Hugging Face", "Python"],
  ["Hugging Face", "DeepSeek"],
  ["Hugging Face", "Qwen"],
  ["TensorFlow", "Python"],
  ["PyTorch", "Python"],
  ["Scikit-learn", "Python"],
  ["MongoDB", "Python"],
  ["Neo4j", "Python"],
  ["Milvus", "LangChain"],
  ["Pandas", "NumPy"],
  ["Pandas", "Python"],
  ["Pandas", "Matplotlib"],
  ["NumPy", "Matplotlib"],
  ["FastAPI", "Python"],
  ["LangChain", "Python"],
  ["CrewAI", "LangChain"],
  ["n8n", "FastAPI"],
  ["Docker", "AWS"],
  ["GitHub", "GitLab"],
  ["GitHub", "Docker"],
  ["GitLab", "Docker"],
  ["COBOL", "Tree-sitter"],
  ["JCL", "COBOL"],
  ["PL/I", "Tree-sitter"],
  ["Java", "Tree-sitter"],
  ["Visual Basic", "MS Excel"],
  ["MS Excel", "MS Word"],
  ["MS Excel", "MS PowerPoint"],
  ["MS Word", "MS PowerPoint"],
];

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

const technologyIconScales: Readonly<Record<string, number>> = {
  AWS: 0.84,
  DeepSeek: 1.28,
  Docker: 0.9,
  GitHub: 0.82,
  GitLab: 0.86,
  "Hugging Face": 1.24,
  LangChain: 1.22,
  Matplotlib: 1.28,
  Milvus: 1.08,
  MongoDB: 1.16,
  Neo4j: 1.24,
  NumPy: 1.22,
  OpenAI: 1.2,
  Pandas: 1.22,
  Python: 1.2,
  Qwen: 1.24,
  TensorFlow: 1.28,
  FastAPI: 1.22,
  "MS Excel": 0.86,
  "MS PowerPoint": 0.84,
  "MS Word": 0.86,
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
      iconScale: technologyIconScales[technology],
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
