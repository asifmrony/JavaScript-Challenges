'use strict'

function fibonacci(param) {
    //An array from where param value will be checked against
    // sample fibonacci Numbers() = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 149];
    let fibonacciNumber = [];
    if (param < 0) {
        return 'OOPS';
    }

    //fill up the 'sekuence' array with fibonacci number sekuence
    let first = 0;
    let second = 1;
    for (let x = 0; x < param; x++) {
        const temp = first + second;
        if (!x) {
            fibonacciNumber.push(second)
        }
        fibonacciNumber.push(temp);
        first = second;
        second = temp;
    }

    return fibonacciNumber[param - 1];
};



// console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;