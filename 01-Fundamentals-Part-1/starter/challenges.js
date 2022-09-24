// CODING CHALLENGE #1 #2 

// BMI formula
//BMI = mass / height ** 2 // mass / (height * height)

// let markHigherBMI;

// data 1
// const massMarkOne = 78;
// const heightMarkOne = 1.69;
// const massJohnOne = 92;
// const heightJohnOne = 1.95;


// const BMIMarkOne = massMarkOne / heightMarkOne ** 2;
// const BMIJohnOne = massJohnOne / heightJohnOne ** 2;
// console.log(BMIMarkOne, BMIJohnOne);


// markHigherBMI = BMIMarkOne > BMIJohnOne;
// console.log(markHigherBMI);

// if(BMIMarkOne > BMIJohnOne) {
//     console.log(`Mark's BMI (${BMIMarkOne}) is higher than John's (${BMIJohnOne})`);
// } else {
//     console.log(`John's BMI (${BMIJohnOne}) is higher than Mark's (${BMIMarkOne})`);
// }

// data 2
// const massMarkTwo = 95;
// const heightMarkTwo = 1.88;
// const massJohnTwo = 85;
// const heightJohnTwo = 1.76;

// const BMIMarkTwo = massMarkTwo / heightMarkTwo ** 2;
// const BMIJohnTwo = massJohnTwo / heightJohnTwo ** 2;
// console.log(BMIMarkTwo, BMIJohnTwo);

// markHigherBMI = BMIMarkTwo > BMIJohnTwo;
// console.log(markHigherBMI);

// if(BMIMarkTwo > BMIJohnTwo) {
//     console.log(`Mark's BMI (${BMIMarkTwo}) is higher than John's (${BMIJohnTwo})`);
// } else {
//     console.log(`John's BMI (${BMIJohnTwo}) is higher than Mark's (${BMIMarkTwo})`);
// }


// CODING CHALLENGE #3

// const avgScoreDolphins1 = (96 + 108 + 89) / 3;
// const avgScoreKoalas1 = (88 + 91 + 110) / 3;
// console.log(`First match Dolphins: ${avgScoreDolphins1} || Koalas: ${avgScoreKoalas1}`);

// if(avgScoreDolphins1 > avgScoreKoalas1){
//     console.log(`Dolphins have won the match against Koalas`);
// } else if(avgScoreDolphins1 < avgScoreKoalas1) {
//     console.log(`Koalas has won the match against Dolphins`);
// } else {
//     console.log("The match is drawn");
// }

// BONUS 1
// const avgScoreDolphins2 = (97 + 112 + 101) / 3;
// const avgScoreKoalas2 = (109 + 95 + 123) / 3;
// console.log(`Second match Dolphins: ${avgScoreDolphins2} Koalas: ${avgScoreDolphins2}`);

// if(avgScoreDolphins2 > avgScoreKoalas2 && avgScoreDolphins2 >= 100){
//     console.log("Dolphins have won the match against Koalas");
// } else if(avgScoreDolphins2 < avgScoreKoalas2 && avgScoreKoalas2 >= 100) {
//     console.log("Koalas has won the match against Dolphins");
// } else {
//     console.log("The match is drawn");
// }

// BONUS 2
// const avgScoreDolphins3 = (97 + 112 + 101) / 3;
// const avgScoreKoalas3 = (109 + 95 + 106) / 3;
// console.log(`Third match Dolphins: ${avgScoreDolphins3}`);
// console.log(`Third match Koalas:   ${avgScoreDolphins3}`);


// if(avgScoreDolphins3 > avgScoreKoalas3 && avgScoreDolphins3 >= 100){
//     console.log("Dolphins have won the match against Koalas");
// } 
// else if(avgScoreKoalas3 > avgScoreDolphins3 && avgScoreKoalas3 >= 100) {
//     console.log(avgScoreDolphins3, avgScoreKoalas3)
//     console.log("Koalas has won the match against Dolphins");
// }  
// else if(avgScoreDolphins3 === avgScoreKoalas3 
//         && avgScoreKoalas3 >= 100 
//         && avgScoreDolphins3 >= 100
//     ) {
//     console.log("Both have won the match yeah");
// }
// else {
//     console.log("No one wonn the match");
// }

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Data 1: Test for bill values 275, 40 and 430

// Hints: To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// Value X is between 50 and 300, if it's>= 50 && <= 300

const billValue = 430;
let tip;
let condition = billValue >= 50 && billValue <= 300;

// if(billValue >= 50 && billValue <= 300){
//     tip = billValue * 15 / 100;
// } else {
//     tip = billValue * 20 / 100;
// }

condition ? `${tip = billValue * 15 / 100}` : `${tip = billValue * 20 / 100}`;
console.log(`The bill is ${billValue}, the tip is ${tip} and the total price is ${billValue + tip}`);