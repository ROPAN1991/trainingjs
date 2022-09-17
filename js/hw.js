// // Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// // При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// // а твій варіант не працює тому, що на кажній ітерації циклу форс тіло цикла повертає одне з тру або фолс. таким чином ти написав цикл, який робить тільки одну(першу) ітерацію

function includes(array, value) {
    for (const arr of array) {
      if (arr === value) {
        return true;
      }
    }
    
    return false;
  }

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
console.log(includes());


