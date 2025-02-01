let numeroSecreto = 0;
let numIntentos = 0; //para empezar a contar
let listaNumerosSorteados = [];
let numMax = 10;
function asignarTextoElemento(elemento,texto){ // elemento y texto son
    //parámetros
    let elementoHTML = document.querySelector(elemento); // es un objeto
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numIntentos);
    console.log(listaNumerosSorteados);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`¡Correcto! ¡Acertaste en ${numIntentos} ${numIntentos == 1 ? 'vez!' : 'veces!'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        //usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        numIntentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = '';
    // las dos comillas vacias es para vaciar caja
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()* numMax)+1;
    // si el némero generado está incluido en la lista, 
    // si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numMax){

        asignarTextoElemento('p', "Ya se sortearon todos los números posibles");
    } else {

        if (listaNumerosSorteados.includes(numGenerado)){
            return generarNumeroSecreto(); // recursividad
        } else {
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p',`Elige un número del 1 al ${numMax}:`);
    numeroSecreto = generarNumeroSecreto();
    numIntentos = 1;
}

function reiniciarJuego() {
    //limpiar caja, reiniciar sistema, indicar mensaje de incio
    //indicar instrucciones, genrar num aleatorio
    // abilitar botón de nuevo juego, inicializar el num de intento
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();



