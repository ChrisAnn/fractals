
var canvas = document.getElementById("fractal-canvas");
var ctx = canvas.getContext('2d');

function Fractal() {
	"use strict";

    this.render = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var shiftX = 100+(canvas.width/2);
        var shiftY = canvas.height/2;

        for (var i = -shiftX; i <= canvas.width-shiftX; i++){
            for (var j = -shiftY; j <= (canvas.height-shiftY); j++){
                var c1 = (-2+4)*i/canvas.width;
                var c2 = (2-4)*j/canvas.height;
                var x = c1;
                var y = c2;

                for (var n = 1; n <= 20; n++){
                    var x1=(x*x)-(y*y)+c1;
                    var y1=2*x*y+c2;
                    var r=x1*x1+y1*y1;
                    if(r > 4){
                        break;
                    }
                    x = x1;
                    y = y1;
                    var red = Math.floor(Math.sin(n) * 127 + 128);
                    var green = Math.floor(Math.sin(n+2) * 127 + 128);
                    var blue = Math.floor(Math.sin(n+4) * 127 + 128);
                    var fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
                    ctx.fillStyle = fillStyle;
                }

                ctx.fillRect(i+shiftX, j+shiftY, 1, 1);
            }
        }
    };
}

var fractal = new Fractal();
fractal.render();