// LECTURE: Functions 
// 1.

// this is a function declaration
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

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
console.log(china);

const percentageOfWorld2 = function (population) {

}