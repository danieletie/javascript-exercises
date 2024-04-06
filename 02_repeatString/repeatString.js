const repeatString = function(string, number) {
    let result = "" ;
    if (number < 0){
        result = "ERROR";
    }
    for (i = 1; i <= number; i++) {
        if (i <= number) {
            result += string;
        }
    }
    return (result)
}
repeatString('hey', -1)

// Do not edit below this line
module.exports = repeatString;
