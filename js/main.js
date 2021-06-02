let getRandomInt = (from, to) => {
  if (from == to) {
    return from;
  }
  if (from < 0 || from > to) {
    return undefined
  };

  let randomInt = Math.random(); //0-0.99;
  let randomNegNumber = randomInt * (from - to); //getting random negative integer
  let wholeNumber = Math.round(randomNegNumber);
  return wholeNumber + to; //makes random number positive
}


let getRandomDecimal = (from, to, precision) => {
  if (from == to) {
    return from;
  }
  if (from < 0 || from > to) {
    return undefined
  };

  let randomInt = Math.random();
  let randomNegNumber = randomInt * (from - to);
  let result = randomNegNumber + to;
  return result.toFixed(precision);
}
