// робота над помилками --------------------------МАСИВИ

// 1 - Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
// НЕ ЗАБУВАТИ ПРО ЛІТЕРАЛ МАСИВУ [] НАКОЛО ЗНАЧЕНЬ ЯКІ ТРЕБА ПОВЕРНУТИ

// function getExtremeElements(array) {
//     // Change code below this line
//   return array = [array[0], array[array.length -1]]
//     // Change code above this line
//   }

// 2 - Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord). Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// НЕ ЗАБУВАТИ ПРО ВЛАСТИВІСТЬ length - довжина масиву.

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  return message.split(" ").length * pricePerWord
//     // Change code above this line
//  }

// 3 Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// НЕ ЗАБУВАТИ ПРО СТАРТОВЕ ЗНАЧЕННЯ 0 В МЕТОДІ slice ВІД ЯКОГО І ДО ЯКОГО ЕЛЕМЕНТА ПОТРІБНО ВІДРІЗАТИ МАСИВ. В ДАНОМУ ВИПАДКУ ВІД 0 до maxLength (Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.)

// 1) Стоврюємо новий масив newArray в якому зшиваємо два масиви firstArray і secondArray
// 2) Пишемо перевірку, якщо кількість всіх елементів вихіного масиву (newArray.length) більша за максимально допустиму довжину нового масиву maxlength, використовуючи метод slice створимо копію вихідного масиву, яка міститиме максимальну кількість елементів від 0 до maxLength.
// 3) Повернемо новий масив

// function makeArray(firstArray, secondArray, maxLength) {
// let newArray = firstArray.concat(secondArray)
//     if(newArray.length > maxLength) {
//         return newArray.slice(0, maxLength)
//     }
//   return newArray
//   }

// 4 Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// НЕ ЗАБУВАТИ ПРО АЛГОРИТМ ВИРІШЕННЯ ЗАДАЧІ:
// 1) СТВОРЮЄМО ЗМІННУ ЯКА ПРИЙМАТИМЕ ЦІЛЕ ЧИСЛО
// 2) ПЕРЕБИРАЄМО МАСИВ ЦИКЛОМ for
// 3) ВИРАХОВУЄМО СУММУ ВСІХ ЦІЛИХ ЧИСЕЛ ВІД ОДИНИЦІ І ДО ЦЬОГО ЧИСЛА
// 4) ПОВЕРТАЄМО РЕЗУЛЬТАТ

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// 5 Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// НЕ ЗАБУВАТИ ПРО АЛГОРИТМ ДІЙ
// 1) СТВОРЮЄМО ЗМІННУ total, ЯКА ДОРІВНЮЄ 0
// 2) ПЕРЕБИРАЄМО ВСІ ЧИСЛА МАСИВУ order
// 3) ОБЧИСЛЮЄМО ЗАГАЛЬНУ СУМУ ВСІХ ЙОГО ЕЛЕМЕНТІВ І ЗБЕРІГАЄМО В ЗМІННУ total
// 4) ПОВЕРТАЄМО РЕЗУЛЬТАТ

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// function calculateTotalPrice(order) {
//     let total = 0;

//     for(let i = 0; i < order.length; i = i + 1) {
//       total = total + order[i]
//     }

//     return total;
//   }

// 6 Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// 1) СТВОРЮЄМО ЗМІННУ В ЯКУ ПРИСВОЄМО РЯДОК РОЗДІЛЕНИЙ split(" ")
// 2) СТОВРИМО ЗМІННУ В ЯКІЙ ПРИПУСТИМО ЩО ПЕРШИЙ АРГУМЕНТ З РЯДКУ string - ЦЕ НАЙДОВШЕ СЛОВО ЦЬОГО РЯДКУ
// 3) ПЕРЕБЕРЕМО ПОЕЛЕМЕНТНО  РОЗДІЛЕНИЙ split РЯДОК ПО ВСІЙ ДОВЖЕНІ
// 4) В ТІЛІ ЦИКЛУ СТВОРИМО УМОВУ, ЯКА ПОРІВНЮВАТИМЕ КОЖЕН ЕЛЕМЕНТ ЦИКЛУ splitString[i].length ЗІ ЗМІННОЮ, ЯКУ МИ УМОВНО ВИЗНАЧИЛИ ЯК НАЙДОВШИЙ ЕЛЕМЕНТ РЯДКУ longestWord.length ТЕ СЛОВО splitString[i].length В ЯКОМУ КІЛЬКІСТЬ СИМВОЛІВ БУДЕ БІЛЬШОЮ НІЖ КІЛЬКІСТЬ СИМВОЛІВ В УМОВНОМУ longestWord.length І БУДЕ НАЙДОВШИМ І ПЕРЕЗАПИШЕТЬСЯ В longestWord.
// 5) ПОВЕРТАЄМО НОВЕ ЗНАЧЕННЯ longestWord

// function findLongestWord(string) {
//   const splitString = string.split(" ");
//   let longestWord = splitString[0];

//   for (let i = 0; i < splitString.length; i += 1) {
//     if(splitString[i].length > longestWord.length) {
//         longestWord = splitString[i]
//     }
//   }
//   return longestWord
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// 7 Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// 1) СТВОРЮЄМО ЗМІННУ ДЛЯ ЗБЕРІГАННЯ НОВОГО МАСИВУ
// 2) ПЕРЕБИРАЄМО ЦИКЛОМ for ЗНАЧЕННЯ ВІД min до max, ВКЛЮЧНО з max
// 3) В ТІЛІ ЦИКЛУ ПУШИМО В МАСИВ КОЖЕН ЕЛЕМЕНТ (і) З ЦИКЛУ
// 4) ПОВЕРТАЄМО НОВИЙ МАСИВ

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// 8 Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// УВАЖНО СЛІДКУВАТИ ЗА СИНТАКСИСОМ, ПАРАМЕТР fruit ПІД КАПОТОМ ЦЕ ОКРЕМИЙ ЕЛЕМЕНТ З МАСИВУ fruits ТОМУ НАМ ДОСТАТНЬО ЗАПИСАТИ В return МЕТОД INCLUDES ПРИМІНИВШИ ЙОГО ДО МАСИВУ fruits.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line
//   }

// 9 Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// 1) СТВОРЮЄМО ЗМІННУ newArray і присвоїмо їй пустий масив
// 2) ПЕРЕБЕРЕМО ВСІ ЕЛЕМЕНТИ ПЕРШОГО МАСИВУ array1
// 3) НАПИШИМО ПЕРЕВІРКУ З УМОВОЮ, ЯКЩО В ДРУГОМУ МАСИВІ array2 Є ЕЛЕМЕНТИ, ЯКІ СПІВПАДАЮТЬ З ЕЛЕМЕНТАМИ ПЕРЕБРАНОГО МАСИИВУ array[i], ТО ЦІ ЕЛЕМЕНТИ Є СПІЛЬНИМИ В ОБОХ МАСИВАХ. ТОМУ ДОДАМО ЇХ В НОВИЙ МАСИВ newArray.push(array[i])
// 4) ПОВЕРНЕМО НОВИЙ МАСИВ newArray

// function getCommonElements(array1, array2) {
//     let newArray = []
//     for (let i = 0; i < array1.length; i += 1) {
//         if(array2.includes.array1[i]) {
//             newArray.push(array1[i])
//         }
//     }
//     return newArray
// }

// 10 Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// 1) СВТОРЮЄМО ЗМІННУ В ЯКУ ЗБЕРІГАЄМО ПУСТИЙ МАСИВ
// 2) ПЕРЕБИРАЄМО ВСІ ЕЛЕМЕНТИ МАСИВУ ВІД start ДО end ВКЛЮЧНО.
// 3) ПИШЕМО УМОВУ, ЯКЩО ІТЕРАБЕЛЬНИЙ ЕЛЕМЕНТ МАСИВУ ДІЛИТЬСЯ НА 2 БЕЗ ОСТАЧІ ПУШИМО ЙОГО В ПУСТИЙ МАСИВ
// 4) ПОВЕРТАЄМО НОВИЙ МАСИВ ЗІ ЗНАЧЕНННЯМИ ЗАПУШЕНИМИ ПО УМОВІ

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// 11 Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// ПЕРЕРВАТИ ЦИКЛ МОЖНА В ЛЮБИЙ МОМЕНТ ДЛЯ ЦЬОГО ІСНУЄ ОПЕРАТОР break, ЯКИЙ ПОВНІСТЮ ПЕРЕРИВАЄ ВИКОНАННЯ ЦИКЛУ І ПЕРЕДАЄ УПРАВЛІННЯ НА РЯДОК З ЙОГО ТІЛОМ

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

// 12 Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// ЯКЩО ЦИКЛ ЗНАХОДИТЬСЯ В ТІЛІ ФУНКЦІЇ ТО ОПЕРАТОР break НЕ ПРИПИНЯЄ ВИКОНАННЯ ФУНКЦІЇ, А ТІЛЬКИ ПЕРЕРИВАЄ ЦИКЛ. ДЛЯ ТОГО ЩОБ ПЕРЕРВАТИ ВІДРАЗУ ВИКОНАННЯ ЦИКЛУ І ФУНКЦІЇ ВИКОРИСТОВУЮТЬ ОПЕРАТОР return

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
// }

// 13 Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// 1) ПЕРЕБИРАЄМО ЦИКЛОМ for...of ЕЛЕМЕНТИ МАСИВУ array
// 2) ПИШЕМО УМОВУ В ТІЛІ ЦИКЛУ ПЕРЕВІРКУ, ЯКЩО ЗНАЧЕННЯ value ПРИСУТНЄ МАСИВІ array, ПОВЕРТАЄМО true, ЯКЩО НІ, ПОВЕРТАЄМО false

// function includes(array, value) {
//   for (let arr of array) {
//     if (arr === value) return true;
//   }
//   return false;
// }

// const friends = ["Mango", "Poli", "Ajax"];

// for (let i = 0; i < friends.length; i += 1) {
//   console.table(friends[i])
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// firstEl = friends[0];
// secondEl = friends[1];

// friends[0] = "Kiwi";
// friends[1] = "Pongo";

// console.log(friends);

// console.log(friends.length);
// const lastElement = friends.length - 1;
// console.log(lastElement);

// const clients = ["Alex", "John", "Piter"];
// const clientFind = "John";

// 1) варіант // let message;

// let message = `Clients not find`;

// for (let i = 0; i < clients.length; i += 1) {
//   if (clientFind === clients[i]) {
//     message = `Clients find`;
//   }
// // 1) варінат //   message = `Clients not find`
// }

// console.log(message);

// const numbers = [12, 7, 20, 4, 19, 8, 22, 5, 11, 9];

// const treshhold = 10;

// for (let number of numbers) {
//   if (number > treshhold) {
//     console.log(`Числа більші за 10: ${number}`);
//     continue;
//   }
// }

// const name = "Mango"

// console.log(name.split(""))

// const helloW = "Hello world this is Javascript"

// console.log(helloW.split(" "))

// const words = ["Hello", "world", "javascript", "its", "interesting"]

// console.log(words.join(""))
// console.log(words.join(" "))
// console.log(words.join("$"))

// const friends = ["west", "slash", "mex"];

// friends.push("iceman", "demonx");

// console.log(friends);

// friends.pop();

// console.log(friends);

// friends.pop()
// console.log(friends)

// friends.unshift('casper')
// console.log(friends)

// friends.shift()
// console.log(friends)

// const numbers = [9,8,7,6,5,4,3,2,1]

// const findNumbers = numbers.slice(5, 7)

// console.log(findNumbers)

// const scores = [1, 2, 3, 4, 5];

// const deleteScores = scores.splice(1, 2)

// console.log(deleteScores)

// console.log(scores)

// const friends = ['west', 'casper', 'slash', 'meh', 'iceman', 'longman']

// const deleteFriend = friends.splice(3, 3)

// console.log(deleteFriend)

// console.log(friends)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const deleteNumebers = numbers.splice(2, 5)

// console.log(deleteNumebers)

// console.log(numbers)

// const colors = ['red', 'green', 'blue']
// colors.splice(0, 0, 'purple')

// console.log(colors)

// colors.splice(2, 0, 'black')

// console.log(colors)

// colors.splice(4, 0, 'yelow')

// console.log(colors)

// const languages = ["C", "C++", "Java", "JavaScript"];

// languages.splice(0, 2, "HTML", "CSS")

// console.log(languages)

// const oldNumbers = [1,2,3]
// const newNumbers = [4,5]
// const allNumbers = oldNumbers.concat(newNumbers)

// console.log(allNumbers)

// function multiply (a, b, c) {
//     console.log(`Результат виконання функції`)
//     return a * b * c
// }

// let result = multiply(3, 3, 3)
// console.log(result)

// result = multiply(4, 3, 2)
// console.log(result)

// result = multiply(5,3,3)
// console.log(result)

// function sum(a,b,c) {
//     console.log("Результат виконання коду")
//     return a + b + c
// }
// let result = sum(2,3,4)
// console.log(result)

// result = sum(3,3,1)
// console.log(result)

// result = sum(5,5,1)
// console.log(result)

// function sum (a, b, c) {
//     console.log(`Результат додавання ${a + b + c}`)
// }

// console.log("До виклику функції")
// sum(2,3,4)
// console.log("Після виклику функції")

// function counter (countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`)
//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i)
//     }
// }

// counter(1, 5)
// counter(2)
// counter()

// function multiply() {
//     let total = 1

//     for (const argument of arguments) {
//         total *= argument
//     }

//     return total

// }

// console.log(multiply(3,2,4))

// function withdraw (amount, balance) {
//     if (amount > balance) {
//         console.log("У вас недостатньо коштів на рахунку")
//         return
//     } else if(amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за 0")
//         return
//     } console.log("Операція успішна")
// }

// withdraw(500, 200)
// withdraw(0, 200)
// withdraw(200, 500)

// multiply(2, 4, 2)

// function multiply (a,b,c) {
//     console.log(`Result: ${a * b * c}`)
// }

// const sum = function (a,b,c) {
//     console.log(`This is sum: ${a + b + c}`)
// }

// sum(3,2,4)

// let globalValue = 10
// console.log(globalValue)

// function foo() {
//     console.log(globalValue)
// }

// for(let i = 0; i < 5; i++) {
//     console.log(globalValue)
//     if (i === 2) {
//         console.log(globalValue)
//     }
// }

// function foo() {
//   const a = 7;
//   connsole.log(a);

//   for (let i = 0; i < 3; i++) {
//     console.log(a);
//     if (i === 2) {
//       console.log(a);
//     }
//   }
// }

// console.log(a)

// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB"); // "Лог всередині функції fnA до виклику fnB" - 2
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB"); // "Лог всередині функції fnA після виклику fnB" - 4
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB"); // "Лог всередині функції fnB" - 3
//   }

//   console.log("Лог до виклику fnA");  // "Лог до виклику fnA" - 1
//   fnA();
//   console.log("Лог після виклику fnA"); // "Лог після виклику fnA" - 5

//   // "Лог до виклику fnA" - 1
//   // "Лог всередині функції fnA до виклику fnB" - 2
//   // "Лог всередині функції fnB" - 3
//   // "Лог всередині функції fnA після виклику fnB" - 4
//   // "Лог після виклику fnA" - 5

// function bar() {
//   console.log("bar"); //4
// }

// function baz() {
//   console.log("baz");//6
// }

// function foo() {
//   console.log("foo"); //2
//   bar(); //3
//   baz();//5
// }

// foo(); //1

// Створенння об'єкта

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title
// console.log(bookTitle)

// const bookAuthor = book.author
// console.log(bookAuthor)

// const bookGenres = book.genres
// console.log(bookGenres)

// Звернення до вкладених властивостей

// let user = {
//   name: "Jacques Gluke",
//   tag: "jcqgk",

//   location: {
//     country: "Jamaika",
//     city: "Ocho Rios",
//   },

//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const locate = user.location
// console.log(locate)

// const city = user.location.city
// console.log(city)

// const firstHobbie = user.hobbies[0]
// console.log(firstHobbie)

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// const bookTitle = book["title"]
// console.log(bookTitle)

// const propKey = "author"
// const bookAuthor = book[propKey]
// console.log(bookAuthor)

