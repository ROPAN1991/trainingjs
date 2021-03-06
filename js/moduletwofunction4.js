// -----------------------------------ФУНКЦІЇ----------------------------------------------------

// Оголошення функції (function declaration) починається з ключового слова function, після якого стоїть ім'я - дієслово, що відповідає на запитання «Що зробити?» і пара круглих дужок.

// Тіло функції береться у фігурні дужки {} і містить інструкції, які необхідно виконати на момент її виклику. Потім, коли необхідно, функція викликається за допомогою імені і пари круглих дужок.

// 1)В круглих дужках після імені функції зазначаються параметри - перелік даних, які функція очікує на момент виклику.
// 2)На момент виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.
// 3)Якщо параметрів буде більше, ніж аргументів, то параметрам без значень буде присвоєно undefined.

// Оголошення параметрів x, y, z

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }
  
//   // 2. Передача аргументів
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   multiply(4, 8, 12); // Результат множення дорівнює 384
//   multiply(17, 6, 25); // Результат множення дорівнює 2550

// -----------------------------------------------------return---------------------------------------------------------------------

// Оператор return використовується для передачі значення з тіла функції у зовнішній код. Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), і повертає вказане значення у те місце коду, де була викликана функція.

// function multiply(x, y, z) {
//     console.log("Код до return виконується звичайним чином");
  
//     // Повертаємо результат виразу множення
//     return x * y * z;
  
//     console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }
  
//   // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30
  
//   result = multiply(4, 8, 12);
//   console.log(result); // 384
  
//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

// Коли інтерпретатор зустрічає виклик функції (або методу), він призупиняє виконання поточного коду і починає виконувати код з тіла функції. Після того як увесь код функції буде виконаний, інтерпретатор виходить з тіла функції, повертаючись у те місце, звідки прийшов, і продовжує виконувати код, наступний після виклику функції.

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }
  
//   console.log("Лог до виклику функції multiply");
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   console.log("Лог після виклику функції multiply");
  
//   // Послідовність логів в консолі
//   // "Лог до виклику функції multiply"
//   // "Результат множення дорівнює 30"
//   // "Лог після виклику функції multiply"

// ---------------------------------------------------параметри за замовчуванням------------------------------------------------------------

// іноді необхідно оголосити функцію, у параметрів якої будуть значення, відмінні від undefined, навіть якщо для них не передали аргументи. Це робиться дуже простим та очевидним чином - достатньо вказати значення за замовчуванням безпосередньо на момент оголошення параметрів у підписі функції. У випадку такого запису, якщо для параметра не було передано значення аргументу, використовується значення за замовчуванням.

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1

// function count(countFrom = 0, countTo = 11, step = 1) {
//   console.log(`countFrom: ${countFrom}, countTo: ${countTo}, step: ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i)
//   }
// }

// count(1, 3)
// count(2)
// count()

// function count (countFrom = 0, countTo = 20, step = 1) {
//   console.log(`countFrom: ${countFrom}, countTo: ${countTo}, step: ${step}`)

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i)
//   }
// }

// count (1, 11)
// count(3, 9)
// count (2)
// count()

// -----------------------------------------------------псевдомасив arguments------------------------------------------------------------------

// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments, яка доступна тільки всередині функції і зберігає всі аргументи у якості псевдомасиву.

// Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом, але відсутністю більшості методів для роботи з масивом.

// Розглянемо приклад використання arguments у функції, яка множить будь-яку кількість аргументів. 

// function multiply() {
//     let total = 1;
  
//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

// function multiply () {
//   let total = 1;

//   for (const argument of arguments) {
//       total *= argument
//   }
//   return total
// }

// console.log(multiply(3,4,5))
// console.log(multiply(2,3,7))
// console.log(multiply(3,3,3))

// function plus () {
//   let total = 0

//   for (const argument of arguments) {
//     total += argument
//   }
//   return total
// }

// console.log(plus(3,4,2))
// console.log(plus(1,2,2))
// console.log(plus(5,2,4))
// ---------------------------------------------перетворення псевдомасиву-------------------------------------------------------------

// Зазвичай псевдомасив необхідно перетворити у повноцінний масив, оскільки у псевдомасиву відсутні методи масиву, наприклад slice() або includes(). На практиці застосовують декілька основних способів.

// Використовуючи метод Array.from(), який створить масив із псевдомасиву.

// function fn() {
//     // Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
    
    
//   }

//   console.log(fn)
  
// Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів, у нашому випадку аргументів, в масив, і зберегти його в змінну. Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.

// function fn(...args) {
//     // Змінна args буде містити повноцінний масив
//   }


// ----------------------------------------------патерн раннє повернення---------------------------------------------------------------

// Патерн «Раннє повернення» - це спосіб використовувати можливість дострокового повернення з функції за допомогою оператора return. Використовуючи цей прийом, ми отримуємо чистіший, плоскіший і зрозуміліший код, який простіше рефакторити.

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }
  
//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// Виділимо всі перевірки умов в окремі оператори if, після чого додамо код, що знаходиться в тілі else. В ідеальному випадку, повинен вийти плоский список умовних операторів, що йдуть один за одним, а в кінці - блок, який виконається тільки у тому випадку, якщо не виконається жоден if.

// function withdraw(amount, balance) {
//     // Якщо умова виконується, викликається console.log
//     // і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//       return;
//     }
  
//     // Якщо умова першого if не виконалась, його тіло пропускається
//     // та інтерпретатор доходить до другого if.
//     // Якщо умова виконується, викликається console.log і вихід із функції.
//     // Код, що знаходиться після тіла if, не виконається.
//     if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//       return;
//     }
  
//     // Якщо жоден із попередніх if не виконався,
//     // інтерпретатор доходить до цього коду і виконує його.
//     console.log("Операція зняття коштів проведена");
//   }
  
//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена"
//   withdraw(299, 300);

// ------------------------------------------------функціональний вираз------------------------------------------------------

// Функціональний вираз (function expression) - звичайне оголошення змінної, значенням якої буде функція. Альтернативний спосіб оголошення функції.

// Оголошення функції (function declaration)
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }
//   multiply(2,3,4)

  // function plus (a,b,c) {
  //   console.log(`результат додавання ${a + b + c}`)
  // }

  // plus(1,2,4)

  // function minus (a,b,c) {
  //   console.log(`результат віднімнання ${a - b - c}`)
  // }
  // minus(10, 2, 1)

  // function division (a, b, c) {
  //   console.log(`операція ділення ${a / b / c}`)
  // }
  // division(9,3,3)

  // Функціональний вираз (function expression)
//   const multiply = function (x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   };
// multiply(1,2,3)

// const plus = function (a,b,c) {
//   console.log(`операція додавання ${a + b + c}`)
// }
// plus(3,3,3)
// plus(1,3,5)
// plus(5,4,4)

// const minus = function (a,b,c) {
//   console.log(`операція віднімання ${a - b - c}`)
// }
// minus(10, 1, 2)
// minus(5, 3, 2)
// minus(7,2,2)

// const division = function (a,b,c) {
//   console.log(`операція ділення ${a / b / c}`)
// }
// division (9,3,3)
// division (4,2,1)
// division (12,3,2)
// Різниця в тому, що функціональний вираз не можна викликати до місця його створення, тільки після нього, тому що це буквально оголошення const змінної.

// // ❌ Помилка! Не працює виклик до оголошення
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// A оголошення функції можна викликати до місця її створення в коді.

// // ✅ Працює виклик до оголошення
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// ------------------------------------------------ОБЛАСТЬ ВИДИМОСТІ------------------------------------------------------------

// Область видимості (scope) - механізм, який визначає доступність змінних у коді, що виконується.

// Ланцюжок областей видимості (scope chain) - області видимості утворюють ієрархію, за якою дочірні області мають доступ до змінних з батьківських областей, але не навпаки.

// -------------------------------------------------глобальна область видимості------------------------------------------------------

// Змінні, оголошені на найвищому рівні, тобто за межами будь-яких конструкцій на зразок if, while, for і функцій, знаходяться в глобальній області видимості і доступні всюди після їх оголошення.

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// const globalNumber = 9
// console.log(globalNumber)

// function num() {
//   console.log(globalNumber)
// }

// for (let i = 0; i < 7; i +=1) {
//   console.log(globalNumber)
//   if (i === 3) {
//     console.log(globalNumber)
//   }
// }

// const globalScope = 25
// console.log(globalScope);

// function scope () {
//   console.log(globalScope)
// }

// for(let i = 0; i < 25; i += 1) {
//   console.log(globalScope)
//   if (i === 5) {
//     console.log(globalScope)
// }

// }

// const globalNumberTwo = 7
// console.log(globalNumberTwo);

// function numberTwo () {
//   console.log(globalNumberTwo)
// }

// for (let i = 0; i < 7; i += 1) {
//   console.log(globalNumberTwo)
//   if (i === 4) {
//     console.log(globalNumberTwo)
//   }
// }

// --------------------------------------------блочна область видимості-------------------------------------------------

// Змінні, оголошені всередині інструкцій if, for, функцій та інших блоків коду, взятих у фігурні дужки {}, знаходяться в блоковій області видимості і доступні тільки всередині цього блоку коду або у блоках, вкладених в нього.

// function foo() {
//     const a = 20;
//     console.log(a); // 20
  
//     for (let i = 0; i < 5; i++) {
//       console.log(a); // 20
  
//       if (i === 2) {
//         console.log(a); // 20
//       }
//     }
//   }

//   foo()

// //   // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
  // console.log(a);
  
  // for (let i = 0; i < 3; i++) {
// //     // ❌ Помилка! Змінна a - недоступна в цій області видимості
  //   console.log(a);
  // }

// Це можна уявити у вигляді будинку з кімнатами. Будинок знаходиться в глобальній області видимості. Кожна функція і блок створюють нову кімнату, вкладену всередину будинку. Змінні, оголошені всередині цих кімнат, доступні тільки тоді, коли ви знаходитесь всередині цієї кімнати. За межами кімнати ці змінні - недоступні.

// for (let i = 0; i < 5; i++) {
//     const a = 20;
//     console.log(a); // 20
  
//     if (i === 2) {
//       const b = 30;
//       console.log(a); // 20
//       console.log(b); // 30
//     }
  
//     if (i === 3) {
//       console.log(a); // 20
  
//       // ❌ Помилка! Змінна b - недоступна в цій області видимості
//       console.log(b);
//     }
//   }

// -------------------------------------------------СТЕК ВИКЛИКІВ-----------------------------------------------------

// На момент виклику функції, всередині її тіла можуть викликатися інші функції, а в них - інші тощо. JavaScript - однопотокова мова, тобто за одну одиницю часу може виконуватись лише одна інструкція. Це означає, що викликані функції, які не завершили своє виконання, повинні чекати виконання функцій, викликаних всередині них, для того, щоб продовжити свою роботу.

// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }
  
//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }
  
//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");
  
//   // "Лог до виклику fnA"
//   // "Лог всередині функції fnA до виклику fnB"
//   // "Лог всередині функції fnB"
//   // "Лог всередині функції fnA після виклику fnB"
//   // "Лог після виклику fnA"

// Стек - структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов - першим пішов. Останнє, що додається у стек, буде видалено з нього першим, - тому можна додати або видалити елементи тільки з верхівки стека.

// Стек викликів (call stack) - це механізм для відстеження поточного місцезнаходження інтерпретатора в коді, який викликає декілька функцій. Яка із функцій виконується на цей момент, які функції викликаються всередині функції, що виконується, яка функція буде викликана наступною тощо.

// function bar() {
//     console.log("bar");
//   }
  
//   function baz() {
//     console.log("baz");
//   }
  
//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }
  
//   foo();


// ---------------------------------------------------------замикаюча функція-----------------------------------------------------------------

// в одній області видимості ми замикаємо (або ховаємо) змінні які нам необхідно і функції які цими змінними користуються.

// function slider (slideCount) {
//   let photoNumber = slideCount;

//   function animation (time) {
//     console.log(`animation sliders ${photoNumber}, width time ${time}`)
//   }
//   return animation
// }

// const slider1 = slider(10);
// console.log(slider1(200));

// const slider2 = slider(20);
// console.log(slider2(400))

// const slider3 = slider(30);
// console.log(slider3(800));

// -------------------------------------------------------закріплення матеріалу------------------------------------------------------------

// () - синтаксис круглих дужок використовується: в функціях  і арифметичних операціях. в звичайному синтаксисі конструкцій джава скрипта. в арифметичних  операціях це як і в звичайній шкільній математиці приорітет якоїсь дії. для функцій круглі дужки це сигнал, що її треба включити. в конструкція джава скріпта - це тіло if береться в квадратні дужки, тобто  умова, в середині конструкції for тобто в лічильнику(елемент синтаксису) , switch, while, параметри стфорення функцій "function myFubnction (параметр)". 


// --------------------------------------------------------рекурсія----------------------------------------------------------------------

// function pow (number, power) {
//   if (power === 0) {
//     return 1;
//   }

// return number + pow(number, power - 1);
// }

// pow(2,3)