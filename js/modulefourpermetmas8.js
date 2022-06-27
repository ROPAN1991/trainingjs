// ---------------------------------------------------ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ--------------------------------------------------------

// -----------------------------------------------------Чисті функції------------------------------------------------------------------

// Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або використовувати глобальні змінні, змінювати значення аргументів посилального типу, виконувати операції введення-виведення тощо.

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };


//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
// //   // Відбулася мутація вихідних даних - масиву numbers
//   console.log(numbers); // [2, 4, 6, 8, 10]

//   Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.

// Чиста функція (pure function) - це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.

// Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

// const pureMultiply = (array, value) => {
//     const newArray = [];
  
//     array.forEach(element => {
//       newArray.push(element * value);
//     });
  
//     return newArray;
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
  
//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція вернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ---------------------------------------------------ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ-------------------------------------------------------------

// В JavaScript є методи масивів, що прийшли з функціональних мов. Більшість з них - це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

// Усі перебираючі методи масивів мають схожий синтаксис. Вихідний масив array, виклик методу method і callback-функція callback як аргумент методу.

// array.method(callback[currentValue, index, array])

// У більшості методів аргументами callback-функції є значення елемента currentValue (перший параметр), позиція елемента index (другий параметр) і сам вихідний масив array (третій параметр).

// array.method((item, idx, arr) => {
//     // логіка, яка буде застосовуватися на кожній ітерації
//   });

// Всі параметри, крім значення елемента item, - необов'язкові. Назви параметрів можуть бути будь-які, але є неофіційні домовленості.

// array.method(item => {
//     // логіка, яка буде застосовуватися на кожній ітерації
//   });


// --------------------------------------------------------Метод map()-----------------------------------------------------------------------

// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

// массив.map((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Поелементо перебирає оригінальний масив.
// 2)Не змінює оригінальний масив.
// 3)Результат роботи колбек-функції записується у новий масив.
// 4)Повертає новий масив однакової довжини.

// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

// ---------------------------------------------------Масив об'єктів--------------------------------------------------------------------------

// Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.

// ------------------------------------------------------Метод flatMap()-----------------------------------------------------------------

// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// массив.flatMap((element, index, array) => {
//     // Тіло колбек-функції
//   });

// У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];
  
//   students.map(student => student.courses);
//   // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
  
//   students.flatMap(student => student.courses);
//   // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().

// --------------------------------------------------------Метод filter()--------------------------------------------------------------

// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

// масив.filter((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає новий масив.
// 4)Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
// 5)Якщо колбек повернув true, елемент додається у масив, що повертається.
// 6)Якщо колбек повернув false, елемент не додається у масив, що повертається.
// 7)Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

// -----------------------------------------------------Фільтрація унікальних елементів-------------------------------------------------------

// Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки з масивом примітивних значень - не об'єктів.

// Повернемося до групи студентів і масиву усіх відвідуваних предметів, які ми отримали методом flatMap().

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];
  
//   const allCourses = students.flatMap(student => student.courses);
  // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// //   У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );
// console.log(uniqueCourses)

// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.

// Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// # Масив усіх курсів
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// Для елемента 'математика' під індексом 0:
// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 0.
// Вони рівні, а отже, це унікальний елемент.
// Для елемента 'математика' під індексом 3:
// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 3.
// Вони не рівні, а отже, це повторюваний - не унікальний елемент.

// ------------------------------------------------------Масив об'єктів---------------------------------------------------------------------

// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.

// Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// просто практика, замінив ім"я 1-го студента, перебрав масив з іменами

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students)

// const changeFirst = students[0].name = "Маг"

// const names = students.map(student => student.name)
// console.log(names)


// ---------------------------------------------------------Метод find()--------------------------------------------------------------------

// Якщо метод filter(cabllack) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// 4)Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
//   colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
//   colorPickerOptions.find(option => option.label === "white"); // undefined

// -------------------------------------------------------Метод findIndex()----------------------------------------------------------------

// Метод findIndex(callback) - це сучасна заміна методу indexOf(). Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність. Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.

// масив.findIndex((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
// 4)Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, метод повертає -1.

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   colorPickerOptions.findIndex(option => option.label === "blue"); // 2
//   colorPickerOptions.findIndex(option => option.label === "pink"); // 3
//   colorPickerOptions.findIndex(option => option.label === "white"); // -1

// ----------------------------------------------------Методи every() і some()---------------------------------------------------------------

// Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// масив.every((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає true, якщо всі елементи масиву задовольняють умову.
// 4)Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
// 5)Перебирання масиву припиняється, якщо колбек повертає false.

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// ---------------------------------------------------------Метод some()----------------------------------------------------------------------

// Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// масив.some((element, index, array) => {
//     // Тіло колбек-функції
//   });

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає true, якщо хоча б один елемент масиву задовольняє умову.
// 4)Повертає false, якщо жоден елемент масиву не задовольняє умову.
// 5)Перебирання масиву припиняється, якщо колбек повертає true.

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// --------------------------------------------------------Масив об'єктів---------------------------------------------------------------------

// Під час роботи з масивом об'єктів перевіряється значення певної їх властивості. Наприклад, у нас є масив об'єктів фруктів, необхідно дізнатися, чи є фрукти в наявності та чи є в наявності хоча б якісь фрукти, тобто більше 0 штук.

// const fruits = [
//     { name: "apples", amount: 100 },
//     { name: "bananas", amount: 0 },
//     { name: "grapes", amount: 50 },
//   ];
  
//   // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
//   const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
  
//   // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
//   const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// --------------------------------------------------------Метод reduce()-------------------------------------------------------------------

// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// масив.reduce((previousValue, element, index, array) => {
//     // Тіло колбек-функції
//   }, initialValue);

// 1)Не змінює оригінальний масив.
// 2)Поелементо перебирає оригінальний масив.
// 3)Повертає все, що завгодно.
// 4)Робить все, що завгодно.

// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
  
//   console.log(total); // 32

//   Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32

// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

// ------------------------------------------------------Масив об'єктів----------------------------------------------------------------------

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   // Назва акумулятора може бути довільною, це просто параметр функції
//   const totalScore = students.reduce((total, student) => {
//     return total + student.score;
//   }, 0);
  
//   const averageScore = totalScore / students.length;

//   console.log(averageScore)

// ------------------------------------------------------Просунутий reduce---------------------------------------------------------------------

// Припустимо у нас є наступна задача: з масиву постів твіттера окремого користувача необхідно порахувати суму усіх лайків. Можна перебрати циклом for або forEach, кожне з цих рішень вимагатиме написання додаткового коду. А можна використовувати reduce.

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   // Пройдемо по всіх елементах колекції і додамо значення властивості likes
//   // до акумулятора, початкове значення якого вкажемо 0.
//   const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
//   console.log(likes); // 32
  
//   // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
//   // для підрахунку лайків з колекції
//   const countLikes = tweets => {
//     return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//   };
  
//   console.log(countLikes(tweets)); // 32

// Помітили властивість tags у кожного поста? Продовжуючи тему reduce, ми зберемо в масив усі теги, які зустрічаються в постах.

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
// // //   // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // //   // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // //   // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
//   const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
  
//     return allTags;
//   }, []);
  
//   console.log(tags);
  
//   // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//   // для збирання тегів з колекції
  // const getTags = tweets =>
  //   tweets.reduce((allTags, tweet) => {
  //     allTags.push(...tweet.tags);
  
  //     return allTags;
  //   }, []);
  
  // console.log(getTags(tweets));

//   Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
  // const getTags = tweets =>
  //   tweets.reduce((allTags, tweet) => {
  //     allTags.push(...tweet.tags);
  
  //     return allTags;
  //   }, []);
  
  // const tags = getTags(tweets);

  
//   // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//   // Це стандартна практика, якщо callback-функція досить велика.
  
//   // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//   // то створюємо її і записуємо їй значення 0.
//   // В іншому випадку збільшуємо значення на 1.
  // const getTagStats = (acc, tag) => {
  //   if (!acc.hasOwnProperty(tag)) {
  //     acc[tag] = 0;
  //   }
  
  //   acc[tag] += 1;
  
  //   return acc;
  // };

  // console.log(getTagStats(tweets))
 
  
  // Початкове значення акумулятора - це порожній об'єкт {}
  // const countTags = tags => tags.reduce(getTagStats, {});
  
  // const tagCount = countTags(tags);
  // console.log(tagCount);

// --------------------------------------------------------------Метод sort()---------------------------------------------------------------

// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// 1)Сортує і змінює вихідний масив.
// 2)Повертає змінений масив, тобто посилання на відсортований вихідний.
// 3)За замовчуванням сортує за зростанням.
// 4)Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// 5)Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// Масив рядків сортується за алфавітом.

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// -------------------------------------------------Свій порядок сортування чисел-------------------------------------------------------------

// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

// массив.sort((a, b) => {
//     // Тіло колбек-функції
//   });

// a - перший елемент для порівняння.
// b - другий елемент для порівняння.

// Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b );

// console.log(ascendingReleaseDates)

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b - a);

// console.log(descendingReleaseDates)


// ----------------------------------------------Свій порядок сортування рядків-------------------------------------------------------------

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)

// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// 1)Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// 2)Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// 3)Якщо рядки однакові, повертається нуль.

// Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => {
//   if (a > b) {
//     return 1
//   }
//   if (a < b) {
//     return -1
//   }

// });


// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b) => b.friends.length - a.friends.length)   
//  };

//  console.log(sortByDescendingFriendCount(users))





// ---------------------------------------------------Сортування об'єктів----------------------------------------------------------------

// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//   ];
  
//   const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );
  
//   const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );
  
//   const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );

// console.log(inAlphabeticalOrder)


// -------------------------------------------------------Ланцюжки методів------------------------------------------------------------------

// У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//     { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//     { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
//   ];

//   Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.

// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжку. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// 1.Робимо копію вихідного масиву перед сортуванням.
// 2.На копії викликаємо метод sort().
// 3.До результату роботи методу sort() застосовуємо метод map().
// 4.Змінній names присвоюється результат роботи методу map().
// 5.Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

// 1.На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// 2.До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// 3.На результаті методу filter() викликаємо sort().
// 4.Змінній uniqueSortedCourses присвоюється результат роботи методу sort().

// Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.

















































