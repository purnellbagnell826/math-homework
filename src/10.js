  const num1 = Math.random() * 10;
const num2 = Math.random() * 10;
console.log(`${num1} + ${num2} =`);
const sum = num1 + num2;
document.getElementById("result").innerHTML = `${sum}`;