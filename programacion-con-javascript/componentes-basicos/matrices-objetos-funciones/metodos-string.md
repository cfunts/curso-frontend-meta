### Notas sobre Métodos de Cadenas en JavaScript

#### **Métodos de Manipulación de Cadenas**

1. **charAt()**
   - **Descripción**: Devuelve el carácter en una posición específica.
   - **Sintaxis**: `cadena.charAt(posición)`
   - **Ejemplo**: `"hola".charAt(1)` devuelve `"o"`

2. **concat()**
   - **Descripción**: Combina dos o más cadenas y devuelve una nueva cadena.
   - **Sintaxis**: `cadena1.concat(cadena2, ..., cadenaN)`
   - **Ejemplo**: `"hola".concat(" mundo")` devuelve `"hola mundo"`

3. **indexOf()**
   - **Descripción**: Devuelve el índice de la primera aparición de un valor especificado en una cadena.
   - **Sintaxis**: `cadena.indexOf(valor)`
   - **Ejemplo**: `"hola mundo".indexOf("mundo")` devuelve `5`

4. **lastIndexOf()**
   - **Descripción**: Devuelve el índice de la última aparición de un valor especificado en una cadena.
   - **Sintaxis**: `cadena.lastIndexOf(valor)`
   - **Ejemplo**: `"hola mundo mundo".lastIndexOf("mundo")` devuelve `10`

5. **split()**
   - **Descripción**: Divide una cadena en una lista ordenada de subcadenas, utilizando un separador.
   - **Sintaxis**: `cadena.split(separador)`
   - **Ejemplo**: `"hola mundo".split(" ")` devuelve `["hola", "mundo"]`

6. **toUpperCase()**
   - **Descripción**: Convierte todos los caracteres de una cadena a mayúsculas.
   - **Sintaxis**: `cadena.toUpperCase()`
   - **Ejemplo**: `"hola".toUpperCase()` devuelve `"HOLA"`

7. **toLowerCase()**
   - **Descripción**: Convierte todos los caracteres de una cadena a minúsculas.
   - **Sintaxis**: `cadena.toLowerCase()`
   - **Ejemplo**: `"HOLA".toLowerCase()` devuelve `"hola"`

Estas notas resumen los métodos más importantes para la manipulación de cadenas en JavaScript, proporcionando ejemplos prácticos de su uso.