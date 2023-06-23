#!/usr/bin/node
const capitalize = (string) =>
  string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();

const reverseString = (string) => {
  let aux = '';
  for (let i = string.length - 1; i >= 0; i--) {
    aux += string.charAt(i);
  }
  return aux;
};

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return {
    add,
    sub,
    mul,
    div,
  };
})();

function shiftCharacter(char, shift) {
  let code = char.charCodeAt();
  if (code >= 65 && code <= 90) {
    code += shift;
    if (code > 90) {
      code = 64 + (code % 90);
    }
  } else if (code >= 97 && code <= 122) {
    code += shift;
    if (code > 122) {
      code = 96 + (code % 122);
    }
  }
  return String.fromCharCode(code);
}

function caesarCipher(string, shift) {
  let temp = '';
  for (let i = 0; i < string.length; i++) {
    temp += shiftCharacter(string.charAt(i), shift);
  }
  return temp;
}

// test case 3
const array3 = [null, '4', '11'];

const object3 = {
  average: 8,
  min: 2,
  max: 16,
  length: 6,
};

console.log(analizeArray(array3));

function analizeArray(array) {
  const object = {
    average: array.reduce((curr, prev) => curr + prev, 0) / array.length,
    min: array.reduce((curr, prev) => (curr > prev ? prev : curr), 99999),
    max: array.reduce((curr, prev) => (curr > prev ? curr : prev), 0),
    length: array.length,
  };
  return object;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analizeArray,
};
