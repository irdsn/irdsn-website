"use client";

import Image from "next/image";
import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

import {
  technologyAreaLabels,
  technologyGraphEdges,
  technologyGraphNodes,
  type TechnologyAreaId,
} from "@/content/technology-graph";
import type { Locale } from "@/i18n/config";

type Point = Readonly<{ x: number; y: number }>;

const width = 1000;
const height = 1000;
const graphCenter = { x: width / 2, y: height / 2 } as const;
const graphRadius = 445;
const areaOrder: ReadonlyArray<TechnologyAreaId> = [
  "ai-ml",
  "data",
  "backend",
  "devops",
  "legacy",
  "productivity",
];
function createInitialPositions() {
  const mixedNodes = [...technologyGraphNodes].sort((left, right) =>
    left.label.localeCompare(right.label),
  );
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Object.fromEntries(
    mixedNodes.map((node, index) => {
      const angle = index * goldenAngle - Math.PI / 2;
      const radius = 75 + Math.sqrt(index / Math.max(1, mixedNodes.length - 1)) * 315;
      return [
        node.id,
        {
          x: graphCenter.x + Math.cos(angle) * radius,
          y: graphCenter.y + Math.sin(angle) * radius,
        },
      ];
    }),
  ) as Record<string, Point>;
}

const initialPositions = createInitialPositions();

export function TechnologyGraph({ locale }: { locale: Locale }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState(initialPositions);
  const [selectedId, setSelectedId] = useState(technologyGraphNodes[0]?.id ?? "");
  const [activeArea, setActiveArea] = useState<TechnologyAreaId | null>(null);
  const selectedNode = technologyGraphNodes.find((node) => node.id === selectedId);
  const nodeById = useMemo(() => new Map(technologyGraphNodes.map((node) => [node.id, node])), []);

  function moveNode(event: ReactPointerEvent<SVGGElement>, nodeId: string) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId) || !svgRef.current) return;
    const bounds = svgRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * width;
    const y = ((event.clientY - bounds.top) / bounds.height) * height;
    setPositions((current) => ({
      ...current,
      [nodeId]: {
        x: Math.min(width - 55, Math.max(55, x)),
        y: Math.min(height - 38, Math.max(38, y)),
      },
    }));
  }

  const copy =
    locale === "es"
      ? {
          instructions:
            "Arrastra los nodos o selecciónalos para ver dónde se aplicó cada tecnología.",
          all: "Todas las áreas",
          usedAt: "Experiencia acreditada en",
          noCompany:
            "Competencia transversal; no figura asociada a una empresa en las tablas del CV.",
          reset: "Restablecer grafo",
          graphLabel: "Grafo interactivo de tecnologías",
        }
      : {
          instructions: "Drag nodes or select one to see where each technology was applied.",
          all: "All areas",
          usedAt: "Documented experience at",
          noCompany:
            "Cross-cutting skill; it is not tied to a company in the CV technology tables.",
          reset: "Reset graph",
          graphLabel: "Interactive technology graph",
        };

  return (
    <div className="technology-graph">
      <div className="technology-graph__main">
        <p id="technology-graph-help">{copy.instructions}</p>
        <div className="technology-graph__viewport">
          <svg
            aria-describedby="technology-graph-help"
            aria-label={copy.graphLabel}
            ref={svgRef}
            role="group"
            viewBox={`0 0 ${width} ${height}`}
          >
            <defs aria-hidden="true">
              <radialGradient id="technology-glass-field" cx="34%" cy="26%" r="72%">
                <stop offset="0%" stopColor="var(--color-surface)" stopOpacity="0.84" />
                <stop offset="48%" stopColor="var(--color-accent)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="var(--color-surface)" stopOpacity="0.28" />
              </radialGradient>
              <radialGradient id="technology-glass-node" cx="30%" cy="22%" r="78%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="42%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
              </radialGradient>
              <clipPath id="technology-logo-clip">
                <circle r="30" />
              </clipPath>
            </defs>
            <circle
              aria-hidden="true"
              className="graph-field"
              cx={graphCenter.x}
              cy={graphCenter.y}
              r={graphRadius}
            />

            <g aria-hidden="true" className="graph-edges">
              {technologyGraphEdges.map((edge) => {
                const source = positions[edge.source];
                const target = positions[edge.target];
                const sourceNode = nodeById.get(edge.source);
                const targetNode = nodeById.get(edge.target);
                if (!source || !target || !sourceNode || !targetNode) return null;
                const muted =
                  activeArea && sourceNode.area !== activeArea && targetNode.area !== activeArea;
                return (
                  <line
                    className={muted ? "is-muted" : undefined}
                    key={`${edge.source}-${edge.target}`}
                    x1={source.x}
                    x2={target.x}
                    y1={source.y}
                    y2={target.y}
                  />
                );
              })}
            </g>

            {technologyGraphNodes.map((node) => {
              const point = positions[node.id];
              if (!point) return null;
              const muted = activeArea !== null && node.area !== activeArea;
              const iconSize = 56 * (node.iconScale ?? 1);
              return (
                <g
                  aria-label={`${node.label}. ${node.companies.map((company) => company.name).join(", ") || copy.noCompany}`}
                  aria-pressed={selectedId === node.id}
                  className={`graph-node graph-node--${node.area}${selectedId === node.id ? " is-selected" : ""}${muted ? " is-muted" : ""}`}
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedId(node.id);
                    }
                  }}
                  onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
                  onPointerMove={(event) => moveNode(event, node.id)}
                  role="button"
                  style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
                  tabIndex={0}
                >
                  <circle className="graph-node__glass" r="39" />
                  <circle
                    aria-hidden="true"
                    className="graph-node__highlight"
                    cx="-12"
                    cy="-14"
                    r="15"
                  />
                  <circle aria-hidden="true" className="graph-node__logo-plate" r="30" />
                  {node.icon ? (
                    <image
                      clipPath="url(#technology-logo-clip)"
                      height={iconSize}
                      href={node.icon}
                      preserveAspectRatio="xMidYMid meet"
                      width={iconSize}
                      x={-iconSize / 2}
                      y={-iconSize / 2}
                    />
                  ) : (
                    <text className="graph-node__fallback" textAnchor="middle" y="5">
                      {node.label
                        .split(/[ /-]/)
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 3)}
                    </text>
                  )}
                  <text className="graph-node__label" textAnchor="middle" y="61">
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <aside className="technology-graph__sidebar">
        <div className="technology-filter-panel">
          <p className="eyebrow">{locale === "es" ? "Filtrar por área" : "Filter by area"}</p>
          <div className="technology-graph__filters" aria-label={copy.graphLabel}>
            <button
              aria-pressed={activeArea === null}
              onClick={() => setActiveArea(null)}
              type="button"
            >
              {copy.all}
            </button>
            {areaOrder.map((area) => (
              <button
                aria-pressed={activeArea === area}
                key={area}
                onClick={() => setActiveArea(area)}
                type="button"
              >
                {technologyAreaLabels[area][locale]}
              </button>
            ))}
          </div>
        </div>
        <div className="technology-detail" aria-live="polite">
          <div>
            <p className="eyebrow">
              {selectedNode ? technologyAreaLabels[selectedNode.area][locale] : ""}
            </p>
            <h3>{selectedNode?.label}</h3>
          </div>
          <div>
            <p>{copy.usedAt}</p>
            {selectedNode?.companies.length ? (
              <ul className="technology-company-list">
                {selectedNode.companies.map((company) => (
                  <li key={company.name}>
                    <span className="technology-company-logo">
                      {/* Company logos are decorative here; the adjacent name carries the label. */}
                      <Image alt="" height={32} src={company.logo} width={56} />
                    </span>
                    {company.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{copy.noCompany}</p>
            )}
          </div>
          <button
            className="text-button"
            onClick={() => setPositions(initialPositions)}
            type="button"
          >
            {copy.reset}
          </button>
        </div>
      </aside>
    </div>
  );
}
