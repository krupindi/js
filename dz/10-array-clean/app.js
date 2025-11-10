// Напишите функцию, которая принимает:

// Массив чисел
// Функцию удаления элементов
// И возвращает отфильтрованный массив. При это функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить.

const array = [1, 2, 3, 4, 5, 6];
const removeNnumber2 = (num) => num === 2;

function filterArray(arr, shouldRemove) {
  return arr.filter((arr) => !shouldRemove(arr));
}

console.log(filterArray(array, removeNnumber2));
