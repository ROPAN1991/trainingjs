// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// // text - текст завдання.
// // category - категорія завдання.
// // priority - пріоритет завдання.
// // Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// // В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   const newObject = {};

//   for (const key in data) {
//     newObject[key] = data[key];
//     // console.log(newObject[key])
//     console.log(data[key])
//   }
//   newObject.completed = completed
//   newObject.category = newObject.category || category

//   newObject.priority = newObject.priority || priority

//   return newObject;
// }

// // console.log(makeTask({}));
// // console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// // console.log(makeTask({ category: "Finance", text: "Take interest" }))
// // console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))
// // console.log(makeTask({ text: "Buy bread" }))

// function task(data) {
//   const array = []

//   for(const object of data) {
//     if (object.id !== undefined) {
//       array.push({...object, age: 25})
//     }
//   }
//   return array

// }

// console.log(task([{ id: 11 }, { id: 2 }, { name: "Anton" }]));

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

function addOverNum(...args) {
    let total = 0; 
  
    for (const arg of args) {
      if(args[0] < arg) {
        total += arg
      }
    }
  
    return total;
   
  }

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
