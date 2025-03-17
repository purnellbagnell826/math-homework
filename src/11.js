function getRandomMathCode() {
  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4];
  let code = '';
  
  for (let i = 0; i < 5; i++) {
    code += `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]}`;
  }
  
  return code;
}
