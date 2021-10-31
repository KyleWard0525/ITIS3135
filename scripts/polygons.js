/**
 * This script contains functions for handling user input,
 * and determining the name of polygon relative to the number
 * they input
 */

//  Polygonal prefixes
const prefixes = {
    0: 'null',
    1: 'hena',
    2: 'di',
    3: 'tri',
    4: 'tetra',
    5: 'penta',
    6: 'hexa',
    7: 'hepta',
    8: 'octa',
    9: 'ennea',
    10: 'deca',
};

// Gon
const suffix = 'gon';

var userInput = '';

//  Validate number
function validateEntry(number)
{
    let min = 0;
    let max = 10;

    //  Check if number is number
    if(isNaN(number))
    {
        return false;
    }
    
    // Check if number is a float
    if(number !== parseInt(number, 10))
    {
        // Cast number to an int
        return false;
    }

    //  Check if number is in range
    if ((number >= min) && (number <= max))
    {
        //  Number is valid
        return true;
    }
    else {
        //  Number is out of range
        return false;
    }
}


// Get input from user
function promptUserForNum()
{
    //  Prompt user for number
    userInput = prompt("Please enter a number from 0 to 10:");

    //  Convert to int
    let userInt = parseInt(userInput);

    //  Validate user input
    if(!validateEntry(userInt))
    {
        alert("Error: Number must be between 0 and 10!");
        promptUserForNum();
    }
    else {
        //  Return user input
        return userInt;
    }
}

//  Prompt user for number and display name of polygon
function getShape()
{
    //  Get number from user and display alert
    let userNum = promptUserForNum();

    //  Last-ditch effort to protect against input errors
    if(!(userNum in prefixes))
    {
        alert("ERROR: " + userNum + " is not between 0 and 10. Setting default (8)...");
        userNum = 8;
    }

    alert("Polygon name: " + (prefixes[userNum] + suffix));

    //  Set polygon DOM element
    document.getElementById("result").textContent = "Shape: " + (prefixes[userNum] + suffix);
}
