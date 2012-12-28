
var canvas = document.getElementById("fractal-canvas");
var ctx = canvas.getContext('2d');

function Fractal() {
	"use strict"; 
    var self = this;
    var context = new webkitAudioContext();

    this.render = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 1; i <= 300; i++){
            for (var j = 1; j <= 150; j++){
                var c1 = (-2+4)*i/300;
                var c2 = (2-4)*j/300;
                var x = c1;
                var y = c2;

//                console.log("c1 " + c1);

                for (var n = 1; n <= 10; n++){
                    var x1=(x*x)-(y*y)+c1;
                    var y1=2*x*y+c2;
                    var r=x1*x1+y1*y1;
                    if(r > 4){
                        console.log("break! " + r + " i: " + i + " j: " + j);
                        break;
                    }
                    x = x1;
                    y = y1;
                    var fillStyle = 'rgb(' + (n*10) + ',0,0)';
                    ctx.fillStyle = fillStyle;
                }

//                console.log("Draw!");
//                console.log(fillStyle);
                ctx.fillRect(i, j, 1, 1);
                ctx.fillRect(i, 300-j, 1, 1);
            }
        }
    };
}

var fractal = new Fractal();
fractal.render();