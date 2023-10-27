const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);

function starGame () {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;

    console.log({canvasSize, elementsSize})

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);        
    }

    // game.fillRect(0,0,100,100); // Dibujar en el canvas
    // game.clearRect(0,0,0,0); // Limpiar o borrar en el canvas

    // game.font = '25px Verdana'; // Tamano y fuente de texto
    // game.fillStyle = 'purple'; // Indicar color de texto
    // game.textAlign = 'right'; // Alinear texto
    // game.fillText('Christopher', 150, 50); // Dibujar texto e indicar posicion
}