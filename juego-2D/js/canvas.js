const canvas = document.getElementById("mycanvas"); //SIRVE PARA ENLAZAR EL CANVAS
/**
 * @type {CanvasRenderingContext2D}  //AYUDA PARA AUTOCOMPLETAR
 */
const ctx = canvas.getContext("2d");


let x = canvas.width / 2; //ANCHO PELOTA
let y = canvas.height - 30; //ALTO PELOTA
let dx = 2;
let dy = -2;
let ballRadius = 10; //TAMAÑO PELOTA
let paddleHeight = 10; //PALETA PARA LA PELOTA
let paddleWidth = 75; //PALETA PARA LA PELOTA
let paddleX = (canvas.width - paddleWidth) / 2;//PALETA PARA LA PELOTA
let rightPressed = false; //VARIABLE PARA BOTON PULSADO
let leftPressed = false; //VARIABLE PARA BOTON PULSADO
let brickRowCount = 3; //VARIABLE PARA LADRILLOS
let brickColumnCount = 5; //VARIABLE PARA LADRILLOS
let brickWidth = 75; //VARIABLE PARA LADRILLOS
let brickHeight = 20; //VARIABLE PARA LADRILLOS
let brickPadding = 10; //VARIABLE PARA LADRILLOS
let brickOffsetTop = 30; //VARIABLE PARA LADRILLOS
let brickOffsetLeft = 30; //VARIABLE PARA LADRILLOS 
let bricks =[];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] =[];
    for (r = 0; r <brickRowCount; r++) {
        bricks [c] [r] = { x: 0, y: 0};        
    }
}
   
//PELOTA DE AQUI A 
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
//AQUI

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (x + dx > canvas.width -ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }//REBOTA EN LAS PAREDES

    if (y + dy < ballRadius){
        dy = -dy;
    } 
    else if(y + dy > canvas.height - ballRadius){
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
         alert("HAS PERDIDO!!");
        document.location.reload();
        } //SI TOCA EL SUELO PIERDES
    }

  
    x += dx;
    y += dy;

    drawBricks();
}

function drawPaddle(){ //PALETA DE ABAJO
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

document.addEventListener("keydown", keyDownHandler, false); //EVENTO PARA CUANDO PULSES EL TECLADO
document.addEventListener("keyup", keyUpHandler, false); //EVENTO PARA CUANDO PULSES EL TECLADO

function keyDownHandler(e) {
    if (e.keyCode == 39) { //FLECHA DERECHA
        rightPressed = true;
    } 
    else if (e.keyCode == 37) { //FLECHA IZQUIERDA
        leftPressed = true;
    }
}

function keyUpHandler(e) { //TECLAS
    if (e.keyCode == 39) {
        rightPressed = false;
    }
     else if (e.keyCode == 37){
        leftPressed = false;
    }
     

}

function drawBricks() { //BLOQUES
    for (c = 0; c < brickColumnCount; c++){
        for (r = 0; r < brickRowCount; r++) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft; // POSICION A DIBUJAR EL LADRILLO
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks [c] [r] .x  = brickX; 
        bricks [c] [r] .y  = brickY; 
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath(); 
       }
    }
}

function collisionDetection() { //CHOQUE CONTRA LADRILLOS
    for (c = 0; c < brickColumnCount; c++){
        for  (r = 0; r < brickRowCount; r++){
            const b = bricks [c] [r]; //calculos
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                dy = -dy;
            }
        }
    }
}



setInterval(draw, 10); //DRAW SE LLAMARÁ CADA 10 MILISEGUNDOS


// //CUADRADO AZUL DE AQUI A
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();
// //AQUI

// //CIRCULO ROJO DE AQUI A
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI *2, false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();
// //AQUI


// //RECTANGULO CASI TRANSPARENTE DE AQUI A 
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();
// //AQUI


