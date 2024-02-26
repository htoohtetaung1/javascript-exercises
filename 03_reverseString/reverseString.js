const reverseString = function(word) {
    let wordArr = word.split("").reverse();
    let joinedString = wordArr.join("");
    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
