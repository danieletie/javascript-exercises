const sumAll = function(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return "ERROR";
    }
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    let numArr = [number1, number2];
    numArr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = numArr[0]; i <= numArr[1]; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
