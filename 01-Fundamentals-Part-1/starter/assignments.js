// JavaScript Fundamentals – Part 1 

// LECTURE:  Taking Decisions: if / else Statements

// const country = "Italy";
// const continent = "Europe";
// let population = 60000000;
// const averagePopulation = 33000000;

// if(population >= averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${averagePopulation - population} below average`);
// }

// const finlandPopulation = 6000000;
// const avgPopulation = 33000000;
// const description = "Portugal is in Europe, and its 11 million people speak portuguese";

// const newCountry = "Portugal";
// const populationPortugal = 11;
// const languagePortugal = "portuguese";

// const newDescription = `${newCountry} is in ${continent}, and its ${populationPortugal} million people speak ${languagePortugal}`;
// console.log(newDescription);

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(population / 2);
// console.log(population + 1); // NON È SBAGLIATO MA NON ERA DA FARE COSì!
// console.log(population++);
// console.log(population > finlandPopulation);
// console.log(population > avgPopulation);

// const isIsland = false;
// let language;

// console.log(typeof(isIsland)); //boolean
// console.log(typeof(population)); //number
// console.log(typeof(country)); //string
// console.log(typeof(language)); //undefined

// language = "Italian"; 

// LECTURE: Equality Operators: == vs. ===

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// console.log(typeof(numNeighbours));

// if(numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if(numNeighbours > 1) {
//     console.log("More than 1 border")
// } else {
//     console.log('No borders');
// }

// LECTURE: Logical Operators
// She wants to live in a country that speaks english, has less than 50 million people and is not an island.

// const country = "Italy"
// const language = prompt("Which language should be spoken in the country?");
// console.log(language);
// const population = Number(prompt("Maximum population"));
// console.log(population);
// const isIsland = false; 
// console.log(isIsland);

// if(language === "English" && population <= 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

const language = '';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
        break;
}