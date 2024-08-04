# Aquí tienes unas notas relevantes sobre el uso de literales de plantilla (template literals) en JavaScript:

1. **Introducción a los Literales de Plantilla**:
   - Los literales de plantilla fueron introducidos en ES6 como una forma alternativa de trabajar con cadenas de texto en JavaScript.
   - Se utilizan los caracteres de acento grave (backticks) `` ` `` como delimitadores en lugar de comillas simples (`'`) o dobles (`"`).

2. **Sintaxis y Uso**:
   - Un literal de plantilla permite incrustar expresiones dentro de un marcador de posición, representado por `${}`. Dentro de las llaves, el contenido se trata como JavaScript, mientras que fuera de las llaves se trata como una cadena de texto.
   - Ejemplo de interpolación de variables:
     ```javascript
     const name = "Alice";
     console.log(`Hello, ${name}!`);
     ```
     Esto imprimiría: `Hello, Alice!`.

3. **Diferencias con las Cadenas de Texto Regulares**:
   - **Interpolación de Variables**: A diferencia de las cadenas de texto regulares, los literales de plantilla permiten incrustar variables directamente sin necesidad de concatenar con el operador `+`.
   - **Multilínea**: Los literales de plantilla pueden abarcar varias líneas, lo cual no es posible con cadenas de texto delimitadas por comillas simples o dobles.
     ```javascript
     const multilineString = `This is a string
     that spans multiple
     lines.`;
     ```

4. **Evaluación de Expresiones**:
   - Los literales de plantilla permiten la evaluación de expresiones, incluso ternarias, dentro de los delimitadores `${}`.
     ```javascript
     const stars = 5;
     console.log(`${stars} stars!`); // Output: 5 stars!
     ```

5. **Casos de Uso Adicionales**:
   - **Literales de Plantilla Anidados**: Es posible anidar literales de plantilla dentro de otros literales de plantilla.
   - **Plantillas Etiquetadas**: Permiten aplicar una función a un literal de plantilla y sus partes.

Para obtener más información sobre literales de plantilla anidados y plantillas etiquetadas, consulta lecturas adicionales al final de la lección.

## Notas Relevantes sobre Template Literals en JavaScript ES6

1. **Introducción a Template Literals:**
   - Los template literals fueron introducidos en ES6.
   - Permiten crear strings más flexibles y legibles en comparación con las comillas simples o dobles de ES5.

2. **Revisando Strings en ES5:**
   - En ES5, los strings se crean con comillas simples o dobles.
   - No es posible crear strings de múltiples líneas sin causar errores.
   - Ejemplo de concatenación con `+` operador:
     ```javascript
     let noMultiLine = "no multi-line strings in ES5";
     console.log("did you know, " + noMultiLine);
     ```

3. **Limitaciones de ES5:**
   - Al intentar distribuir un string en varias líneas usando comillas simples o dobles, se produce un error de sintaxis.
   - VS Code resalta este error con texto rojo y un mensaje de "unterminated string literal".

4. **Template Literals en ES6:**
   - Utilizan el símbolo de backtick (` ` ) en lugar de comillas.
   - Permiten crear strings de múltiples líneas sin errores.
   - Sintaxis básica:
     ```javascript
     let multiLine = `This is a
     multi-line string`;
     ```

5. **Ubicación del Backtick:**
   - Generalmente se encuentra encima de la tecla Tab y a la izquierda de la tecla 1 en el teclado.

6. **Interpolación de Variables:**
   - Template literals permiten la interpolación de variables dentro de los strings.
   - Se utiliza el símbolo de dólar y las llaves (`${}`) para insertar variables.
   - Ejemplo:
     ```javascript
     let first = `Hello`;
     let second = `World`;
     let combined = `${first}, ${second}!`;
     console.log(combined); // Salida: Hello, World!
     ```

7. **Beneficios de Template Literals:**
   - Eliminan la necesidad de concatenar strings con el operador `+`.
   - Permiten el uso de comillas dentro de los strings sin conflictos.
   - Hacen que el código sea más legible y fácil de mantener.

8. **Conclusión:**
   - Los template literals mejoran la experiencia de codificación en JavaScript al permitir la creación de strings de múltiples líneas y la interpolación de variables de manera más sencilla y eficiente.