// -------------------------------------------НАВІГАЦІЯ ПО DOM ДЕРЕВУ------------------------------------------------------------------

// const ulList = document.querySelector("ul");

// const parentNodeOfUL = ulList.parentNode;

// console.log(parentNodeOfUL); // <body></body> - батьківський елемент для списку ul

// const childNodesOfUl = ulList.childNodes;

// console.log(childNodesOfUl); // псевдомасив з усіма дочірніми елементам включно з текстовими (відсутня більшість методів масиву)

// const childrenOfUl = ulList.children;

// console.log(childrenOfUl); // псевдомасив зі збереженими дочірніми вузлами-елементами, тобто тими, що відповідають тегам(відсутня більшість методів масиву)

// const firstChildOfUl = ulList.firstChild;

// console.log(firstChildOfUl); // вибере перший дочірній елемент (включаючи текстові вузли).

// const firstElementChildOfUl = ulList.firstElementChild;

// console.log(firstElementChildOfUl); // вибере перший дочірній елемент-вузол (тобто той що відповідає першому тегу)

// const lastChildOfUl = ulList.lastChild;

// console.log(lastChildOfUl); // вибере останні дочірній елемент (включючи текстові вузли)

// const lastElementChildOfUl = ulList.lastElementChild;

// console.log(lastElementChildOfUl); // вибере останній дочірній вузол-елемент всередині (тобто той, що відповідає останньому тегу)

// const previousSiblingOfUl = ulList.previousSibling;

// console.log(previousSiblingOfUl); // вибере елемент «зліва» від elem (його попереднього сусіда вклюно з текстовими вузлами)

// const previousElementSiblingOfUl = ulList.previousElementSibling;

// console.log(previousElementSiblingOfUl); // вибере вузол-елемент «зліва» від elem (його попереднього сусіда того, який відповідає тегу).

// const nextSiblingOfUl = ulList.nextSibling;

// console.log(nextSiblingOfUl); // вибере елемент «праворуч» від elem (його наступного сусіда включно з текстовими вузлами)

// const nextElementSiblingOfUl = ulList.nextElementSibling;

// console.log(nextElementSiblingOfUl); // вибере вузол-елемент «праворуч» від elem (його наступного сусіда того, який відповідає тегу).

// const item = document.querySelector('.item')

// console.log(item) // повертає перший знайдений елемент, якщо елемента з таким селектором (за класом, айдішником) немає повертає null

// const items = document.querySelectorAll('.item')

// console.log(items) // повертає псевдомасив всіх знайдених елементів з селектором (за класом, айдішником) якщо не знаходить повертає порожній масив

// -------------------------------------------НАВІГАЦІЯ ПО DOM ДЕРЕВУ------------------------------------------------------------------

// ----------------------------------------------ВЛАСТИВОСТІ АТРИБУТІВ----------------------------------------------------------------//

// const message = document.querySelector("#message")

// console.log(message.value)

// const hrefLink = document.querySelector(".btn")

// console.log(hrefLink.href)

// const imageSrc = document.querySelector(".image")

// console.log(imageSrc.src)
// console.log(imageSrc.width)

// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src - шлях до зображення тегу <img>.

// const message = document.querySelector('#message')

// console.log(message.value)

// ----------------------------------------------ВЛАСТИВОСТІ АТРИБУТІВ----------------------------------------------------------------//

// ----------------------------------------------ВЛАСТИВІСТЬ textContent-------------------------------------------------------------

// const text = document.querySelector(".article-text")

// console.log(text.textContent)

// const title = document.querySelector(".article-title")

// console.log(title.textContent)

// ----------------------------------------------ВЛАСТИВІСТЬ textContent-------------------------------------------------------------

// ----------------------------------------------Властивість classList--------------------------------------------------------------

// const text = document.querySelector("#paragraph")
// console.log(text.classList)

// text.classList.remove('red') // видаляє клас
// console.log(text.classList)

// text.classList.add('orange') // додає клас
// console.log(text.classList)

// text.classList.toggle('big') // видаляє якщо такий клас є
// console.log(text.classList)

// text.classList.toggle('big') // додає якщо нема
// console.log(text.classList)

// text.classList.replace('big', 'small') // замінює старий клас на новий (1-й аргумент - страий клас, 2-й аргумент - новий клас)
// console.log(text.classList)

// const text = document.querySelector('#paragraph')

// text.classList.remove('big')

// console.log(text.classList)

// text.classList.add('small')

// console.log(text.classList)

// text.classList.toggle('red')

// console.log(text.classList)

// text.classList.toggle('red')

// console.log(text.classList)

// text.classList.replace('text', 'newText')

// console.log(text.classList)

// console.log(text.classList.contains('green'))

// ----------------------------------------------Властивість classList--------------------------------------------------------------

// ----------------------------------------------Властивість style--------------------------------------------------------------



// const divItem = document.querySelector('div')
// const divLink = divItem.children

// console.log(divLink)

// // divLink[0].style.backgroundColor = 'teal'
// // divLink[1].style.backgroundColor ='orange'
// // divLink[2].style.backgroundColor = 'green'

// for(let i = 0; i < divLink.length; i += 1) {
//     divLink[i].style.backgroundColor = 'teal'
//     divLink[i].style.fontSize = '48px'
//     divLink[i].style.color = 'white'
// }

// const divItems = document.querySelector('div')

// const divLinks = divItems.children

// console.log(divLinks)

// for(let i = 0; i < divLinks.length; i += 1) {
//     divLinks[i].style.color = 'white'
// }

// const linktyleAdded = [...divLinks].forEach(element => {
//     console.log(element)
//     element.style.backgroundColor = 'red'
// })

// ----------------------------------------------Властивість style--------------------------------------------------------------

// ---------------------------------------------------АТРИБУТИ---------------------------------------------------------------


// const image = document.querySelector('.image')

// console.log(image.attributes)

// console.log(image.getAttribute('src'))

// console.log(image.hasAttribute('alt'))

// image.setAttribute('width', '480px')

// console.log(image.getAttribute('width'))
// console.log(image.attributes)

// image.removeAttribute('width')

// console.log(image.attributes)

// const image = document.querySelector('.image')

// console.log(image.attributes)

// console.log(image.getAttribute('src'))

// image.setAttribute('width', '480px')

// console.log(image.attributes)

// image.removeAttribute('width')

// console.log(image.attributes)

// console.log(image.hasAttribute('width'))

// ---------------------------------------------------АТРИБУТИ---------------------------------------------------------------

// const image = document.querySelector('.image')

// console.log(image.attributes)

// console.log(image.hasAttribute('src'))

// image.setAttribute('width', '480px')

// console.log(image.attributes)

// console.log(image.getAttribute('alt'))

// image.removeAttribute('width')

// console.log(image.hasAttribute('width'))

// ---------------------------------------------------АТРИБУТИ---------------------------------------------------------------

// ----------------------------------------------------data-атрибути---------------------------------------------------------

// const saveBtn = document.querySelector('button[data-action="save"]')

// const closeBtn = document.querySelector('button[data-action="close"]')

// console.log(saveBtn.dataset.action)

// console.log(closeBtn.dataset.action)

// const dishes = document.querySelectorAll('.dishes > li')

// dishes.forEach((dish) => {
//     console.log(dish.dataset.id)
// })

// const saveBtn = document.querySelector('button[data-action="save"]')

// console.log(saveBtn.dataset.action)

// const closeBtn = document.querySelector('button[data-action="close"]')

// console.log(closeBtn.dataset.action)

// const closeBtn = document.querySelector('button[data-action="close"]')

// console.log(closeBtn.dataset.action)

// const saveBtn = document.querySelector('button[data-action="save"]')

// console.log(saveBtn.dataset.action)

// ----------------------------------------------------data-атрибути---------------------------------------------------------

// -------------------------------------------ДОДАВАННЯ ЕЛЕМЕНТІВ-------------------------------------------------------------

// const heading = document.createElement('h1')

// heading.textContent = 'Hello world'

// console.log(heading)

// const image = document.createElement('img')

// image.alt = 'Some picture'
// image.src = "https://placeimg.com/640/480/nature"
// console.log(image)

// image.append('li')

// const list = document.querySelector('.usernames')

// const firstItem = document.createElement('li')

// firstItem.textContent = 'Ajax'

// list.prepend(firstItem)

// const lastItem = document.createElement('li')

// lastItem.textContent = 'Poly'

// list.append(lastItem)

// const heading = document.createElement('h2')

// heading.textContent = 'USERNAMES'

// list.before(heading)

// const text = document.createElement('p')

// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";

// list.after(text)

// -------------------------------------------ДОДАВАННЯ ЕЛЕМЕНТІВ-------------------------------------------------------------

// -------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ-------------------------------------------------------------

// const title = document.querySelector('.title');
// title.remove();

// -------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ-------------------------------------------------------------

// --------------------------------------------ВЛАСТИВІСТЬ innerHTML читання---------------------------------------------------

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const article = document.querySelector('.article')

// console.log(article.innerHTML)

// const title = document.querySelector('.article .title')

// console.log(title.innerHTML)

// const text = document.querySelector('.article .text')

// console.log(text.innerHTML)

// const link = document.querySelector('.article .link')

// console.log(link.innerHTML)

// --------------------------------------------ВЛАСТИВІСТЬ innerHTML читання---------------------------------------------------

// --------------------------------------------ВЛАСТИВІСТЬ innerHTML заміна---------------------------------------------------

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const title = document.querySelector('.article .title')

// title.innerHTML = 'New and <span class="accent">improved</span> title'

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"]

// const list = document.querySelector('.list')

// const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join("")
// console.log(markup)

// list.innerHTML = markup

// --------------------------------------------ВЛАСТИВІСТЬ innerHTML заміна---------------------------------------------------

// --------------------------------------------ВЛАСТИВІСТЬ insertAdjacentHTML()---------------------------------------------------

// "beforebegin" - перед elem (тобто в нашому прикладі li будуть перед списком ul)
// "afterend" - після elem (тобто в нашому прикладі li будуть після списку ul)
// "afterbegin" - всередині elem, перед усіма дітьми (тобто в нашому прикладі li будуть в середині списку ul перед всіма його елементами)
// "beforeend" - всередині elem, після усіх дітей (тобто в нашому прикладі li будуть в середині списку ul після всіх його елементів)

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const list = document.querySelector('.list')

// const newTechnologies = ['React', 'TypeScript', 'Node.js']

// const markup = newTechnologies.map(technology => `<li class="list-item new">${technology}</li>`).join("")
// console.log(markup)

// list.insertAdjacentHTML('beforeend', markup)

// const list = document.querySelector('.list')

// const newTechnologies = ['React', 'TypeScript', 'Node.js']

// const markup = newTechnologies.map(technology => `<li class="list-item new">${technology}</li>`)

// list.insertAdjacentHTML('beforeend', markup)

// list.insertAdjacentHTML('beforebegin', '<h1>New Technologies</h1>')

// --------------------------------------------ВЛАСТИВІСТЬ insertAdjacentHTML()---------------------------------------------------

// --------------------------------------------ПОДІї------------------------------------------------------------------

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
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

// --------------------------------------------ПОДІї------------------------------------------------------------------

// --------------------------------------------Метод addEventListener()---------------------------------------------

// const singleBtn = document.querySelector('#single')

// const handleClick = () => {
//   console.log('This is single click')
// }

// singleBtn.addEventListener('click', handleClick)

// const multipleBtn = document.querySelector('#multiple')

// const firstClick = () => {
//   console.log('This is first click')
// }

// const secondClick = () => {
//   console.log('This is second click')
// }

// const lastClick = () => {
//   console.log('This is last click')
// }

// multipleBtn.addEventListener('click', firstClick)
// multipleBtn.addEventListener('click', secondClick)
// multipleBtn.addEventListener('click', lastClick)

// --------------------------------------------Метод addEventListener()---------------------------------------------

// --------------------------------------------Метод removeEventListener()---------------------------------------------

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

// const btn = document.querySelector("#btn");

// const addEventListenerBtn = document.querySelector('[data-action="add"]');
// const removeEventListenerBtn = document.querySelector('[data-action="remove"]');

// const handleClick = () => {
//   console.log("Перевірочний клік");
// };

// addEventListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("зараз лічильник перевірочного кліка працює");
// });

// removeEventListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("після цього оголошення перевірочний клік не працюватиме");
// });

// const user = {
//   firstname: "Ihor",
//   secondname: "Ropan",
//   showUwerName() {
//     console.log(`${this.firstname}, ${this.secondname}`)
//   }
// }

// btn.addEventListener('click', user.showUwerName.bind(user))

// --------------------------------------------Метод removeEventListener()---------------------------------------------

// --------------------------------------------Об'єкт події-------------------------------------------------------------

// const btn = document.querySelector('#btn')

// const handleClick = event => {
//   console.log(event);
// };

// btn.addEventListener("click", handleClick);

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// event.type - тип події.
// event.currentTarget - елемент, на якому виконується обробник події.

// ---------------------------------------------Об'єкт події-------------------------------------------------------------

// --------------------------------------------Дії браузера за замовчуванням---------------------------------------------

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {

//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// --------------------------------------------Дії браузера за замовчуванням---------------------------------------------

// --------------------------------------------події клавіатури----------------------------------------------------------

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
//     keypressCounter += 1;
//   }

// --------------------------------------------події клавіатури----------------------------------------------------------

// const clearLogBtn = document.querySelector('[data-action="clear"]')
// const logList = document.querySelector('.log-list')
// let keypressCounter = 1

// document.addEventListener('keydown', logMessage)
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener('click', reset)

// function logMessage ({type, key, code}) {
//     const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//         <ul>
//             <li><b>Event</b>${type}</li>
//             <li><b>Key</b>${key}</li>
//             <li><b>Code</b>${code}</li>
//         </ul>
//     </div>`

//     logList.insertAdjacentHTML('afterbegin', markup)

//     if(key === "keyup") {
//         incrementKeypressCounter()
//     }
// }

// function incrementKeypressCounter() {
//     keypressCounter += 1
// }

// function reset() {
//     keypressCounter = 1
//     logList.innerHTML = ""
// }
