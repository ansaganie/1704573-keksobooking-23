const getRandomInt = (from, to) => {
  if (from === to) {
    return from;
  }
  if (from < 0 || from > to) {
    return undefined
  };

  const randomInt = Math.random(); //0-0.99;
  const randomNegNumber = randomInt * (from - to); //getting random negative integer
  const wholeNumber = Math.round(randomNegNumber);
  return wholeNumber + to; //makes random number positive
};


const getRandomDecimal = (from, to, precision) => {
  if (from == to) {
    return from;
  }
  if (from < 0 || from > to) {
    return undefined;
  }

  const randomInt = Math.random();
  const randomNegNumber = randomInt * (from - to);
  const result = randomNegNumber + to;
  return result.toFixed(precision);
};

getRandomDecimal();
getRandomInt();
