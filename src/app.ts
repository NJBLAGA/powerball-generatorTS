// returns random number (1-35)
export function randomNumber() {
  return Math.floor(Math.random() * 35 + 1);
}

//returns random powerBall number (1-20)
export function randomPowerBall() {
  return Math.floor(Math.random() * 20 + 1);
}

//returns an array of 7 random numbers (1-35)
export function addNumbersToDraw() {
  const numbers: number[] = [];
  while (numbers.length != 7) {
    let newDraw = randomNumber();
    newDraw;
    if (!numbers.includes(newDraw)) numbers.push(newDraw);
  }
  return sortNumbers(numbers);
}

//returns a sorted array
export function sortNumbers(array: number[]) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// fills array with 20 draws as long as the powerBall number does not exist
export function validPowerBall(newPowerBallDraw: number) {
  const powerBallNumbers: number[] = [];
  while (powerBallNumbers.length < 20) {
    if (!powerBallNumbers.includes(newPowerBallDraw))
      powerBallNumbers.push(newPowerBallDraw);
    return powerBallNumbers;
  }
}

// draws a new powerball and validates uniqueness through the validPowerBall function
export function addPowerBallToDraw(): number {
  let newPowerBallDraw = randomPowerBall();
  let selectedPowerBalls: number[] = validPowerBall(
    newPowerBallDraw
  ) as number[];
  selectedPowerBalls;
  if (selectedPowerBalls.includes(newPowerBallDraw)) {
    return newPowerBallDraw;
  } else {
    return addPowerBallToDraw();
  }
}

//interfaces:
interface Results {
  Numbers: number[];
  PowerBall: number;
}

interface MultiResults {
  [Symbol: string]: Results;
}

//constructs powerball game object
export function powerBallDraw() {
  const powerballDrawResults: Results = {
    Numbers: addNumbersToDraw(),
    PowerBall: addPowerBallToDraw(),
  };
  return powerballDrawResults;
}

// constructs multiObj with 20 unique powerball draws
export function createMultiplePowerBallObj() {
  let count: number = 1;
  const powerballPossibilities = 21;
  const multiDrawObj: MultiResults = {};
  const duplicateDraws: number[] = [];
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

// takes multiObj and displays results
export function displayResults(obj: MultiResults) {
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

createMultiplePowerBallObj();
