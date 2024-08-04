# Ejercicio: Prevención de errores

## Instrucciones
**Tarea 1: Codifique una declaración de función**

Necesita codificar una declaración de función llamad **aaddTwoNums**, que acepte los números **a** y **b** y los registros de consola **a + b**.

**Tarea 2: Invocar la función addTwoNums con un número y una cadena de caracteres**

Necesita invocar la función **addTwoNums** utilizando los siguientes argumentos: **5** y **"5"**.

**Tarea 3: Actualice la función addTwoNums con un bloque try...catch**

Añada los bloques try y catch dentro del cuerpo de la definición de la función. Por ahora, sólo asegúrese de que el registro de la consola de **a + b** está dentro del bloque **try**. Además, el bloque **catch** debe atrapar un error llamado **err** y, dentro del cuerpo del bloquecatch, debe registrar en la consola el valor de **err**.

**Tarea 4: Si los argumentos pasados no son números, lance un error**

Si alguno de los argumentos pasados a **addTwoNums** no son números, lanzará un error.

Concretamente, codifique un condicional con la siguiente lógica

- si el **typeof** el parámetro **a** no es igual a **'number'**, lance un nuevo **ReferenceError**. Dentro de **ReferenceError**, pase un mensaje de error personalizado de **'the first argument is not a number'**.

    else if thetypeof theb parameter is not equal to'number', throw a newReferenceError. Dentro deReferenceError, pase un mensaje de error personalizado de'the second argument is not a number'.

    else, registro de consolaa + b 

Una vez que haya completado esta tarea, todo el código dentro del bloquetry estará dentro de estas sentencias condicionales.

**Tarea 5: Actualice el bloque catch**

Dentro del bloque catch, actualice el código deconsole.log(err) aconsole.log("Error!", err).

**Tarea 6: Invocar la funciónaddTwoNums**

Invoque la funciónaddTwoNums utilizando5 y"5" como argumentos.

**Tarea 7: Añada otro registro de consola bajo la invocación de la funciónaddTwoNums**

Añada otra línea de código que registre por consola la cadena"It still works".