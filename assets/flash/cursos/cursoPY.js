window.onload = iniciar;

function iniciar(){

var salida = document.getElementById('comprobar');
 salida.addEventListener("click", funcion)

 var entrada_num = document.getElementById("comprobar1");
 entrada_num.addEventListener("click", funcion1) 

 var multi = document.getElementById("comprobar2");
 multi.addEventListener("click", funcion2)

 var con = document.getElementById("comprobar3");
 con.addEventListener("click", funcion3)
 
 var men = document.getElementById("comprobar4");
 men.addEventListener("click", funcion4)



}

function funcion(){

	var mostrar1 = document.getElementById("print");
	var mostrar = mostrar1.value;

	if( mostrar == "print"){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}


function funcion1(){

	var mostrar1 = document.getElementById("entrada");
	var mostrar = mostrar1.value;

	if( mostrar == 'num1 =float(input("Introducta el 1 numero :")'){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}

}
function funcion2(){

	var mostrar1 = document.getElementById("proceso");
	var mostrar = mostrar1.value;

	if( mostrar == 'resultado = num2 * num1'){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}
function funcion3(){

	var mostrar1 = document.getElementById("simbolo");
	var mostrar = mostrar1.value;

	if( mostrar == ','){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}
function funcion4(){

	var mostrar1 = document.getElementById("comentario");
	var mostrar = mostrar1.value;

	if( mostrar == '#'){
		alert("esta bien el codigo")}else{
	

	alert("no esta escrito bien el codigo")
	}
}