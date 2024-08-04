# Bucles `for...of` y Objetos

- **Limitaciones del `for...of`**:
  - El bucle `for...of` no puede iterar directamente sobre objetos porque los objetos no son iterables.

- **Iteración sobre Arrays**:
  - Los arrays son iterables, por lo que el `for...of` puede utilizarse para recorrer arrays.

- **Métodos Incorporados**:
  - **`Object.keys(objeto)`**: Devuelve un array con las claves (propiedades) del objeto.
  - **`Object.values(objeto)`**: Devuelve un array con los valores de las propiedades del objeto.
  - **`Object.entries(objeto)`**: Devuelve un array de arrays, donde cada sub-array contiene una clave y su valor correspondiente del objeto.

- **Uso Práctico**:
  - Puedes usar los métodos `Object.keys()`, `Object.values()`, y `Object.entries()` para obtener arrays que representan las claves, valores, o ambos, respectivamente, y luego usar `for...of` para iterar sobre esos arrays.

- **Ejemplo de Iteración**:
  - Para recorrer las propiedades de un objeto, primero conviértelo en un array usando uno de los métodos anteriores. Luego, puedes usar `for...of` para iterar sobre este array.

- **Acceso Dinámico**:
  - Se puede acceder a las propiedades del objeto dinámicamente usando notación de corchetes `objeto[clave]`, donde `clave` puede ser una variable que contiene el nombre de la propiedad.

- **Práctica y Aplicación**:
  - Se muestra un ejemplo de cómo asignar aleatoriamente una clave a una variable y acceder a los valores de un objeto usando esa clave.

Estos puntos te proporcionan una comprensión de cómo puedes usar el `for...of` en combinación con métodos incorporados para iterar sobre las propiedades de un objeto.

Aquí tienes unas notas relevantes del texto sobre las diferencias entre los bucles `for-in` y `for-of` en JavaScript cuando se aplican a objetos:

1. **Objeto de Ejemplo**:
   - Se define un objeto `car` con las propiedades `engine`, `steering` y `speed`.
   - Se crea un objeto `sportsCar` que hereda las propiedades del objeto `car` usando `Object.create`.
   - La propiedad `speed` de `sportsCar` se establece en `fast`.

2. **Bucles Presentados**:
   - **`for-in` Loop**:
     - Utiliza `for (prop in sportsCar)` para iterar sobre todas las propiedades del objeto, incluyendo las heredadas del prototipo.
     - Puede mostrar propiedades adicionales del prototipo, como `engine` y `steering`, además de las propias del objeto.
     - Considerado poco fiable cuando solo se desean las propiedades del objeto y no del prototipo.
   
   - **`for-of` Loop**:
     - Utiliza `for (prop of Object.keys(sportsCar))` para iterar sobre las claves del objeto.
     - Solo itera sobre las propiedades propias del objeto, ignorando las heredadas del prototipo.
     - Considerado más fiable para obtener solo las propiedades específicas del objeto.

3. **Resultados del Código**:
   - **`for-in` Loop**: 
     - Muestra propiedades del objeto y su prototipo (`speed`, `engine`, `steering`).
   - **`for-of` Loop**: 
     - Muestra solo las propiedades propias del objeto (`speed`).

4. **Resumen**:
   - El `for-in` loop itera sobre las propiedades del objeto y del prototipo.
   - El `for-of` loop itera solo sobre las propiedades propias del objeto.

Estas diferencias son importantes para elegir el bucle adecuado dependiendo de si necesitas solo las propiedades del objeto o también las heredadas del prototipo.