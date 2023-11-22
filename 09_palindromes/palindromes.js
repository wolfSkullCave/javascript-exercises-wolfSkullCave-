const palindromes = function (palindrome) {
    const noPunc = palindrome.replace(/[^\w\s]|_/g, "")
    const noSpace = noPunc.replace(/\s/g, '')
    const lowStr = noSpace.toLowerCase()

    const newStr = lowStr
    const arr = newStr.split('')
    const reverse = newStr.split('').reverse()

    /* const isPalin = arr.map( (item,index) => console.log(item + ':' + index)) */
    const isPalin = arr.every((item, index) => item === reverse[index])

    return isPalin
};

// Do not edit below this line
module.exports = palindromes;
