window.onload =iniciar;


function iniciar(){

	var boton = document.getElementById("comprobar");
	boton.addEventListener("click", clickboton)

	var boton1 = document.getElementById("comprobar1");
	boton1.addEventListener("click", clickboton1)

	var boton2 = document.getElementById("comprobar2");
	boton2.addEventListener("click", clickboton2)

	var boton3 = document.getElementById("comprobar3");
	boton3.addEventListener("click", clickboton3)

	var boton3 = document.getElementById("comprobar4");
	boton3.addEventListener("click", clickboton4)


}
function clickboton(){
	var mainjava = document.getElementById("main");
	var mostrar = mainjava.value;

	if( mostrar == "public static void main(String[] args)"){
		alert("esta bien el codigo")}else{
	

	document.write("no esta escrito bien el codigo")
	}
}

function clickboton1(){
	var vartint = document.getElementById("variableint");
	var mostrar1 = vartint.value;

	if( mostrar1 == "int"){
		alert("esta bien el codigo")}else{
	

	document.write("no esta escrito bien el codigo")
	}
}

function clickboton2(){
	var var_str = document.getElementById("variable_str");
	var mostrar2 = var_str.value;

	if( mostrar2 == "string"){
		alert("esta bien el codigo")}else{
	

	document.write("no esta escrito bien el codigo")
	}
}

function clickboton3(){
	var var_doo = document.getElementById("variable_doo");
	var mostrar3 = var_doo.value;

	if( mostrar3 == "dooble"){
		alert("esta bien el codigo")}else{
	

	document.write("no esta escrito bien el codigo")
	}
}

function clickboton4(){
	var libreria = document.getElementById("import");
	var mostrar4 = libreria.value;

	if( mostrar4 == "import"){
		alert("esta bien el codigo")}else{
	

	document.write("no esta escrito bien el codigo")
	}
}

