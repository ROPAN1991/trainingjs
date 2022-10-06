// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

function countProps(object) {
  let propCount = [];
  // Change code below this line
  // const keys = Object.keys(object)
  // propCount = keys.length
  for(let keys in object){
    if(object.hasOwnProperty(keys))
    propCount.push(keys)
  }
  // Change code above this line
  return propCount.length;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
