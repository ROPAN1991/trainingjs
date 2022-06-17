// // const a = { x: 1, y: 2 };
// // const b = a;

// // console.log({ a: 1 } === { b: 1 });

// // a.c = 100

// // console.log(a)
// // console.log(b)


// // ------------------------ знатйти друга


// const friends = [
//   {name: "Mango", online: false},
//   {name: "Kiwi", online: true},
//   {name: "Poli", online: true},
//   {name: "Ajax", online: false},
// ];

// // console.table(friends)

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//   if (friend.name === name) {
//     return "Знайшли";
//     }

//   }

//   return "НЕ ЗНАЙШЛИ :("
  
// }

// // console.log(findFriendByName(friends, "Poli"));
// // console.log(findFriendByName(friends, "Andrew"));

// //----------------------------------- отримати імена всіх друзів

// const getAllNames = function (allFriends) {
//   const names = [];

// for (const friend of allFriends) {
//   console.log(friend.name)
//   names.push(friend.name)
// }

//   return names;

// };

// // console.log(getAllNames(friends));

// //---------------------------------- отримати значення друзів онлайн

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = []
//   for (const friend of allFriends) {
//     console.log(friend)
//     console.log(friend.online)

//       if (friend.online){
//         onlineFriends.push(friend)
//       }
//   }
//   return onlineFriends;
// }
// // console.log(getOnlineFriends(friends));

// const getOfflinefriends = function (allFriends) {
//   const offlineFriend = []

//   for (const friend of allFriends) {
//     console.log(friend.online)

//     if (!friend.online) {
//       offlineFriend.push(friend)
//     }
//   }

//   return offlineFriend
// }
// // console.log(getOfflinefriends(friends))

// // --------------------- вивести і оналйн і офлайн друзів

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: []
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     } 
//       friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus
// }

// // console.log(getFriendsByStatus(friends));

// // ------------------------ дізнатись загальну кількість об'єктів 

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100.
// };

// //  ----------------------- знайти найменшу температуру

// const temps = [18, 14, 12, 21, 17, 29, 24];
// // console.log(Math.min(...temps));

// // -------------------------- зшиваємо декілька масивів з температурою

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [6, 7, 8];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// // console.log(allTemps)

// // ----------------------------- роспиляємо об'єкти

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20
// }

// // console.log(c)

// // -------------------------- змінюємо налаштування на сайті 

// const defaultSettings = {
//   theme: "light",
//   showNotifications: true,
//   hideSudebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSudebar: true,
// }

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// }

// // console.log(finalSettings)

// // --------------------------- деструктуризація об'єктів

// const playlist = {
//   name: 'Мій суперплейлист',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3
// } 

// // const {name, rating, tracks, trackCount} = playlist

// // --------------- щоб перейменувати локальну змінну через свойство на об'єкт

// // const {name, 
// //   rating, 
// //   tracks, 
// //   trackCount: numberOfTracks
// // } = playlist

// // console.log(numberOfTracks)

// // console.log(name, rating, tracks, trackCount)

// // ----------------------------- диструктуризація в глибину об'єктів 

// const profile = {
//   profileName: 'John Smith',
//   tag: 'jhnsmt',
//   locationProfile: 'Ocho Rios, Jamaika',
//   avatar: 'https://www.instagram.com/',
//   stats: {
//     folowers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// }

// const {
//   profileName,
//   tag,
//   locationProfile,
//   avatar,
//   stats: { folowers, views, likes },
// } = profile;

// // console.log(profileName, tag, locationProfile, avatar, folowers, views, likes)

// // --------------------------- приклад деструктуризації масивів 

// const rgb = [ 255, 100, 80 ];
// const [red, green, blue] = rgb;

// // console.log(red, green, blue)

// // ---------------------------------------- знати найбільший рейтинг і вивести ім'я і рейтинг. ТРЕБА ВИРІШИТИ!!!!!!

// // const authors = {
// //   ben: 4,
// //   jack: 7,
// //   tom: 9,
// //   smith: 6
// // }

// // const entries = Object.entries(authors);

// // for (const [theName, theRating] of entries ) {
// //   console.log(theName, theRating)
// // }

// // ----------------------------------- забираємо частину свойств в локальну змінну, а все інше що не диструктуризували забираємно на змінну

// // const profileTwo = {
// //   profileNameTwo: 'Ben Clock',
// //   tagTwo: 'bnclk',
// //   locationTwo: 'Ukraine, Kyiv',
// //   avatarTwo: 'https://www.facebook.com/',
// //   statsTwo: {
// //     folowersTwo: 5603,
// //     viewsTwo: 4827,
// //     likesTwo: 1308
// //   }
// // }

// // const {profileNameTwo, tagTwo, locationTwo, ...restProps} = profileTwo;
// // console.log(profileNameTwo, tagTwo, locationTwo);
// // console.log(restProps)

// // ------------------------------------- патерн об'єкт налаштувань


// const showProfileInfo = function (userProfile) {
//   const {profiletThree, tagThree, locationThree, ...restProps} = userProfile;
//   console.log(restProps)
// };

// const profiletThree = {
//   profileNameThree: 'Snoop Dogg',
//   tagThree: 'snd',
//   locationThree: 'USA, New York',
//   avatarThree: 'https://www.google.com/',
//   statsThree: {
//     folowersThree: 10000000,
//     viewsThree: 868680698068,
//     likesThree: 124325676
//   }
// }

// // showProfileInfo(profile)

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

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

// const free = function (a,b,c) => a + b + c; 

const add = function ( a, b, c ) {
    console.log(arguments)
    return a + b + c;
};

const addArrow = (...args) => {
    console.log(args)
}

console.log(add(5, 10, 15 ));

console.log(addArrow(3, 4, 2));






