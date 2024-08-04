### Notas Relevantes sobre Desestructuración en JavaScript

- **Concepto de Desestructuración**:
  - Similar a copiar el formato de un texto a otro en un procesador de textos.
  - La desestructuración en JavaScript permite copiar propiedades de objetos y arrays en nuevas variables.

- **Analogía**:
  - Un objeto o un array es como una carpeta de proyecto en una computadora con varios archivos.
  - Desestructurar algo de un objeto o array es como copiar un elemento de la carpeta a otra ubicación, donde el original sigue existiendo de manera independiente.

- **Ejemplo de Desestructuración**:
  - Usar la palabra clave `let` y rodear la propiedad del objeto con llaves.
  - Ejemplo: `let { PI } = Math;` hace una copia de la propiedad `PI` del objeto `Math` y la guarda en una nueva variable `PI`.

- **Sensibilidad a Mayúsculas y Minúsculas**:
  - La desestructuración es sensible a las mayúsculas y minúsculas.
  - Ejemplo: `let { pi } = Math;` devuelve `undefined` porque no existe una propiedad `pi` en minúsculas en el objeto `Math`.

- **Confirmación de Valores**:
  - Comparar los valores y tipos de datos entre la variable desestructurada y la propiedad original usando el operador de comparación estricta (`===`).
  - Ejemplo: `PI === Math.PI` devuelve `true`.

- **Independencia de Variables Desestructuradas**:
  - Las variables desestructuradas no están conectadas a la propiedad original del objeto.
  - Cambiar el valor de la variable desestructurada no afecta la propiedad original.
  - Ejemplo: `PI = 1;` seguido de `PI === Math.PI` devuelve `false`.

- **Conclusión**:
  - La desestructuración permite extraer valores de objetos y arrays en nuevas variables independientes de sus propiedades originales.
  - Esto facilita la manipulación y el acceso a los datos en JavaScript.

Estas notas proporcionan una comprensión clara de cómo funciona la desestructuración en JavaScript y cómo se pueden manipular objetos y arrays utilizando esta técnica.