/* eslint-disable max-len */
// Bitwise Operations
// https://edabit.com/challenge/vvuAkYEAArrZvmp6X

function bitwiseAND(n1, n2) {
  // make the strings into arrays so i can mutate them if the length isn't equal
  const binary1 = n1.toString(2).split('');
  const binary2 = n2.toString(2).split('');

  // declare an empty array to hold the answer
  const answerArr = [];

  // write a function to fill answer array with the right numbers
  const andChecker = (arr1, arr2) => {
    // loop through one array backwards and see where the indexes match '1'
    for (let i = arr1.length - 1; i >= 0; i -= 1) {
      // if both are 1, unshift 1 to the answer array
      // I use unshift because I'm looping backwards thru the array
      // so the numbers need to fill in from the left side, not the right
      if (arr1[i] === '1' && arr2[i] === '1') {
        answerArr.unshift(1);
      } else {
        // otherwise unshift 0
        answerArr.unshift(0);
      }
    }
  };

  // whichever array is longer initially gets to be in the for loop inside the function andChecker
  if (binary1.length > binary2.length) {
    // the shorter array gets a 0 to make it equal in length
    binary2.unshift('0');
    andChecker(binary1, binary2);
  } else {
    binary1.unshift('0');
    andChecker(binary2, binary1);
  }
  // turn the binary number back into a decimal somehow and return the decimal
  return parseInt(answerArr.join(''), 2);
}

function bitwiseOR(n1, n2) {
  // make the strings into arrays so i can mutate them if the length isn't equal
  const binary1 = n1.toString(2).split('');
  const binary2 = n2.toString(2).split('');

  // declare an empty array to hold the answer
  const answerArr = [];

  // write a function to fill answer array with the right numbers
  const orChecker = (arr1, arr2) => {
    // loop through one array backwards and see where the indexes match '1'
    for (let i = arr1.length - 1; i >= 0; i -= 1) {
      // if either are 1, unshift 1 to the answer array
      if (arr1[i] === '1' || arr2[i] === '1') {
        answerArr.unshift(1);
      } else {
        // otherwise unshift 0
        answerArr.unshift(0);
      }
    }
  };

  // whichever array is longer initially gets to be in the for loop inside the function orChecker
  if (binary1.length > binary2.length) {
    // the shorter array gets a 0 to make it equal in length
    binary2.unshift('0');
    orChecker(binary1, binary2);
  } else {
    binary1.unshift('0');
    orChecker(binary2, binary1);
  }
  // turn the binary number back into a decimal somehow and return the decimal
  return parseInt(answerArr.join(''), 2);
}

function bitwiseXOR(n1, n2) {
  // make the strings into arrays so I can mutate them if the length isn't equal
  const binary1 = n1.toString(2).split('');
  const binary2 = n2.toString(2).split('');

  // declare an empty array to hold the answer
  const answerArr = [];

  // write a function to fill answer array with the right numbers
  const xorChecker = (arr1, arr2) => {
    // loop through one array backwards and see where the indexes match '1'
    for (let i = arr1.length - 1; i >= 0; i -= 1) {
      // if both are 1 are 0, unshift 0 to the answer array
      if (
        (arr1[i] === '1' && arr2[i] === '1') ||
        (arr1[i] === '0' && arr2[i] === '0')
      ) {
        answerArr.unshift(0);
      } else {
        // otherwise unshift 1
        answerArr.unshift(1);
      }
    }
  };

  // whichever array is longer initially gets to be in the for loop inside the function xorChecker
  if (binary1.length > binary2.length) {
    // the shorter array gets a 0 to make it equal in length
    binary2.unshift('0');
    xorChecker(binary1, binary2);
  } else {
    binary1.unshift('0');
    xorChecker(binary2, binary1);
  }
  // turn the binary number back into a decimal somehow and return the decimal
  return parseInt(answerArr.join(''), 2);
}

// console.log(bitwiseAND(7, 12)); // 4
// console.log(bitwiseOR(7, 12)); // 15
// console.log(bitwiseXOR(7, 12)); // 11

// console.log(bitwiseAND(32, 17)); // 0
// console.log(bitwiseOR(32, 17)); // 49
// console.log(bitwiseXOR(32, 17)); // 49

// console.log(bitwiseAND(13, 19)); // 1
// console.log(bitwiseOR(13, 19)); // 31
// console.log(bitwiseXOR(13, 19)); // 30
