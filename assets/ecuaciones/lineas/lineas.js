/* Ejercicios con Canvas y JavaScript: líneas
 */
const ALTURA_CANVAS = 300,
	ANCHURA_CANVAS = 400;

// Obtener el elemento del DOM

const canvas = document.querySelector("#canvas");
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");
// Comenzar
contexto.beginPath();
// Grosor de línea
contexto.lineWidth = 3;
// Color de línea 
contexto.strokeStyle = "blue";
// Comenzamos en 0, 0
contexto.moveTo(0, 0);
// Hacemos una línea hasta 48, 48
contexto.lineTo(88, 88);
contexto.stroke(); // "Guardar" cambios


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "red";
contexto.moveTo(176, 0);
contexto.lineTo(92, 88);
contexto.stroke();


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "yellow";
contexto.moveTo(0, 176);
contexto.lineTo(88, 92);
contexto.stroke();

// Otra línea
contexto.beginPath();
contexto.strokeStyle = "green";
contexto.moveTo(176, 176);
contexto.lineTo(92, 92);
contexto.stroke();

// Comenzar
contexto.beginPath();
// Grosor de línea
contexto.lineWidth = 3;
// Color de línea 
contexto.strokeStyle = "red";
// Comenzamos en 0, 0
contexto.moveTo(178,0);
// Hacemos una línea hasta 48, 48
contexto.lineTo(260, 88);
contexto.stroke(); // "Guardar" cambios


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "green";
contexto.moveTo(260, 92);
contexto.lineTo(176, 176);
contexto.stroke();


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "yellow";
contexto.moveTo(352, 176);
contexto.lineTo(264, 92);
contexto.stroke();

// Otra línea
contexto.beginPath();
contexto.strokeStyle = "blue";
contexto.moveTo(352, 0);
contexto.lineTo(264, 88);
contexto.stroke();
