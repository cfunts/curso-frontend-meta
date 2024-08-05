# Intro de Jest

1. **Introducción a la Prueba de Código en JavaScript**:
   - JavaScript no tiene funcionalidades de prueba incorporadas.
   - Para probar el código JavaScript, se utilizan frameworks de prueba como Jest.

2. **Frameworks de Prueba Populares**:
   - Ejemplos: Jasmine, Mocha, Karma, qUnit.
   - Jest es un framework de prueba de JavaScript frecuentemente utilizado para probar código como React.

3. **Compatibilidad de Jest**:
   - Además de JavaScript y React, Jest permite probar Babel, TypeScript, Node, Angular, Vue y otros frameworks.

4. **Cobertura de Código**:
   - La cobertura de código mide el porcentaje de código cubierto por pruebas.
   - Una cobertura alta (p. ej., 80%) indica que una gran parte del código está cubierta por pruebas.
   - Sin embargo, una cobertura del 100% no garantiza que todas las expectativas posibles estén probadas.

5. **Concepto de Mocking**:
   - El mocking permite separar el código de prueba de sus dependencias relacionadas.
   - Es útil para simular datos del servidor, evitando cuellos de botella en el desarrollo entre frontend y backend.
   - Jest incluye funciones de mock sin necesidad de instalaciones adicionales.

6. **Testing Asíncrono en Jest**:
   - Jest facilita la prueba de código asíncrono sin configuraciones complicadas.

7. **Snapshot Testing**:
   - Las pruebas de snapshot se utilizan para verificar que no haya regresiones en el DOM después de realizar cambios en el código.

Estas notas cubren los puntos clave sobre el uso de Jest para pruebas en JavaScript, destacando sus características principales y la importancia de la cobertura de código y el mocking.

Aquí tienes unas notas relevantes del texto sobre cómo instalar paquetes necesarios para probar código JavaScript utilizando el marco Jest:

1. **Instalación de Paquetes y Configuración Inicial:**
   - Crear un archivo `addFive.js` con una función `addFive` que suma cinco a un valor y exporta esta función.
   - Verificar la instalación de Node.js (`node --version`) y NPM (`npm --version`).
   - Instalar Jest localmente en el proyecto (`npm install --save jest`).

2. **Configuración del Archivo `package.json`:**
   - Crear un archivo `package.json` con `npm init -y`.
   - Modificar la sección de scripts en `package.json` para incluir `"test": "jest"`.

3. **Creación de un Archivo de Prueba:**
   - Crear un archivo `addFive.test.js` para probar la función `addFive`.
   - Importar la función `addFive` en el archivo de prueba usando `const addFive = require('./addFive');`.

4. **Escritura de Pruebas con Jest:**
   - Usar el método `test` de Jest para definir las pruebas.
   - Ejemplo de prueba: 
     ```javascript
     test('returns the number plus five', () => {
       expect(addFive(3)).toBe(8);
     });
     ```
   - Ejecutar las pruebas con `npm run test`.

5. **Resultados de las Pruebas:**
   - Al ejecutar las pruebas, se mostrará un mensaje en la línea de comandos indicando si la prueba pasó o falló.

Estas notas cubren los pasos clave para configurar y ejecutar pruebas en un proyecto JavaScript utilizando Jest.