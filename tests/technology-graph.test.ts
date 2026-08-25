import { describe, expect, it } from "vitest";

import { technologyGraphEdges, technologyGraphNodes } from "@/content/technology-graph";

describe("technology graph", () => {
  it("uses unique node identifiers", () => {
    const identifiers = technologyGraphNodes.map((node) => node.id);
    expect(new Set(identifiers).size).toBe(identifiers.length);
  });

  it("only connects existing nodes", () => {
    const identifiers = new Set(technologyGraphNodes.map((node) => node.id));
    for (const edge of technologyGraphEdges) {
      expect(identifiers.has(edge.source)).toBe(true);
      expect(identifiers.has(edge.target)).toBe(true);
    }
  });

  it("connects every technology to at least one other node", () => {
    const connectedIdentifiers = new Set(
      technologyGraphEdges.flatMap((edge) => [edge.source, edge.target]),
    );
    for (const node of technologyGraphNodes) {
      expect(connectedIdentifiers.has(node.id), node.label).toBe(true);
    }
  });

  it("traces every displayed technology to at least one CV experience", () => {
    for (const node of technologyGraphNodes) {
      expect(node.companies.length, node.label).toBeGreaterThan(0);
    }
  });
});
