var RevealViz = window.RevealViz || (function() {
	var viz = new Viz();

	Reveal.addEventListener('ready', function(event) {
		document.querySelectorAll('[data-graphviz]').forEach(function(container) {
			viz.renderSVGElement(container.textContent, { engine: container.getAttribute('data-graphviz') || 'dot'})
			.then(function(element) {
				container.innerHTML = '';
				container.appendChild(element);
			})
			.catch(function(error) {
				viz = new Viz();
				console.error(error);
			});						
		});
	});
})();