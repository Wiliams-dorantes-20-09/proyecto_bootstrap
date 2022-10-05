// Primera edición
let dblMX = 650;

 let dblMY = 450;
 let canF = document.getElementById("canFractal");
 let ctxDraw = canF.getContext("2d");
 let intMaxL = 80;
 let intMaxN = 8;
 let objRect = {
 top: dblMY - intMaxL / 2,
 bottom: dblMY + intMaxL / 2,
 left: dblMX - intMaxL / 2,
 right: dblMX + intMaxL / 2
 }
 // 0 está arriba
 // queda 1
 // 2 es el siguiente
 // 3 es correcto
 function funDraw(intN, intL, objUpRect) {
 function forTest() {
 let intR = 0;
 let intG = 0;
 
 let intB = 0;
 intR = 10 - parseInt((Math.random()) * 9.9);
 intG = 10 - parseInt((Math.random()) * 9.9);
 intB = 10 - parseInt((Math.random()) * 9.9);
 ctxDraw.fillStyle = "#" + ((intR * 10 + intR) * 10000 + (intG * 10 + intG) * 100 
+ (intB * 10 + intB)).toString();
 ctxDraw.fillRect(100, 100, 200, 300);
 };
 intL = intL * intN / intMaxN;
 let intR = 0;
 let intG = 0;
 let intB = 0;
 let dblXRand = (objUpRect.right - objUpRect.left - intL) * Math.random();
 let dblYRand = (objUpRect.bottom - objUpRect.top - intL) * Math.random();
 let objRect0 = {
 top: objUpRect.top - intL,
 bottom: objUpRect.top,
 left: objUpRect.left + dblXRand,
 right: objUpRect.left + dblXRand + intL
 };
 
 let objRect2 = {
 top: objUpRect.bottom,
 bottom: objUpRect.bottom + intL,
 left: objUpRect.left + dblXRand,
 right: objUpRect.left + dblXRand + intL
 };
 let objRect1 = {
 top: objUpRect.top + dblYRand,
 bottom: objUpRect.top + dblYRand + intL,
 left: objUpRect.left - intL,
 right: objUpRect.left
 };
 let objRect3 = {
 top: objUpRect.top + dblYRand,
 bottom: objUpRect.top + dblYRand + intL,
 left: objUpRect.right,
 right: objUpRect.right + intL
 };
 intR = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intG = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intB = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 ctxDraw.fillStyle = "#" + ((intR * 10 + intR) * 10000 + (intG * 10 + intG) * 100 + 
(intB * 10 + intB)).toString();
 
 ctxDraw.fillRect(objRect0.left, objRect0.top, objRect0.right - objRect0.left, 
objRect0.bottom - objRect0.top);
 intR = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intG = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intB = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 ctxDraw.fillStyle = "#" + ((intR * 10 + intR) * 10000 + (intG * 10 + intG) * 100 + 
(intB * 10 + intB)).toString();
 ctxDraw.fillRect(objRect1.left, objRect1.top, objRect1.right - objRect1.left, 
objRect1.bottom - objRect1.top);
 intR = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intG = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intB = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 ctxDraw.fillStyle = "#" + ((intR * 10 + intR) * 10000 + (intG * 10 + intG) * 100 + 
(intB * 10 + intB)).toString();
 ctxDraw.fillRect(objRect2.left, objRect2.top, objRect2.right - objRect2.left, 
objRect2.bottom - objRect2.top);
 intR = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intG = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 intB = 10 - parseInt((Math.random() * intL / intMaxL) * 9.9);
 ctxDraw.fillStyle = "#" + ((intR * 10 + intR) * 10000 + (intG * 10 + intG) * 100 + 
(intB * 10 + intB)).toString();
 ctxDraw.fillRect(objRect3.left, objRect3.top, objRect3.right - objRect3.left, 
objRect3.bottom - objRect3.top);
 intN--;
 if (intN > 0) {
 
 funDraw(intN, intL, objRect0);
 funDraw(intN, intL, objRect1);
 funDraw(intN, intL, objRect2);
 funDraw(intN, intL, objRect3);
 };
 };
 ctxDraw.fillRect(objRect.left, objRect.top, objRect.right - objRect.left, 
objRect.bottom - objRect.top);
 funDraw(intMaxN, intMaxL, objRect)