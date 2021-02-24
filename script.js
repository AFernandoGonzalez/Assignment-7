
// A

// 1. Store Lucas's and John's mass and height in variables
let user1 = 'Lucas'
let user1Weight = 78
let user1Height = 1.69

let user2 = 'Jhon'
let user2Weight = 92
let user2Height = 1.95


// 2. Calculate both their BMIs using the formula
let mass1 = user1Weight
let height1 = user1Weight
const bmiFormula1 = mass1 / (height1 ** 2)
const lucasBmi = Number((bmiFormula1).toFixed(3));
console.log(`This is Lucas total BMI ${lucasBmi}`);
// extra
document.getElementById("lucasBmi").innerHTML = `Lucas total BMI: ${lucasBmi}`;


let mass2 = user2Weight
let height2 = user2Weight
const bmiFormula2 = mass2 / (height2 ** 2)
const jhonBmi = Number((bmiFormula2).toFixed(3))
console.log(`This is Jhon's total BMI ${jhonBmi}`);
document.getElementById("jhonBmi").innerHTML = `Lucas total BMI: ${jhonBmi}`;

// 4. Create a Boolean variable 'lucasHigherBMI'

if (lucasBmi > jhonBmi){
        console.log('Lucas has higher bmi than Jhon');
} else {
        console.log('Lucas bmi is lower than Jhon');
}

document.getElementById("bmiResults").innerHTML = `Lucas has a higher BMI ${jhonBmi} than  ${user2}`;

// B
// The Temperature Converter

const fahrenheit = 60;
const celsius = 20;

// Formula to conver F to C 
const fahrenheitFormula = Number(((fahrenheit - 32) * 5/9).toFixed(1));
// Formula to conver C to F 
const celsiusFormula = (celsius * 9/5) + 32;

console.log(`Fahrenheit to Celsius: Input - ${fahrenheit}F is equals to ${fahrenheitFormula}C`);
console.log(`Celsius to Fahrenheit: Input - ${celsius}C is equals to ${celsiusFormula}F`);

document.getElementById("ftoc").innerHTML = `${fahrenheit}F is equals to ${fahrenheitFormula}C`;
document.getElementById("ctof").innerHTML = `${celsius}C is equals to ${celsiusFormula}F`;



// C
const team1 = 'Nets'
const team2 = 'Knicks'

// Team Scores in a list
// const netsScores = [96,108, 98]
// const knicksScores = [88,91, 110]
// Data bonus 1
const netsScores = [97,112, 101]
const knicksScores = [109,95, 123]
// Data bonus 1
// const netsScores = [97,112, 101];
// const knicksScores = [109,95, 106];


// Total Points
// const netstotalPoints = 96 + 108 + 98
// const knicksTotalPoints = 88 + 91 + 110
// Data bonus 1
const netstotalPoints = 97 + 112 + 101
const knicksTotalPoints = 109 + 95 + 123
// Data bonus 2
// const netstotalPoints = 97 + 112 + 101;
// const knicksTotalPoints = 109 + 95 + 106;

// Formula for averiging
var avgNets = Number(((netstotalPoints / netsScores.length)).toFixed(2)) 
var avgKicks = Number(((knicksTotalPoints / knicksScores.length)).toFixed(2))


// Deciding the Winner

if (avgNets > avgKicks){
    console.log(`The winner for this match is the ${team1} with a average score of ${avgNets} points`);
}
else if (avgNets < avgKicks){
    console.log(`The winner for this match is the ${team2} with a average score of ${avgKicks} points`);
}
else if (avgNets == avgKicks) {
    console.log(`Its a draw!: The Average Scores are ${team1} = ${avgNets} and ${team2} = ${avgKicks} `);
}

document.getElementById("avg1").innerHTML = `${team1} average score : ${avgNets}`;
document.getElementById("avg2").innerHTML = `${team2} average score : ${avgKicks}`;

// document.getElementById("result1").innerHTML = `Congratulations!! The ${team1} has won with ${avgNets} points`;
document.getElementById("result2").innerHTML = `Congratulations!! The ${team2} has won with ${avgKicks} points`;
// document.getElementById("result3").innerHTML = `Its a draw!: The Average Scores are ${team1} = ${avgNets} and ${team2} = ${avgKicks}`;




// Bonus 1: 



