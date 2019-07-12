var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// // 1. reacangles 2.Lines 3.Arcs/Circles 4.Bezier Curves 5.Images 6.Text
// // c.fillRect(x,y, width, height);
// c.fillStyle = "#d4d4d4";
// c.fillRect(100,100,100,100);
// c.fillRect(300,100,100,100);
// c.fillRect(500,100,100,100);


// //Line
// c.beginPath();
// c.moveTo(0,500);
// c.lineTo(300,0);
// c.lineTo(500,500);
// c.lineTo(0,500);
// c.strokeStyle = "#f00";
// c.stroke();

// //Arcs/Circles
// for (var i = 0; i < 50; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x , y ,30,0,Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
// }


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "pink";
        c.stroke();
        c.fillStyle = "pink";
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = [];

for (var i = 0; i < 100; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;;
    var dx = (Math.random() - 0.5)
    //  * 8
     ;
    var dy = (Math.random() - 0.5) 
    // * 8
    ;
    var radius = 5;
    circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    // circle.update();
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();