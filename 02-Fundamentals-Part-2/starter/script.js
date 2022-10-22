// LECTURE: Functions 
// 1.

// Function Declaration
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryOne = 'Italy';
const populationOne = '60';
const capitalCityOne = 'Rome';

const Italy = describeCountry('Italy', 60, 'Rome');
console.log(Italy);

const countryTwo = 'France';
const populationTwo = '90';
const capitalCityTwo = 'Paris';

const France = describeCountry(countryTwo, populationTwo, capitalCityTwo);
console.log(France);

// 2.

// Function Declaration 
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const chinaPopulation = percentageOfWorld1(1441);
const francePopulation = percentageOfWorld1(67);
const portugalPopulation = percentageOfWorld1(10);
console.log(chinaPopulation, francePopulation, portugalPopulation);

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
percentageOfWorld2(1441);
console.log(percentageOfWorld2(1441));

// 3. 

//Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;
const chinaPop = percentageOfWorld3(1441);
console.log(chinaPop);

// 4.

// Functions calling other functions
const china = describePopulation('China', 1441);
const italy = describePopulation('Italy', 60);
const germany = describePopulation('Germany', 80);

console.log(china, italy, germany);

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world`;
}