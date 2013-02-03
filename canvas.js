var canvas = document.getElementById("fractal-canvas");
var ctx = canvas.getContext('2d');
var phase = 0;
var calculatedValues = new Array(canvas.width);

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function animate() {
    //update
    phase += 0.5;
    if (phase >= 2*Math.PI)
        phase = 0;

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw stuff
    for (var x=0; x < calculatedValues.length; x++) {
        for (var y=0; y < calculatedValues[x].length; y++){
            var n = calculatedValues[x][y];

            var red = Math.floor(Math.sin(n+phase) * 127 + 128);
            var green = Math.floor(Math.sin(n+phase+2) * 127 + 128);
            var blue = Math.floor(Math.sin(n+phase+4) * 127 + 128);
            var fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';

            ctx.fillStyle = fillStyle;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    // request new frame
    requestAnimFrame(function() {
        animate();
    });
}

function Fractal() {
	"use strict";

    this.render = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var shiftX = 100+(canvas.width/2);
        var shiftY = canvas.height/2;


        for (var i = -shiftX; i <= canvas.width-shiftX; i++){
            calculatedValues[i+shiftX] = new Array(canvas.height);

            for (var j = -shiftY; j <= (canvas.height-shiftY); j++){
                var c1 = (-2+4.5)*i/canvas.width;
                var c2 = (2-4.5)*j/canvas.height;
                var x = c1;
                var y = c2;
                var n = 1;

                for (n = 1; n <= 20; n++){
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

                    calculatedValues[i+shiftX][j+shiftY] = n;
                }

                ctx.fillRect(i+shiftX, j+shiftY, 1, 1);
            }
        }
    };
}

var fractal = new Fractal();
fractal.render();
animate();