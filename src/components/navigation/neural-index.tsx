import type { Locale } from "@/i18n/config";

const nodes = [
  { id: "profile", layer: "input", x: 100, y: 250 },
  { id: "expertise", layer: "hidden", x: 355, y: 110 },
  { id: "experience", layer: "hidden", x: 355, y: 250 },
  { id: "projects", layer: "hidden", x: 355, y: 390 },
  { id: "credentials", layer: "hidden", x: 645, y: 165 },
  { id: "achievements", layer: "hidden", x: 645, y: 335 },
  { id: "contact", layer: "output", x: 900, y: 250 },
] as const;

const connections = [
  ["profile", "expertise", "+0.78"],
  ["profile", "experience", "+0.91"],
  ["profile", "projects", "+0.64"],
  ["experience", "credentials", "+0.83"],
  ["experience", "achievements", "+0.69"],
  ["expertise", "credentials", "+0.57"],
  ["expertise", "achievements", "+0.74"],
  ["projects", "credentials", "+0.62"],
  ["projects", "achievements", "+0.88"],
  ["credentials", "contact", "+0.76"],
  ["achievements", "contact", "+0.86"],
] as const;

export function NeuralIndex({ locale }: { locale: Locale }) {
  const labels =
    locale === "es"
      ? {
          description: "¿Quieres saber más sobre mí? Selecciona un nodo para ir a su sección.",
          input: "Capa de entrada",
          hidden: "Capas ocultas",
          output: "Capa de salida",
          profile: "Perfil",
          experience: "Experiencia",
          expertise: "Tecnologías",
          projects: "Proyectos",
          achievements: "Logros",
          credentials: "Formación",
          contact: "Contacto",
        }
      : {
          description: "Want to know more about me? Select a node to jump to its section.",
          input: "Input layer",
          hidden: "Hidden layers",
          output: "Output layer",
          profile: "Profile",
          experience: "Experience",
          expertise: "Technologies",
          projects: "Projects",
          achievements: "Achievements",
          credentials: "Education",
          contact: "Contact",
        };
  const nodeById = new Map(nodes.map((node) => [node.id, node]));

  return (
    <div className="neural-index">
      <p className="neural-index__hint">{labels.description}</p>
      <div className="neural-index__viewport">
        <svg aria-label={labels.description} role="navigation" viewBox="0 0 1000 500">
          <g aria-hidden="true" className="neural-index__connections">
            {connections.map(([sourceId, targetId, weight]) => {
              const source = nodeById.get(sourceId);
              const target = nodeById.get(targetId);
              if (!source || !target) return null;
              return (
                <g key={`${sourceId}-${targetId}`}>
                  <line x1={source.x} x2={target.x} y1={source.y} y2={target.y} />
                  <text
                    className="neural-index__weight"
                    x={(source.x + target.x) / 2}
                    y={(source.y + target.y) / 2 - 7}
                  >
                    {weight}
                  </text>
                </g>
              );
            })}
          </g>
          <g aria-hidden="true" className="neural-index__layer-labels">
            <text x="100" y="28" textAnchor="middle">
              {labels.input}
            </text>
            <text x="500" y="28" textAnchor="middle">
              {labels.hidden}
            </text>
            <text x="900" y="28" textAnchor="middle">
              {labels.output}
            </text>
          </g>
          <g aria-hidden="true" className="neural-index__layer-symbols">
            <text x="100" y="485" textAnchor="middle">
              i
            </text>
            <text x="500" y="485" textAnchor="middle">
              j
            </text>
            <text x="900" y="485" textAnchor="middle">
              k
            </text>
          </g>
          <g aria-hidden="true" className="neural-index__weight-symbols">
            <text x="225" y="485" textAnchor="middle">
              wᵢⱼ
            </text>
            <text x="775" y="485" textAnchor="middle">
              wⱼₖ
            </text>
          </g>
          {nodes.map((node) => (
            <a
              aria-label={labels[node.id]}
              className={`neural-index__node neural-index__node--${node.layer}`}
              href={`#${node.id}`}
              key={node.id}
            >
              <circle cx={node.x} cy={node.y} r="52" />
              <text x={node.x} y={node.y + 5} textAnchor="middle">
                {labels[node.id]}
              </text>
            </a>
          ))}
        </svg>
      </div>
    </div>
  );
}
