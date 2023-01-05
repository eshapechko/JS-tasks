// Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемым значением будет сумма значений всех аргументов.

// Функция должна содержать не менее 1 аргумента в каждом наборе.
// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2

function calculate(...args1) {
  return (...args2) =>
    [...args1, ...args2].reduce((sum1, sum2) => sum1 + sum2, 0);
}

console.log(calculate(2, 4)(3, 8, 1)); // should return 17
