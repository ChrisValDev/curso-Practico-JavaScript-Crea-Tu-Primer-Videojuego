const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);

function starGame () {
    game.fillRect(0,0,100,100); // Dibujar en el canvas
    game.clearRect(0,0,0,0); // Limpiar o borrar en el canvas

    game.font = '25px Verdana'; // Tamano y fuente de texto
    game.fillStyle = 'purple'; // Indicar color de texto
    game.textAlign = 'right'; // Alinear texto
    game.fillText('Christopher', 150, 50); // Dibujar texto e indicar posicion
}