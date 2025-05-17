function add(x, y) {
  console.log(`Adding ${x} and ${y}:`, x + y);
}

function subtract(x, y) {
  console.log(`Subtracting ${x} from ${y}`.sub(y));
}

function multiply(x, y) {
  console.log(`Multiplying ${x} and ${y}:`, x * y);
}

function divide(x, y) {
  if (y === 0) {
    return "Error: Division by zero";
  } else {
    console.log(`Dividing ${x} by ${y}`, x / y);
  }
}
