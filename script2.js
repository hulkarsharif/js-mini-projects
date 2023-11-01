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

const userProfile = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: true
};
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}:${userProfile[key]}`);
    }
}
printUserProfile();

const countOccurrence = (str) => {
    let uniqChar = {};
    for (let i = 0; i < str.length; i++) {
        if (uniqChar[str[i]]) {
            uniqChar[str[i]]++;
        } else {
            uniqChar[str[i]] = 1;
        }
    }
    return uniqChar;
};
console.log(countOccurrence("banana"));

const averageScore = (scores) => {
    let highestScore = 0;
    for (let i = 0; i < scores.length; i++) {
        highestScore += scores[i];
    }
    return highestScore / scores.length;
};

const devideAvg = (numbers) => {
    let averageScores = {};
    for (let key in numbers) {
        const devideAvg = averageScore(numbers[key]);
        averageScores[key] = devideAvg;
    }
    return averageScores;
};
console.log(devideAvg({ John: [85, 90, 78], Jane: [92, 88, 91] }));

/* Assignment 2: Palindrome Checker
 * Write a function that takes a one word string as an argument and checks if it is a palindrome.
* A palindrome is a word that reads the same backwards as forwards, ignoring case.
* The function should return true if the word is a palindrome and false otherwise.

* Example:
* isPalindrome("Level") should return true
* isPalindrome("OpenAI") should return false
*/
const isPlindrome = (word) => {
    const toLowerCaseWord = word.toLowerCase();
    return toLowerCaseWord === toLowerCaseWord.split(" ").reverse("").join("");
};
console.log(isPlindrome("Level"));

/* Assignment 3: Array Filter
 * Write a function that takes an array of strings and a number as arguments.
 * The function should return a new array containing strings from the original array
 * that have a length less than or equal to the provided number.
 * Example:
 * filterArray(["apple", "banana", "cherry", "dates", "elderberry"], 5)
 * should return ["apple", "dates"]*/

const filterArray = (str, num) => {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length <= num) {
            newArr.push(str[i]);
        }
    }
    return newArr;
};

console.log(
    filterArray(["apple", "banana", "cherry", "dates", "elderberry"], 5)
);

/*
 * Assignment 4: Array of Objects
 * Write a function that takes an array of strings as an argument.
 * The function should return a new array that contains objects.
 * Each object in the array should have a single property, with the key being
 * the string from the input array and the value being the square of the string's length.
 *  * Example:
 * stringsToObjects(["cat", "window", "prop"])
 * should return [{cat: 9}, {window: 36}, {prop: 16}]
 */

const stringsToObjects = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj[arr[i]] = obj[arr[i]].length ** 2;
        result.push(obj);
    }
    return result;
};
//
const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins1 = calcAverage(85, 54, 41);
let scoreKoalas1 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win  (${avgDolphins} vs {avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphin win  (${avgKoalas} vs {avgDolphins})`);
    } else {
        console.log("No team wins");
    }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

const originalArray = [1, 2, [3, 4]];
const copiedArray = [...originalArray];

console.log(copiedArray); // Outputs [1, 2, [3, 4]]

// Modifying the inner array in the copied array
copiedArray[2][0] = 77;

console.log(originalArray); // Outputs [1, 2, [99, 4]]
