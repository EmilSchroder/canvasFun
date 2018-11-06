
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawCircle() {
    ctx.beginPath();
    ctx.moveTo(20,70)
    ctx.lineTo(70,20)
    ctx.lineTo(120,70)
    ctx.strokeStyle = 'red'
    // ctx.fill();
    ctx.stroke()
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawCircle();


    requestAnimationFrame(draw);
}

draw()