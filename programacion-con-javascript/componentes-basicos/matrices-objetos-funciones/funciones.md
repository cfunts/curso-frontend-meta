### Notas Relevantes sobre el Texto

1. **Analogía de la Lavadora**:
   - Las funciones en JavaScript son comparadas con las configuraciones preestablecidas de una lavadora, que ejecutan un conjunto de instrucciones almacenadas sin necesidad de ajustar los parámetros cada vez.

2. **Ventajas de Usar Funciones**:
   - Permiten evitar la repetición de código (principio DRY: Don't Repeat Yourself).
   - Agrupan varias líneas de código relacionadas bajo una única etiqueta.
   - Permiten ejecutar el código tantas veces como sea necesario al invocar la función.

3. **Declaración de una Función**:
   - Se usa la palabra clave `function`, seguida de un espacio y el nombre de la función.
   - Se añaden paréntesis `()` y llaves `{}` que contienen el cuerpo de la función.
   - Ejemplo: 
     ```javascript
     function addTwoNums() {
       // código a ejecutar
     }
     ```

4. **Invocación de una Función**:
   - Declarar una función no ejecuta el código, solo define qué operaciones se deben realizar.
   - Para ejecutar el código, se debe invocar la función escribiendo su nombre seguido de paréntesis.
   - Ejemplo: `addTwoNums();`

5. **Uso de Parámetros y Argumentos**:
   - Los parámetros son variables que se definen en la declaración de la función y permiten pasar valores a la función.
   - Los argumentos son los valores reales que se pasan a la función cuando se invoca.
   - Ejemplo de función con parámetros:
     ```javascript
     function addTwoNums(a, b) {
       return a + b;
     }
     addTwoNums(10, 20); // Invocación con argumentos
     ```

6. **Flexibilidad de las Funciones**:
   - Al usar parámetros, las funciones se vuelven más flexibles y pueden aceptar cualquier valor.
   - Permiten escribir código más limpio y eficiente al ser reutilizables con diferentes valores.

7. **Resumen del Aprendizaje**:
   - Se aprendió a declarar funciones sin y con parámetros.
   - Se entendió la diferencia entre parámetros (en la declaración) y argumentos (en la invocación).
   - La importancia de dominar el uso de funciones para escribir código más eficiente y reutilizable en el desarrollo diario.