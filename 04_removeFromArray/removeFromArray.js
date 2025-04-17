const removeFromArray = function(array, ...items) {
    for (let item of items) {
        while (array.includes(item)) {
            let itemIndex = array.indexOf(item)
            array.splice(itemIndex, 1);
        }
    }
    return array;
};

// npm test removeFromArray.spec.js

// Do not edit below this line
module.exports = removeFromArray;
