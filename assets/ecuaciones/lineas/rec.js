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
   var lienzo=retornarLienzo("lienzo1");
   if (lienzo)
   { 
		lienzo.fillRect(10,10,50,40);//dibujamos un rectángulo.
		lienzo.fillStyle="green"; //cambiamos color de relleno a verde.
		lienzo.fillRect(70,10,50,40); //otro rectángulo a la derecha.
		lienzo.fillStyle="red"; //cambiamos color de relleno a rojo.
		lienzo.fillRect(130,10,50,40); //otro rectángulo a la derecha.
		lienzo.strokeRect(10,60,50,40); //dibujamos un rectángulo, sólo el contorno.
		lienzo.strokeStyle="blue"; //cambiamos el color de contorno a azul.
		lienzo.strokeRect(70,60,50,40); //contorno de rectángulo.
		lienzo.strokeStyle="fuchsia"; //cambiamos color contorno a fucsia.
		lienzo.strokeRect(130,60,50,40); //contorno de rectángulo.
   }
}