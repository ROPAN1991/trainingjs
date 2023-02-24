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

// const numbers = [1,2,2,3,3,4,5]
// const oldSum = 20

// const filteredNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index)
// console.log(filteredNumbers)

// const reducedFilteredNumbers = filteredNumbers.reduce((acc, value) => oldSum + acc + value)

// console.log(reducedFilteredNumbers)

// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(pizzaName);
//     }
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// const changeEven = (numbers, value) => {

//   const newArray = []
//   numbers.forEach(element => {
//     if(element % 2 === 0) {
//       element += value
//     }
//     newArray.push(element)
//   });
//   return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ]
// const getUsers = (users) => {
//     return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index)
// }

// console.log(getUsers(users))

// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive)
//  };

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line

//   const totalPlayTime = playtimes;

//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line

//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc += player.playtime / player.gamesPlayed, 0);

//   const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];

//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => {return acc + player.playtime / player.gamesPlayed}, 0)

//   console.log(totalAveragePlaytimePerGame)

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a,b) => a.localeCompare(b))
// console.log(names)

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a,b) => a.friends.length - b.friends.length).map(user => user.name)
//  };

// console.log(getNamesSortedByFriendCount(users));

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return users.reduce((total, user) => total += user.balance, 0)
// };

// console.log(getTotalBalanceByGender(users))

// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(pizzaName);
//     }
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice

//   // Change code above this line
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   const newArray = []

//   numbers.forEach(number => {
//     if(number % 2 === 0) {
//       number += value
//     }
//     newArray.push(number)
//   })
//   // Change code above this line
//   return newArray
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// function changeEven(numbers, value) {

//   const newArray = []
//   numbers.forEach(element => {
//     if(element % 2 === 0) {
//       element += value
//     }
//     newArray.push(element)
//   });
//   return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// console.log(eachElementInFirstIsEven)
// console.log(eachElementInFirstIsOdd)

// console.log(eachElementInSecondIsEven)
// console.log(eachElementInSecondIsOdd)

// console.log(eachElementInThirdIsEven)
// console.log(eachElementInThirdIsOdd)

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((initialValue, playtime) => {
//   return initialValue + playtime
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime)

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   const newArray = []
//   // Change code below this line

//   numbers.forEach(number => {
//     if(number % 2 === 0) {
//       number += value
//     }
//     newArray.push(number)
//   })

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

//   // Change code above this line
//   return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => {

//    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)

// }

// console.log(getNamesSortedByFriendCount(users))

// function greetingGuest (greeting) {
//   console.log(`${greeting}, ${this.username}`)
// }

// const mango = {
//   username: "Mango"
// }

// const poly = {
//   username: "Poly"
// }

// greetingGuest.call(mango, "Hello dear")
// greetingGuest.call(poly, "Welcome")

// function greetingGuest (greeting) {
//   console.log(`${greeting}, ${this.name}`)
// }

// const mango = {
//   name: "Mango"
// }

// const poly = {
//   name: "Poly"
// }

// greetingGuest.call(mango, "Welcome")
// greetingGuest.call(poly, "Hello")

// function greet(clientName) {
//   return `${clientName}, Hello, welcome to ${this.service}`
// }

// const steam = {
//   service: "Steam"
// }

// const steamGreater = greet.bind(steam)
// console.log(steamGreater("ROPAN"))

// const google = {
//   service: "Google"
// }

// const googleGreeter = greet.bind(google)
// console.log(googleGreeter("RUBAN"))

// function greeting(greeting) {
//   console.log(`${greeting}, ${this.name}`)
// }

// const mango = {
//   name: "Mango"
// }

// const poly = {
//   name: "Poly"
// }

// greeting.call(mango, "Welcome")
// greeting.call(poly, "Hello, dear")

// function greet(greeting) {
//   return `${greeting}, Hello, welcome to ${this.service}`
// }

// const steam = {
//   service: "Steam"
// }

// const steamGreeter = greet.bind(steam)

// console.log(steamGreeter("Ropan"))

// const google = {
//   service: "Google"
// }

// const googleGreeter = greet.bind(google)
// console.log(googleGreeter("Ruban"))

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com")
// console.log(mango)
// const poly = new User("Poly", "poly@mail.com")
// console.log(poly)

// class User {
//   name;
//   #email;
//   constructor({ email, name }) {
//     this.#email = email;
//     this.name = name;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }

//   get name() {
//     return this.name;
//   }

//   set name(newName) {
//     return (this.name = newName);
//   }
// }

// const mango = new User({ name: "Mango", email: "mangomangoshake@mail.com" });

// console.log(mango.email);
// mango.email = "mango@mail.com";
// console.log(mango.email);
// mango.name = "MANGOOOOO";
// console.log(mango.name);
// mango.name = "MNG"
// console.log(mango.name);

// class User {
//   name
//   #email
//   constructor({name, email}) {
//     this.name = name
//     this.#email = email
//   }

//   get name () {
//     return this.name
//   }

//   set name (newName) {
//     return this.name = newName
//   }

//   get email() {
//     return this.#email
//   }

//   set email(newEmail) {
//     return this.#email = newEmail
//   }
// }

// const poly = new User ({name: "Poly", email: "poly@mail.com" })
// console.log(poly)
// poly.email = "poliSuperP@mail.com"
// poly.name = "POLYYYYYYYYYYYYYYYY"
// console.log(poly.email)
// console.log(poly.name)

// class User {
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     return (this.#role = newRole);
//   }
// }

// const mango = new User({email: "mango@mail.com", role: this.Roles.ADMIN})

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {

//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if(message.length <= maxLength) {
//     result = message
//   } else {
//     result = message.slice(0, maxLength) + "..."
//   }

//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16))
// console.log(formatMessage("Curabitur ligula sapien", 23))
// console.log(formatMessage("Vestibulum facilisis purus nec", 20))

// const user = {
//   name: "Petya",
//   showThis() {
//     return this
//   },
//   showName() {
//     return this.name
//   }
// }

// console.log(user.showThis())
// console.log(user.showName())

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, fruits.length-1);
const lastThreeEls = fruits.slice(fruits.length-3);

console.log(firstTwoEls)
console.log(nonExtremeEls)
console.log(lastThreeEls)