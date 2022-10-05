const ALTURA_CANVAS = 200,
	ANCHURA_CANVAS = 400;

// Obtener el elemento del DOM
const canvas = document.querySelector("#canvas");
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");
// Estilo de dibujo
// Grosor de línea
contexto.lineWidth = 5;
// Color de línea
contexto.strokeStyle = "#212121";
// Color de relleno
contexto.fillStyle = "#81C784";
// Las variables indican el nombre de cada argumento para
// la función ellipse
let x = 100,
	y = 100,
	radioX = 50,
	radioY = 80,
	// Rotación expresada en radianes,
	// que puedes obtener dividiendo
	// Math.PI. Por ejemplo, para una
	// elipse "horizontal" la rotación
	// debería estar en Math.PI / 2
	rotacion = 0,
	anguloInicio = 0,
	anguloFin = Math.PI * 2;
contexto.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
// Hacemos que se dibuje
contexto.stroke();
// Lo rellenamos
contexto.fill();