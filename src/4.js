  const getRandomInt = max => Math.floor(Math.random() * max);
const generateCode = () => {
   const variables = ["x", "y", "z"];
   const operations = ["+", "-", "*", "/"];
   const values = [1, 2, 3];
   let code = "";
   for (let i = 0; i < 3; i++) {
      code += variables[getRandomInt(variables.length)] + operations[getRandomInt(operations.length)];
      code += values[getRandomInt(values.length)];
   }
   return code;
}