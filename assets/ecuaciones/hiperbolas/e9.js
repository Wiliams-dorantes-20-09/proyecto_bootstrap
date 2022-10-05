function retornarLienzo(x)
{
   var canvas = document.getElementById(x);
   if (canvas.getContext) 
   {
     var lienzo = canvas.getContext("2d");   
     return lienzo;
   }
   else
     return false;
}

function dibujar()
{
   var cxt=retornarLienzo("lienzo1");
   if (cxt)
   { 
    cxt.beginPath(); //iniciar ruta
cxt.strokeStyle="blue"; //color de línea
cxt.lineWidth=3; //grosor de línea
cxt.arc(55,55,45,0,2*Math.PI); //círculo completo.
cxt.stroke();
cxt.beginPath(); //nueva ruta
cxt.arc(155,55,45,0,0.5*Math.PI,true); //arco de 3/4 de circunferencia
cxt.stroke();
cxt.beginPath(); //nueva ruta
cxt.arc(55,155,45,-30*Math.PI/180,-150*Math.PI/180,true); //otro arco
cxt.stroke();
cxt.beginPath(); //nueva ruta
cxt.arc(155,155,45,120*Math.PI/180,270*Math.PI/180); //otro arco
cxt.stroke();
   }
}