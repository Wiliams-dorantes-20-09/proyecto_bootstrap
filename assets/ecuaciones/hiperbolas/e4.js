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
		cxt2.beginPath(); //inicio de ruta
cxt2.fillStyle="red"; //color de relleno rojo;
cxt2.strokeStyle="red"; //color de contorno rojo;
cxt2.moveTo(30,10); //dibujar rombo
cxt2.lineTo(50,40);
cxt2.lineTo(30,70);
cxt2.lineTo(10,40);
cxt2.fill(); //rellenar de color
cxt2.moveTo(80,10); //dibujar otro rombo
cxt2.lineTo(100,40);
cxt2.lineTo(80,70);
cxt2.lineTo(60,40);
cxt2.closePath(); //cerrar contorno
cxt2.stroke(); //visualizar contorno
cxt2.beginPath(); //iniciar otra ruta
cxt2.fillStyle="blue"; //color de relleno azul
cxt2.strokeStyle="blue"; //color de contorno azul
cxt2.moveTo(110,10); //dibujar figura reloj de arena
cxt2.lineTo(150,10);
cxt2.lineTo(110,70);
cxt2.lineTo(150,70);
cxt2.fill(); //rellenar de color
cxt2.moveTo(160,10); //otra figura reloj de arena
cxt2.lineTo(200,10);
cxt2.lineTo(160,70);
cxt2.lineTo(200,70);
cxt2.closePath(); //cerrar contorno
cxt2.stroke(); //visualizar contorno
   }
}