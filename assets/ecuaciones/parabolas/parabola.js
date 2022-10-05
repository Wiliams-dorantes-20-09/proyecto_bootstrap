const ctx = canvas.getContext("2d");

// drawScaled
ctx.setTransform(2,0,0,2,-50, -55);
drawAll();

// without scale
ctx.setTransform(1,0,0,1,-50, 0);
drawAll();

function drawCurve() {
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.moveTo(100 - 30, 30);  // start left side
    ctx.quadraticCurveTo(
        100 - 30 / 2, 100,     // controls point sets slope out from start and into center
        100, 100               // center point
    );
    ctx.quadraticCurveTo(
        100 + 30 / 2, 100,     // control point sets slope out from center and into last point
        100 + 30, 30           // last point
    );
    ctx.stroke();
}

function drawAll() {
    // points on curve
    drawPoint(100-30, 30);
    drawPoint(100, 100);
    drawPoint(100+30, 30);

    // Control points
    drawPoint(100 - 30 / 2, 100, "#00F");
    drawPoint(100 + 30 / 2, 100, "#00F");

    // Draw line through all points to show slopes
    drawLine(100-30, 30, 100 - 30 / 2, 100);
    drawLine(100 - 30 / 2, 100, 100, 100);
    drawLine(100, 100, 100 + 30 / 2, 100);
    drawLine(100 + 30 / 2, 100, 100 + 30, 30);

    // Draw curve
    drawCurve();
}




function drawPoint(x,y,col = "red") {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
}
function drawLine(x,y, x1, y1, col = "#0A08") {
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}