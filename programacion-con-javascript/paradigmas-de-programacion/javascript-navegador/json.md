### Notas Relevantes sobre el Texto sobre Conversión entre JSON y Objetos JavaScript

1. **Conceptos Básicos:**
   - JSON es básicamente un objeto representado en forma de cadena de texto con un formato específico.
   - Trabajar con JSON comúnmente implica convertirlo de vuelta a un objeto JavaScript para manipular sus propiedades y métodos.

2. **Conversión de JSON a Objeto JavaScript:**
   - Utilizar el método `JSON.parse()`:
     1. Asignar la cadena JSON a una variable (e.g., `const JSONstr`).
     2. Ejecutar `JSON.parse(JSONstr)` para convertir la cadena en un objeto JavaScript.
     3. Asignar el resultado a una nueva variable (e.g., `const aPlainObj`).
   - Ejemplo de código:
     ```javascript
     const JSONstr = '{"greeting": "hello"}';
     const aPlainObj = JSON.parse(JSONstr);
     aPlainObj.greeting = 'hi';  // Modificar una propiedad del objeto
     ```

3. **Conversión de Objeto JavaScript a JSON:**
   - Utilizar el método `JSON.stringify()`:
     1. Declarar un objeto con propiedades y valores.
     2. Ejecutar `JSON.stringify(obj)` para convertir el objeto en una cadena JSON.
   - Ejemplo de código:
     ```javascript
     const data = { key1: "value1", key2: "value2" };
     const jsonString = JSON.stringify(data);
     ```

4. **Puntos Importantes a Recordar:**
   - Las claves y valores en una cadena JSON están entrecomillados.
   - Los objetos JavaScript pueden contener funciones, pero las cadenas JSON no.
   - JSON válido no permite el uso de comentarios en JavaScript.
   - Al usar `JSON.stringify()` en un objeto que contiene métodos, estos serán excluidos de la operación.

5. **Aplicaciones Prácticas:**
   - Convertir cadenas JSON en objetos JavaScript es una práctica común cuando se trabaja con datos de APIs.
   - Facilita el acceso programático a las propiedades de los objetos.

6. **Recomendación:**
   - Es fundamental practicar estas conversiones para manejar eficazmente datos JSON y objetos JavaScript en el desarrollo web.

Estas notas capturan los puntos clave del video, proporcionando una guía clara sobre cómo convertir entre JSON y objetos JavaScript, así como algunos consejos importantes y mejores prácticas.