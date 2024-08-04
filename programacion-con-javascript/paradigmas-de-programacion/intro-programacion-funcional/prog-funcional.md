# Programación funcional:

- **Lenguaje Formal vs. Lenguaje Colloquial**: El texto compara el lenguaje formal (como en conferencias y en el ámbito legal) con el lenguaje coloquial usado en la vida diaria, destacando que ambos cumplen la misma función de comunicación.

- **Paradigmas de Programación**: Se mencionan dos paradigmas de programación comúnmente utilizados: 
  - **Programación Funcional (FP)**: Se enfoca en separar los datos de las funciones. Los datos existen fuera de las funciones, y estas reciben valores (argumentos), realizan operaciones y devuelven resultados.
  - **Programación Orientada a Objetos (OOP)**: Combina datos y funciones en objetos. Se tratará más adelante.

- **Ejemplo de Programación Funcional**:
  - **Declaración de Variables**: Se definen las variables `currencyOne`, `currencyTwo`, y `exchangeRate`, usando el estilo CamelCase.
  - **Función `convertCurrency`**: Acepta dos parámetros (`amount` y `rate`), multiplica estos valores y devuelve el resultado.
  - **Uso de la Función**: La función `convertCurrency` se utiliza para actualizar el valor de `currencyTwo` con el resultado de la conversión de divisas, utilizando los valores de `currencyOne` y `exchangeRate`.
  - **Prueba del Código**: Se imprime el valor de `currencyTwo` en la consola, mostrando el resultado de la operación.

- **Conceptos Clave**:
  - En la programación funcional, los datos y funciones están claramente diferenciados.
  - Se enfatiza la importancia de pasar los argumentos correctos a las funciones para obtener los resultados esperados.

Estas notas destacan la diferencia entre paradigmas de programación y ofrecen una introducción práctica a la programación funcional mediante un ejemplo de conversión de divisas.

## Tres conceptos clave en programación funcional:

1. **Funciones de Primera Clase:**
   - **Definición:** En los lenguajes de programación funcional, las funciones son tratadas como ciudadanos de primera clase. Esto significa que las funciones pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores desde otras funciones.
   - **Ejemplo:** En JavaScript, puedes hacer algo como esto:
     ```javascript
     function add(x, y) {
       return x + y;
     }
     
     const operation = add; // Asignar una función a una variable
     console.log(operation(2, 3)); // Usar la variable para llamar a la función
     ```

2. **Funciones de Orden Superior:**
   - **Definición:** Las funciones de orden superior son aquellas que pueden tomar otras funciones como argumentos o devolver funciones como resultados. Esto permite la creación de funciones más abstractas y flexibles.
   - **Ejemplo:** Un ejemplo clásico es la función `map`, que aplica una función a cada elemento de una lista:
     ```javascript
     const numbers = [1, 2, 3, 4];
     const doubled = numbers.map(x => x * 2); // map toma una función como argumento
     console.log(doubled); // [2, 4, 6, 8]
     ```

3. **Funciones Puras y Efectos Secundarios:**
   - **Funciones Puras:** Son aquellas que, para un mismo conjunto de argumentos, siempre retornan el mismo resultado y no tienen efectos secundarios. Esto significa que no alteran ningún estado fuera de la función ni dependen de ningún estado externo.
   - **Ejemplo de Función Pura:** 
     ```javascript
     function square(x) {
       return x * x;
     }
     ```
     La función `square` es pura porque siempre devolverá el mismo resultado para un valor dado de `x` y no afecta ningún estado externo.
   - **Efectos Secundarios:** Son cambios que una función puede hacer fuera de su ámbito local, como modificar una variable global, imprimir en la consola, o escribir en un archivo. Las funciones que tienen efectos secundarios no son puras.
   - **Ejemplo de Función con Efectos Secundarios:**
     ```javascript
     let count = 0;
     function increment() {
       count += 1; // Modifica una variable externa
     }
     ```

Estos conceptos son fundamentales en la programación funcional y ayudan a escribir código más modular, predecible y fácil de mantener.