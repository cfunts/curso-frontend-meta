// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create the message variable
    const message = "%c" + txt;

    // Create and update the style variable
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    // Log the message with the style
    console.log(message, style);
}
consoleStyler('#1d5c63','#ede6db','40px','Congrats!');

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Define the fontStyle variable
    fontStyle = "color: tomato; font-size: 50px";

    // Check the reason and log the appropriate message
    if(reason == "birthday"){
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions"){
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        // Default case if none of the above conditions are met
        console.log(`%c${reason}`, fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px' ,'You made it!','champions');
