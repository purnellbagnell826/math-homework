function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let num = 0;
for (let i = 0; i < 5; i++) {
    let num = getRandomInt(10);
    console.log(num);
}
