### Notas sobre el Objeto Math en JavaScript

#### **Constantes Numéricas**

1. **PI**: 
   - `Math.PI` 
   - Valor aproximado: 3.14159

2. **Constante de Euler**: 
   - `Math.E` 
   - Valor aproximado: 2.718

3. **Logaritmo Natural de 2**: 
   - `Math.LN2` 
   - Valor aproximado: 0.693

#### **Métodos de Redondeo**

1. **Redondeo hacia arriba**:
   - `Math.ceil()`
   - Ejemplo: `Math.ceil(4.2)` devuelve `5`

2. **Redondeo hacia abajo**:
   - `Math.floor()`
   - Ejemplo: `Math.floor(4.8)` devuelve `4`

3. **Redondeo al entero más cercano**:
   - `Math.round()`
   - Redondea hacia arriba si el decimal es 0.5 o superior, de lo contrario, redondea hacia abajo.
   - Ejemplo: `Math.round(4.5)` devuelve `5`, `Math.round(4.4)` devuelve `4`

4. **Recorte del decimal**:
   - `Math.trunc()`
   - Deja solo la parte entera.
   - Ejemplo: `Math.trunc(4.9)` devuelve `4`

#### **Métodos Aritméticos y de Cálculo**

1. **Potencia**:
   - `Math.pow(base, exponente)`
   - Ejemplo: `Math.pow(2, 3)` devuelve `8`

2. **Raíz cuadrada**:
   - `Math.sqrt(número)`
   - Ejemplo: `Math.sqrt(16)` devuelve `4`

3. **Raíz cúbica**:
   - `Math.cbrt(número)`
   - Ejemplo: `Math.cbrt(8)` devuelve `2`

4. **Valor absoluto**:
   - `Math.abs(número)`
   - Ejemplo: `Math.abs(-10)` devuelve `10`

5. **Métodos logarítmicos**:
   - `Math.log(número)`: Logaritmo natural (base e)
   - `Math.log2(número)`: Logaritmo en base 2
   - `Math.log10(número)`: Logaritmo en base 10

6. **Valores mínimo y máximo**:
   - `Math.min(...números)`: Devuelve el valor mínimo de las entradas.
   - Ejemplo: `Math.min(9, 8, 7)` devuelve `7`
   - `Math.max(...números)`: Devuelve el valor máximo de las entradas.
   - Ejemplo: `Math.max(9, 8, 7)` devuelve `9`

7. **Métodos trigonométricos**:
   - `Math.sin(ángulo)`
   - `Math.cos(ángulo)`
   - `Math.tan(ángulo)`
   - Ejemplos: `Math.sin(0)`, `Math.cos(0)`, `Math.tan(0)`

Estas notas resumen las propiedades y métodos más importantes del objeto Math en JavaScript, proporcionando ejemplos prácticos de su uso.