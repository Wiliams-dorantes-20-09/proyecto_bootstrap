window.onload =iniciar;


function iniciar(){

	var visible = document.getElementById("comprobar");
	visible.addEventListener("click", clickboton)

	var instancia = document.getElementById("comprobar1");
	instancia.addEventListener("click", clickboton1)

	var b_color = document.getElementById("comprobar2");
	b_color.addEventListener("click", clickboton2)

	var radio = document.getElementById("comprobar3");
	radio.addEventListener("click", clickboton3)
}


function clickboton(){
	var mostrarr = document.getElementById("win_visible");
	var mostrar = mostrarr.value;

	if( mostrar == "this.setSize(500, 500);"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}

function clickboton1(){
	var parametro = document.getElementById("instan_met");
	var mostrar = parametro.value;

	if( mostrar == "Ventana v1 = new Ventana ();"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}

function clickboton2(){
	var colors = document.getElementById("back_color");
	var mostrar = colors.value;

	if( mostrar == "panel.setBackgroung(new Color(160, 212, 141));"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}

function clickboton3(){
	var boton = document.getElementById("instancia_radio");
	var mostrar = boton.value;

	if( mostrar == "ButtonGroup grupoRadio = new ButtonGroup();"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}