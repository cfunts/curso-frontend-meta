// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]


// Implement getPrices()
//Step 1
function getPrices(taxBoolean) {
    //Step 2
    for (const dish of dishData) {
        //Steo 3
        let finalPrice;
        //Step 4
        if(taxBoolean==true){
            finalPrice = dish.price * 1.20;
            //console.log(finalPrice);
        } else if (taxBoolean == false){//Step 5
            finalPrice = dish.price;
            //console.log(finalPrice);
        } else {//Step 6
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        //Step 7
        console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
        
    }
}

//getPrices(true);
//getPrices(false);
//getPrices(18);//Nota 1 = true y 0 = false

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {//Step 8
    getPrices(taxBoolean);//Step 9
    //Step 10
    if(typeof guests === 'number' && 0 < guests && guests < 30){
        //Step 11
        let discount = 0;
        if(guests < 5){
            discount = 5;
        }else if (guests >= 5){
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else{//Step 12
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
