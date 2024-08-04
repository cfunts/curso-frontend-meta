var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}


var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}