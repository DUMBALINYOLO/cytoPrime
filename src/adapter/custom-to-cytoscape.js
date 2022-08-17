export default function customToCytoscape(customGraph) {
  const { nodes: customNodes, edges: customEdges } = customGraph;

  const cytoscapeNodes = customNodes.map(({ nodeID, text, category, type }) => {
    return {
      data: {
        id: nodeID,
        label: text,
        category: category,
        type: type
      }
    };
  });

  const cytoscapeEdges = customEdges.map(({ fromID, toID }) => {
    return {
      data: {
        source: fromID,
        target: toID
      }
    };
  });

  const cytoscapeElements = { nodes: cytoscapeNodes, edges: cytoscapeEdges };
  return cytoscapeElements;
}
