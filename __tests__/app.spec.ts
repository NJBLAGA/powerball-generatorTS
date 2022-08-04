import {
  randomNumber,
  randomPowerBall,
  addNumbersToDraw,
  sortNumbers,
  validPowerBall,
} from "../src/app";

describe("randomNumber function", () => {
  test("returns a random number above 0", () => {
    let numberFloor = 0;
    expect(randomNumber()).toBeGreaterThan(numberFloor);
  });
  test("returns a random number below 36", () => {
    let numberCeil = 36;
    expect(randomNumber()).toBeLessThan(numberCeil);
  });
});

describe("randomPowerBall function", () => {
  test("returns a random number above 0", () => {
    let numberFloor = 0;
    expect(randomPowerBall()).toBeGreaterThan(numberFloor);
  });
  test("returns a random number below 21", () => {
    let numberCeil = 21;
    expect(randomPowerBall()).toBeLessThan(numberCeil);
  });
});

describe("addNumbersToDraw function", () => {
  test("returns an array of exactly 7 numbers", () => {
    let arrayLength = 7;
    expect(addNumbersToDraw()).toHaveLength(arrayLength);
  });
});

describe("sortNumbers function", () => {
  test("sorts an unsorted array", () => {
    let unsortedArray: number[] = [6, 7, 4, 5, 3, 1, 2];
    let sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7];
    expect(sortNumbers(unsortedArray)).toEqual(sortedArray);
  });
});

describe("validPowerBall function", () => {
  test("add powerBall number to array if not found", () => {
    let powerBallNumbers: number[] = [5];
    let newPowerBallDraw: number = 5;
    expect(validPowerBall(newPowerBallDraw)).toEqual(powerBallNumbers);
  });
});
