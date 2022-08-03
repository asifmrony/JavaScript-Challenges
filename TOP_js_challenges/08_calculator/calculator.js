
const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (arr) {
    return arr.reduce((total, value) => total + value, 0);
};

const multiply = function (arr) {
    return arr.reduce((total, value) => total * value, 1);
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (factorial) {
    let result = 1;
    for (let index = 1; index <= factorial; index++) {
        result *= index;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};