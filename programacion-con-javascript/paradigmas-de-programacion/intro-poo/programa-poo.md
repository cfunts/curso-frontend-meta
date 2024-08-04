# Programa POO

Así pues, mi plan es el siguiente 

1. El constructor de la claseAnimal tendrá dos propiedades:color yenergy.

2. El prototipo de la claseAnimal tendrá tres métodos:isActive(),sleep(), ygetColor(). 

3. El métodoisActive(), siempre que se ejecute, reducirá el valor deenergy hasta que alcance0. El métodoisActive() también informará del valor actualizado deenergy. Sienergy está a cero, el objeto animal se dormirá inmediatamente, invocando el métodosleep() en función de dicha condición. 

4. El métodogetColor() se limitará a registrar por consola el valor de la propiedadcolor. 

5. La claseCat heredará deAnimal, con las propiedades adicionalessound,canJumpHigh, ycanClimbTrees específicas de la claseCat. También tendrá su propio métodomakeSound(). 

6. La claseBird también heredará deAnimal, pero sus propias propiedades específicas serán muy diferentes de las deCat. En concreto, la claseBird tendrá las propiedadessound ycanFly, y también el métodomakeSound. 

7. La claseHouseCat extenderá la claseCat, y tendrá su propiahouseCatSound como propiedad especial. Además, anulará el métodomakeSound() de la claseCat, pero lo hará de una forma interesante. Si el métodomakeSound(), al ser invocado, recibe un único argumentooption- fijado entrue, entonces ejecutarásuper.makeSound()- en otras palabras, ejecutará el código de la clase padre (Cat) con el añadido de ejecutar elconsole.log(this.houseCatSound). Efectivamente, esto significa que el métodomakeSound() en el objeto instancia de la claseHouseCat tendrá dos comportamientos distintos, en función de si le pasamostrue ofalse. 

8. La claseTiger también heredará deCat, y vendrá con su propia propiedadtigerSound, mientras que el resto del comportamiento será prácticamente el mismo que en la claseHouseCat. 

9. Finalmente, la claseParrot extenderá la claseBird, con su propia propiedadcanTalk, y su propio métodomakeSound(), trabajando con dos condicionales: uno que comprueba si el valor detrue fue pasado amakeSound durante la invocación, y otro que comprueba el valor almacenado dentro de la propiedadthis.canTalk.  