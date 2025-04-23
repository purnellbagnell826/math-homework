function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15
