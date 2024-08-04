# Notas Relevantes sobre JavaScript ES6 Modules

#### Introducción
- Los fotógrafos necesitan diferentes lentes para diferentes situaciones; de manera similar, los programas complejos en JavaScript pueden ser útiles para múltiples aplicaciones.
- Los módulos en JavaScript permiten reutilizar código sin tener que reescribirlo repetidamente.
- ES6 introdujo los módulos, que son unidades independientes de código reutilizables.

#### Funcionamiento de los Módulos en JavaScript
- Los módulos en JavaScript son unidades de código independientes que pueden ser agregadas, removidas o reemplazadas en un programa sin afectar su funcionamiento.
- Antes de los módulos, todas las funciones definidas en el objeto `window` eran globales, lo cual causaba conflictos cuando diferentes scripts usaban el mismo nombre de variable.

#### Historia de los Módulos en JavaScript
- Kevin Bangor de Mozilla intentó solucionar la falta de funcionalidad de módulos nativos en JavaScript con el proyecto Server JS, luego renombrado a CommonJS.
- CommonJS especifica cómo deben funcionar los módulos fuera del entorno del navegador, principalmente en Node.js.
- Los navegadores no entienden la sintaxis de CommonJS (por ejemplo, `require` y `module.exports`).

#### Uso de Módulos ES6 en un Navegador
- Para usar módulos ES6 en el navegador, se utiliza la etiqueta `<script>` con el atributo `type="module"`.
- Ejemplo de uso:
  ```html
  <script type="module">
      import { greet } from './greeting.js';
      console.log(greet());
  </script>
  ```
- Al ejecutar el archivo HTML localmente, es posible que el acceso al script sea bloqueado por el navegador debido a la política de CORS (Cross-Origin Resource Sharing).
- Para evitar este error, se debe ejecutar el archivo HTML a través de un servidor local.

#### Verificación de los Scripts
- Al abrir un archivo HTML con script tags en el navegador, se pueden verificar los logs en la consola del desarrollador.
- Al usar el atributo `type="module"`, los módulos importados se leen y consumen correctamente.

#### Conclusión
- Los módulos en ES6 permiten una mejor organización y reutilización del código.
- Se debe tener en cuenta las limitaciones y configuraciones necesarias, como el uso de un servidor local para evitar errores de CORS.
- Los módulos ES6 mejoran significativamente el desarrollo de aplicaciones JavaScript al ofrecer una estructura modular y reutilizable.