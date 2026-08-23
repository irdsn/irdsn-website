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
  ["profile", "expertise"],
  ["profile", "experience"],
  ["profile", "projects"],
  ["experience", "credentials"],
  ["experience", "achievements"],
  ["expertise", "credentials"],
  ["expertise", "achievements"],
  ["projects", "credentials"],
  ["projects", "achievements"],
  ["credentials", "contact"],
  ["achievements", "contact"],
] as const;

export function NeuralIndex({ locale }: { locale: Locale }) {
  const labels =
    locale === "es"
      ? {
          description: "¿Quieres saber más sobre mí? Selecciona un nodo para ir a su sección.",
          input: "Entrada",
          hidden: "Capas de conocimiento",
          output: "Salida",
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
          input: "Input",
          hidden: "Knowledge layers",
          output: "Output",
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
            {connections.map(([sourceId, targetId]) => {
              const source = nodeById.get(sourceId);
              const target = nodeById.get(targetId);
              if (!source || !target) return null;
              return (
                <line
                  key={`${sourceId}-${targetId}`}
                  x1={source.x}
                  x2={target.x}
                  y1={source.y}
                  y2={target.y}
                />
              );
            })}
          </g>
          <g aria-hidden="true" className="neural-index__layer-labels">
            <text x="100" y="30" textAnchor="middle">
              {labels.input}
            </text>
            <text x="480" y="30" textAnchor="middle">
              {labels.hidden}
            </text>
            <text x="870" y="30" textAnchor="middle">
              {labels.output}
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
