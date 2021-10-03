/**
 * This script contains logic for the calculator page
 */


// Global variables
const operators = ["x", "/", "+", "-", "=", "Clear"];

//  Append selection to output box
function appendToOutput(btnVal)
{
    //  Append value of button clicked to output box
    document.getElementById("output").value += btnVal;
}

//  Clear output box
function clearOutput(clearDebug=false)
{
    document.getElementById("output").value = "";

    if(clearDebug)
    {
        document.getElementById("debug").textContent = "";
    }
    
}

//  Remove value from array
function remove(arr, val)
{
    newArr = [];

    //  Loop through array
    for(let i = 0; i < arr.length-1; i++)
    {
        //  Check if value should be kept
        if(arr[i] != val)
        {
            //  Add value to new array
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//  Tokenize output
function tokenizeOutput()
{
    //  Get output and debug message DOM elements
    let output = document.getElementById("output").value;
    const debug = document.getElementById("debug");

    //  Split by numbers, then clean split
    let initSplit = output.split(/(\d+)/);
    let tokens = remove(initSplit, '');

    //  Add to debug message and clear output
    debug.textContent += tokens;
    clearOutput();

    return tokens;
}

//  Compute output
function compute()
{
    const debug = document.getElementById("debug");

    //  Compute result of output
    let result = eval(document.getElementById("output").value);
    
    //  Clear output and set equal to result
    clearOutput();
    document.getElementById("output").value = parseFloat(result);

}