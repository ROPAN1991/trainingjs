// -------------------------------------------------------ПРОТОТИПИ КЛАСИ------------------------------------------------------

// ---------------------------------------------Об'єктно-орієнтоване програмування---------------------------------------------

// Процедурне програмування - набір не пов'язаних явно функцій і змінних для зберігання і обробки інформації. Цей підхід - простий і прямолінійний, і може використовуватись для задач, в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).

// Розглянемо приклад процедурного коду, в якому є змінні і функція для підрахунку результату.

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);


// Об'єктно-орієнтоване програмування (ООП) - методологія, яка описує програму як сукупність об'єктів, кожен з яких містить дані (властивості) і методи для взаємодії з ними.

// Використовуємо ООП, зібравши дані в об'єкт employee.

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };
  
//   console.log(employee.getWage());
  

// const user = {
//     bestScore: 10000,
//     playtime: 10,
//     rate: 10,
//     getStats() {
//         return this.bestScore + this.playtime * this.rate
//     }
// }

// console.log(user.getStats())

// const totalSales = {
//     bestSales: 15000,
//     worTime: 8,
//     rate: 5,


//     getSales() {
//         return this.bestSales + this.worTime * this.rate
//     }
// }

// console.log(totalSales.getSales())

// За такого підходу у методі відсутні параметри, використовуються властивості об'єкта, які задаються на момент створення об'єкта і можуть так само змінюватися іншими методами. На виході отримуємо сутність з простим інтерфейсом, що зменшує складність програми

// ----------------------------------------------------Сутності ООП--------------------------------------------------------------------------

// Уявіть собі, що ми проектуємо автомобіль. У нього буде двигун, чотири колеса, бензобак тощо. Автомобіль повинен мати можливість заводитися, збільшувати і зменшувати швидкість. Ми знаємо як взаємодіє двигун і колеса, тобто за якими законами взаємодіють різні частини машини.

// ------------------------------------------------------Клас------------------------------------------------------------------------------

// Клас - спосіб опису сутності, що визначає стан і поведінку, яка залежить від цього стану, а також правила для взаємодії з цією сутністю (контракт).

// У нашому випадку, клас визначає сутність - автомобіль. Властивостями класу будуть двигун, колеса, фари тощо. Методами класу будуть дії: відкрити двері, завести двигун, збільшити швидкість тощо.

// ----------------------------------------------------------Екземпляр------------------------------------------------------------------------

// Ми спроектували креслення, та автомобілі, розроблені на підставі них, сходять з конвеєру. Кожен з них точно повторює креслення, усі системи взаємодіють саме так, як ми спроектували, але кожний автомобіль - унікальний. Вони всі мають номер кузова і двигуна, але всі номери різні, автомобілі розрізняються за кольором, оздобленням салону. Ці автомобілі - це екземпляри класу.

// Екземпляр (об'єкт) - це окремий представник класу, який має конкретний стан і поведінку, що повністю визначається класом. Це те, що створено за кресленням, тобто на підставі опису з класу.

// Простіше кажучи, об'єкт має конкретні значення властивостей і методи, що працюють з цими властивостями на основі правил, заданих в класі. У цьому прикладі, якщо клас - це якийсь абстрактний автомобіль на кресленні, то об'єкт - це конкретний автомобіль, що стоїть у нас під вікнами.

// --------------------------------------------------------Інтерфейс-------------------------------------------------------------------------

// Коли ми підходимо до автомата з кавою або сідаємо за кермо автомобіля, існує певний набір елементів управління, з якими ми можемо взаємодіяти.

// Інтерфейс - це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.

// По суті, інтерфейс описує клас, чітко визначаючи усі можливі дії над ним. Хороший приклад інтерфейсу - панель приладів автомобіля, яка дозволяє викликати методи як-от збільшення швидкості, гальмування, повертання, перемикання передач, увімкнення фар тощо.

// Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю і простотою. Клас з простим інтерфейсом буде легко використовувати, але будуть існувати завдання, які, за допомогою нього, буде складно вирішити.

// Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів, які будуть дозволяти робити дуже багато, але його використання буде пов'язане з великими труднощами і ризиком помилитися, переплутавши щось.


// ---------------------------------------------------ПРОТОТИПНЕ НАСЛІДУВАННЯ----------------------------------------------------------------

// ООП в JavaScript побудовано на прототипному наслідуванні. Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// -------------------------------------------------------Прототип об'єкта-----------------------------------------------------------------

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // { name: 'Манго', __proto__: animal }
//   console.log(animal.isPrototypeOf(dog)); // true

// Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

// Тобто прототип - це резервне сховище властивостей і методів об'єкта, автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

// Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined

// ------------------------------------------------------Метод hasOwnProperty()-------------------------------------------------------------


// Після того як ми дізналися про спосіб пошуку властивостей об'єкта, повинно бути зрозуміло, чому цикл for...in не розрізняє властивості об'єкта і його прототипу.

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// Саме тому ми використовуємо метод obj.hasOwnProperty(prop), який повертає true, якщо властивість prop належить об'єкту obj, а не його прототипу, інакше - false.

// const animal = {
//     eats: true,
//   };
//   const dog = Object.create(animal);
//   dog.barks = true;
  
//   for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) continue;
  
//     console.log(key); // barks
//   }

// Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj, тому, на практиці використовують саме його, а не for...in.

// const animal = {
//     eats: true,
//   };
//   const dog = Object.create(animal);
//   dog.barks = true;
  
//   const dogKeys = Object.keys(dog);
  
//   console.log(dogKeys); // ['barks']

// const тварина = {
//     їсть: true,
// };

// const собака = Object.create(тварина);
// собака.гавкає = true;

// const собакаКлюч = Object.keys(собака);
// console.log(собакаКлюч);

// ---------------------------------------------------------КЛАСИ-----------------------------------------------------------------------------

// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// -----------------------------------------------------Оголошення класу---------------------------------------------------------------------

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменника), що створюється.

// class User {
//     // Тіло класу
//   }
  
//   const mango = new User();
//   console.log(mango); // {}
  
//   const poly = new User();
//   console.log(poly); // {}

// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// Метод побудови класу залежить від того, що вам потрібно. У нашому випадку, клас - це користувач, тому ми додамо в нього поля для імені та пошти.

// ----------------------------------------------------Конструктор класу------------------------------------------------------------------

// Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//     // Синтаксис оголошення методу класу
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Манго", "mango@mail.com");
//   console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
  
//   const poly = new User("Поли", "poly@mail.com");
//   console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// -----------------------практика

// class Admin {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const ropan = new Admin("Ropan", "ropan@mail.com");
// console.log(ropan);

// const ruban = new Admin("Ruban", "ruban@mail.com")
// console.log(ruban);

// class Team {
//     constructor (email, name) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const teamcool = new Team ( "teamwork@mail.com", "Team Work")
// console.log(teamcool)

// const teamcyber = new Team ("cyber@mail.com", "Cyber")
// console.log(teamcyber)

// class Car {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }
// }

// const mers = new Car ("mercedes", "sl500")
// console.log(mers)

// const bmw = new Car ("BMW", "XX")
// console.log(bmw)

// class Juice {
//     constructor (name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const orange = new Juice ("Sandora", "70₴")
// console.log(orange)

// const cherry = new Juice ("Садочок", "77₴")
// console.log(cherry)

// class Icecream {
//     constructor (name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }

// const chocolate = new Icecream ("Chocodream", "Black")
// console.log(chocolate)

// const milky = new Icecream ("Milkyway", "White")
// console.log(milky)

// class Cinema {
//     constructor (genre, year) {
//         this.genre = genre;
//         this.year = year;
//     }
// }

// const history = new Cinema ("Historical", "2007")
// console.log(history)

// const animal = new Cinema ("Lion", "2012")
// console.log(animal)

// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// ----------------------------------------------------Об'єкт параметрів---------------------------------------------------------------------

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Тому, до них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.

// class User {
//     // Деструктуризуємо об'єкт
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
//   });
//   console.log(mango); // { name: "Манго", email: "mango@mail.com" }
  
//   const poly = new User({
//     name: "Поли",
//     email: "poly@mail.com",
//   });
//   console.log(poly); // { name: "Поли", email: "poly@mail.com" }


// class Admin {
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango = new Admin ({
//     name: "Mango",
//     email: "mango@mail.com"
// })

// console.log(mango)

// const poly = new Admin ({
//     name: "Poly",
//     email: "poly@mail.com"
// })

// console.log(poly)

// class Admin {
//     constructor({name, score}) {
//         this.name = name;
//         this.score = score;
//     }
// }

// const ropan = new Admin ({
//     name: "Ropan",
//     score: 1500,
// })

// console.log(ropan)

// const ruban = new Admin ({
//     name: "Ruban",
//     score: 3000,
// })

// console.log(ruban)

// class Director {
//     constructor ({age, profesion}) {
//         this.age = age;
//         this.profesion = profesion;
//     }
// }

// const ikea = new Director ({
//     age: 35,
//     profesion: "head of the product company",
// })

// console.log(ikea)

// class Owner {
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const john = new Owner ({
//     name: "John",
//     email: "cooljohn@mail.com"
// })

// console.log(john)

// ----------------------------------------------------Методи класу---------------------------------------------------------------------

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу - функції, які будуть доступні екземпляру в його прототипі.

// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
  
//     // Метод getEmail
//     getEmail() {
//       return this.email;
//     }
  
//     // Метод changeEmail
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }

// class Admin {
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
//     getEmail() {
//         return this.email;
//     }
    
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Player {
//     constructor({name, score}) {
//         this.name = name;
//         this.score = score;
//     }

//     getName () {
//         return this.name
//     }

//     changeName (newName) {
//         this.name = newName
//     }
// }


// class Owner {
//     constructor ({name, email}) {
//         this.name = name;
//         this.email = email;
//     }
//     getName () {
//         return this.name
//     }

//     changeName (newName) {
//         this.name = newName;
//     }

//     getEmail () {
//         return this.email;
//     }

//     changeEmail (newEmail) {
//         this.email = newEmail;
//     }
// }

// const mango = new Owner({
//     name: "Манго",
//     email: "mango@mail.com",
//   });

//   mango.changeEmail("poly@mail.com")

//   console.log(mango.getEmail())

// ------------------------------------------------------Приватні властивості--------------------------------------------------------------

// Інкапсуляція - це концепція, що дозволяє приховати внутрішні деталі класу. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу.

// В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.

// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до інціалізації в конструкторі - обов'язкове.

// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
//   });
//   mango.changeEmail("mango@supermail.com");
//   console.log(mango.getEmail()); // mango@supermail.com
//   console.log(mango.#email); // Виникне помилка, це приватна властивість

//   Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

// --------------------------------------------------------Геттери і сеттери----------------------------------------------------------------

// Геттери і сеттери - це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сеттер - при спробі його змінити.

// Геттери і сеттери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

// class User {
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     // Геттер email
//     get email() {
//       return this.#email;
//     }
  
//     // Сеттер email
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }

//   Ми оголосили геттер і сеттер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сеттер застосовуються в парі і повинні називатися однаково.

// const mango = new User({ 
//     name: "Манго", 
//     email: "mango@mail.com" 
// });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

// class Admin {
//     #email;
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }

//     get email () {
//         return this.#email;
//     }

//     set email (newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new Admin ({
//     name: "Mango",
//     email: "mango@mail.com"
// })

// console.log(mango.email)
// mango.email = "supremango@mail.com"
// console.log(mango.email)

// class Owner {
//     #email;
//     constructor ({name, email}) {
//         this.name = name;
//         this.email = email;
//     };

//     get email () {
//         return this.#email;
//     };

//     set email (newEmail) {
//         this.#email = newEmail;
//     }
// }

// const ropan = new Owner ({
//     name: "Ropan",
//     email: "ropan@mail.com"
// })

// console.log(ropan.email)
// ropan.email = "superropan@mail.com"
// console.log(ropan.email)


// class Director {
//     #number
//     constructor ({name, number}) {
//         this.name = name;
//         this.number = number;
//     }

//     get number () {
//         return this.#number;
//     }

//     set number (newNumber) {
//         this.#number = newNumber
//     }
// }

// const ruban = new Director ({
//     name: "Ruban Liubov",
//     number: "355076544"
// })

// console.log(ruban.number)
// ruban.number = "3555998988687858658099"
// console.log(ruban.number)

// class Gamer {
//     #email;
//     constructor({name, email}) {
//         this.name = name;
//         this.email = email;
//     }

//     get email () {
//         return this.#email;
//     }

//     set email (newEmail) {
//         this.#email = newEmail;
//     }
// }

// const pogreb = new Gamer ({
//     name: "Aezering",
//     email: "aezering@mail.com",
// })

// console.log(pogreb.email)
// pogreb.email = "suprepogreb@mail.com"
// console.log(pogreb.email)

// Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//     if(newEmail === "") {
//       console.error("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }
  
//     this.#email = newEmail;
//   }

// ------------------------------------------------------Статичні властивості------------------------------------------------------------

// Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.

// Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, наприклад, адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість Roles - об'єкт з властивостями.

// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static.

// class User {
//     // Оголошення та ініціалізація статичної властивості
//     static Roles = {
//       ADMIN: "admin",
//       EDITOR: "editor",
//     };
  
//     #email;
//     #role;
  
//     constructor({ email, role }) {
//       this.#email = email;
//       this.#role = role;
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.ADMIN,
//   });
  
//   console.log(mango.Roles); // undefined
//   console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
  
//   console.log(mango.role); // "admin"
//   mango.role = User.Roles.EDITOR;
//   console.log(mango.role); // "editor"


// class Company {
//     static Roles = {
//         DIRECTOR: "director",
//         SALER: "saler",
//     }

//     #email
//     #role

//     constructor ({email, role}) {
//         this.email = email;
//         this.role = role;
//     }

//     get role () {
//         return this.#role
//     }

//     set role (newRole) {
//         this.#role = newRole
//     }

// }

// const ropan = new Company ({
//     email: "director@mail.com",
//     role: Company.Roles.DIRECTOR
// });

// console.log(ropan.Roles)
// console.log(Company.Roles)

// ropan.role = Company.Roles.SALER;
// console.log(ropan.role)

// class Player {

//     static Roles = {
//         GAMER: "gamer",
//         ADMIN: "admin",
//     }

//     #name
//     #role

//     constructor({name, role}) {
//         this.name = name;
//         this.role = role;
//     }

//     get role () {
//         return this.#role;
//     }

//     set role (newRole) {
//         this.#role = newRole;
//     }
// }

// const ropan = new Player ({
//     name: "Ropan",
//     role: Player.Roles.GAMER,
// });


// console.log(ropan.role)
// console.log(Player.Roles)

// ropan.role = Player.Roles.ADMIN
// console.log(ropan.role)

// class Position {
//     static Pos = {
//         SALEMANAGER: "salemeneger",
//         ADMIN: "admin",
//         DIR: "director",
//     }

//     #name
//     #email
//     #position

//     constructor ({name, email, position}) {
//         this.name = name;
//         this.email = email;
//         this.position = position
//     }

//     get name () {
//         return this.#name;
//     }

//     set name (newName) {
//         this.#name = newName;
//     }

//     get email () {
//         return this.#email
//     }

//     set email (newEmail) {
//         this.#email = newEmail;
//     }
    
//     get position () {
//         return this.#position; 
//     }

//     set position (newPosition) {
//         this.#position = newPosition 
//     }
// }

// const ropan = new Position ({
//     name: "Ropan",
//     email: "ropan@mail.com",
//     position: Position.Pos.SALEMANAGER,
// })

// console.log(ropan.position)
// ropan.position = Position.Pos.ADMIN
// console.log(ropan.position)


// Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу. Для цього ім'я властивості повинно починатися з символу #, так само, як приватні властивості. Звернення до приватної статичної властивості за межами тіла класу викличе помилку.

// ------------------------------------------------------Статичні методи--------------------------------------------------------------

// У класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.

// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));


// class Player {
//     static #takenEmail = [];

//     static isEmailTaken(email) {
//         return Player.#takenEmail.includes(email)
//     }

//     #email;

//     constructor({email}) {
//         this.#email = email;
//         Player.#takenEmail.push(email);
//     }
// }


// const ropan = new Player ({
//     email: "ropan@mail.com",
// })

// console.log(Player.isEmailTaken("check@mail.com"))

// console.log(Player.isEmailTaken("ropan@mail.com"))


// class Owner {
//     static #getNumber = []

//     static isNumberGet(number) {
//         return Owner.#getNumber.includes(number)
//     }

//     #number

//     constructor ({number}) {
//         this.#number = number;
//         Owner.#getNumber.push(number)
//     }
// }

// const runa = new Owner({
//     number: "098889977",
// })

// console.log(Owner.isNumberGet("0987575757"))

// console.log(Owner.isNumberGet("098889977"))

// class Director {
//     static #getEmail = []

//     static isEmailGet(email) {
//         return Director.#getEmail.includes(email)
//     }

//     #email

//     constructor ({email}) {
//         this.#email = email;
//         Director.#getEmail.push(email)
//     }
// }

// const rapchik = new Director ({
//     email: "rapchik@mail.com"
// })

// console.log(Director.isEmailGet("rapchik@mail.com"))

// class Admin {
//     static #getNumber = [];

//     static isNumberget (number) {
//         return Admin.#getNumber.includes(number)
//     }

//     #number

//     constructor({number}) {
//         this.#number = number;
//         Admin.#getNumber.push(number)
//     }
// }

// const zelo = new Admin ({
//     number: "0990000000"
// })

// console.log(Admin.isNumberget("09887797"))

// console.log(Admin.isNumberget("0990000000"))

// class Maneger {
//     static #getEmail = [];

//     static isEmailget (email) {
//         return this.#getEmail.includes(email)
//     }

//     #email

//     constructor({email}) {
//         this.#email = email;
//         Maneger.#getEmail.push(email);
//     }
// }

// const ropan = new Maneger ({
//     email: "ropan@mail.com"
// })

// console.log(Maneger.isEmailget("ropan@mail.com"))

// class Production {
//     static #getEmail = [];

//     static isEmailget (email) {
//         return this.#getEmail.includes(email)
//     }

//     #email 

//     constructor ({email}) {
//         this.#email = email;
//         Production.#getEmail.push(email)
//     }
// }

// const prod = new Production ({
//     email: "thebest@mail.com"
// })

// console.log(Production.isEmailget("yoyoyo@mail.com"))

// console.log(Production.isEmailget("thebest@mail.com"))

// Особливість статичних методів у тому, що під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.


// -------------------------------------------------------Наслідування класів--------------------------------------------------------------

// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості і методи іншого класу (батьківського).

// class Child extends Parent {
//     // ...
//   }

// У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent.

// Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики і методи для групи похідних класів, які наслідують властивості і методи батьківського, але також додають свої унікальні.

// Наприклад, у застосунку є користувачі з різними ролями - адміністратор, копірайтер, контент менеджер тощо. У кожного типу користувача є набір загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.

// Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання загальних властивостей і методів, і, якщо необхідно змінити, наприклад, назву властивості, доведеться проходити по усіх класах, а це незручно і вимагає багато часу.

// Замість цього, можна створити загальний клас User, який буде зберігати набір загальних властивостей і методів, після чого, створити класи для кожного типу користувача, які наслідують цей набір від класу User. За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     // Тіло класу ContentEditor
//   }
  
//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); // { email: "mango@mail.com" }
//   console.log(editor.email); // "mango@mail.com"

//   Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.

// -----------------------------------------------Конструктор дочірнього класу------------------------------------------------------------

// Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {

//     email

//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     constructor({ email, posts }) {
//       // Виклик конструктора батьківського класу User
//       super(email);
//       this.posts = posts;
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); // { email: 'mango@mail.com', posts: [] }
//   console.log(editor.email); // 'mango@mail.com'

// class Player {

//     name 

//     constructor(name) {
//         this.name = name;
//     }

//     get name () {
//         return this.name;
//     }

//     set name (newName) {
//         this.name = newName;
//     }
// }

// class ContentEditor extends Player {
//     constructor ({name, email}) {
//         super(name);
//         this.email = email;
//     }
// }

// class EmailEditor extends Player {
//     constructor ({name, email}) {
//         super(name);
//         this.email = email;

//     }
// }


// const editor = new ContentEditor ({
//     name: "Ropan",
//     email: "ropan@mail.com",
// })

// const editorOfEmail = new EmailEditor ({
//     name: "Ropan",
//     email: "ropan@mail.com",
// })


// console.log(editor)
// console.log(editor.name)
// console.log(editorOfEmail)
// console.log(editorOfEmail.email)

// class Gamer {
//     email

//     constructor (email) {
//         this.email = email;
//     }

//     get email () {
//         return this.email
//     }

//     set email (newEmail) {
//         this.email = newEmail
//     }
// }

//     class ContentEditor extends Gamer {
//         constructor ({name, email}) {
//             super(email);
//             this.name = name;
//         }
//     }

//     const editor = new ContentEditor ({
//         name: "Ropan",
//         email: "ropan@mail.com"
//     })

//     console.log(editor)
//     console.log(editor.email)
 

// class Admin {

//     email

//     constructor (email) {
//         this.email = email
//     }

//     get email () {
//         return this.email
//     }

//     set email (newEmail) {
//         this.email = newEmail
//     }

// }

// class ContentEditor extends Admin {
//     constructor ({name, email}) {
//         super(email)
//         this.name = name
//     }
// }

// const editor = new ContentEditor ({
//     name: "Ropan",
//     email: "ropan@mail.com"
// })

// console.log(editor)
// console.log(editor.email)
// console.log(editor.name)


// --------------------------------------------------Методи дочірнього класу-----------------------------------------------------------

// В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.


// Уявімо, що вище є оголошення класу User

// class User {

//     email

//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

// class ContentEditor extends User {
//     constructor({ email, posts }) {
//       super(email);
//       this.posts = posts;
//     }
  
//     addPost(post) {
//       this.posts.push(post);
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); // { email: 'mango@mail.com', posts: [] }
//   console.log(editor.email); // 'mango@mail.com'
//   editor.addPost("post-1");
//   console.log(editor.posts); // ['post-1']

// class Admin {

//     email

//     constructor (email) {
//         this.email = email;
//     }

//     get email () {
//         return this.email;
//     }

//     set email (newEmail) {
//         this.email = newEmail;
//     }
// }

// class ContentEditor extends Admin {
//     constructor({email, posts}) {
//         super(email)
//         this.posts = posts
//     }

//     addPost(post) {
//         this.posts.push(post)
//     }
// }

// const editor = new ContentEditor ({
//     email: "cool@mail.com",
//     posts: [],
// })

// console.log(editor)
// console.log(editor.email)

// editor.addPost("post - westcoast")

// console.log(editor.posts)
// console.log(editor)

// class Player {

//     number

//     constructor(number) {
//         this.number = number;
//     }

//     get number () {
//         return this.number
//     }

//     set number (newNumber) {
//         this.number = newNumber
//     }

// }

// class ContentEditor extends Player {
//     constructor({name, number}) {
//         super(number);
//         this.name = name
//     }
// }

// const editor = new ContentEditor ({
//     name: "Gamer",
//     number: 8475666,
// })
    
// console.log(editor)
// console.log(editor.number)
// editor.number = 333
// console.log(editor.number)
// console.log(editor)

class User {
    email

    constructor(email) {
        this.email = email;
    }

    get email () {
        return this.email
    }

    set email (newEmail) {
        this.email = newEmail;
    }
}

class ContentEditor extends User {
    constructor({name, email}) {
        super(email)
        this.name = name
    }
}

const editor = new ContentEditor ({
    name: "Ropan",
    email: []
})

console.log(editor)
console.log(editor.email)
editor.email = "ropansuper@mail.com"
console.log(editor)
console.log(editor.name)
editor.name = "Ruban"
console.log(editor.name)







