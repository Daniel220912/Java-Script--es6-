//Traer una referencia del
//  objeto (elemento)canvas
const canvas = document.getElementById("mycanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const GAME_W =640;           
const Game_H = 360;

const enemy = {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color:"red",
    speedY:1,
};

function update() {
    //Mover el enemy
    enemy.y += enemy.speedY;
    //Chequea la colision con el borde inferior
    if (enemy.y + enemy.h >= Game_H) {
        enemy.speedY = enemy.speedY * -1;
        enemy.y = Game_H - enemy.h; //Forzamos para que no se salga del cuadro
    }else if(enemy.y <=0){
           //Chequea la colision con el borde superior
        enemy.y = 0;
        enemy.speedY = enemy.speedY * -1;
       
    }
    // console.log(enemy);
    
}

function draw() {
    ctx.clearRect(0,0,GAME_W, Game_H);
    ctx.fillStyle = enemy.color; //color rojo
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h); //Añade lo que esta dentro de enemy  
}       




setInterval(function () {
    draw(); //Dibuja el cuadrado
    update(); //Update es enemy.y= 100 y enemy.speedY =1.
}, 0);//Tiempo en milisegundos que quieres(0)