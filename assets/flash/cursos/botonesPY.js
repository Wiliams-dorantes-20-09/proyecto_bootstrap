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

    if( mostrar == "tkinter"){
        alert("esta bien el codigo")}else{
    

    alert("no esta escrito bien el codigo")
    }
}



function funcion1(){

    var mostrar1 = document.getElementById("entrada");
    var mostrar = mostrar1.value;

    if( mostrar == 'seleccion.get() == 2 :'){
        alert("esta bien el codigo")}else{
    

    alert("no esta escrito bien el codigo")
    }

}

function funcion2(){

    var mostrar1 = document.getElementById("proceso");
    var mostrar = mostrar1.value;

    if( mostrar == 'radio1.place(x=10, y=60)'){
        alert("esta bien el codigo")}else{
    

    alert("no esta escrito bien el codigo")
    }
}
