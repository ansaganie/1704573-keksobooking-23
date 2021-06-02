let getRandomInt = (from, to) => {
  if (from == to) {
    return from;
  }
  if (from < 0 || from > to) {
    return undefined
  };

  let randomInt = Math.random(); //0-0.99;
  //console.log('random int' + randomInt);
  let randomNegNumber = randomInt * (from - to); //getting random negative integer
  let wholeNumber = Math.round(randomNegNumber);
  return wholeNumber + to; //makes random number positive
}
