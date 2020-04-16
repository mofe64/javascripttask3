const taskFunction = (parmater) => {
  divisibleNumber = [];
  for (let i = 0; i < parmater; i++) {
    divisibleNumber[i] = i + 1;
    if (
      divisibleNumber[i] % 2 === 0 &&
      divisibleNumber[i] % 3 === 0 &&
      divisibleNumber[i] % 5 === 0
    )
      divisibleNumber[i] = "yu-gi-0h";
    if (divisibleNumber[i] % 2 === 0 && divisibleNumber[i] % 3 === 0)
      divisibleNumber[i] = "yu-gi";
    if (divisibleNumber[i] % 2 === 0) divisibleNumber[i] = "yu";
    if (divisibleNumber[i] % 3 === 0) divisibleNumber[i] = "gi";
    if (divisibleNumber[i] % 5 === 0) divisibleNumber[i] = "oh";
  }
  return divisibleNumber;
};

taskFunction(100);
console.log(divisibleNumber);
taskFunction(50);
console.log(divisibleNumber);
taskFunction(10);
console.log(divisibleNumber);
