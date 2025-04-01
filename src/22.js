function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}

function subtract(a, b) {
  console.log(`Subtracting ${a} from ${b}`);
  return a - b;
}

function multiply(a, b) {
  console.log(`Multiplying ${a} by ${b}`);
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    console.log(`Dividing ${a} by ${b}`);
    return a / b;
  } else {
    throw new Error('Division by zero is not allowed.');
  }
}
