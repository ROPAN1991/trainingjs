// ----------------------------------------------------------ПОДІї------------------------------------------------------------------------

// Подія - це сигнал від браузера про те, що на веб-сторінці щось відбулося. Події використовуються для реакції на дії користувача і виконання коду, пов'язаного з певною подією. Існує багато видів подій: миші, клавіатури, елементів форм, завантаження зображень, буфера обміну, зміни стадії CSS анімації або переходу, зміни розмірів вікна та багато інших.

// Одна дія може викликати декілька подій. Наприклад, клік викликає спочатку mousedown, а потім mouseup і click. У тих випадках, коли одна дія генерує декілька подій, їхній порядок фіксований. Тобто обробники викликаються у порядку mousedown → mouseup → click.

// Для того, щоб елемент реагував на дії користувача, до нього необхідно додати слухача (обробника) події. Тобто функцію, яка буде викликана, щойно подія відбулася.

// -----------------------------------------------------Метод addEventListener()---------------------------------------------------------

// element.addEventListener(event, handler, options);

// 1)event - ім'я події, рядок, наприклад "click".
// 2)handler - колбек-функція, яка буде викликана під час настання події.
// 3)options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// Для колбека можна (і бажано) використовувати окрему функцію і передавати на неї посилання. Іменована функція підвищує читабельність коду.

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// const clickButton = document.querySelector("#single");

// const handClick = () => {
//     console.log("This is click")
// }

// clickButton.addEventListener('click', handClick)


// const clickForButton = document.querySelector("#single");

// const handClicker = () => {
//     console.log("this is my click")
// }

// clickForButton.addEventListener('click', handClicker)

// const myClick = document.querySelector("#single");

// const handClickEvent = () => {
//     console.log('myclick')
// }

// myClick.addEventListener("click", handClickEvent) 

// const clickEvent = document.querySelector("#single");

// const handClickOperation = () => {
//     console.log("its click")
// }

// clickEvent.addEventListener("click", handClickOperation)

// --------------------------------------------------------Метод removeEventListener()--------------------------------------------------------

// Видаляє слухача події з елемента. Аргументи аналогічні методу addEventListener().

// element.removeEventListener(event, handler, options);

// Для видалення потрібно передати посилання саме на ту колбек-функцію, яка була призначена в addEventListener(). У такому разі, для колбеків використовують окрему функцію і передають її за ім'ям (посиланням).

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]')
// const btn = document.querySelector("#btn");

// const handClick = () => {
//     console.log("this is click callback")
// }

// addListenerBtn.addEventListener("click", () => {
//     btn.addEventListener('click', handClick)
//     console.log("this is ADD")
// })

// removeListenerBtn.addEventListener("click", () => {
//     btn.removeEventListener ("click", handClick)
//     console.log("This is REMOVE")
// })

// 

// const addListenerBtn = document.querySelector('[data-action="add"]')
// const removeListenerBtn = document.querySelector('[data-action="remove"]')
// const btn = document.querySelector('#btn')

// const handClick = () => {
//     console.log("CALLBACK CLICK")
// }

// addListenerBtn.addEventListener('click', () => {
//     btn.addEventListener('click', handClick)
//     console.log("ADD")
// })

// removeListenerBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handClick)
//     console.log("REMOVE")
// })

// 

// const addListenerBtn = document.querySelector('[data-action="add"]')
// const removeListenerBtn = document.querySelector('[data-action="remove"]')
// const btn = document.querySelector('#btn')

// const handClick = () => {
//     console.log('CALLBACKCLICK')
// }

// addListenerBtn.addEventListener('click', () => {
//     btn.addEventListener('click', handClick)
//     console.log("ADD")
// })

// removeListenerBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handClick)
//     console.log("REMOVE")
// })

// --------------------------------------------------------Ключове слово this---------------------------------------------------------

// Якщо колбеком буде функція, яка використовує this, за замовчуванням контекст всередині неї буде посилатися на DOM-елемент, на якому висить слухач.
// const mango = {
//     username: "Mango",
//     showUsername() {
//       console.log(this);
//       console.log(`My username is: ${this.username}`);
//     },
//   };
  
//   const btn = document.querySelector(".js-btn");
  
//   // ✅ Працює
//   mango.showUsername();
  
//   // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
//   btn.addEventListener("click", mango.showUsername); // не працює
  
//   // ✅ Не забувайте прив'язувати контекст методів об'єкта
//   btn.addEventListener("click", mango.showUsername.bind(mango));

// ------------------------------------------------------------Об'єкт події---------------------------------------------------------------

// Щоб обробити подію - недостатньо знати про те, що це клік або натискання клавіші, можуть знадобитися деталі. Наприклад, поточне значення текстового поля, елемент, на якому відбулася подія, вбудовані методи та інші.

// Кожна подія - це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Всі події відбуваються з базового класу Event.

// const handleClick = event => {
//     console.log(event);
//   };
  
//   button.addEventListener("click", handleClick);

//   Параметр event - це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.

// event.type - тип події.
// event.currentTarget - елемент, на якому виконується обробник події.

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// ------------------------------------------------------Дії браузера за замовчуванням-----------------------------------------------------

// Деякі події викликають дію браузера, вбудовану за замовчуванням як реакція на певний тип події. Наприклад, клік на посиланні ініціює перехід на нову адресу, зазначену в href, а відправлення форми перезавантажує сторінку. Найчастіше ця поведінка небажана і її необхідно скасувати.

// Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log("username: ", username.value, "password: ", password.value);
// });

// const form = document.querySelector('.register-form');

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const { 
//         elements: { username, password } 
//     } = event.currentTarget;
//     console.log( username.value, password.value );
// })

// ------------------з матеріалів Репети

// const form = document.querySelector(".register-form");

// form.addEventListener('submit', onFormSubmition);

// function onFormSubmition(event) {
//     event.preventDefault();
//     const formElements = event.currentTarget.elements;
//     console.log(formElements)

//     const username = formElements.username.value;
//     const password = formElements.password.value;


//     const formData = {
//         username,
//         password,
//     }

//     console.log(formData)
// }

// ------------------------------------------------------------Події клавіатури--------------------------------------------------------

// Існує дві основні події клавіатури: keydown і keyup. На відміну від інших, події клавіатури обробляються на документі, а не на конкретному елементі. Об'єкти подій клавіатури походять від базового класу KeyboardEvent.

// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//   });
  
//   document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });


// Натискаючи клавішу, спочатку відбувається keydown, після чого - keyup, коли клавішу відпустили. На практиці переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup, і користувач раніше бачить результат натискання. Події keydown і keyup спрацьовують при натисканні будь-якої клавіші, включно зі службовими (Ctrl, Shift, Alt, Escape тощо).

// -----------------------------------------------------Властивості key і code-------------------------------------------------------------

// Властивість key повертає символ, згенерований натисканням клавіші, враховуючи стан клавіш-модифікаторів, наприклад, Shift, а також поточну мову. Властивість code повертає код фізичної клавіші на клавіатурі і не залежить від мови.

// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
//   });

// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
// })

// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code)
// })

// Наведіть фокус у вікно прикладу, клікнувши по ньому мишкою, відстеження подій клавіатури знаходиться на елементі document. Надрукуйте щось на клавіатурі і подивіться результат.

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ------------------------------------------------------Клавіші-модифікатори---------------------------------------------------------------

// Для обробки комбінації клавіш, наприклад Ctrl + s або будь-якої іншої, на об'єкті події є властивості ctrlKey, altKey, shiftkey і metaKey, що зберігають булеве значення, яке сигналізує про те, чи була затиснута клавіша-модифікатор.

// document.addEventListener("keydown", event => {
//     event.preventDefault();
  
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//       console.log("«Ctrl + s» or «Command + s» combo");
//     }
//   });

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.altKey || event.metaKey) && event.code === "KeyX") {
//         console.log("ALT + X")
//     }
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.shiftKey || event.metaKey) && event.code === "KeyS") {
//         console.log("SHIFT + S")
//     }
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault;

//     if((event.ctrlKey || event.metaKey) && event.code === "KeyQ") {
//         console.log("CTRL + Q")
//     }
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.altKey || event.metaKey) && event.code === "KeyH") {
//         console.log("alt + H")
//     }
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.shiftKey || event.metaKey) && event.code === "KeyG") {
//         console.log("SHIFT + G")
//     }
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if((event.altKey || event.metaKey) && event.code === "KeyO") {
//         console.log("alt + O")
//     }
// })

// Деякі комбінації клавіш можуть конфліктувати з поведінкою браузера за замовчуванням. Наприклад, Ctrl + d або Command + d робить закладку. Потрібно намагатися проектувати систему комбінацій сторінки таким чином, щоб вона не перетиналася із вбудованою у браузері. Але, у крайньому разі, поведінку за замовчуванням можна скасувати, викликавши метод event.preventDefault().

// ------------------------------------------------Події елементів форм---------------------------------------------------------------

// -----------------------------------------------------Подія submit---------------------------------------------------------------

// Відправлення форми відбувається під час кліку по кнопці з атрибутом type="submit" або натискання клавіші Enter, перебуваючи в будь-якому її текстовому полі. Подію submit можна застосувати для валідації (перевірки) форми перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми. Сабміт форми перезавантажує сторінку, тому не забувайте скасовувати дію за замовчуванням методом preventDefault().

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// -----------------------------------------------------Подія change--------------------------------------------------------------------------

// Відбувається після зміни елемента форми. Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу, що не завжди зручно. Наприклад, доки ви набираєте щось у текстовому полі - подія відсутня, але як тільки фокус пропав, відбудеться подія change. Для інших елементів, наприклад, select, чекбоксів і радіо-кнопок, подія change спрацьовує відразу під час вибору значення.

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;

//   console.log(selectedOptionText)
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//     const selectedOptionValue = select.value;
//     const selectedOptionIndex = select.selectedIndex;
//     const selectedOptionText = select.options[selectedOptionIndex].text;

//     textOutput.textContent = selectedOptionIndex;
//     valueOutput.text = selectedOptionValue;

//     console.log("This is value: ", selectedOptionValue)
//     console.log("This is text: ", selectedOptionText)
//     console.log("This is index: ", selectedOptionIndex)
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//     const selectedOptionValue = select.value;
//     const selectedOptionIndex = select.selectedIndex;
//     const selectedOptionText = select.options[selectedOptionIndex].text;

//     textOutput.textContent = selectedOptionIndex;
//     valueOutput.text = selectedOptionValue;

//     console.log("This is value: ", selectedOptionValue)
//     console.log("This is text: ", selectedOptionText)
//     console.log("This is index: ", selectedOptionIndex)
// }

// ------------------------------------------------------------Подія input----------------------------------------------------------------

// Відбувається тільки на текстових полях і textarea, і створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input - це найголовніша подія для роботи з текстовими полями форми.

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

// const john = {
//     name: "John",
//     sales: 10,
//     sell: function(thing) {
//         this.sales += 1;
//         return 'Manager ' + this.name + 'sold' + thing;
//     }
// }
// console.log(john.sales)
// john.sell('Apple');
// john.sell('Pomegrade');
// john.sell('Orange');
// console.log(john.sales)
