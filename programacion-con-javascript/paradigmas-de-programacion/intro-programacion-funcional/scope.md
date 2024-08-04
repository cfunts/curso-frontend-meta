# Scope

Aquí tienes las notas relevantes del texto sobre el alcance (scope) en JavaScript:

- **Alcance (Scope):** Define qué partes del código son accesibles y cuáles no. Determina qué variables y funciones pueden ser accedidas dentro de ciertos bloques de código.

- **Tipos de Alcance:**
  - **Global Scope:** El código fuera de cualquier función. Las variables definidas en el alcance global pueden ser accedidas desde cualquier parte del código.
  - **Local Scope o Function Scope:** El código dentro de una función. Las variables definidas dentro de una función solo son accesibles dentro de esa función.

- **Alcance de Variables:** Si una variable se define dentro de una función, su alcance es limitado a esa función. Por ejemplo, una variable `localvar` definida dentro de una función es accesible solo dentro de esa función.

- **Cadena de Alcance (Scope Chain):** Cada función mantiene una referencia a su alcance padre. Esta referencia permite que el código dentro de una función tenga acceso a variables definidas en su alcance padre, creando una cadena de alcance.

- **Analogía del Cristal de Dos Vías:** El funcionamiento del alcance en JavaScript se puede comparar con un cristal de dos vías, donde solo un lado es transparente. Similar a cómo las personas dentro de un restaurante pueden ver fuera, pero las personas fuera no pueden ver dentro, las variables en un alcance específico pueden ser accesibles dentro de ese alcance pero no fuera de él.

- **Resumen:** El alcance en JavaScript es esencial para entender la visibilidad y accesibilidad de las variables y funciones. Comprender el alcance global y local, así como la cadena de alcance, es crucial para escribir código JavaScript eficaz.

## var, let y const

### Notas relevantes sobre el texto

- **Scope y accesibilidad del código:**
  - El scope determina qué partes del código son accesibles por diferentes partes del programa.

- **Tipos de scope:**
  - **Global Scope:** Código fuera de funciones.
  - **Local Scope:** Código dentro de una función. Variables sólo accesibles en la función donde se declaran (ES5).
  - **Block Scope:** Introducido en ES6. Variables declaradas en un bloque de código sólo son accesibles dentro de ese bloque. Construido usando `let` o `const`.

- **Declaración de variables:**
  - **ES5 y `var`:**
    - `var` es muy flexible.
    - Puede usarse antes de ser declarada.
    - Se puede redeclarar la misma variable.
    - Scope de función o global si se declara fuera de una función.
  - **ES6 y `let`/`const`:**
    - Sintaxis similar a `var`, solo cambia la palabra clave.
    - **`let`:** Usar si el valor puede cambiar.
    - **`const`:** Usar si el valor nunca cambiará.
    - Variables no pueden usarse antes de ser declaradas.
    - Scope dentro del bloque, incluso en `if` y loops (`for`, `while`).

- **Consejo profesional:**
  - Usar `let` si el valor de la variable puede cambiar.
  - Usar `const` si el valor de la variable nunca cambiará.

- **Resumen del aprendizaje:**
  - Diferencias en el scope de variables al usar `var` en ES5 y `let`/`const` en ES6.
  - Importancia de entender cómo cambia el comportamiento del scope con las nuevas palabras clave en ES6 para escribir código más predecible y seguro.

## Comparación entre var, let y const

### Notas Relevantes sobre `var`, `let`, y `const` en JavaScript

#### `var` Keyword
- **Acceso antes de la inicialización**: Las variables declaradas con `var` pueden ser accedidas antes de ser inicializadas. Ejemplo:
  ```javascript
  console.log(user); // undefined
  var user;
  ```
- **Redeclaración permitida**: Se puede declarar y redeclarar la misma variable `var` sin errores.
  ```javascript
  var user = "Mary";
  var user = "Joanna";
  var user = "Mark";
  console.log(user); // "Mark"
  ```
- **Hoisting**: Las variables `var` son elevadas a la parte superior del contexto de ejecución.

#### `let` Keyword
- **Acceso antes de la declaración**: No se puede acceder a una variable `let` antes de su declaración. Produce un error de referencia.
  ```javascript
  console.log(user); // ReferenceError: Cannot access 'user' before initialization
  let user;
  ```
- **Declaración sin inicialización**: Se puede declarar una variable `let` sin asignarle un valor.
  ```javascript
  let user;
  console.log(user); // undefined
  ```
- **Redeclaración no permitida**: No se puede redeclarar una variable `let` en el mismo ámbito.
  ```javascript
  let user = "Anna";
  let user = "Mark"; // SyntaxError: Identifier 'user' has already been declared
  ```
- **Reasignación permitida**: Se puede reasignar una variable `let`.
  ```javascript
  let user = "Anna";
  user = "Mark";
  console.log(user); // "Mark"
  ```

#### `const` Keyword
- **Inicialización obligatoria**: Las variables `const` deben ser inicializadas en el momento de su declaración.
  ```javascript
  const user; // SyntaxError: Missing initializer in const declaration
  ```
- **Acceso antes de la inicialización**: No se puede acceder a una variable `const` antes de su inicialización.
  ```javascript
  console.log(user); // ReferenceError: Cannot access 'user' before initialization
  const user = "Anna";
  ```
- **Redeclaración y reasignación no permitida**: No se puede redeclarar ni reasignar una variable `const`.
  ```javascript
  const user = "Anna";
  user = "Mark"; // TypeError: Assignment to constant variable
  ```

#### Recomendaciones de Uso
- **`var` es más permisivo**: Usar `var` cuando la redeclaración y el hoisting no sean problemas.
- **`const` es el más estricto**: Usar `const` cuando no se necesita reasignar valores.
- **Elección moderna**: Usar `let` o `const` en lugar de `var` según la necesidad de reasignar o no.

### Conclusión
- **Var** es adecuado para situaciones donde la flexibilidad es necesaria.
- **Let** es útil cuando se requiere una variable mutable pero con más restricciones que `var`.
- **Const** es ideal para valores que no cambiarán.