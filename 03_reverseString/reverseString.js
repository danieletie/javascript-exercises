const reverseString = function(string) {
    let stringArr = string.split("");
    let stringRev = stringArr.reverse();
    let newString = stringRev.join("");
    return newString;
};

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
