const palindromes = function (str) {
    let checkfront = '';
    for (let index = 0; index < str.length; index++) {
        checkfront += str[index];
    }
    let checkback = '';
    for (let index = str.length - 1; index >= 0; index--) {
        checkback += str[index];
    }
    return checkfront === checkback;
};

// Do not edit below this line
module.exports = palindromes;