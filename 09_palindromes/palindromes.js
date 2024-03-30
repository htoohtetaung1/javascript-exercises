const palindromes = function (str) {
    let processed = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let stringArray = processed.split('')
    // for(i=0;i<stringArray.length;i++) {
    //     let pointer = stringArray.length - 1 - i;
    //     if (pointer<=i) {
    //         return true;
    //     }
    //     if (!(stringArray[i] === stringArray[pointer])) {
    //         return false;
    //     }
    //     console.log(`i = ${i} pointer = ${pointer} ${stringArray[i]} ${stringArray[pointer]}`)
    // }

    return stringArray.reverse().join("") === processed

};


// Do not edit below this line
module.exports = palindromes;
