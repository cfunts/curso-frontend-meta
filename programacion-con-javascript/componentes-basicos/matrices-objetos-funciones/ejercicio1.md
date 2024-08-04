# Practicar con funciones

## Tarea 1:

- Escriba una función llamada **_letterFinder_** que acepte dos parámetros: **_word_** y **_match_**.

## Tarea 2:

- Codifique un bucle 'for' dentro del cuerpo de la función. El contador del bucle for debe comenzar en cero, incrementarse en 1 en cada iteración y salir cuando el valor de la variable contador sea igual a la longitud del parámetro **_palabra_**.

## Tarea 3:

Añada una sentencia if dentro del bucle for cuya condición funcione como sigue:

1. Acceda a cada una de las letras dentro de la **_palabra_** pasada utilizando la variable contador, con **_palabra[i]_**. 

2. Compruebe si la palabra **_[i]_** actual es igual al valor de **_Coincidencia_**..

## Tarea 4:

**_consola.log_**  lo siguiente dentro del cuerpo de la sentencia if: **_console.log('Encontrado el', coincidencia, 'en', i)_**.

## Tarea 5:

Escriba la condición else. Aquí sólo tendrá que registrar en la consola lo siguiente: console.log(' **_---No se ha encontrado ninguna coincidencia en', i_**).

## Tarea 6:

Llame al **_buscador de letras_** y pásele como primer argumento la cadena **_"test"_** y como segundo argumento la cadena **_"t"_**.

Su salida debería ser la siguiente

**_Encontrada la t en 0_**

**_---No se ha encontrado coincidencia en 1_**

**_---No se encontró coincidencia en 2_**

**_Encontrada la t en 3_**