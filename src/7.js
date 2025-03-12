function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomFloat(min, max) {
  return (Math.random() * (max - min)) + min;
}

function getRandomBool() {
  return Math.random() >= 0.5;
}

function getRandomElement(arr) {
  return arr[getRandomInt(arr.length)];
}