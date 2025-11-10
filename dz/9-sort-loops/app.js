// Дан массив чисел: arr = [1, 40, -5, 10, 0]

// Написать функцию, которая сортирует данный массив при помощи циклов.

// Подсказка:

// Нужно использовать 2 цикла, вложенных друг в друга
// Нужно сравнивать и менять элементы

const arr = [1, 40, -5, 10, 0];

function sortArray(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(sortArray(arr));
