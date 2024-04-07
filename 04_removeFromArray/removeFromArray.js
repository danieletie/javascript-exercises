const removeFromArray = function(array, ...args) {
    let newArray = [];
    call:
    for (let arr in array){
        for (let arg in args) {
            if (array[arr] === args[arg]) {
                continue call;
            }
        }
        newArray.push(array[arr]);
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
