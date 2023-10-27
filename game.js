const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);

function starGame () {
    game.fillRect(0,0,100,100); // Dibujar en el canvas
    game.clearRect(); // Limpiar o borrar en el canvas
}