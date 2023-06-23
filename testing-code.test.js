/* eslint-disable no-undef */
const myFunctions = require('./testing-code.js');

test('expect string to be String', () => {
  expect(myFunctions.capitalize('string')).toBe('String');
});

test('expect STRING to be String', () => {
  expect(myFunctions.capitalize('STRING')).toBe('String');
});

test('expect !string to be !string', () => {
  expect(myFunctions.capitalize('!string')).toBe('!string');
});

test('expect the input to be a string', () => {
  expect(myFunctions.reverseString(12)).toBe('');
});

test('expect string to be gnirts', () => {
  expect(myFunctions.reverseString('string')).toBe('gnirts');
});

test('expect the input to be a string', () => {
  expect(myFunctions.reverseString(12)).toBe('');
});

// sum
test('expect the sum of 2 + 2 to be 4', () => {
  expect(myFunctions.calculator.add(2, 2)).toBe(4);
});

test('expect the sum of 2 + -2 to be 0', () => {
  expect(myFunctions.calculator.add(2, -2)).toBe(0);
});

test('expect the sum of 0.22 + 0.2 to be close to 0.42', () => {
  expect(myFunctions.calculator.add(0.22, 0.2)).toBeCloseTo(0.42);
});

// sub
test('expect the sub of 4 - 2 to be 2', () => {
  expect(myFunctions.calculator.sub(4, 2)).toBe(2);
});

test('expect the sub of 2 - -2 to be -2', () => {
  expect(myFunctions.calculator.sub(2, -2)).toBe(4);
});

test('expect the sub of 2.22 + 2.2 to be close to 0.02', () => {
  expect(myFunctions.calculator.sub(2.22, 2.2)).toBeCloseTo(0.02);
});

// mul
test('expect the mul of 4 * 2 to be 8', () => {
  expect(myFunctions.calculator.mul(4, 2)).toBe(8);
});

test('expect the mul of 2 * -2 to be -4', () => {
  expect(myFunctions.calculator.mul(2, -2)).toBe(-4);
});

test('expect the mul of 2.22 * 2.2 to be close to 4.884', () => {
  expect(myFunctions.calculator.mul(2.22, 2.2)).toBeCloseTo(4.884);
});

// div
test('expect the div of 4 / 2 to be 8', () => {
  expect(myFunctions.calculator.div(4, 2)).toBe(2);
});

test('expect the div of 2 / -2 to be -4', () => {
  expect(myFunctions.calculator.div(2, -2)).toBe(-1);
});

test('expect the div of 2.22 / 2.2 to be close to 1.009', () => {
  expect(myFunctions.calculator.div(2.22, 2.2)).toBeCloseTo(1.009);
});

// caesar cipher
test('expect "attack at dawn" to return "attack at dawn" for shift = 0', () => {
  expect(myFunctions.caesarCipher('attack at dawn', 0)).toBe('attack at dawn');
});

test('expect "attack at dawn" to return "fyyfhp fy ifbs" for shift = 5', () => {
  expect(myFunctions.caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('expect "ATTACK AT DAWN" to return "FYYFHP FY IFBS" for shift = 5', () => {
  expect(myFunctions.caesarCipher('ATTACK AT DAWN', 5)).toBe('FYYFHP FY IFBS');
});

test('expect "AtTaCk At DaWn" to return "BuUbDl Bu EbXo" for shift = 27', () => {
  expect(myFunctions.caesarCipher('AtTaCk At DaWn', 27)).toBe('BuUbDl Bu EbXo');
});

test('expect "this, is a simple text! nothing more." to return "wklv, lv d vlpsoh whaw! qrwklqj pruh." for shift = 27', () => {
  expect(
    myFunctions.caesarCipher('this, is a simple text! nothing more.', 3)
  ).toBe('wklv, lv d vlpsoh whaw! qrwklqj pruh.');
});

// test case 1
const array = [1, 8, 3, 4, 2, 6];

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

// test case 2
const array2 = [2, 16, 7, 8, 3.5, 11.5];

const object2 = {
  average: 8,
  min: 2,
  max: 16,
  length: 6,
};

// analize array
test('expect correct object from array [1,8,3,4,2,6]', () => {
  expect(myFunctions.analizeArray(array)).toMatchObject(object);
});

test('expect correct object from array [2,16,7,8,4,11]', () => {
  expect(myFunctions.analizeArray(array2)).toMatchObject(object2);
});


