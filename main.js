
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

document.addEventListener('mousemove', turnChev, false)


let xPos = 0;
let yPos = 0;
let theta = []

drawManyChevs = () => {

    let chev = 0

    // for (i=0; i < Math.floor(canvas.width/10); i++){
    //     for(j=2; j < Math.floor(canvas.height/10); j++){
    //         drawChev(i*11,j*11)
    //     }
    // }
for(let i = 1; i<5; i++){
    let j = 100
    chev++
    drawChev(i*100,j, chev)
}

}

function drawChev(x,y,chev) {
    ctx.save()
    ctx.translate(x+5,y-5)
    rotateChev(x,y, chev);
    ctx.translate(-x-5,-y+5)

    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+5,y-10)
    ctx.lineTo(x+10,y)
    ctx.strokeStyle = 'red'
    ctx.stroke()
    ctx.restore()
}

function turnChev(e){
    xPos = e.clientX;
    yPos = e.clientY; 
}

function rotateChev(x,y,chev){
    let perfectAngle = -Math.atan((x-xPos)/(y-yPos)) + Math.PI/2
    let rotSpeed = 0.01;
    // theta[chev] = 
    // console.log(perfectAngle);


            if(theta[chev]<perfectAngle){
                theta[chev] += rotSpeed
                console.log(theta[chev])
                return ctx.rotate(rotSpeed)
            } else if(theta[chev]>perfectAngle){
                theta[chev] -= rotSpeed
                return ctx.rotate(-rotSpeed)
            } else {
                return ctx.rotate(0)
            }
    


}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawManyChevs();

    // drawChev(100,100)


    requestAnimationFrame(draw);
}

draw()