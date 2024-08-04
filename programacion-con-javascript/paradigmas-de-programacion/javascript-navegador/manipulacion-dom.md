### Notas Relevantes del Texto sobre el DOM

- **Analogía del Control Remoto:**
  - El DOM se compara con un control remoto de TV que permite cambiar el contenido de una página web.
  - A diferencia de un control remoto, el DOM ofrece un control mucho más detallado sobre los elementos de una página web.

- **Funcionalidad del DOM:**
  - Permite modificar y actualizar partes específicas de una página web, como imágenes o encabezados.
  - El DOM está estructurado como un objeto de JavaScript con objetos anidados que representan diferentes partes de la página web.
  - Cada objeto anidado puede tener sus propios objetos anidados, formando una estructura de árbol.

- **Construcción del DOM:**
  - El navegador construye automáticamente el DOM para cada página web que descarga.
  - Al cargar una URL, el navegador obtiene el HTML de la página y construye el DOM basado en este HTML.

- **Interacción con el DOM:**
  - Los desarrolladores pueden interactuar con el DOM para hacer cambios en la página web.
  - Las DevTools del navegador permiten interactuar con el DOM mediante una interfaz gráfica (GUI) en la pestaña de "Elements".
  - También se puede interactuar con el DOM usando JavaScript desde la pestaña "Console" de las DevTools.

- **Manipulación del DOM con JavaScript:**
  - Para crear y manipular elementos del DOM, se utilizan métodos de JavaScript como `createElement`, `setAttribute`, y `appendChild`.
  - Ejemplo práctico:
    1. Crear un elemento `h2` con `document.createElement('h2')`.
    2. Asignar el elemento a una variable constante (`const h2`).
    3. Agregar texto al elemento con `h2.innerText = 'This is an h2 heading'`.
    4. Establecer atributos como ID y clase con `h2.setAttribute('id', 'sub-heading')` y `h2.setAttribute('class', 'secondary')`.
    5. Agregar el elemento al DOM con `document.body.appendChild(h2)`.

- **Importante:**
  - Los cambios realizados en el DOM a través del navegador son temporales y se pierden al recargar la página.
  - Estos cambios solo afectan la copia local de la página en el navegador y no el contenido real del sitio web en el servidor.

- **Herramientas del Desarrollador:**
  - La pestaña "Elements" permite una interacción visual con el DOM.
  - La pestaña "Console" permite la manipulación del DOM mediante comandos de JavaScript.

## Estas notas resumen los puntos clave sobre cómo funciona el DOM, cómo se construye, y cómo se puede manipular usando herramientas del navegador y JavaScript.

Aquí tienes unas notas relevantes del texto:

### Manipulación del DOM con JavaScript

- **Manipulación del DOM**:
  - Permite actualizar dinámicamente el contenido HTML en tiempo real.
  - Ejemplo: cambiar el color de un texto al hacer clic en un botón o mostrar un mensaje emergente.

### Uso de Selectores en JavaScript

- **Acceso al DOM**:
  - Utiliza la palabra clave `document` para acceder al objeto DOM.
  - `document` representa la página web almacenada en la memoria del navegador.

- **Método `querySelector`**:
  - Localiza el primer elemento que coincide con un selector CSS.
  - Ejemplo: `document.querySelector('p')` devuelve el primer elemento `<p>`.

- **Método `querySelectorAll`**:
  - Localiza todos los elementos que coinciden con un selector CSS.
  - Ejemplo: `document.querySelectorAll('p')` devuelve todos los elementos `<p>` en la página.

- **Método `getElementById`**:
  - Encuentra un elemento por su atributo `id`.
  - Ejemplo: `document.getElementById('heading')` devuelve el elemento con el `id` "heading".

- **Método `getElementsByClassName`**:
  - Encuentra todos los elementos con un nombre de clase específico.
  - Ejemplo: `document.getElementsByClassName('txt')` devuelve todos los elementos con la clase "txt".

### Consideraciones Importantes

- **Diferencia entre `ID` y `ClassName`**:
  - `getElementById` usa el singular "Element" (ID único).
  - `getElementsByClassName` usa el plural "Elements" (varios elementos).

- **Resultados de Búsqueda**:
  - Si el elemento con `ID` no se encuentra, devuelve `null`.
  - Si los elementos con la `ClassName` no se encuentran, devuelve una colección vacía `[]`.

Estas notas cubren los puntos clave sobre la manipulación del DOM y el uso de selectores en JavaScript, facilitando la búsqueda y manipulación de elementos específicos en un documento HTML.