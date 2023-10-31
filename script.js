let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";

let country = "Uzbekistan";
let continent = "Central Asia";
let population = "35 000 000";

console.log(country, continent, population);
console.log(continent);
console.log(population);

let isIsland = false;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
language = "Uzbek";
console.log(language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
    country +
    " is in " +
    continent +
    " and its " +
    population +
    " million people speak " +
    language;
console.log(description);

if (population > 33) {
    console.log("${country}'s population is above average");
    console.log("");
    console.log();
}

const country1 = "";
const population1 = {};

if ((language = "english" && population < 50 && !isIsland)) {
    console.log(`You should live in ${country}:)`);
} else {
    console.log(`another${continent} `);
}

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital is  ${capitalCity}`;
}
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descPortugal, descGermany, descFinland);

const percentageOfWorld1 = (population) => (population / 7900) * 100;
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log("Mark and John have the same BMI.");
}

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
console.log("+++++++++++++++++++++++");

