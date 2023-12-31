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

// La función .trim() es un método que se utiliza en JavaScript para eliminar los espacios en blanco (espacios, tabulaciones y saltos de línea) al principio y al final de una cadena de texto. Este método no afecta a los espacios en blanco dentro de la cadena, solo los que están en los extremos.
// Es importante mencionar que .trim() no modifica la cadena original, en su lugar, devuelve una nueva cadena con los espacios en blanco eliminados. Por lo tanto, debes asignar el resultado a una nueva variable o reemplazar la cadena original si deseas conservar la versión sin espacios en blanco.

var textoConEspacios = "   Hola, soy un texto con espacios en blanco.   ";
var textoSinEspacios = textoConEspacios.trim();

// Si deseas reemplazar la cadena original:
textoConEspacios = textoSinEspacios;


// La función .split() es un método que se utiliza en JavaScript para dividir una cadena de texto en un arreglo (array) de subcadenas basadas en un delimitador especificado. El resultado es un arreglo que contiene todas las partes de la cadena original que están separadas por el delimitador. A continuación, se explica cómo funciona .split():

var texto = "Este es un ejemplo de cadena de texto";
var palabras = texto.split(" ");
console.log(palabras);

// En este caso, el delimitador es un espacio en blanco, y la cadena se divide en un arreglo de palabras:
["Este", "es", "un", "ejemplo", "de", "cadena", "de", "texto"]


// setInterval es una función en JavaScript que se utiliza para ejecutar una función o un fragmento de código a intervalos regulares de tiempo. Su sintaxis básica es la siguiente:

setInterval(función, intervalo);

// función: La función que se ejecutará en cada intervalo.
// intervalo: El tiempo, en milisegundos, que debe transcurrir antes de que se ejecute la función nuevamente.
// El setInterval ejecutará la función repetidamente a intervalos regulares hasta que se cancele explícitamente o se cierre la página web que la contiene.

// Aquí tienes un ejemplo de cómo usar setInterval para imprimir "Hola, mundo" cada segundo:

function saludar() {
    console.log("Hola, mundo");
  }
  
  setInterval(saludar, 1000); // Se ejecutará la función 'saludar' cada 1000 ms (1 segundo).
  
// Es importante tener en cuenta que setInterval puede acumularse si la función que se ejecuta en cada intervalo toma más tiempo del especificado en el intervalo. Si la función toma más tiempo del especificado para ejecutarse, es posible que se produzcan múltiples llamadas superpuestas. Para evitar este problema, puedes asegurarte de que la función sea lo más eficiente posible o utilizar setTimeout para programar la próxima llamada después de que la actual haya terminado.

// setTimeout es una función en JavaScript que se utiliza para programar la ejecución de una función o un fragmento de código después de un cierto período de tiempo. Su sintaxis básica es la siguiente:

setTimeout(función, retraso);

// función: La función que se ejecutará después de que haya transcurrido el retraso especificado.
// retraso: El tiempo, en milisegundos, que debe transcurrir antes de que se ejecute la función.
// setTimeout es útil cuando deseas ejecutar una función después de un cierto tiempo o para crear retrasos en tu código. Aquí tienes un ejemplo de cómo usar setTimeout para mostrar un mensaje después de 2 segundos:

function mostrarMensaje() {
    console.log("Este mensaje se mostrará después de 2 segundos.");
  }
  
  setTimeout(mostrarMensaje, 2000); // Se ejecutará 'mostrarMensaje' después de 2000 ms (2 segundos).

// Ten en cuenta que setTimeout se ejecutará una sola vez, y la función especificada se ejecutará después de que haya transcurrido el retraso especificado. Si deseas ejecutar una función repetidamente con intervalos regulares, puedes usar setInterval
// Es importante tener en cuenta que el tiempo especificado en setTimeout no es garantía de que la función se ejecutará exactamente después de ese período. Puede haber un pequeño desfase debido a la carga del sistema y otros factores, pero en general, setTimeout es una forma efectiva de programar tareas para su ejecución futura en JavaScript.

// clearInterval es una función en JavaScript que se utiliza para detener la ejecución de una función que se está ejecutando repetidamente con setInterval. Permite cancelar el intervalo creado por setInterval. Su sintaxis es la siguiente:

clearInterval(identificador);

// identificador: El valor devuelto por setInterval al crear el intervalo que deseas detener.
// Cuando ejecutas clearInterval con el identificador del intervalo, se detiene la ejecución de la función que se estaba ejecutando periódicamente a través de setInterval. Aquí tienes un ejemplo:

function mostrarMensaje() {
    console.log("Este mensaje se mostrará cada segundo.");
  }
  
  const intervalID = setInterval(mostrarMensaje, 1000);
  
  // Después de 5 segundos, detenemos la ejecución del intervalo.
  setTimeout(() => {
    clearInterval(intervalID);
    console.log("Intervalo detenido después de 5 segundos.");
  }, 5000);

// En este ejemplo, hemos creado un intervalo que llama a la función mostrarMensaje cada segundo con setInterval. Luego, después de 5 segundos, utilizamos clearInterval para detener la ejecución periódica de la función. Una vez que clearInterval se llama con el identificador del intervalo, la función mostrarMensaje dejará de ejecutarse en intervalos de 1 segundo.

// clearInterval es útil cuando necesitas detener un proceso que se está ejecutando en segundo plano de manera repetitiva, como animaciones, actualizaciones automáticas de contenido, o cualquier tarea que se ejecute con setInterval.

// localStorage

// localStorage es un objeto de almacenamiento en el navegador web que permite a las aplicaciones web almacenar datos de manera persistente en la máquina del usuario. Los datos almacenados en localStorage persisten incluso después de que el usuario cierre su navegador y apague su computadora. Esto lo hace útil para almacenar preferencias de usuario, configuraciones, datos de sesión, y más.

// El uso de localStorage es bastante sencillo. Puedes guardar y recuperar datos en forma de pares clave-valor. Aquí hay una descripción básica de cómo funciona:

// Almacenar datos en localStorage:
// Para guardar datos en localStorage, utilizas el método setItem(key, value):

localStorage.setItem('nombre', 'Juan');

// Esto almacena el valor "Juan" bajo la clave "nombre" en localStorage. Los valores en localStorage son siempre almacenados como cadenas de texto.

// Recuperar datos de localStorage:
// Para recuperar datos almacenados, utilizas el método getItem(key):

const nombre = localStorage.getItem('nombre');
console.log(nombre); // Imprimirá "Juan"

// En este caso, nombre contendrá el valor "Juan" que previamente se almacenó en localStorage bajo la clave "nombre".

// Modificar datos en localStorage:
// Puedes actualizar el valor de un elemento en localStorage simplemente almacenando un nuevo valor bajo la misma clave:

localStorage.setItem('nombre', 'Ana'); // Actualiza el valor de 'nombre' a "Ana"

// Eliminar datos de localStorage:
// Para eliminar un elemento de localStorage, utilizas el método removeItem(key):

localStorage.removeItem('nombre'); // Elimina la clave "nombre" y su valor asociado

// Limpiar todo el localStorage:
// Puedes eliminar todos los elementos almacenados en localStorage utilizando el método clear():

localStorage.clear(); // Elimina todos los datos almacenados en localStorage

// Es importante tener en cuenta que los datos almacenados en localStorage están limitados por el dominio. Esto significa que los datos almacenados en localStorage solo son accesibles para las páginas del mismo dominio que los almacenaron, por razones de seguridad.

// Ten en cuenta que localStorage tiene una capacidad limitada, que varía según el navegador y puede oscilar entre 5-10 MB. Por lo tanto, es importante no abusar de su uso y ser consciente de las limitaciones de almacenamiento.