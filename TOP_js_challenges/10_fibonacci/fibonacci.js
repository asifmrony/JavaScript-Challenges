const fibonacci = function (param) {
    //An array from where param value will be checked against
    // sample fibonacci Numbers() = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 149];
    const sekuence = [1, 1, 2, 3, 5, 8, 13];

    //fill up the 'sekuence' array with fibonacci number sekuence
    // let sum = 0;
    // for (let x = 0; x < sekuence.length; x++) {
    //     for (let y = 1; y < 2; y++) {
    //         const nextNum = sekuence[x] + sekuence[y];
    //         // console.log(x, y);
    //         console.log(nextNum);
    //     }
    //     // sum += sekuence[x];
    //     console.log(sekuence[x]);
    // }

    return sekuence[param - 1];
};



console.log(fibonacci(4));
// // Do not edit below this line
// export default fibonacci;