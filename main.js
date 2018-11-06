
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


drawManyChevs = () => {


    for (i=0; i < Math.floor(canvas.width/10); i++){
        for(j=2; j < Math.floor(canvas.height/10); j++){
            drawChev(i*10+1,j*10+1)
        }
    }
    

}

function drawChev(x,y) {
    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+5,y-10)
    ctx.lineTo(x+10,y)
    ctx.strokeStyle = 'red'
    ctx.stroke()
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawManyChevs();


    requestAnimationFrame(draw);
}

draw()