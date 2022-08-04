"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayResults = exports.createMultiplePowerBallObj = exports.powerBallDraw = exports.addPowerBallToDraw = exports.validPowerBall = exports.sortNumbers = exports.addNumbersToDraw = exports.randomPowerBall = exports.randomNumber = void 0;
// returns random number (1-35)
function randomNumber() {
    return Math.floor(Math.random() * 35 + 1);
}
exports.randomNumber = randomNumber;
//returns random powerBall number (1-20)
function randomPowerBall() {
    return Math.floor(Math.random() * 20 + 1);
}
exports.randomPowerBall = randomPowerBall;
//returns an array of 7 random numbers (1-35)
function addNumbersToDraw() {
    const numbers = [];
    while (numbers.length != 7) {
        let newDraw = randomNumber();
        newDraw;
        if (!numbers.includes(newDraw))
            numbers.push(newDraw);
    }
    return sortNumbers(numbers);
}
exports.addNumbersToDraw = addNumbersToDraw;
//returns a sorted array
function sortNumbers(array) {
    return array.sort(function (a, b) {
        return a - b;
    });
}
exports.sortNumbers = sortNumbers;
// fills array with 20 draws as long as the powerBall number does not exist
function validPowerBall(newPowerBallDraw) {
    const powerBallNumbers = [];
    while (powerBallNumbers.length < 20) {
        if (!powerBallNumbers.includes(newPowerBallDraw))
            powerBallNumbers.push(newPowerBallDraw);
        return powerBallNumbers;
    }
}
exports.validPowerBall = validPowerBall;
// draws a new powerball and validates uniqueness through the validPowerBall function
function addPowerBallToDraw() {
    let newPowerBallDraw = randomPowerBall();
    let selectedPowerBalls = validPowerBall(newPowerBallDraw);
    selectedPowerBalls;
    if (selectedPowerBalls.includes(newPowerBallDraw)) {
        return newPowerBallDraw;
    }
    else {
        return addPowerBallToDraw();
    }
}
exports.addPowerBallToDraw = addPowerBallToDraw;
//constructs powerball game object
function powerBallDraw() {
    const powerballDrawResults = {
        Numbers: addNumbersToDraw(),
        PowerBall: addPowerBallToDraw(),
    };
    return powerballDrawResults;
}
exports.powerBallDraw = powerBallDraw;
// constructs multiObj with 20 unique powerball draws
function createMultiplePowerBallObj() {
    let count = 1;
    const powerballPossibilities = 21;
    const multiDrawObj = {};
    const duplicateDraws = [];
    while (count < powerballPossibilities) {
        let draw = powerBallDraw();
        if (!duplicateDraws.includes(draw.PowerBall)) {
            duplicateDraws.push(draw.PowerBall);
            multiDrawObj[`${count}`] = draw;
            count++;
        }
    }
    return displayResults(multiDrawObj);
}
exports.createMultiplePowerBallObj = createMultiplePowerBallObj;
// takes multiObj and displays results
function displayResults(obj) {
    for (let key in obj) {
        const { Numbers, PowerBall } = obj[key];
        const results = `
      ----------------------------------------------
      Draw ${key}:
      Numbers: ${Numbers.join(" || ")}
      Powerball: ${PowerBall}
      ----------------------------------------------
      `;
        console.log(results);
    }
}
exports.displayResults = displayResults;
createMultiplePowerBallObj();
