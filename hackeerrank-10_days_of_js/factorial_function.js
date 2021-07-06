'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/* Ignore the Above Code */

/* ----------------------------
Problem Statement: Write Down a function to calculate factorial of a given value
------------------------------*/

/*
 * Create the function factorial here
 */

/* My Solution is below */
function factorial(n) {
    let result = n;
    for(let i = n; i >= 1; i--) {
        if(i!== n){
            result *= i;
    }
    return result;
}

/* Recursive Solution */
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));



function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
