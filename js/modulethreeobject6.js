// -----------------------------------------------------СИНТАКСИС SPREAD I REST-------------------------------------------------------------

// Операція ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень. Існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки. В JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.

// Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// Тобто запис Math.max(...[14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max(14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.

// const array = [1, 2, 3]

// const array2 = [...array]

// const array3 = array

// array3.push(4)

// array
// (4) [1, 2, 3, 4]

// array2
// (3) [1, 2, 3]

// array3
// (4) [1, 2, 3, 4]

// ---------------------------------------------------spread: створення нового масиву------робить копію------------------------------------

// Операція ... (spread) дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// -----------------------------------------------spread: створення нового об'єкта-----------------------------------------------------------

// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення. Імена властивостей об'єкта - унікальні, тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// ---------------------------------------rest: збирання всіх аргументів функції-----------------------------------------------------------

// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині

// можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest. аргументи знаходяться у правій частині операції присвоювання, а параметри - у лівій, тому що значення аргументів присвоюються оголошеним параметрам.

// function multiply(...args) {
//     console.log(args); // масив усіх аргументів
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

//   Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

// --------------------------------------rest: збирання частини аргументів функції-----------------------------------------------------

// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значення першого аргументу
//     console.log(secondNumber); // Значення другого аргументу
//     console.log(otherArgs); // Масив інших аргументів
//   }
  
//   multiply('slon', 'cot');
//   multiply('pak', 'shpak', 'utka');
//   multiply('korop', 'pavuchok', 'kuk', 'dziga');

// -----------------------------------------------------ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ-------------------------------------------------------------

// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined
  
//   const accessType = isPublic ? "публічному" : "закритому";
//   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;



//   Деструктуризація завжди знаходиться у лівій частині операції присвоєння. Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, в іншому випадку, їй буде присвоєно undefined.

// --------------------------------------------значення змінної за замовчуванням---------------------------------------------------------------

// Для того, щоб уникнути присвоєння undefined під час деструктуризації неіснуючих властивостей об'єкта, можна задати змінним значення за замовчуванням, які будуть присвоєні лише у тому випадку, якщо об'єкт не містить властивості з таким ім'ям.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//   // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;
  
//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

// -----------------------------------------------Зміна імені змінної----------------------------------------------------------

// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості. Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;
  
//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
  
//   const secondBook = {
//     title: "Сон смішної людини",
//   };
  
//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;
  
//   console.log(secondTitle); // Сон смішної людини
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ------------------------------------------------Деструктуризація в циклах---------------------------------------------------------------

// Перебираючи масив об'єктів циклом for...of, утворюються багаторазові звернення до властивостей об'єкта.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

//   Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

// for (const book of books) {
//     const { title, author, rating } = book;
  
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

//   for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// ----------------------------------------------Глибока деструктуризація------------------------------------------------------

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308

// -----------------------------------------------ДЕСТРУКТУРИЗАЦІЯ МАСИВІВ-----------------------------------------------------

// Деструктуризоване присвоювання можна використовувати і для масивів, але з деякими особливостями.

// Замість фігурних дужок {} використовуються квадратні [].
// Змінним, зазначеним у квадратних дужках [], будуть послідовно присвоюватися значення елементів масиву.

// Деструктуризація (destructuring assignment) – це спеціальний синтаксис присвоєння, у якому можна присвоїти масив чи об'єкт відразу кільком змінним, розбивши їх на частини.

// let [firstName, lastName] = ["Илья", "Кантор"];

// alert(firstName); // Илья
// alert(lastName);  // Кантор

//  або

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву. Деструктуруючи масив, можна розпакувати і присвоїти іншу частину елементів масиву змінної, використовуючи операцію ... (rest).

// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// const cars = ["bmw", 'vw', "audi"]
// const [car, ...machines] = cars;

// console.log(car)
// console.log(machines)

// Елементи можна пропускати. Припустимо, з масиву rgb необхідно взяти тільки останнє значення. На практиці ця можливість рідко використовується.

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// --------------------------------------------------ПАТЕРН ОБ'ЄКТ ПАРАМЕТРІВ----------------------------------------------------------

// Патерн «Об'єкт параметрів» допомагає не заплутатись, в якій послідовності і що передавати, якщо функція приймає більше двох-трьох аргументів.

// function doStuffWithBook(book) {
//     // Робимо щось з властивостями об'єкта
//     console.log(book.title);
//     console.log(book.numberOfPages);
//     // І так далі
//   }

//   // ✅ Все зрозуміло
// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
    
//   });
  

// //   Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, isPublic } = book;
//     console.log(title);
//     // console.log(numberOfPages);
//     // І так далі
//   }

// //   Або відразу в сигнатурі (підписі) функції - немає різниці.

// function doStuffWithBook({
//     title,
//     numberOfPages,
//     downloads,
//     rating,
//     isPublic,
//   }) {
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
//   }


// const user = {
//     name: "John",
//     age: 30,
//     status: "Premium"
// };

// // console.log(user.name) // коли ми точно знаємо назву змінних
// // console.log(user.age)
// // console.log(user.status)

// const userChoice = prompt("Enter object key");
// console.log(user[userChoice]) // квадратні дужки використовуються тоді коли назва ключа передається у вигляді рядочка і коли вона у нас динамічна

// // console.log(user["name"]) //такий синтаксис використовується коли назва ключа є динамічною
// // console.log(user["age"])
// // console.log(user["status"])

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzerald",
//     publisher: "Scribner",
//     year: 1925,
//     pages: 180,
//     price: 20,
// };

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor)

// {} - використовуються як об'єкт, частини конструкцій в js цикл, if, switch, створення функцій, тіло функцій, детструктуризація