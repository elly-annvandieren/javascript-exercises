const sumAll = function(a, b) {
    if (
        a < 0 || 
        b < 0 || 
        typeof a !== 'number' || 
        typeof b !== 'number' || 
        !Number.isInteger(a) || 
        !Number.isInteger(b)
    ) {
        return "ERROR";
    }

    if (a > b) {
        [a, b] = [b, a];
    }

    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }

    return total;
};
// npm test sumAll.spec.js

// Do not edit below this line
module.exports = sumAll;
