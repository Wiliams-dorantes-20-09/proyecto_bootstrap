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
   var cxt2=retornarLienzo("lienzo1");
   if (cxt2)
   { 
    cxt2.beginPath(); //iniciar ruta
cxt2.strokeStyle="blue"; //color de línea
cxt2.fillStyle="green"
cxt2.lineWidth=3; //grosor de línea
cxt2.arc(55,55,45,0,2*Math.PI); //círculo completo.
cxt2.stroke();
cxt2.fill()
cxt2.beginPath(); //nueva ruta
cxt2.moveTo(155,55);
cxt2.arc(155,55,45,0,0.5*Math.PI,true); //arco de 3/4 de circunferencia
cxt2.closePath();
cxt2.stroke();
cxt2.fill();
cxt2.beginPath(); //nueva ruta
cxt2.arc(55,155,45,-30*Math.PI/180,-150*Math.PI/180,true); //otro arco
cxt2.closePath();
cxt2.stroke();
cxt2.fill();
cxt2.beginPath(); //nueva ruta
cxt2.moveTo(155,155);
cxt2.arc(155,155,45,120*Math.PI/180,270*Math.PI/180); //otro arco
cxt2.closePath();
cxt2.stroke();
cxt2.fill();
   }
}