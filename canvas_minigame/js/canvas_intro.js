
console.log(ctx);
ctx.fillStyle = "rgb(255, 0, 0)"; //Dibuja rojo
ctx.fillRect(60, 40, 30, 30); //Hace el cuadrado


ctx.fillStyle = "#00ff00"; //Dibuja verde
ctx.fillRect(60,100,30,30); //Hace el cuadrado

ctx.fillStyle = "rgb(165, 0, 0)"; // Establece el color de relleno a rojo
ctx.beginPath(); // Comienza un nuevo camino
ctx.arc(200, 200, 50, 0, 2* Math.PI, false); // Dibuja un círculo (x, y, radio, ángulo de inicio, ángulo de fin)
ctx.fill(); // Rellena el círculo con el color establecido


