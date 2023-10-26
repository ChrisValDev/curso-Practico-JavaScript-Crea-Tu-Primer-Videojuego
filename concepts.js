// El "canvas" es un elemento HTML que se utiliza para dibujar gráficos y representaciones visuales en una página web utilizando JavaScript. Es parte de la especificación HTML5 y se ha convertido en una poderosa herramienta para la creación de gráficos interactivos en el navegador web.

// El elemento canvas en HTML proporciona un área rectangular en la que puedes dibujar y renderizar gráficos, imágenes, texto y otros elementos de forma dinámica utilizando JavaScript. El lienzo, o canvas, se puede considerar como un lienzo en blanco en el que puedes realizar dibujos programáticos.

// Para utilizar el canvas, primero debes obtener el contexto 2D o 3D, dependiendo de tus necesidades, mediante JavaScript. Aquí tienes un ejemplo de cómo se crea un elemento canvas y se obtiene el contexto 2D:

// codigo html
<canvas id="miCanvas" width="400" height="200"></canvas>

// codigo JavaScript
var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

// Una vez que tienes el contexto, puedes usar sus métodos, como fillRect, strokeRect, fillText, drawImage, entre otros, para dibujar gráficos en el lienzo. Esto es útil para crear gráficos personalizados, animaciones, juegos y visualizaciones de datos interactivas en una página web.

// Metodos del canvas

// El elemento <canvas> en HTML proporciona un contexto (2d o webgl) que incluye una serie de métodos y propiedades para dibujar gráficos en el lienzo. A continuación, te proporciono algunos de los métodos más comunes para el contexto 2D ("2d") que se utiliza para dibujar en el <canvas>:

// fillRect(x, y, width, height): Dibuja un rectángulo relleno en el lienzo.

// strokeRect(x, y, width, height): Dibuja un contorno de rectángulo en el lienzo.

// clearRect(x, y, width, height): Borra un rectángulo en el lienzo.

// fillText(text, x, y): Dibuja texto relleno en el lienzo.

// strokeText(text, x, y): Dibuja un contorno de texto en el lienzo.

// drawImage(image, x, y): Dibuja una imagen en el lienzo.

// beginPath(): Comienza un nuevo trazado.

// moveTo(x, y): Mueve el "lápiz" a una nueva posición sin trazar una línea.

// lineTo(x, y): Dibuja una línea desde la posición actual hasta la nueva posición.

// closePath(): Cierra el trazado actual.

// stroke(): Dibuja el contorno del trazado actual.

// fill(): Rellena el trazado actual.

// arc(x, y, radius, startAngle, endAngle, anticlockwise): Dibuja un arco.

// quadraticCurveTo(cpx, cpy, x, y): Dibuja una curva cuadrática.

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y): Dibuja una curva de Bézier.

// rotate(angle): Rota el contexto.

// translate(x, y): Translada el contexto.

// scale(x, y): Escala el contexto.

// transform(a, b, c, d, e, f): Aplica una transformación personalizada.

// save(): Guarda el estado actual del contexto.

// restore(): Restaura el estado guardado previamente.

// clearCanvas(): Puede ser un método personalizado para borrar todo el contenido del lienzo.

// Estos son solo algunos de los métodos disponibles en el contexto 2D del <canvas>. Existen muchos más métodos y propiedades que permiten realizar una amplia gama de operaciones de dibujo y transformaciones. 


// innerHeight: Esta propiedad devuelve la altura del área visible del navegador en píxeles. En otras palabras, representa la altura del área del navegador que muestra el contenido de una página web sin incluir barras de desplazamiento, barras de herramientas o cualquier otro elemento de la interfaz del navegador.

var alturaVentana = window.innerHeight;
console.log("Altura de la ventana visible: " + alturaVentana + " píxeles");

// innerWidth: Esta propiedad devuelve el ancho del área visible del navegador en píxeles. Representa el ancho del área del navegador que muestra el contenido de la página web sin incluir elementos de la interfaz del navegador.

var anchoVentana = window.innerWidth;
console.log("Ancho de la ventana visible: " + anchoVentana + " píxeles");

// Estas propiedades son particularmente útiles cuando deseas realizar tareas de diseño responsivo o interactuar con elementos en la página de acuerdo con el tamaño de la ventana del navegador. Por ejemplo, puedes utilizar estas propiedades para ajustar el diseño de tu página web, redimensionar elementos o controlar la lógica de visualización en función del tamaño de la ventana del navegador.


// setAttribute es un método en JavaScript que se utiliza para establecer o modificar atributos en un elemento HTML. Funciona de la siguiente manera:

<html>
<head>
    <title>Ejemplo de setAttribute</title>
</head>
<body>
    <p id="miParrafo">Este es un párrafo.</p>

    <script>
        // Obtener el elemento con id "miParrafo"
        var parrafo = document.getElementById("miParrafo");

        // Agregar el atributo "class" con el valor "destacado"
        parrafo.setAttribute("class", "destacado");

        // Modificar el atributo "id"
        parrafo.setAttribute("id", "nuevoId");
    </script>
</body>
</html>

// En este ejemplo, primero seleccionamos un párrafo con el id "miParrafo" y luego utilizamos setAttribute para agregar la clase "destacado" y modificar el atributo "id". Después de ejecutar este código, el párrafo se verá afectado por la clase y el atributo modificados.