window.onload = iniciar;

function iniciar(){

var salida = document.getElementById('comprobar');
 salida.addEventListener("click", funcion)

 var entrada_num = document.getElementById("comprobar1");
 entrada_num.addEventListener("click", funcion1) 

 var multi = document.getElementById("comprobar2");
 multi.addEventListener("click", funcion2)

 



}

function funcion(){

	var mostrar1 = document.getElementById("print");
	var mostrar = mostrar1.value;

	if( mostrar == "fillcolor('')"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}



function funcion1(){

	var mostrar1 = document.getElementById("entrada");
	var mostrar = mostrar1.value;

	if( mostrar == 'for i in range(4):'){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}

}

function funcion2(){

	var mostrar1 = document.getElementById("proceso");
	var mostrar = mostrar1.value;

	if( mostrar == 'circle(100)'){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}