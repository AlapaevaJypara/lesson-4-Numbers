// let userNumber = +prompt("Введите любое положительное число");
// let sum = (userNumber * (userNumber + 1)) / 2;
// document.write(sum);

//задание2
// const SOUVENIR_WEIGHT = 75;
// const TRINKET_WEIGHT = 112;

// let souvenir = Number(prompt("Введите кол-во сувениров"));
// let trinket = Number(prompt("Введите кол-во бездлушек"));

// let totalWeight = souvenir * SOUVENIR_WEIGHT + (trinket * TRINKET_WEIGHT);

// document.write(`Общий вес составляет: ${totalWeight}гр. `);

//задание3
// const DEPOSIT_RATE = 0.04;

// let inititalDeposit = Number(prompt("Введите первоначальную сумму"));

// let firstYearIncome = DEPOSIT_RATE * inititalDeposit;
// let firstYearTotal = firstYearIncome + inititalDeposit;

// let secondYearIncome = DEPOSIT_RATE * firstYearTotal;
// let secondYearTotal = secondYearIncome + firstYearTotal;

// let thirdYearIncome = DEPOSIT_RATE * secondYearTotal;
// let thirdYearTotal = thirdYearIncome + secondYearTotal;

// let grandTotal = firstYearTotal + secondYearTotal + thirdYearTotal;

// document.write(`Первоначальная сумма: ${inititalDeposit} <br>
//   Сумма за 1 год: ${firstYearTotal.toFixed(2)} <br>
//   Сумма за 2 год: ${secondYearTotal.toFixed(2)} <br>
//   Сумма за 3 год: ${thirdYearTotal.toFixed(2)} <br>
//   Всего за 3 года: ${grandTotal.toFixed(2)}
// `);

//задание 4

let a = Number(prompt("Введите число а"));
let b = Number(prompt("Введите число b"));

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
