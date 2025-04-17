const reverseString = function(input) {
    let inputReversed = []
    const inputArray = input.split("");
    while (inputArray.length !== 0) {
        inputReversed.unshift(inputArray[0]);
        inputArray.shift();
    }
    return inputReversed.join("");
};

// npm test reverseString.spec.js

// can be simplified:
//  const reverseString = function (string) {
//     return string.split("").reverse().join("");
//  };

// Do not edit below this line
module.exports = reverseString;