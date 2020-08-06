diagram = (function(){
	var $ = go.GraphObject.make;
	var diagram;
	var initDiagram = function () {
		diagram = $(go.Diagram, 
			'diagram-content', {
				initialContentAlignment: go.Spot.Center
		});
		diagram.nodeTemplate =
		$(go.Node, "Auto",  // the Shape will go around the TextBlock
		  $(go.Shape, "RoundedRectangle",
			{ strokeWidth: 0, fill: "white" },  // default fill is white
			// Shape.fill is bound to Node.data.color
			new go.Binding("fill", "color")),
		  $(go.TextBlock,
			{ margin: 8 },  // some room around the text
			// TextBlock.text is bound to Node.data.key
			new go.Binding("text", "key"))
		);
		diagram.model = new go.GraphLinksModel(
			[
			  { key: "Alpha", color: "lightblue" },
			  { key: "Beta", color: "orange" },
			  { key: "Gamma", color: "lightgreen" },
			  { key: "Delta", color: "pink" }
			],
			[
			  { from: "Alpha", to: "Beta" },
			  { from: "Alpha", to: "Gamma" },
			  { from: "Beta", to: "Beta" },
			  { from: "Gamma", to: "Delta" },
			  { from: "Delta", to: "Alpha" }
			]);
	}
	return { initDiagram };
})();