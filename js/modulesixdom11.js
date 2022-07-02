// -------------------------------------------------------------DOM--------------------------------------------------------------------------

// Для навігації по цій ієрархії елементи мають наступні властивості.

// 1) elem.parentNode - вибере батьківський elem.
// 2) elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// 3) elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// 4) elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// 5) elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// 6) elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// 7) elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// 8) elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// 9) elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// 10) elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// 11) elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).


// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ---------------------------------------------------------Пошук елементів------------------------------------------------------------------

// Отже, ми вже знаємо що DOM-елемент - це об'єкт з властивостями і методами. Саме час навчитися швидко знаходити елемент за довільним CSS-селектором. Група методів elem.querySelector* - це сучасний стандарт для пошуку елементів. Вони дозволяють знайти елемент або групу елементів за CSS-селектором будь-якої складності.

// element.querySelector(selector);

// Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.

//  - Повертає перший знайдений елемент всередині element, що відповідає CSS-селектору selector.
//  - Якщо нічого не знайдено, поверне null.

// element.querySelectorAll(selector);

// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором. Наприклад, всі елементи списку з класом menu-item.

// - Повертає псевдомасив всіх елементів всередині element, які відповідають CSS-селектору selector.
// - Якщо нічого не знайдено, поверне порожній масив.

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// ---------------------------------------------------Властивості атрибута--------------------------------------------------------------------

// Під час побудови DOM-дерева, деякі стандартні HTML-атрибути стають властивостями елементів. Подивимося на декілька властивостей, які часто використовуються.

// 1)value - містить поточний текстовий контент елементів форм.
// 2)checked - зберігає стан чекбокса або радіокнопки.
// 3)name - зберігає значення, вказане в HTML-атрибуті name.
// 4)src - шлях до зображення тегу <img>.

//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// ------------------------------------------------------Властивість textContent------------------------------------------------------------

// elem.textContent повертає текстовий контент всередині елемента. Доступний для читання і запису. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';

// const title = document.querySelector(".article-title");
// console.log(title.textContent)
// title.textContent = 'Hello Sister';

// const text = document.querySelector(".article-text");
// console.log(text.textContent)
// text.textContent = "Привіт сестра, раді тебе вітати!"

// --------------------------------------------------------Властивість classList------------------------------------------------------------

// У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// text.classList.replace("new-class", "old-class");
// console.log(text.classList)

// --------------------------------------------------------Властивість styles----------------------------------------------------------------

// Використовується для читання та зміни інлайнових стилів. Повертає об'єкт CSSStyleDeclaration, який містить список усіх властивостей, визначених тільки у вбудованих стилях елемента, а не увесь CSS. Під час запису властивості записуються в camelCase, тобто background-color перетворюється на element.style.backgroundColor тощо.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.color = "white";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// На практиці стилізація елементів виконується шляхом додавання CSS-класів. Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, під час анімації.

// -----------------------------------------------------------Атрибути-------------------------------------------------------------------

// DOM-елементам відповідають HTML-теги, які містять текстові атрибути. Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.

// 1)elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// 2)elem.getAttribute(name) - отримує значення атрибута і повертає його.
// 3)elem.setAttribute(name, value) - встановлює атрибут.
// 4)elem.removeAttribute(name) - видаляє атрибут.
// 5)elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// -------------------------------------------------------------data-атрибути-----------------------------------------------------------------

// Дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript. Цю можливість використовують для того, щоб спростити написання коду, наприклад, зв'язати дані і розмітку за унікальним ідентифікатором, вказати тип дії кнопки тощо.

{/* <button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>
 */}

//  Для отримання значення data-атрибута використовується властивість dataset, після якого стоїть ім'я атрибута. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.


// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// ----------------------------------------------------Створення та видалення елементів---------------------------------------------------

// DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й видаляти, а також створювати нові елементи, після чого додавати їх в документ.

// ----------------------------------------------------------Створення-----------------------------------------------------------

// document.createElement(tagName);

// Створює елемент з ім'ям tagName і повертає посилання на нього як результат свого виконання. tagName - це рядок, що вказує тип елемента, який створюється. Елемент створюється в пам'яті, в DOM його ще немає.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// ------------------------------------------------------Додавання------------------------------------------------------------------------

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, для цього існують методи.

// 1)element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// 2)element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// 3)element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// 4)element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

// У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.

// const list = document.querySelector(".usernames");

// // // Adds an item to the end of the list

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);


// const list = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem)

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem)

// const title = document.createElement("h2");
// title.textContent = "USERNAME";
// list.before(title);

// const text = document.createElement("p");
// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// const list = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem)

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem)

// const title = document.createElement("h2");
// title.textContent = "USERNAME";
// list.before(title)

// const text = document.createElement("p");
// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!"

// list.after(text)

// -------------------------------------------------------Видалення----------------------------------------------------------------

// elem.remove();

// Для того, щоб видалити елемент, використовується метод remove(). Він викликається на елементі elem, який необхідно видалити

// const text = document.querySelector('.text');
// text.remove();

// ----------------------------------------------Властивість innerHTML---------------------------------------------------------------

// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, - це завжди валідний HTML-код.

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);


// ------------------------------------------------------Зміна---------------------------------------------------------------------------

// Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить їх у валідні елементи і додасть в DOM-дерево.

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.

// За такого підходу, на відміну від document.createElement(), ми не отримуємо посилання на створений DOM-елемент. Це перший крок на шляху до шаблонізації - створення великої кількості однотипної розмітки з різними даними за наперед визначеним шаблоном. Наприклад, як у списку товарів інтернет магазину тощо.

// Однотипна (шаблонна) розмітка створюється із масиву даних. Прийом полягає у перебиранні цього масиву і складанні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// ---------------------------------------------------------Додавання-------------------------------------------------------------------

// Зміна elem.innerHTML повністю видалить і повторно створить всі нащадки елемента elem. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на серіалізацію вже існуючої розмітки, а це погано.









