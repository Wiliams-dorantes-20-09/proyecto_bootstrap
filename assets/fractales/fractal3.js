var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');  

//add math methods radians and degree for conversion
Math.radians = function(degrees){
  return degrees * Math.PI / 180;
};

var depth = 9;          //tree size (how much you see -> depth)

function drawLine(x1, y1, x2, y2, brightness){
  canvasContext.moveTo(x1, y1);
  canvasContext.lineTo(x2, y2);
}
 
function drawTree(x1, y1, angle, depth){
  if (depth !== 0){
    var x2 = x1 + (Math.cos(Math.radians(angle)) * depth * 10.0);     //calculate positions of two branches
    var y2 = y1 + (Math.sin(Math.radians(angle)) * depth * 10.0);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, angle - 20, depth - 1);        //left tree, reduce depth (visibility) on every iteration
    drawTree(x2, y2, angle + 20, depth - 1);        //right tree
  }
}

canvasContext.fillStyle = 'blue';    //setup
canvasContext.lineWidth = 2;

canvasContext.beginPath();            //initial tree
drawTree(300, 500, -90, depth);
canvasContext.closePath();
canvasContext.stroke();