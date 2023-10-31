const calcAge = (birthYear) => 2037 - birthYear;
const age3 = calcAge(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const isOdd = (num) => {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isOdd(8));

const addTwo = (num1, num2) => {
    sum = num1 - num2;
    return sum;
};
console.log(addTwo(9, 2));

function lengthOfString(str) {
    return str.length;
}
console.log(lengthOfString("Hello"));

const isArray = (arr) => {
    let nonArr = Array.isArray(arr);
    return nonArr;
};
console.log(isArray([1, 2, 3]));

const twoArg = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++) {
        let square = i * i;
        if (square > start && square <= end) {
            result.push(i);
        }
    }
    return result;
};
console.log(twoArg(1, 10));

const findCharFrequency = (str) => {
    let countVowels = "aouie";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (countVowels.includes(str[i])) {
            sum++;
        }
    }
    return sum;
};
console.log(findCharFrequency("beautiful"));

function sliceFromFirstVowel(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return str.slice(1);
        }
    }
}
console.log(sliceFromFirstVowel("javascript"));

const stringIndexMultiplier = (arr) => {
    let totalSum = 0;
    for (var i = 0; i < arr.length; i++) {
        var length = arr[i].length;
        var product = length * i;
        totalSum += product;
    }
    return totalSum;
};
console.log(stringIndexMultiplier(["Hello", "world", "!"]));

const binaryCounter = (arr) => {
    let numOfZeros = [];
    let numOfOnes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            numOfZeros++;
        } else if (arr[i] === 1) {
            numOfOnes++;
        }
    }
    return [numOfOnes, numOfZeros];
};
console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]));

const oddNumberSum = (nums) => {
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums % 2 !== 0) {
            sum = +nums[i];
        }
    }
    return sum;
};
console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

myVar = 5; // Assign 5 to global myVar
var myVar; // Declare global variable 'myVar' after assignment

function someFunction() {
    console.log(myVar); // undefined, because function scope has its own 'myVar'
    var myVar = 10; // Declare and assign local 'myVar' inside function
    console.log(myVar); // 10
}

someFunction();
console.log(myVar); // 5, because global 'myVar' is still 5
