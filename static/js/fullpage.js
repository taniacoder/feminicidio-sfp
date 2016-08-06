$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3'],
				anchors: ['testimonios', 'estadisticas'],
				sectionsColor: ['#3D3D3D', '#FFFFFF'],
				scrollOverflow: true,
				scrollOverflowOptions: {
					scrollbars: true,
			        mouseWheel: true,
			        hideScrollbars: false,
			        fadeScrollbars: false,
			        disableMouse: true
			        }				
			});
		});
