### Notas Relevantes sobre el Tipo de Dato Booleano en JavaScript

- **Tipo de Dato Booleano**: Se utiliza para verificar si una afirmación es verdadera o falsa, siendo una parte fundamental de JavaScript.
- **Usos Comunes**: Comparar valores para determinar si son iguales o no.

#### Comparaciones y Operadores

1. **Comparaciones de Números**:
   - Ejemplo: `1 < 2` retorna `true`.
   - Ejemplo: `1 > 2` retorna `false`.

2. **Operadores de Comparación**:
   - `==` (igualdad): Compara solo valores, ignora el tipo.
     - Ejemplo: `100 == "100"` retorna `true`.
   - `===` (igualdad estricta): Compara valores y tipos.
     - Ejemplo: `100 === "100"` retorna `false` porque el tipo es diferente.
   - `!=` (desigualdad): Compara solo valores.
     - Ejemplo: `1 != 1` retorna `false`.
   - `!==` (desigualdad estricta): Compara valores y tipos.
     - Ejemplo: `1 !== "1"` retorna `true` porque el tipo es diferente.

#### Asignación y Operadores de Igualdad

- **Operador de Asignación (`=`)**:
  - Utilizado para asignar un valor a una variable.
  - Ejemplo: `var score = 100` asigna el valor `100` a la variable `score`.

#### Ejemplos de Uso

- **Comparación con Doble Igualdad (`==`)**:
  - `100 == "100"`: JavaScript retorna `true` porque compara solo el valor.

- **Comparación con Igualdad Estricta (`===`)**:
  - `100 === "100"`: JavaScript retorna `false` porque compara valor y tipo.

- **Desigualdad (`!=`)**:
  - `1 != 1`: JavaScript retorna `false` porque es falso que `1` no sea igual a `1`.

- **Desigualdad Estricta (`!==`)**:
  - `1 !== "1"`: JavaScript retorna `true` porque `1` (número) no es igual a `"1"` (cadena) en valor y tipo.

#### Conclusión

- El tipo de dato Booleano solo tiene dos posibles valores: `true` y `false`.
- Es útil para realizar comparaciones y verificar condiciones en el código.
- Además de los operadores discutidos, hay otros conceptos como la precedencia y la asociatividad de los operadores, pero se omiten en esta explicación básica.