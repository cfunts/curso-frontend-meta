# Notas relevantes sobre la herencia en JavaScript y el modelo de prototipo

- **Herencia en el mundo real**: Adquirir posesiones o condiciones de generaciones pasadas.
  
- **Herencia en JavaScript**: Se basa en el concepto del prototipo.
  - **Prototipo**: Un objeto que puede contener propiedades compartidas por múltiples otros objetos.
  - **Modelo de herencia de prototipos**: JavaScript implementa este modelo, donde objetos pueden heredar propiedades de un prototipo.

- **Ejemplo de código**:
  1. Se define un objeto `bird` con tres propiedades: `hasWings`, `canFly` y `hasFeathers`, todas establecidas en `true`.
  2. Se crea un nuevo objeto `eagle1` usando `Object.create(bird)`.
     - Al imprimir `eagle1`, aparece como un objeto vacío, pero tiene acceso a las propiedades de `bird`.
     - `eagle1.hasWings`, `eagle1.canFly` y `eagle1.hasFeathers` devuelven `true`.

- **Creación de múltiples objetos**:
  - `eagle2` se crea también usando `Object.create(bird)` y tiene acceso a las propiedades del prototipo `bird`.
  - Al imprimir `eagle2.hasWings`, se obtiene `true`.

- **Sobrescritura de propiedades**:
  - Se crea un objeto `penguin1` con `Object.create(bird)`.
  - `penguin1` es un ave que no puede volar, por lo que `penguin1.canFly` se establece en `false`.
  - Al imprimir `penguin1`, `penguin1.canFly` devuelve `false`, pero las otras propiedades heredadas de `bird` (`hasWings` y `hasFeathers`) permanecen accesibles.
  - La sobrescritura de `canFly` en `penguin1` no afecta al prototipo `bird` ni a otros objetos como `eagle1`.

- **Uso de clases en JavaScript**:
  - Aunque se puede construir herencia con `Object.create`, para objetos y herencias más complejas es preferible usar la sintaxis de clases.
  - Bajo el capó, la sintaxis de clases sigue trabajando con prototipos, pero mejora la experiencia del desarrollador en escenarios más complejos.