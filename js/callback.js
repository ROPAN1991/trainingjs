// ------------------колбекі

//  
// doMath (7,3, function (x,y) {
//     return x - y;
// }
// )
// doMath (5,2, function (x,y) {
//     return x * y;
// }
// )

// ----------button--------кількість кліків по кнопці------------реєстрація події


// const buttonref = document.querySelector('.js-button');

// const handleButtonClick = function() {
//     console.log('THIS IS BUTTON CLICK' + Date.now())
// }

// buttonref.addEventListener('click', handleButtonClick)



// --------------отримання-геопозиції-користувача------------------

// const onGetPositionSucces = function(position) {
// console.log('Це виклик oneGetPositionSucces');
//     console.log(position);
// };

// const onGetPositionError = function(error) {
// console.log('Це виклик oneGetPositionError')
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError);

// ------------------------відкладений виклик: інтервали--------------

// const callback = function () {
//     console.log('Через3 секунди в середині колбека відбудеться подія')
// }
// console.log('в коді перед таймаутом')
// setTimeout(callback, 3000)
// console.log('в коді після таймаута')

// -----------------------функція знаходить більші і меньші числа------------------функція фільтрації по масиву----------------

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el)
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el)
//         }
//     }
//     return filteredArray
// }

// const callback1 = function(value) {
//     return value >= 3
// };
// const callback2 = function(value) {
//     return value <= 4;
// };

//  const r1 = filter([1,2,3,4,5], callback1) 
//  console.log(r1)

//  const r2 = filter([1,2,3,4,5,6,7], callback2)
//  console.log(r2)

//  const fruits = [
//     { name: 'apple', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//  ];
//  const getFruitsWithQuantity = function(fruit) {
//     return fruit.quantity >= 120;

//  }
     
//  const r3 = filter(fruits, getFruitsWithQuantity);

//  console.log(r3)

// --------------------функція замикання------------------
// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//     }
//     return makeDish
    
//     }

//     const mango = makeSheff('Mango');

//     mango('пиріжки')
//     mango('салат')

// -------------------------------округлювач-----------------------------------------

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
    
// }

// const rounder1 = rounder(2);
// const rounder2 = rounder(3);

// console.log(rounder1(5.83456));
// console.log(rounder2(7.3894756));
// console.log(rounder1(2.7654867));
// console.log(rounder2(4.97567));

// ---------------------------- зарплата----------------------------

// const salaryManagerFactor = function (employeeName, baseSalary) {
//     let salary = baseSalary;

// return {
//     raise(amount) {
//         if (amount > 1000) {
//             return "Ти офігів?";
//         }
//         salary += amount
//     },
//     lower(amount) {
//         salary -= amount
//     },
//     current() {
//         return `Поточна заробітна плата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactor("Mango", 5000);
// console.log(salaryManager.current())

// console.dir(salaryManager.current)

// salaryManager.raise(2000)

// console.log(salaryManager.current())

// salaryManager.lower(3000)

// console.log(salaryManager.current())

// console.log(salaryManager.raise(5000))

// console.log(salaryManager.current())

// -----------------стрілочна функція---------------
// 1) якщо не має імені параметра - ставиом ()
// 2) якщо один параметр - можна не ставити дужок
// 3) якщо декілька параметрів обов'язково ставимо дужки (a, b, c)
// 4) у стрілочнної функції нема arguments тому вони збираються через resp (...args)
// 5) Для того, щоб із стрілочної функції повернути об'єкт з неявним поверненням (бех return) треба обернути об'єкт в круглі дужки ({a: 4})
// 6)const free = (a,b,c) => {"Стрілочна функція, замінюємо слово function перед дужками на => за дужками"}; 
// найбільша користь від стрілочних функцій коли ми використовуємо inline function 
// наприклад: було - const callbackFunc = function(value) {return value >= 3}
// наприклад: стало - const callbackFunc = value => value >= 3;
// Такі функції не треба зберігати в змінних ми можемо одразу їх вставити. Наприклад const r1 = filter([1,2,3,4,5], value => value >= 3)
// Тобто стрілки допомагають писати нам меньшу кількість коду.
// const add = function ( a, b, c ) {
//     console.log(arguments)
//     return a + b + c;
// };

// const addArrow = (...args) => {
//     console.log(args)
// }

// const addArrowNew = () => ({
// a: 4
// })

// console.log(add(5, 10, 15 ));

// console.log(addArrow(3, 4, 2));

// console.log(addArrowNew(1, 2, 2))

// -----------------------------------колбек функції--------------------------------------------
// 1) Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }
  
//   // Викликаємо функцію greet і виводимо результат у консоль
//   console.log(greet("Манго")); // Ласкаво просимо Манго.
  
//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// -------------------------------------------функція вищого порядку------------------------------------------
// 2) Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// Колбек-функція
// function greet(theName) {
//     console.log(`Ласкаво просимо ${theName}.`);
//   }

// // Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.
  
//   // Функція вищого порядку
//   function registerGuest(name1, callback) {
//     console.log(`Реєструємо гостя ${name1}.`);
//     callback(name1);
//   }
  
//   registerGuest("Манго", greet);

// --------------------------------інлайн callback---------------------------------------

// Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.


// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаємо інлайн функцію greet у якості колбека
//   registerGuest("Манго", function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   });
  
//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// ----------------------------декілька колбеків-----------------------------

// function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }
  
//   processCall("Манго");









