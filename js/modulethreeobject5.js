// --------------------------------------------------------ОБ'ЄКТИ--------------------------------------------------------------

// Об'єкти дозволяють описати і згрупувати характеристики певної сутності - користувача, книги, продукту в магазині, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).
// Для оголошення використовуються фігурні дужки {} - літерал об'єкта.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   console.log(book)

//   Під час створення об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок. Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

// Якщо ключ взятий в лапки, то це може бути довільний рядок.
// Якщо лапок немає, то є обмеження - ім'я без пробілів, починається літерою або символами _ і $.

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//   };

// console.log(user)
// --------------------------------------------------------влкадені властивості---------------------------------------------------------------

// Значенням властивості може бути інший об'єкт, для того, щоб зберігати вкладені і згруповані дані. Наприклад, статистика користувача соціальної мережі складається з кількості відстежувачів, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування - окремо країна і місто.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   console.log(user)

// -----------------------------------------------Звернення до властивостей через крапку-----------------------------------------------------

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ім'я_властивості. Синтаксис «через крапку» використовується у більшості випадків і доречний тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місці звернення буде повернуто значення властивості з таким ім'ям.
// Якщо об'єкт не містить властивості з таким ім'ям, на місці звернення повернеться undefined.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book.title;
//   console.log(bookTitle); // 'The Last Kingdom'
  
//   const bookGenres = book.genres;
//   console.log(bookGenres); // ['historical prose', 'adventurs']
  
//   const bookPrice = book.price;
//   console.log(bookPrice); // undefined


// -----------------------------------------------------Звернення до вкладених властивостей---------------------------------------------------

// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country, де user.location - це звернення (шлях) до об'єкта у властивості location, а user.locaton.country звернення до властивості country у цьому об'єкті. Тобто «крапка» вказує наступну вкладеність.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   const location = user.location;
//   console.log(location); // Об'єкт location
  
//   const country = user.location.country;
//   console.log(country); // 'Jamaica'


// const user = {
//     name: "ROPAN",
//     age: 30,
//     stats: {
//         folowers: 20,
//         likes: 13,
//     },
//     hobbies: ["swiming", "dancing", "fighting"]
// }

// const howOld = user.age
// console.log(howOld)

// const hobbiesUser = user.hobbies
// console.log(hobbiesUser[0])

// const userStatsLikes = user.stats.likes
// console.log(userStatsLikes)

// const user = {
//     name: "Ruban",
//     age: 26,
//     hobbies: ["cinema", "sport", "music"],
//     home: {
//         country: "Ukraine",
//         city: "Zvenihorodka",
//     }
// }

// const userAge = user.age
// console.log(userAge)

// const userHobbies = user.hobbies
// console.log(user.hobbies[1])

// const userHome = user.home.city
// console.log(userHome)


// Якщо значення властивості - це масив, тоді у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс, або використовувати властивості і методи.

// const user = {
//     hobbies: ['swiming', 'music', 'sci-fi'],
// }

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// ---------------------------------------Звернення до властивостей через квадратні дужки-------------------------------------------------

// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ім'я властивості"]. Схоже на звернення до елемента масиву з різницею у тому, що в дужках вказується не індекс елемента, а ім'я властивості у вигляді рядка.

// Синтаксис «квадратних дужок» використовується значно рідше, у разі, коли ім'я властивості заздалегідь невідоме або зберігається у змінній, наприклад, як значення параметра функції.

// На місці звернення буде повернуте значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місці звернення повернеться undefined.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book["title"];
//   console.log(bookTitle); // 'The Last Kingdom'
  
//   const bookGenres = book["genres"];
//   console.log(bookGenres); // ['historical prose', 'adventurs']
  
//   const propKey = "author";
//   const bookAuthor = book[propKey];
//   console.log(bookAuthor); // 'Bernard Cornwell'



// --------------------------------------------------------Зміна значення властивості------------------------------------------------------

// Після створення об'єкта, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");
  
//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// const music = {
//     author: 'Ropan',
//     genre: ['Hip-Hop', 'Rap', 'Reggae'],
//     song: 'Cool wolrd',
//     rating: 10,
// }

// music.author = 'Kuk'
// console.log(music.author)

// music.genre.unshift('Pop')
// console.log(music.genre)

// music.rating = 9
// console.log(music.rating)

// --------------------------------------------------додавання властивостей--------------------------------------------------------------

// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ім'ям, така властивість в об'єкті відсутня, вона буде створена.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
    
//   };
  
//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "pl"];
  
//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'pl']
 

// const track = {
//     name: "Good Day",
//     author: "Dj Break",
//     genres: ["Techno", "Deep Techno"],
//     rating: 4,
// };

// track.price = 30;
// track.originalLanguage = "Eanglish";
// track.recording = ["UK", "USA"];

// console.log(track)

// const shoose = {
//     name: "Nike",
//     model: "Promodel Ropan",
//     year: "2027",
// }

// shoose.price = 150;
// shoose.genre = ['sport', 'training', 'walk'];
// shoose.location = {country: "ukraine", city: "kyiv"}

// console.log(shoose)

// const magazine = {
//     prod1: "Icecream",
//     prod2: "Water",
//     date: 22062022
// }

// magazine.name = "Bublik";
// magazine.type = ["products", "chemical"]
// magazine.location = {country: "Ukraine", city: "Pryluki"}

// console.log(magazine)
// --------------------------------------------------Короткі властивості-------------------------------------------------------

// Іноді, під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, що і у властивості.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається потрібне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної у якості імені властивості, а її значення - у якості значення властивості.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// ---------------------------------------------Обчислювальні властивості-------------------------------------------------------------

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається у якості значення змінної або у якості результату виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його. Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

// ----------------------------------------------------Методи об'єкта---------------------------------------------------------------

// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     // Це метод об'єкта
//     addBook() {
//       console.log("Цей метод буде додавати нову книгу у властивість books");
//     },
//   };
  
//   // Виклики методів
//   bookShelf.getBooks();
//   bookShelf.addBook("Нова книга");

// --------------------------------------------доступ до властивостей об'єкта в методах----------------------------------------------------

// Методи використовуються для роботи з властивостями об'єкта, їх зміни. Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   // Перед крапкою знаходиться об'єкт bookShelf,
//   // тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// Для того, щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

//   const musicBox = {
//     songs: ['Hello', 'Girl', 'World'],
//     getSongs() {
//         return this.songs;
//     },
//     addSongs(songName){
//         this.songs.push(songName);
//     },
//     removeSong(songName){
//         const songIndex = this.songs.indexOf(songName);
//         this.songs.splice(songIndex, 1);
//     }
//   }

//   console.log(musicBox.getSongs())
//   musicBox.addSongs('Preety')
//   musicBox.addSongs('Dream')
//   console.log(musicBox.getSongs())
//   musicBox.removeSong('Girl')
//   console.log(musicBox.getSongs())
  
// const videoBox = {
//     videos: ['fight', 'sports', 'weather'],
//     getVideo() {
//         return this.videos
//     },
//     addVideo(videoName) {
//         this.videos.push(videoName)
//     },
//     removeVideo(videoName) {
//         const videoIndex = this.videos.indexOf(videoName)
//         this.videos.splice(videoIndex, 1)
//     },
// };

// console.log(videoBox.getVideo())
// videoBox.addVideo('Boxing')
// videoBox.addVideo('Skate')
// console.log(videoBox.getVideo)
// videoBox.removeVideo('fight')
// console.log(videoBox.getVideo())

// const gameBox = {
//     games: ['NFS', 'CS', 'PUBG'],
//     getGame() {
//         return this.games
//     },

//     addGame(gameName) {
//         this.games.push(gameName)
//     },

//     removeGame(gameName) {
//         const indexGame = this.games.indexOf(gameName)
//         return this.games.splice(indexGame, 1)
//     }
// }

// console.log(gameBox.getGame())
// gameBox.addGame('NHL')
// console.log(gameBox.getGame())
// gameBox.removeGame('NFS')
// console.log(gameBox.getGame())

// -----------------------------------------------ПЕРЕБИРАННЯ ОБ'ЄКТА--------------------------------------------------------

// На відміну від масиву або рядка, об'єкт - це неітерабельна сутність, тобто його не можна перебрати циклами for або for...of.

// ----------------------------------------------------Цикл for...in----------------------------------------------------------

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//     // інструкції
//   }

// Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа (ім'я) властивості. Для того, щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }

// -----------------------------------------------Метод hasOwnProperty()-------------------------------------------------------------

// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// Оператор in, який використовується в циклі for...in, не робить різниці між власними та невласними властивостями об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується метод hasOwnProperty(key), який повертає true або false.

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// Тому, перебираючи циклом for...in, необхідно на кожній ітерації додати перевірку власної властивості. Навіть, якщо зараз ми впевнені у тому, що в об'єкті відсутні невласні властивості, це захистить від можливих помилок у майбутньому.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

// console.log(book)
  
//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }
  
//     // Якщо це невласна властивість - нічого не робимо
//   }

// ------------------------------------Метод Object.keys()--повертає масив ключив(властивостей)--------------------------------------

// Вбудований клас Object має декілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо об'єкт не має властивостей, метод поверне порожній масив.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, і не використовуючи архаїчний цикл for...in з перевірками належності властивостей.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   console.log(book)
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }

// ------------------------------------Метод Object.values()--повертає масив значень об'єктів-------------------------------------

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// Масив значень властивостей також можна перебрати циклом for...of, наприклад, для отримання загальної суми числових значень.

// Припустимо, що нам потрібно порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість. У такому випадку, буде доречним метод Object.values() для того, щоб отримати масив усіх значень, а потім зручно додати їх.

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };
  
//   const values = Object.values(goods); // [6, 3, 4, 7]
  
//   let total = 0;
  
//   for (const value of values) {
//     total += value;
//   }
  
//   console.log(total); // 20

// --------------------------------Метод Object.entries()-повертає масив імені властивості і значення--------------------------------

// Метод Object.entries(obj) повертає масив записів, кожен елемент якого, буде ще один масив з 2-х елементів: імені властивості і значення цієї властивості з об'єкта obj.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
//   const entries = Object.entries(book);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// --------------------------------------------------------МАСИВ ОБ'ЄКТІВ----------------------------------------------------------------

// Стандартний набір повсякденних завдань розробника містить маніпуляцію масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

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
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];



// //   Для перебирання такого масиву використовується стандартний цикл for...of. Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

// for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

// //   Наприклад, отримаємо список назв усіх книг в колекції books.

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(books)
// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// // Дізнаємося середній рейтинг усієї нашої колекції. Для цього, додамо усі рейтинги, після чого поділимо це значення на кількість книг в колекції.

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);//toFixed - метод який форматує число з потрбіною кількістю цифр після коми
// console.log(averageRating); // 8.2