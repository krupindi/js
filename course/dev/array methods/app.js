//------------------------------------------------
// метод fopEach
// const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//   console.log(`Раунд ${i + 1}: ${el}`);
// }

// score.forEach((scoreEl, i, arr) => {
//   console.log(`Раунд ${i + 1}: ${scoreEl} ${arr}`);
// });

//------------------------------------------------
// метод map
// const transactionInUSD = [100, -7, -10, 100];

// const transactionInRUB = [];
// for (const transaction of transactionInUSD) {
//   transactionInRUB.push(transaction * 60);
// }

// const transactionInRUB2 = transactionInUSD.map(
//   (transaction) => transaction * 60
// );

// console.log(transactionInUSD);
// console.log(transactionInRUB2);

//------------------------------------------------
// метод filter
// const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }

// const positiveRUBOperations = operations
//   .filter((operation) => operation > 0)
//   .map((operation) => operation * 60);

// console.log(positiveRUBOperations);

//------------------------------------------------
// практика
// const prices = [
//   [100, 200],
//   [120, 100],
//   [200, 350],
// ];

// const result = prices
//   .map((product) => product[1] - product[0])
//   .filter((price) => price > 0);

// console.log(result);

//------------------------------------------------
// метод reduce
// const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
//   balance += operation;
// }

// const finalBalance = operations.reduce((acc, operation, i) => {
//   console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
//   return (acc += operation);
// }, 0);

// console.log(finalBalance);

// const minElement = operations.reduce((acc, operation) => {
//   if (operation > acc) {
//     return acc;
//   } else {
//     return operation;
//   }
// }, 0);

// console.log(minElement);

//------------------------------------------------
// практика
// const arr = [2, 4, 4, 10];

// const avg = arr.reduce((acc, el) => acc + el / arr.length, 0);
// console.log(avg);

//------------------------------------------------
// метод find и findindex
// const arr = [2, 4, 4, 10];

// let elGT5;
// for (const el of arr) {
//   if (el > 6) {
//     elGT5 = el;
//     break;
//   }
// }

// elGT5 = arr.find((el) => el > 5);
// elGT5Index = arr.findIndex((el) => el > 5);
// console.log(elGT5);
// console.log(elGT5Index);

//------------------------------------------------
// метод some
// const arr = [2, 4, 4, 10, 20];

// const element = 4;
// function some(array, element) {
//   const res = array.find((el) => el === element);
//   return res == undefined ? false : true;
// }

// console.log(some(arr, element));

// console.log(arr.some((el) => el === 2));

//------------------------------------------------
// метод flat и flatMap
// const prices = [
//   [2, 4],
//   [3, 4],
//   [10, [20, 50]],
// ];

// const res = prices.flat(2);
// const res2 = prices.flatMap((el) => el.concat([1]));
// console.log(res);
// console.log(res2);

//------------------------------------------------
// метод sort
// const users = ['Вася', 'Маша', 'Катя', 'Аня'];
// const operation = [100, -300, -100, 50, 400];

// console.log(users);
// users.sort();
// operation.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });

// operation.sort((a, b) => a - b);

// console.log(users);
// console.log(operation);

//------------------------------------------------
// метод fil
// const arr2 = new Array(5);
// console.log(arr2.fill(1, 0, 3));

// const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
// console.log(arr3);
