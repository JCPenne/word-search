const wordSearch = (letters, word) => {
  console.log(`letters = ${letters}`);
  if (checkEmptyArr(letters)) {
    return false;
  }
  if (checkHorizontal(letters, word)) {
    console.log(`word found`);
    return true;
  }
  if (checkHorizontal(transpose(letters), word)) {
    console.log(`Word found vertically`);
    return true;
  } else {
    return false;
  }
};

const transpose = function (matrix) {
  let columns = matrix.length;
  let rows = matrix[0].length;
  let result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }
  for (let j = 0; j < columns; j++) {
    for (let k = 0; k < rows; k++) {
      result[k].push(matrix[j][k]);
    }
  }
  return result;
};

const checkEmptyArr = arr => {
  if (arr === '') {
    return true;
  }
};
const checkHorizontal = (arr, word) => {
  const joinedLetters = arr.map(letters => letters.join(''));
  // console.log(`joined letters = ${joinedLetters}`);
  for (l of joinedLetters) {
    if (l.includes(word)) {
      // console.log(`l = ${l}`);
      // console.log(`word = ${word}`);
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;
