function getRandomMathHomework() {
  // Generate a random equation and solution
  const equation = `${getRandomNumber()} + ${getRandomNumber()}`;
  const solution = equation.split('+').reduce((a, b) => parseInt(a) + parseInt(b));
  
  return `
    <h1>Math Homework</h1>
    <p>Here is your math homework for today:</p>
    <pre>${equation}</pre>
    <p>What is the solution to this equation?</p>
    <form>
      <input type="text" id="solution">
      <button type="submit">Submit</button>
    </form>
  `;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
