// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// // text - текст завдання.
// // category - категорія завдання.
// // priority - пріоритет завдання.
// // Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// // В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   const newObject = {};

//   for (const key in data) {
//     newObject[key] = data[key];
//     // console.log(newObject[key])
//     console.log(data[key])
//   }
//   newObject.completed = completed
//   newObject.category = newObject.category || category

//   newObject.priority = newObject.priority || priority

//   return newObject;
// }

// // console.log(makeTask({}));
// // console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// // console.log(makeTask({ category: "Finance", text: "Take interest" }))
// // console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))
// // console.log(makeTask({ text: "Buy bread" }))

// function task(data) {
//   const array = []

//   for(const object of data) {
//     if (object.id !== undefined) {
//       array.push({...object, age: 25})
//     }
//   }
//   return array

// }

// console.log(task([{ id: 11 }, { id: 2 }, { name: "Anton" }]));

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(...args) {
//     let total = 0;

//     for (const arg of args) {
//       if(args[0] < arg) {
//         total += arg
//       }
//     }

//     return total;

//   }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(array, ...args) {
//   const matches = [];

//   for(const arg of args) {
//     if(array.includes(arg)) {
//       matches.push(arg)
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return `Returning all books`;
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     this.books.splice(bookName);
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     this.books.splice(oldName, 1, newName);
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexOfPotion = this.potions.indexOf(potionName)
//     this.potions.splice(indexOfPotion, 1)

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const indexOfName = this.potions.indexOf(oldName)
//     this.potions.splice(indexOfName, 1, newName)
//   },
// };

// console.log(atTheOldToad.potions)
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// const friends = ["ropan", "mex", "west", "aezering"]

// const friendsInUpeerCase = friends.map(friend => friend.toUpperCase())
// console.log(friendsInUpeerCase)

// const students = [
//     {name: "Poli", scores: 40},
//     {name: "Kiwi", scores: 70},
//     {name: "Ajax", scores: 90},
//     {name: "Mango", scores: 100}
// ]

// const names = students.map(student => student.name)
// console.log(names)

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];

// const courses = students.flatMap(student => student.courses)
// console.log(courses)

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValue = values.filter(value => value >= 0)
// console.log(positiveValue)

// const negativeValue = values.filter(value => value < 0)
// console.log(negativeValue)

// const biggestValue = values.filter(value => value > 1000)
// console.log(biggestValue)

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allcourses = students.flatMap((student) => student.courses);
console.log(allcourses);

const uniqeCourses = allcourses.filter((course, index, array) => {
  return array.indexOf(course)
  
});
console.log(uniqeCourses);
