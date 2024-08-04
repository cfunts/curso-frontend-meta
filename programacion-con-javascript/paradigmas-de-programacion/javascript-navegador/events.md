### Notas Relevantes sobre el Manejo de Eventos en JavaScript

1. **Eventos de Usuario:**
   - Ejemplos: Clic en un botón, toque en el ícono de "me gusta".
   - Son acciones que desencadenan eventos en la página web.

2. **Escuchar Eventos:**
   - JavaScript permite escuchar eventos en partes específicas de la página.
   - Ejemplo: Escuchar un evento de clic en un botón "Agregar al carrito".

3. **Manejo de Eventos:**
   - Una función, conocida como "event handler", maneja los eventos capturados.
   - Ejemplo: Actualizar el contador de artículos en un carrito de compras.

4. **Método `addEventListener`:**
   - Usado para configurar un listener en un elemento HTML.
   - Proceso:
     1. Obtener referencia del elemento: `document.querySelector('elemento')`.
     2. Asignar el elemento a una variable: `const target = document.querySelector('body')`.
     3. Crear una función manejadora: `function handleClick() { console.log('clicked the body'); }`.
     4. Asociar el listener al elemento: `target.addEventListener('click', handleClick);`.
   - Prueba: Al hacer clic en la página, el texto "clicked the body" aparece en la consola.

5. **Atributos de Evento en HTML:**
   - Alternativa al `addEventListener`.
   - Proceso:
     1. Crear una segunda función manejadora: `function handleClick2() { console.log('clicked the heading'); }`.
     2. Editar el HTML del elemento y agregar el atributo `onclick="handleClick2()"` al elemento deseado.
   - Prueba: Al hacer clic en el encabezado, aparecen ambos mensajes en la consola.

6. **Resultado:**
   - Una sola acción puede desencadenar múltiples listeners.
   - Distinción clara entre eventos escuchados en diferentes partes de la página.

7. **Conclusión:**
   - Uso del método `addEventListener` y atributos de evento HTML para manejar eventos.
   - Comprensión básica de cómo los eventos interactúan con JavaScript en una página web.