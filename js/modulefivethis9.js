// -----------------------------------------------------КОНТЕКСТ ВИКОНАННЯ ФУНКЦІЇ----------------------------------------------------------

// Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//     username: "Petya",
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   petya.showName();

// практика

// const ropan = {
//     username: "ROPAN",
//     showName() {
//         console.log(this.username)
//     }
// }
// ropan.showName()

// const ruban = {
//     user: "Ruban",
//     showUser () {
//         console.log(this.user)
//     }
// }
// ruban.showUser()

// const product = {
//     name: "IceCream",
//     showProduct () {
//         console.log(this.name)
//     }
// }
// product.showProduct()

// const fruit = {
//     name: "apple",
//     showFruit() {
//         console.log(this.name)
//     }
// }

// fruit.showFruit()

// const city = {
//     name: "Kyiv",
//     showCity () {
//         console.log(this.name)
//     }
// }

// city.showCity()

// const river = {
//     name: "Udai",
//     showRiver () {
//         console.log(this.name)
//     }
// }

// river.showRiver()

// const country = {
//     name: "Ukraine",
//     showCountry () {
//         console.log(this.name)
//     }
// }
// country.showCountry()

// const videos = {
//     clip: "Stop",
//     showClip () {
//         console.log(this.clip)
//     }
// }

// videos.showClip()

// Розглянемо приклад з колекцією книг.

// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };
  
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
//   bookShelf.addAuthor("Ли Танит");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// --------------------------практика

// const songs = {
//     names: ['Чевона калина', 'Додому', 'Верба'],
//     showSongs () {
//         return this.names
//     },
//     addSong (newSong) {
//         this.names.push(newSong)
//     },
// }

// console.log(songs.showSongs())
// songs.addSong("Між добром та злом")
// console.log(songs.showSongs())

// const musicGenre = {
//     genre: ["Rap", "Pop", "Rock"],
//     showGenre () {
//         return this.genre
//     },

//     addGenre (newGenre) {
//         this.genre.push(newGenre)
//     },
// }

// console.log(musicGenre.showGenre())
// musicGenre.addGenre("Techno")
// console.log(musicGenre.showGenre())

// const filmsNames = {
//     names: ["Good Luck", "Fight club", "Batman"],
//     getNames () {
//         return this.names
//     },

//     addNewFilm (nameFilm) {
//         this.names.push(nameFilm)
//     }
// }

// console.log(filmsNames.getNames())

// filmsNames.addNewFilm("Enter the void")

// console.log(filmsNames.getNames())

// const fruits = {
//     names: ["apple", "cherry", "strawberry"],

//     showFruits () {
//         return this.names
//     },

//     addFruits (newFruits) {
//         this.names.push(newFruits)
//     }
// }

// console.log(fruits.showFruits())

// fruits.addFruits("Banana")

// console.log(fruits.showFruits())

// Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

// ----------------------------------------------------ПРАВИЛА ВИЗНАЧЕННЯ THIS-------------------------------------------------

// Необхідно засвоїти лише одне правило для визначення this - значення контексту всередині функції (не стрілочної) визначається не на момент її створення, а на момент виклику. Тобто значення this визначається тим, як викликається функція, а не де вона була оголошена.

// this у глобальній області видимості

// У глобальній області видимості, якщо скрипт виконується не в суворому режимі, this посилається на об'єкт window. В суворому режимі значення this, в глобальній області видимості, буде undefined.

// function foo() {
//     console.log(this);
//   }
  
//   foo(); // window без "use strict" і undefined з "use strict"

// ----------------------------------------------------this в методі об'єкта------------------------------------------------------

// Якщо функція була викликана як метод об'єкта, то контекст буде посилатися на об'єкт, частиною якого є метод.

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

// --------------------практика

// const song = {
//     name: "Bim",

//     showThis () {
//         console.log(this)
//     },

//     showThisName () {
//         console.log(this.name)
//     }
// }

// song.showThis()

// song.showThisName()

// const film = {
//     name: "Good film",

//     showObject () {
//         console.log(this)
//     },

//     showName () {
//         console.log(this.name)
//     }
// }

// film.showName()
// film.showObject()


// const videos = {
//     name: "Fight",

//     showObjectClip () {
//         console.log(this)
//     },
//     showGenreClip () {
//         console.log(this.name)
//     } 
// }

// videos.showObjectClip()
// videos.showGenreClip()

// const product = {
//     name: "fruit",

//     showObjectFruit () {
//         console.log(this)
//     },
//     showNameProd () {
//         console.log(this.name)
//     } 
// }

// product.showObjectFruit()
// product.showNameProd()

// Розглянемо складніший приклад для кращого розуміння.

// 1)Спочатку створимо функцію в глобальній області видимості і викличемо її.
// 2)Після чого, присвоїмо її у властивість об'єкта і викличемо як метод цього об'єкта.


// 1)
// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Викликаємо у глобальному контексті
//   showThis(); // this in showThis: Window


//   const user = {
//     username: "Mango",
//   };
//   // 2)
//   // Записуємо посилання на функцію у властивість об'єкта
//   // Зверніть увагу, що це не виклик - немає ()
//   user.showContext = showThis;
  
//   // Викликаємо функцію в контексті об'єкта
//   // this буде вказувати на поточний об'єкт, в контексті
//   // якого здійснюється виклик, а не на глобальний об'єкт.
//   user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//   -----------------------практка

// function showFilm() {
// console.log('This my film', this)
// }
// showFilm();

// const name = {
//     name: "Good Film",
// };

// name.showMyFilm = showFilm;

// name.showMyFilm()
 
// function showSong () {
//     console.log("This is song", this)
// }
// showSong()

// const name = {
//     nameSong: "New Baby",
// };

// name.showThisSong = showSong;
// name.showThisSong()

// function fruits () {
//     console.log("This my fruit", this)
// }
// fruits()

// const fruit = {
//     fruitName: "Apple",
// }

// fruit.fruitNameShow = fruits;
// fruit.fruitNameShow()

// function film () {
//     console.log("this film", this)
// }

// film()

// const name = {
//     nameFilm: "Cuba",
// };

// name.nameFilmShow = film;
// name.nameFilmShow()

// function product () {
//     console.log("Its my product", this)
// }
// product()

// const genre = {
//     red: "Cherry"
// }

// genre.showRed = product;
// genre.showRed()

// function people () {
//     console.log("this is good people", this)
// }
// people()

// const good = {
//     allgood: "Nice"
// }

// good.showAllGoodPeople = people;
// good.showAllGoodPeople()


// --------------------------------------------------this в callback-функціях--------буде помилка---------------------------------

// Передаючи методи об'єкта як колбек-функції, контекст не зберігається. Колбек - це посилання на метод, яке присвоюється як значення параметра, що викликається без об'єкта.

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Буде помилка у виклику функції

// --------------------------------------------------this у стрілочних функціях------------------------------------------------------

// Стрілочні функції не мають свого this. На відміну від звичайних функцій, змінити значення this всередині стрілки після її оголошення - неможливо.

// Контекст всередині стрілки визначається місцем її оголошення, а не виклику, і посилається на контекст батьківської функції.

// Стрілочні функції також ігнорують наявність суворого режиму. Якщо стрілка запам'ятала глобальний контекст, то this в ній буде містити посилання на window, незалежно від того, чи виконується скрипт в суворому режимі.

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//   showThis(); // this in showThis: window
  
//   const user = {
//     username: "Mango",
//   };
//   user.showContext = showThis;
  
//   user.showContext(); // this in showThis: window


// Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.

// Приклад - непрактичний, але чудово показує як працює контекст для стрілок. Значення контексту береться з батьківської області видимості.

// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//       const foo = () => {
//         // Стрілки запам'ятовують контекст під час оголошення
//         // з батьківської області видимості
//         console.log("this in foo: ", this);
//       };
  
//       foo();
//       console.log("this in showThis: ", this);
//     },
//   };
  
//   hotel.showThis();
//   // this in foo: {username: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// --------------------------------------------------------МЕТОДИ ФУНКЦІЙ-----------------------------------------------------------------

// Трапляються ситуації, коли функцію потрібно викликати в контексті об'єкта, при цьому функція не є його методом. Для цього у функцій є методи call, apply і bind.

// ---------------------------------------------------------Метод call()--------------------------------------------------------------

// foo.call(obj, arg1, arg2, ...)

// Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть аргументи arg1, arg2 тощо.

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };
  
//   greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
//   greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// ---------------------практика

// function registerSong (registerMySong) {
//     console.log(`${registerMySong}, ${this.songName}`)
// }

// const song1 = {
//     songName: "Peolpe",
// }

// const song2 = {
//     songName: "Good day",
// }

// registerSong.call(song1, "Ваша пісня зареєстрована");
// registerSong.call(song2, "пройшла перевірку")

// function cinema (registerTicket) {
//     console.log(`${registerTicket}, ${this.viewer}`)
// }

// const filmMorning = {
//     viewer: "ROPAN",
// };

// const filmAfternoon = {
//     viewer: "RUBAN",
// }

// cinema.call(filmMorning, "Квиток отримано");
// cinema.call(filmAfternoon, "ПРиємного перегляду");

// function airport (registerTicket) {
//     console.log(`${registerTicket}, ${this.client}`)
// }

// const ropan = {
//     client: "Ihor Ropan"
// };

// const ruban = {
//     client: "Liubov Ruban"
// };

// airport.call(ropan, "Вітаємо ви придбали квиток");
// airport.call(ruban, "Happy fly");

// function bus (registerTicket) {
//     console.log(`${registerTicket}, ${this.busUser}`)
// }

// const ropan = {
//     busUser: "Ihor Ropan",
// }

// const ruban = {
//     busUser: "Liubov Ruban",
// }

// bus.call(ropan, "Ви придбали квиток");
// bus.call(ruban, "Ваш автобус відправляється через 3 години");

// function yacht (registerTicket) {
//     console.log(`${registerTicket}, ${this.client}`)
// }

// const ruban =  {
//     client: "Ruban Liubov"
// }

// const ropan = {
//     client: "Ihor ropan"
// }

// yacht.call(ruban, 'ваш білет куплено')
// yacht.call(ropan, 'ваша яхта відправляється через пів години')

// function museum (registerTicket) {
//     console.log(`${registerTicket}, ${this.guest}`)
// }

// const excursion = {
//     guest: "Ropan"
// }

// const exposition = {
//     guest: "Ruban"
// }

// museum.call(excursion, "Дякуємо, ви можете відвідати музей")
// museum.call(exposition, "Експозиція буде доступною через 3 дні")

// function gallery (getGalleryticket) {
//     console.log(`${getGalleryticket}, ${this.guest}`)
// }

// const guest1 = {
//     guest: "Ropan"
// }

// const guest2 = {
//     guest: "Ruban"
// }

// gallery.call(guest1, "Доступ в галерею відкритий")
// gallery.call(guest2, "виставка відбудеться у вівторок, чекаємо на вас")

// --------------------------------------------------------Метод apply-----------------------------------------------------------

// Метод apply - це аналог методу call за винятком того, що синтаксис передачі аргументів вимагає не перерахування, а масив, навіть якщо аргумент всього один.

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])


// Метод apply викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };
  
//   greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
//   greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// ------------------------------------------------------Метод bind()------------------------------------------------------------------

// Методи call і apply викликають функцію «на місці», тобто відразу. Але у разі колбек-функцій, коли необхідно НЕ! відразу викликати функцію, а передати посилання на неї, причому з прив'язаним контекстом, використовується метод bind.

// foo.bind(obj, arg1, arg2, ...)

// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

// function greet(clientName) {
//     return `${clientName}, ласкаво просимо в «${this.service}».`;
//   }
  
//   const steam = {
//     service: "Steam",
//   };
//   const steamGreeter = greet.bind(steam);
//   steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."
  
//   const gmail = {
//     service: "Gmail",
//   };
//   const gmailGreeter = greet.bind(gmail);
//   gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

//  ---------------------------практика

// function register (clientName) {
//     return `${clientName}, вітаємо вас на ${this.service}`
// }

// const amazon = {
//     service: "Amazone",
// }

// const amazonRegister = register.bind(amazon);
// console.log(amazonRegister("Ropan"));

// const facebook = {
//     service: "facebook"
// }

// const facebookRegister = register.bind(facebook)
// console.log(facebookRegister("Ruban"))

// function games (gammerName) {
//     return `${gammerName}, вітаємо ви зареєстровані в ${this.game}`
// }

// const pubg = {
//     game: "PUBG"
// }

// const pubgRegister = games.bind(pubg)
// console.log(pubgRegister("Ropan"))

// const NFS = {
//     game: "Need For Speed"
// }

// const nfsRegister = games.bind(NFS)
// console.log(nfsRegister("Ruban"))

// function hello (registerName) {
//     return `${registerName}, welcome to ${this.magazine}`
// }

// const adidas = {
//     magazine: "Adidas"
// }

// const adidasReg = hello.bind(adidas)
// console.log(adidasReg("Ropan"))

// const nike = {
//     magazine: "Nike"
// }

// const nikeReg = hello.bind(nike)
// console.log(nikeReg("Ruban"))


// function company (registerClient) {
//     return `${registerClient}, ласкаво просимо в компанію ${this.ourcompany}`
// }

// const aqua = {
//     ourcompany: "Aqua good :)"
// }

// const regAqua = company.bind(aqua) 
// console.log(regAqua("Ropan"))

// const sprite = {
//     ourcompany: "Sprite"
// }

// const regSprite = company.bind(sprite)
// console.log(regSprite("Ruban"))

// function inCompany (registerInCompany) {
//     return `${registerInCompany}, вітаємо вас в компанії ${this.company}`
// }

// const dou = {
//     company: "DOU"
// }

// const douReg = inCompany.bind(dou)
// console.log(douReg("Ropan"))

// const goit = {
//     company: "GOIT"
// }

// const regGoit = inCompany.bind(goit)
// console.log(regGoit("Ihor"))

// ---------------------------------------------------bind() і методи об'єкта-----------------------------------------------------------------

// У разі передачі методів об'єкта як колбек-функцій, контекст не зберігається. Колбек - це посилання на метод, яка присвоюється як значення параметра, що викликається без об'єкта.

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

//   makeMessage(customer.getFullName.bind(customer)); // Правильний виклик

//   У суворому режимі, значення this в методі getFullName, викликаючи як колбек-функції callback(), буде undefined. Звертаючись до властивостей firstName і lastName, виникне помилка, оскільки undefined - це не об'єкт.

// Метод bind використовується для прив'язування контексту, передаючи методи об'єкта як колбек-функції. Передамо колбеком не оригінальний метод getFullName, а його копію з прив'язаним контекстом об'єкту customer.

// ----------------------------практика

// const client = {
//     firstName: "Ihor",
//     lastName: "Ropan",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     },    
// };

// function makeMessage(cabllack) {
//     console.log(`обробляємо заявку ${cabllack()}`);
// }

// makeMessage(client.getFullName.bind(client))

// const guest = {
//     firstName: "Liubov",
//     lastName: "Ruban",
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// function makeMessage (callback) {
//     console.log(`обробляємо ваш запит ${callback()}`)
// }

// makeMessage(guest.getFullName.bind(guest))

// const guest = {
//     firstName: "Ihor",
//     lastName: "Ropan",
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// function makeMessage (callback) {
//     console.log(`Обробляємо вашу заявку ${callback()}`)
// }

// makeMessage(guest.getFullName.bind(guest))

// const client = {
//     firstName: 'Liubov',
//     lastName: 'Ruban',
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// function makeMessage (callback) {
//     console.log(`Ми в процесі обробки вашого запиту ${callback()}`)
// }

// makeMessage(client.getFullName.bind(client))