# Notas Relevantes sobre Programación Orientada a Objetos (OOP) y Programación Funcional

**Conceptos Generales**
1. **Paradigmas de Programación**:
   - Los paradigmas de programación son estilos o clasificaciones para escribir código.
   - **Programación Funcional**: Separa claramente los datos de las funciones que operan sobre esos datos.
   - **Programación Orientada a Objetos (OOP)**: Organiza los programas usando objetos que agrupan datos y funcionalidades relacionadas.

**Programación Funcional**
1. **Ejemplo de Función**:
   - Declarar variables para almacenar valores (por ejemplo, precio de zapatos y tasa de impuestos).
   - Crear una función para calcular el precio total multiplicando los zapatos por la tasa de impuestos.
   - Invocar la función pasando los valores necesarios y mostrar el resultado.

**Programación Orientada a Objetos (OOP)**
1. **Organización en Objetos**:
   - Crear objetos para agrupar datos y funciones relacionadas.
   - Ejemplo: Objeto `purchase1` que incluye propiedades como `shoes` y `stateTax`, y un método `totalPrice` para calcular el precio total.

2. **Uso de Métodos**:
   - Los métodos son funciones dentro de los objetos.
   - Acceder a métodos y propiedades de un objeto usando notación de punto (e.g., `purchase1.totalPrice()`).

3. **Reutilización de Código con `this`**:
   - Usar la palabra clave `this` para referirse al objeto actual dentro de un método.
   - Permite copiar métodos entre objetos sin modificar las referencias internas.

4. **Creación de Plantillas con Clases**:
   - Para evitar la repetición de métodos en múltiples objetos, se utilizan clases como plantillas para crear nuevos objetos.
   - Las clases permiten una creación más eficiente de objetos con propiedades y métodos comunes.

**Comparación de Ejemplos**
1. **Programación Funcional**:
   - Variables: `shoes`, `stateTax`
   - Función: `totalPrice(shoes, tax)`, retorna `shoes * tax`.
   - Ejecución: Invocar función con valores de variables y mostrar resultado.

2. **Programación Orientada a Objetos**:
   - Objeto: `purchase1` con propiedades `shoes`, `stateTax` y método `totalPrice`.
   - Ejecución: Llamar al método `totalPrice` del objeto `purchase1` y mostrar resultado.
   - Uso de `this`: Reemplazar referencias específicas del objeto con `this` para facilitar la copia y reutilización del método en otros objetos.

**Ventajas de OOP**
1. **Organización y Modularidad**:
   - Los objetos agrupan datos y comportamientos relacionados, mejorando la organización del código.
2. **Reutilización de Código**:
   - Uso de métodos comunes entre objetos similares usando `this`.
3. **Eficiencia**:
   - Creación de clases para evitar la repetición de código y mejorar la eficiencia en la construcción de objetos.

**Conclusión**
- La programación orientada a objetos permite una codificación más eficiente y organizada mediante la reutilización de código y la creación de plantillas con clases.
- Comparar paradigmas funcionales y orientados a objetos ayuda a comprender mejor sus diferencias y ventajas.