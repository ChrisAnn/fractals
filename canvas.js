
var canvas = document.getElementById("fractal-canvas");
var ctx = canvas.getContext('2d');

function Fractal() {
	"use strict"; 
    var self = this;
    var context = new webkitAudioContext();

    this.render = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var colors = [
        '#FF0000',
        '#00FF00',
        '#0000FF'
        ];

        for (var x = 0; x < canvas.width; x = x+10) {
            for (var y = 0; y < canvas.height; y = y+10){
                ctx.fillStyle = colors[x % colors.length];

                ctx.fillRect(x, y, 10, 10);
            }
        }
    };
}

var fractal = new Fractal();
fractal.render();