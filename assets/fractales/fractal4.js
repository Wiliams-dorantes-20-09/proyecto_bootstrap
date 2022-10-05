var board = document.getElementById( "board" );
board.width = 1000;
board.height = 1000;
var ctx = board.getContext( "2d" );
function circFrac ( x, y, r )
{
if ( r < 1 ) return;
 
 /* The moveTo function is called here because otherwise
 a line will be drawn from the endpoint of one arc
 to the starting point of the next.
 moveTo moves to the new starting point without
 drawing a line. The starting point is r units to the
 right of (x, y) when the starting angle is 0, as here. */
 ctx.moveTo( x + r, y );
 /* Draw an circle centered at (x,y) with radius r. */
 ctx.arc( x, y, r, 0, Math.PI * 2 );
 
 /* Divide r by 2. */ 
 r /= 2;
 
 circFrac( x, y - r, r );
 circFrac( x, y + r, r );
}
/* start new path */
ctx.beginPath();
circFrac( 200, 200, 199 );
/* set pen/drawing properties */
ctx.lineWidth = 3;
ctx.strokeStyle = "blue";

/* draw path */
ctx.stroke();