// Інтерфейс - це набір властивостей і методів сутності, доступних для використання у вихідному коді.

// ----------властивість-----------------

// У нас з вами є властивості: зріст, вага, колір очей, тобто якісь описові характеристики. Так само і у даних є властивості, наприклад у рядка є властивість його довжини.

// const message1 = "JavaScript is awesome".length;
// console.log(message1)

// // --------------метод---------------

// // Це виклик дії, наприклад присісти або плавати, тобто якась активна операція. Так само і у даних є свої заздалегідь визначені методи, наприклад, можна додати або видалити елементи з колекції, перевести рядок в інший регістр тощо. Синтаксис виклику метода дуже схожий на звернення до властивості, але в кінці додається пара круглих дужок.

// const message = "JavaScript is awesome".toUpperCase();
// console.log(message)

// ---------------------------------змінні і типи---------------------------------------

// Оголошення змінної починається з ключового слова const. Така змінна повинна бути одразу ініціалізована значенням, після чого її не можна перевизначити.

// // Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// // значенням під час оголошення, інакше виникне помилка.
// const yearOfBirth = 2006;
// console.log(yearOfBirth); // 2006

// // Якщо зміна оголошена як const, перезаписати її значення не можна.
// // При спробі присвоїти нове значення, виникне помилка виконання скрипту.
// yearOfBirth = 2020; // ❌ Неправильно, виникне помилка

// Для того, щоб оголосити змінну, якій у подальшому можна буде присвоїти нове значення, використовується ключове слово let.


// // Змінним, оголошеним через let, не обов'язково одразу присвоювати значення.
// let age;

// // Якщо змінній, оголошеній як let, не було присвоєно значення,
// // вона ініціалізується спеціальним значенням undefined (не визначено).
// console.log(age); // undefined

// // console.log() - це метод для виведення даних у консоль браузера,
// // пізніше познайомимось з ним детальніше.

// // Якщо змінна оголошена як let, її значення можна перезаписати.
// age = 14;
// console.log(age); // 14

// Невизначена (undefined) - це змінна, яка була оголошена ключовим словом let, але не ініціалізована значенням. За замовчуванням їй присвоюється початкове значення undefined. 

// let username;
// console.log(username); // undefined

// -----------------------------------------Примітивні типи------------------------------------------------------

// змінна може зберігати значення різних типів.

// Number - цілі числа і числа з плаваючою комою (крапкою).

// const age = 20;
// const points = 15.8;

// String - рядки, послідовність з нуля або більше символів. Рядок починається і закінчується одинарними ', або подвійними лапками ".

// const username = "Mango";
// const description = "JavaSript для початківців";

// Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад, на запитання чи увімкнено світло в кімнаті, можна відповісти так (true) або ні (false).

// true — так, вірно, істина, 1
// false — ні, невірно, неправда, 0

// Зверніть увагу на імена змінних, що містять буль. Вони ставлять запитання, і відповідь на нього - так або ні

// const isLoggedIn = true;
// const canMerge = false;
// const hasChildren = true;
// const isModalOpen = false;

// null - особливе значення, яке по суті означає ніщо. Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу. Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null.

// let selectedProduct = null;

// undefined - ще одне спеціальне значення. За замовчуванням, коли змінна оголошується, але не ініціалізується, її значення не визначено, їй присвоюється undefined.

// let username;
// console.log(username); // undefined

// --------------------------------------------оператор typeOf---------------------------------------------------
// Використовується для отримання типу значення змінної. Повертає на місце свого виклику тип значення змінної, вказаного після нього - рядок, в якому вказано тип.

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// -----------------------------------------ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ-----------------------------------------------
// -----------------------------------------виведення данних---------------------------------------------------

// Для виведення даних існує два методи: console.log() і alert(). В круглих дужках зазначаємо ім'я змінної, значення якої необхідно вивести.

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango

// Метод alert() виводить модальне вікно, текст якого відповідає значенню змінної (або літерала), яку передаємо в дужках.

// -----------------------------------------отримання даних-------------------------------
// Результатом свого виконання вони повертають те, що було введено користувачем, тому результат їх роботи можна записати у змінну для подальшого використання.

// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок. Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// --------------------------------------------------------основні оператори-----------------------------------------------------

// Важливо запам'ятати терміни складових виразу. + - * / % називаються оператори, а те, на чому вони застосовуються - операнди.

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15

//  оператори порівняння використовують для порівняння двох значень
// Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// для перевірки рівності або нерівності двох значень, використовуються тільки оператори === (строга рівність) і !== (строга нерівність)

// ------------------------------------------ЧИСЛА---------------------------------------------------
// Для того, явно перетворити значення у число, використовуйте функцію Number(val), передаючи їй у val те, що потрібно привести до числа.
// Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає: true або false.
// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false. Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// ---------------------------------------------додавання чисел з рухомою крапкою-------------------------------------

// 0.1 + 0.2 не дорівнює 0.3, результат додавання буде більший, ніж 0.3. Це тому що машина рахує у двійковій системі.
// Число 0.1 у двійковій системі числення - це нескінченний дріб, оскільки у двійковій системі одиниця не ділиться на десять. Двійкове значення нескінченних дробів зберігається тільки до певного знаку, тому виникає неточність. При додаванні 0.1 і 0.2, додаються дві неточності, виходить незначна, але все-таки помилка в обчисленнях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// Існує декілька методів вирішення цієї проблеми.

// 1)Можна зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// 2)Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// ----------------------------------------------клас Math-------------------------------------------------

// Один із вбудованих класів, який надає набір методів для роботи з числами.

// console.log('Math.floor(num) - повертає найбільше ціле число,
// менше, або яке дорівнює зазначеному числу')
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// --------------------------------------РЯДКИ-------------------------------------------

// Рядок - це індексований набір з нуля або більше символів, взятих в одинарні або подвійні лапки.

// Важливо пам'ятати, що індексація елементів рядка починається з нуля. Наприклад, в рядку "JavaScript" літера "J" стоїть на позиції з індексом 0, а "t" - під індексом 9.

// Якщо застосувати оператор + до рядка і будь-якого іншого типу даних, результатом операції «додавання» буде рядок
// Під час конкатенації, будь-який тип даних приводиться до рядка і зшивається з рядком, але є особливість - послідовність запису операндів.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${вираз}.

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// -------------------------------------Методи toLowerCase() і toUpperCase()----------------------------------------

// Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній. Наприклад, для пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng', а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'. Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// ------------------------------------------Метод indexOf()-------------------------------------------------

// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// ---------------------------------------------Метод includes()----------------------------------------------------

// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// --------------------------------------------Метод endsWith()-------------------------------------------------

// Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// ------------------------------------Методи replace() і replaceAll()-----------------------------------------------

// Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// ---------------------------------------------Метод slice()-------------------------------------------------------

// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// -----------------------------------------------ЛОГІЧНІ ОПЕРАТОРИ---------------------------------------------------

// Приведення типів відбувається до true або false, якщо в коді виявлений логічний оператор.
// до false завжди приводиться 6 значень (0, NaN, null, undefine, порожній рядок, false)!!!!!

// ----------------------------------------------------Логічне «І» - && --------------------------------------------------

// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.
// логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

//  --------------------------------------Логічне «АБО» - || -----------------------------------------------------

// логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// -------------------------------------------Логічне «НЕ» ! ----------------------------------------------------

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false








