// Task 1 Iterate Over an Array

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for (const product of dairy) {
        console.log(product);
    }
}
logDairy();

// Task 2

const animal = {

    canJump: true
    
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;//2da property

function birdCan() {
    for (const property in bird) {
        if (bird.hasOwnProperty(property)) {
            console.log(`${property}: ${bird[property]}`);
        }
    }
}

birdCan();

// Task 3

function animalCan() {
    for (const property in bird) {
        console.log(`${property}: ${bird[property]}`);
    }
}

animalCan();
