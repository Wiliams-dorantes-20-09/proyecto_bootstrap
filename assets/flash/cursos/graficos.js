window.onload =iniciar;


function iniciar(){

	var boton = document.getElementById("comprobar");
	boton.addEventListener("click", clickboton)

	var grafic = document.getElementById("comprobar1");
	grafic.addEventListener("click", clickboton1)

	var recta = document.getElementById("comprobar2");
	recta.addEventListener("click", clickboton2)

	var col_red = document.getElementById("comprobar3");
	col_red.addEventListener("click", clickboton3)

	var circle = document.getElementById("comprobar4");
	circle.addEventListener("click", clickboton4)



}

function clickboton(){
	var g_zise = document.getElementById("zise_g");
	var mostrar = g_zise.value;

	if( mostrar == "ventana.setSize(700, 700);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}


function clickboton1(){
	var dibuja = document.getElementById("paint");
	var mostrar1 = dibuja.value;

	if( mostrar1 == "super.paint(g);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}


function clickboton2(){
	var diagonal = document.getElementById("rec_dia");
	var mostrar2 = diagonal.value;

	if( mostrar2 == "g.drawLine(100,100,500,500);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}

function clickboton3(){
	var color_red = document.getElementById("cod_red");
	var mostrar3 = color_red.value;

	if( mostrar3 == "g.setColor(Color.red);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}

function clickboton4(){
	var color_red = document.getElementById("circulo");
	var mostrar4 = color_red.value;

	if( mostrar4 == "g.fillOval(500, 400, 100, 100);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}