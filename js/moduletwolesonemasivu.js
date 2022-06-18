// ---------------------------------------------МАСИВИ------------------------------------------------
// Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень. Використовується для зберігання впорядкованих колекцій даних, наприклад, списку курортів, товарів, клієнтів в готелі тощо.

// Масив оголошується і береться у квадратні дужки [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

// const clients = ["Mango", "Poly", "Ajax"];

// Для доступу до значення елемента масиву використовується синтаксис квадратних дужок масив[індекс]. Між іменем змінної, що зберігає масив, і квадратними дужками не повинно бути пробілу.

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Sub";
// clients[1] = "Pan";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); // 3

// Для того, щоб отримати значення останнього елемента, застосовується наступний підхід
// довжина масиву завжди на одиницю більша, ніж індекс останнього елемента. ["Mango", "Poly", "Ajax"]; - довжина = 3, індекс = 2.

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// -----------------------------------------------Ітерація по масиву----------------------------------------------

// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, тобто менше, але не дорівнює його довжині.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const rivers =  ["Udai", "Dnipro", "Dunai"]
// const updateRivers = rivers.slice(1)
// console.log(updateRivers.includes("Dnipro"))

// for (let i = 0; i < river.length; i += 1) {
//     console.log(river[i])
// }
// for (const river of updateRivers) {
//     console.log(river)
// }

// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// client — змінна, яка буде зберігати значення елемента на кожній ітерації.
// clients — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// --------------------------------------------------Оператори break і continue------------------------------------------------------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const age = [12, 15, 17, 22, 28, 34, 56, 11, 19, 14, 47, 5, 7, 8]
// const checkAge = 18

// for (let i = 0; i < age.length; i += 1) {
//     if (checkAge > age[i]) {
//         continue
//     }

//     console.log(`Вік більший за ${checkAge} : ${age[i]}`)
// }

// const sum = [2, 5, 7, 8, 4, 1, 3, 11, 22, 45, 54, 20]
// const checkSum = 10

// for (let i = 0; i < sum.length; i += 1) {
//     if (checkSum > sum[i]) {
//         continue
//     }

//     console.log(`Сума більша за ${checkSum}: ${sum[i]}`)
// }

// ---------------------------------ПРИСВОЄННЯ ЗА ПОСИЛАННЯМ І ЗА ЗНАЧЕННЯМ--------------------------------------------------

// Фундаментальною відмінністю складних типів від примітивів є те, як вони зберігаються і копіюються. Примітиви: рядки, числа, булі, null і undefined. під час присвоєння повністю копіюються за значенням (by value). Складні типи: масиви, об'єкти, функції... Зі складними типами - все по-іншому. У змінній, якій присвоєно масив або об'єкт, зберігається не саме значення, а адреса його місця в пам'яті, іншими словами - посилання (вказівник) на нього і вони передаються за посиланням.

// Усі примітивні типи присвоюються за значенням, тобто створюється копія.

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна просто отримує посилання на вже існуючий об'єкт.

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// --------------------------------------------МЕТОДИ МАСИВУ--------------------------------------------------

// ----------------------------------------Методи split() і join()--------------------------------------------

// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// const name = "Ihor"
// console.log(name.split(""))

// const city = "Kyiv"
// console.log(city.split(''));

// const citys = 'Pryluky, Kyiv, Dnipro'
// console.log(citys.split(' '))

// -----------------------------------------Метод indexOf()----------------------------------------------

// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// const rivers = ['Udai', 'Dnipro', 'Desna', 'Vorskla']
// console.log(rivers.indexOf("Desna"))

// -----------------------------------------Метод includes()--------------------------------------------------

// includes(value) перевіряє, чи містить масив елемент зі значенням value(значення) і повертає true або false відповідно. Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// перевірка багатьох умов:

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// Однак, що робити, якщо у нас буде більше червоних фруктів, наприклад, ще вишня (cherry) або журавлина (cranberries)? Чи будемо ми розширювати умову за допомогою додаткових ||?

// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// Можемо переписати умову, використовуючи includes(), це дуже просто і масштабовано.

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// ---------------------------------------------Методи push(), pop(), shift(), unshift()------------------------------------------------

// Додають або видаляють крайні елементи масиву. Працюють тільки з крайнім лівим і крайнім правим елементом, і не можуть вставити або видалити елемент з довільної позиції.

//1) Метод push() додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси елементів, що додаються. Повертає довжину масиву після додавання елементів.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// 2) Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// 3) Метод unshift() додає один або декілька елементів напочатку масиву

// const numbers = [];

// console.log(numbers.unshift(1)); // [1]
// console.log(numbers)

// console.log(numbers.unshift(2)); // [2, 1]
// console.log(numbers)

// console.log(numbers.unshift(3)); //[3, 2, 1]
// console.log(numbers)

// console.log(numbers.unshift(4)); //[4, 3, 2, 1]
// console.log(numbers)

// console.log(numbers.unshift(5)); //[5, 4, 3, 2, 1]
// console.log(numbers)

// 4) Метод shift() видаляє один або декілька елементів напочатку масиву

const numbers = [5, 4, 3, 2, 1];

console.log(numbers.shift()); // [4, 3, 2, 1]
console.log(numbers)

console.log(numbers.shift()); // [3, 2, 1]
console.log(numbers)

console.log(numbers.shift()); // [2, 1]
console.log(numbers)

console.log(numbers.shift()); // [1]
console.log(numbers)

console.log(numbers.shift()); // []
console.log(numbers)

