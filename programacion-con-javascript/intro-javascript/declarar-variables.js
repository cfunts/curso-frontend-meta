//Declarando variables

/*
Tareas

    Declare una nueva variable denominada petDog y dele el nombre Rex.

    Declare una nueva variable llamada petCat y dele el nombre Pepper.

    Consola.log la variable petDog.

    Consola.log la variable petCat.

    Consola.log el texto "My pet dog's name is: " y la variable petDog.

    Consola.log el texto "My pet cat's name is: " y la variable petCat.

    Declare otra variable y nómbrela catSound. Asígnele la cadena "purr".

    Declare otra variable y nómbrela dogSound. Asígnele la cadena de texto "woof".

    Consola.log la variable petDog, luego la cadena "says", luego la variable dogSound.

    Consola.log la variable petCat, luego la cadena "says", luego la variable catSound.

    Reasigne el valor almacenado en catSound a la cadena "meow".

    Consola.log la variable petCat, luego la cadena "now says", luego la variable catSound.
*/
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);
var dogSound = "woof";
var catSound = "purr";
console.log(petDog + " says " + dogSound);
console.log(petCat + " says " + catSound);
catSound = "meow";
console.log(petCat + " now says " + catSound);