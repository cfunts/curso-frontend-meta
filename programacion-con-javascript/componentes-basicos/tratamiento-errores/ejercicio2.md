# Ejercicio: Programación defensiva

La programación defensiva consiste en asumir que todos los argumentos que recibirá una función son del tipo incorrecto, del valor incorrecto o de ambos.

En otras palabras, está asumiendo que las cosas saldrán mal y es proactivo al pensar en tales escenarios antes de que sucedan, para hacer que su función tenga menos probabilidades de causar errores debido a entradas defectuosas.

¿Cómo refactorizaría entonces la función dada a continuación teniendo en mente la programación defensiva?

Para este ejercicio, asegurémonos de que los dos argumentos que se pasan satisfacen los siguientes criterios:

- La longitud del parámetro word no puede ser inferior a 2.

- La longitud del parámetro match debe ser 1.

- El tipo de ambos parámetros word y match debe ser cadena.

Utilizará el código siguiente para completar su tarea:

ejercicio2.js

Estas son las tareas a completar:

1. Justo encima del bucle **for** en la definición de la función **letterFinder**, declare una variable llamada **condition1** y asígnele el siguiente código: **typeof(word) == 'string' && word.length >= 2**.

1. Declare una variable llamada **condition2** en la línea siguiente y asígnele y asígnele una comprobación que asegure que el tipo de **match** es una cadena Y que la longitud de la variable **match** es igual a **1**.

1. Escriba una sentencia if en la línea siguiente que compruebe que **condition1** es **true**, y **condition2** es **true**

1. Mueva el resto del cuerpo de la función a la sentencia if que escribió en el paso anterior.

1. Codifique un bloque "else" después de la condición "if" y console.log lo siguiente: **"Please pass correct arguments to the function."**.

1. Como prueba de fallo, ejecute la función **letterFinder** y pásele dos números cualesquiera como argumentos.

1. Como prueba de aprobación, ejecute la función **letterFinder** y pásela con los argumentos correctos, como: **letterFinder("cat", "c")**.