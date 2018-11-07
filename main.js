
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let rotSpeed = 0

function UpSpeed(){
    rotSpeed += 0.001
}

function DownSpeed(){
    rotSpeed -= 0.001
}

drawManyChevs = () => {


    for (i=0; i < Math.floor(canvas.width/10); i++){
        for(j=2; j < Math.floor(canvas.height/10); j++){
            drawChev(i*11,j*11)
        }
    }

}



function drawChev(x,y,chev) {
    
    // console.log(chev)
    ctx.translate(x+5,y-5)
    ctx.rotate(rotSpeed)
    ctx.translate(-x-5,-y+5)

    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(x+5,y-10)
    ctx.lineTo(x+10,y)
    ctx.strokeStyle = 'red'
    ctx.stroke()
}

// function turnChev(e){
//     xPos = e.clientX;
//     yPos = e.clientY; 
// }

// function rotateChev(x,y,chev){
//     let perfectAngle = -Math.atan((x-xPos)/(y-yPos)) + Math.PI/2
//     let rotSpeed = 0.01;
    
//     // console.log(chev)
//     // console.log(perfectAngle);


//             if(theta[chev]<perfectAngle){
//                 theta[chev] += rotSpeed
//                 return ctx.rotate(rotSpeed)
//             } else if(theta[chev]>perfectAngle){
//                 theta[chev] -= rotSpeed
//                 return ctx.rotate(-rotSpeed)
//             } else {
//                 return ctx.rotate(0)
//             }
    


// }

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawManyChevs();

    // drawChev(100,100)


    requestAnimationFrame(draw);
}

draw()