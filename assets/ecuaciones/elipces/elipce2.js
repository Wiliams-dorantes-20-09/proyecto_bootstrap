var lienzo = document.getElementById("lienzo");
		if (lienzo && lienzo.getContext) {
		var contexto = lienzo.getContext("2d");
			if (contexto) {
				    var cw = lienzo.width;
					var ch = lienzo.height;
					contexto.lineWidth = 5;
		            contexto.strokeStyle = "#00f"; 
				    var centroX = cw/2, centroY = ch/2, radioX = 100, radioY = 60, rotacion=0, ap = 0, af = 2*Math.PI, cR = true;
					contexto.ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
					contexto.stroke();
				}
		}