const repeatString = function(text, times) {
    let returnText = "";
    if (times < 0) {
        return "ERROR";
    }
        for (i = 0; i<times; i++) {
            returnText += text;
        }
    return returnText;
};

// Do not edit below this line
module.exports = repeatString;
