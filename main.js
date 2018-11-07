
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

document.addEventListener('mousemove', turnChev, false)

// drawManyChevs = () => {


//     for (i=0; i < Math.floor(canvas.width/10); i++){
//         for(j=2; j < Math.floor(canvas.height/10); j++){
//             drawChev(i*11,j*11)
//         }
//     }
    

// }

function drawChev(x,y) {
    ctx.translate(x+5,y-5)
    ctx.rotate(0.01)
    ctx.translate(-x-5,-y+5)

    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+5,y-10)
    ctx.lineTo(x+10,y)
    ctx.strokeStyle = 'red'
    ctx.stroke()
}

function turnChev(e){
    let xPos = e.clientX;
    let yPos = e.clientY;

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // drawManyChevs();

    drawChev(100,100)


    requestAnimationFrame(draw);
}

draw()