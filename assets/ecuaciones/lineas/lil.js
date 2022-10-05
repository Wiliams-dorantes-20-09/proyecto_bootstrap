ejercicio1();
function ejercicio1(){
  ej1=document.getElementById("lienzo1"); 
  lienzo1=ej1.getContext("2d");
  lienzo1.lineWidth=1;
  lienzo1.strokeStyle = '#000'; 

//EJEX
  lienzo1.beginPath(); 
  lienzo1.moveTo(150,0); 
  lienzo1.lineTo(150,300);
  lienzo1.stroke(); 
  lienzo1.closePath(); 
//EJE Y
  lienzo1.beginPath(); 
  lienzo1.moveTo(0,150);
  lienzo1.lineTo(300,150);
  lienzo1.stroke();
  lienzo1.closePath();

  //EJEX
  lienzo1.beginPath(); 
  lienzo1.moveTo(150,0); 
  lienzo1.lineTo(0,150);
  lienzo1.stroke(); 
  lienzo1.closePath(); 
//EJE Y
  lienzo1.beginPath(); 
  lienzo1.moveTo(0,150);
  lienzo1.lineTo(150,300);
  lienzo1.stroke();
  lienzo1.closePath();


  //EJEX
  lienzo1.beginPath(); 
  lienzo1.moveTo(150,0); 
  lienzo1.lineTo(300,150);
  lienzo1.stroke(); 
  lienzo1.closePath(); 
//EJE Y
  lienzo1.beginPath(); 
  lienzo1.moveTo(300,150);
  lienzo1.lineTo(150,300);
  lienzo1.stroke();
  lienzo1.closePath();
 }