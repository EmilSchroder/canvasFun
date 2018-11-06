
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let x = 100
let y = 100

function drawCircle() {
    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+5,y-10)
    ctx.lineTo(x+10,y)
    ctx.strokeStyle = 'red'
    // ctx.fill();
    ctx.stroke()
}

function drawChev(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawCircle();


    requestAnimationFrame(drawChev);
}

drawChev()