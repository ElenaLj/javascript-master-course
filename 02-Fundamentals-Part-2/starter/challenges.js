// CODING CHALLENGES
// 1

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const dolphinsAvg = calcAverage(85, 54, 41);
const koalaAvg = calcAverage(103, 68, 57);

console.log(dolphinsAvg, koalaAvg);

const checkWinner = function (avgDolphins, avgKoalas) {
    if ((avgDolphins * 2) >= avgKoalas) {
        return console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else {
        return console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
}
const winnerTeam = checkWinner(dolphinsAvg, koalaAvg);