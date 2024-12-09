//Dividir el código en funciones
console.log("Antes de init APP");           
initApp();  
console.log("Despues de init APP");


function initApp() {
    console.log("Inicializando app...");
    pedirDatosUsuario();
}
    


function pedirDatosUsuario() {
    console.log("Pidiendo datos al usuario...");
    autenticarUsuario("Papá Noel")
}


function autenticarUsuario(usuario) {
    console.log("Autenticando usuario...");
    console.log("Usuario" + usuario + "autenticado con éxito");
}