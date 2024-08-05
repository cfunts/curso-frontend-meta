// Data for dishes
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 }
  ];
  
  // Define the getPrices function with a parameter taxBoolean
  function getPrices(taxBoolean) {
    // Loop over all the objects in dishData
    for (let i = 0; i < dishData.length; i++) {
      // Declare finalPrice variable
      let finalPrice;
      
      // Check if taxBoolean is true
      if (taxBoolean === true) {
        finalPrice = dishData[i].price * 1.20; // Applying 20% tax
      } 
      // Check if taxBoolean is false
      else if (taxBoolean === false) {
        finalPrice = dishData[i].price;
      } 
      // Handle the else case
      else {
        console.log("You need to pass a boolean to the getPrices call!");
        return;
      }
      
      // Log the dish name and final price
      console.log(`Dish: ${dishData[i].name} Price: $${finalPrice.toFixed(2)}`);
    }
  }
  
  // Define the getDiscount function with parameters taxBoolean and guests
  function getDiscount(taxBoolean, guests) {
    // Invoke getPrices with taxBoolean
    getPrices(taxBoolean);
    
    // Implement defensive coding for guests parameter
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
      // Calculate the discount
      let discount = 0;
      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
      console.log('Discount is: $' + discount);
    } 
    // Handle the else case
    else {
      console.log('The second argument must be a number between 0 and 30');
    }
  }
  
  // Example usage
//
  // Example usage
  getDiscount(true, 2);
  getDiscount(false, 10);
  