function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let myArray = new Array();
for (let i = 0; i < 10; i++) {
  myArray.push(getRandomInt(10));
}
console.log(myArray);
