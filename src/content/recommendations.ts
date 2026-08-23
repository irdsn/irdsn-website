import type { RecommendationEntry } from "@/content/types";

export const recommendations = [
  {
    id: "marina-martin-hernandez",
    author: "Marina Martín Hernández",
    quote: {
      es: "Trabajar con Íñigo es un verdadero privilegio. Es un profesional completo, versátil y con una extraordinaria capacidad de aprendizaje.",
      en: "Working with Íñigo is being a real privilege. He is a complete, versatile professional with an extraordinary learning capacity.",
    },
    excerpt: true,
    sourceUrl: "https://www.linkedin.com/in/inigo-rodsan/details/recommendations/",
  },
] as const satisfies ReadonlyArray<RecommendationEntry>;
