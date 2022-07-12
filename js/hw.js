// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
// addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name)
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },

  
//  removePotion(potionName) {
// for (const potion of this.potions){
//     if (potion.name === potionName) {
//     potionIndex = this.potions.indexOf(potion)
//     this.potions.splice(potionIndex, 1);
//     }
// }
//     return `Potion ${potionName} is not in inventory!`;
//   },
  
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName)
//       potion.name = newName
//     }
//     return `Potion ${oldName} is not in inventory!`
//   },
//   // Change code above this line
// };


// let message = 'hello';

// let messageEnd = (5>1) ? ', John' : ', Piter'

// message = message + messageEnd 

// console.log(message)

// let message = 'Hello';

// let messageEnd;

// if (5 > 10) {
//     messageEnd = ', Piter'
// } else if(5 > 20){
//     messageEnd = ', Mike'
// } else if(5 > 30){
//     messageEnd = ', John'
// } else 
//     messageEnd = ', Ropan'

// message = message + messageEnd
// console.log(message)

// let counter = 0

// while (counter < 10) {
//     console.log("counter: ", counter) 
//         counter = counter + 1
// }
// let counter = 10

// while (counter) {
//     console.log('counter: ', counter)
//     counter = counter - 1
// }

// let counter = 0;

// do {
//     console.log('counter: ', counter)
//     counter = counter + 1
// } while (counter < 10)

// let counter = 10

// do {
//     console.log("clounter: ", counter)
//     counter = counter - 1
// } while(counter)

// for (let i = 0; i < 10; i = i + 1) {
 
//     if (i === 5) {
//        continue
//     }
//     console.log(i)
// }

// function getSum (numOne, numTwo) {
//     console.log(`this is first number: ${numOne}`)
//     console.log(`this is second number: ${numTwo}`)

//     numSum = numOne + numTwo
//     console.log(`this is sum: ${numSum}`)
// }

// getSum(7,4)

// function getMinus (numOne, numTwo) {
//     console.log(`this is first number: ${numOne}`)
//     console.log(`this is second number: ${numTwo}`)

//     let numMin = numOne - numTwo 
//     console.log(numMin) 
// }

// getMinus(11,4)

// function getMultiply (numOne, numTwo) {
//     console.log(`this is firs number: ${numOne}`)
//     console.log(`this is second number: ${numTwo}`)

//     let multiplly = numOne * numTwo

//     console.log(multiplly)
// }

// getMultiply(3,4)

// function getDivision (numOne, numTwo) {
//     console.log(`this is first number: ${numOne}`)
//     console.log(`this is second number: ${numTwo}`)

//     let division = numOne / numTwo
//     console.log(division)
// }

// getDivision(15,5)

// function getSum (numOne, numTwo, less, more) {
//     let sum = numOne + numTwo;

//     if (sum < 10) {
//         less()
//     } else {
//         more()
//     }
// }

// function getLessNum () {
//     console.log('Це число меньше 10')
// }

// function getMoreNum () {
//     console.log('Це число більше 10')
// }

// getSum(10,1,getLessNum,getMoreNum)

// function getSum () {
//     let numOne, numTwo

//     function getNumOne() {
//         numOne = 3
//     }

//     function getNumTwo() {
//         numTwo = 4
//     } 

//     getNumOne()
//     getNumTwo()

//     let numSum = numOne + numTwo
//     console.log(numSum) 
// }

// getSum()

// function calcSum (numOne, numTwo) {
//     let numSum = numOne + numTwo

//     return numSum
// }

// let functionRes = calcSum(5, 4)

// console.log(`this is sum: ${functionRes}`)


// function getMinus (numOne, numTwo) {
//     let minus = numOne - numTwo

//     return minus
// }

// let newMinus = getMinus(5,3)

// console.log(`this is result: ${newMinus}`)

// function getMultiply (numOne, numTwo) {
//     let multiply = numOne * numTwo

//     return multiply
// }

// let newMultiply = getMultiply(3,4)

// console.log(`this is result: ${newMultiply}`)


// function getSum (numOne, numTwo) {
//     let numSum = numOne + numTwo;

//     return numSum
// }

// let newSum = getSum(3,2)

// console.log(`this is new sum: ${newSum}`)

// function calcSumm (numOne, numberTwo) {
//     let result = 1;

//     for (let i = 0; i < numberTwo; i = i + 1) {
//         result = result * numOne
//     }
//     return result;
// }

// console.log(calcSumm(2,3))

// function calcSumm (numberOne, numberTwo) {
//     let result = 1;

//     for (let i = 0; i < numberTwo; i = i + 1) {
//         result = result * numberOne
//     }
//     return result
// }

// console.log(calcSumm(2,3))

// function clacSum (numOne, numTwo) {
//     let result = 1;

//     for (let i = 0; i < numTwo; i = i + 1) {
//         result = result * numOne
//     }

//     return result
// }

// console.log(clacSum(4,5))

// function calcSum (numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne
//     } else {
//         return numOne * calcSum(numOne, numTwo -1)
//     }
// }
// console.log(calcSum(4,5))

// function calcSumm (numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne
//     } else {
//         return numOne * calcSumm(numOne, numTwo -1)
//     }
// }

// console.log(calcSumm(2,4))


// function clacSum (numOne, numTwo) {
//     let result = 1;
    
//     for(let i = 0; i < numTwo; i = i + 1) {
//         result = result * numOne
//     }
//     return result
// }

// console.log(clacSum(2,3))


// function calcSumm (numOne, numTwo) {
//     if(numTwo === 1) {
//         return numOne
//     } else {
//         return numOne * calcSumm (numOne, numTwo -1)
//     }
// }

// console.log(calcSumm(2,3))

// const name = ['mango', 'poly', 'ajax']

// console.log(name[0])
// console.log(name[1])
// console.log(name[2])

// name[0] = 'john'
// console.log(name[0])

// console.log(name.length)

// const lastIndexElement = name.length -1
// console.log(lastIndexElement)
// console.log(name[lastIndexElement])

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Poly", "Ajax"]

// for (let client of clients) {
//     console.log(client)
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const childrens = ["John", "Mike", "Piter", "Alex"]

// const findChild = "Alex"
// let message

// for (const children of childrens) {
//     if (children === findChild) {
//         message = "This child is find"
//         break
//     }

//     message = "child not found"
// }

// console.log(message)

// const fruits = ['apple', 'banana', 'kiwi', 'mango']

// const furitToFind = 'banana'
// let message

// for (const fruit of fruits) {
//     if(fruit === furitToFind) {
//         message = 'цей фрукт є в списку'
//         break;
//     }
//     message = 'цього фрукту нема в списк'
// }

// console.log(message)

// const numbers = [1,2,3,4]

// const findNumber = 7

// let message

// for (const number of numbers) {
//     console.log(number)
//     if(findNumber === 2) {
//         message = 'the number is find'
//         break;
//     }

//     message = 'number is not find'
// }

// console.log(message)


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const names = ["Вася", "Сергій", "Саня"]

// const findName = "Саня"

// let message 

// for (const name of names) {
//     if (findName === "Саня"){
//         message = 'Є в списку'
//         break
//     }

//     message = 'Такого імені нема в списку'
// }

// console.log(message)

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const numbers = [13,17,22,4,7,9,28]

// let moreNum = 15;
// console.log(`Число більше за ${moreNum}:`)

// for (let i = 0; i < numbers.length; i = i + 1) {
    
//     if (numbers[i] < moreNum) {
//         continue;
//     }
    
//     console.log(numbers[i])
// }


// const prices = [20,30,50,70,80,100,120,110]

// let morePrice = 40

// console.log(`Ціни більші за ${morePrice}`)

// for (let i = 0; i < prices.length; i = i + 1) {
//     if (prices[i] > morePrice) {
//         continue;
//     }
//     console.log(prices[i])
// }

// const ages = [13,15,19,22,11,7,56]

// const fineAge = 18

// console.log(`age more ${fineAge}:`)

// for (let i = 0; i < ages.length; i = i + 1) {
//     if (ages[i] < fineAge) {
//         continue;
//     }

//     console.log(ages[i])
// }

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// Примітиви: рядки, числа, булі, null і undefined

// let a = [5]

// let b = a

// console.log(a)
// console.log(b)

// a = 10;

// console.log(a)

// console.log(b)

// складні типи: масиви об'єкти функції

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const name = 'Ropan'

// console.log(name.split(""))

// const pvchk = "Павучок - це мій котик"

// console.log(pvchk.split(" "))

// const name = 'Ruban'

// console.log(name.split(''))

// const message = 'Love you honey'
// console.log(message.split(' '))

// const lastName = 'Ropan'

// console.log(lastName.split(''))

// const message = 'Ropan work hard'

// console.log(message.split(' '))

// const names = ['Ropan', 'Meh', 'Pogreb']

// const findName = 'Ropan'

// let message

// for (const name of names) {
//     if (findName === 'Ropan') {
//         message = 'This last name find'
//         break
//     }

//     message = 'dont find'
    
// }

// console.log(message)

// const ages = [13,15,17,22,30,19]

// let findAge = 18

// let message

// for (let i = 0; i < ages.length; i = i + 1) {
//     if (ages[i] < findAge) {
//         continue
//     }
// console.log (`this ages ${ages[i]} more ${findAge}`)
// }

// const names = ['Poly']

// names.push('Mango')

// console.log(names)

// const lastName = "Ropan"

// console.log(lastName.split(''))

// const message = `${lastName} work hard`

// console.log(message.split(" "))

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// const words = ['ropan', 'work', 'hard']

// console.log(words.join(""))
// console.log(words.join("-"))
// console.log(words.join(" "))

// const lastName = 'Ropan'

// console.log(lastName.split(''))

// const message = 'Ropan work hard'

// console.log(message.split(' '))

// const messageJoin = ['ropan', 'work', 'hard']

// console.log(messageJoin.join(''))

// console.log(messageJoin.join(' '))

// console.log(messageJoin.join('-'))

// const names = ['poly', 'mango', 'ajax']

// console.log(names.indexOf('ajax'))

// const namesItem = ['john', 'mike', 'piter', 'markus']

// console.log(namesItem.includes('piter'))

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// const fruit = "strawberry";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// const citrus = "limon"

// if (citrus === "limon" || citrus === "ornge") {
//     console.log('its citrus')
// } else {
//     console.log('not sictrus')
// }

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const people = ['Messi', 'Madonna', 'Tyson', 'Meh']

// const findFriend = 'Meh'

// const hasFriend = people.includes(findFriend)

// if(hasFriend) {
//     console.log(`this is my frinend ${findFriend}`)
// }

// const numbers = []

// numbers.push(1)
// console.log(numbers)
// numbers.push(2)
// console.log(numbers)
// numbers.push(3)
// console.log(numbers)
// numbers.push(4)
// console.log(numbers)
// numbers.push(5)
// console.log(numbers)

// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)

// numbers.unshift(1)
// console.log(numbers)
// numbers.unshift(2)
// console.log(numbers)
// numbers.unshift(3)
// console.log(numbers)
// numbers.unshift(4)
// console.log(numbers)
// numbers.unshift(5)
// console.log(numbers)

// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)

// function calcSum (numOne, numTwo) {
//     if(numTwo === 1) {
//         return numOne
//     } else {
//         return numOne * calcSum (numOne, numTwo - 1)
//     }
// }

// console.log(calcSum(2,3))

// function calcSum (numOne, numTwo) {
//     let result = 1

//     for (let i = 0; i < numTwo; i = i + 1) {
//         result = result * numOne
//     }
//     return result
// }

// console.log(calcSum(2,3))

// const people = ['Messi', 'Kaka', 'Pele', 'Madonna']

// const singer = 'Madonna'

// const findSinger = people.includes(singer)

// if (findSinger) {
//     console.log(`this is true singer ${singer}`)
// }

// const ages = [17,29,34,11,15,13,37]
// const goodAge = 18

// for (let i = 0; i < ages.length; i = i + 1) {
//     if(ages[i] < goodAge) {
//         continue
//     }

//     console.log(ages[i])
// }

// const prices = [45,50,100,70,90,110,30]
// const hasPrice = 60

// console.log(`this price more ${hasPrice}:`)
// for (let i = 0; i < prices.length; i = i + 1) {
//     if (prices[i] < hasPrice) {
//         continue
//     }

//     console.log(`${prices[i]}`)
// }

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const people = ['Messi', 'Madonna', 'Moby', 'Meh'] 
// const findFriend = 'Meh'

// const isFriendHer = people.includes(findFriend)

// if (isFriendHer) {
//     console.log(`this is my friend ${findFriend}`)
// }

// const ages = [14,12,17,25,27,33] 

// const findAge = 18

// for (let i = 0; i < ages.length; i = i + 1) {
//     if (ages[i] < findAge) {
//         continue
//     }
//     console.log(`this age ${ages[i]}: more ${findAge}`)
// }

// const people = ['Messi', 'Pele', 'Madonna', 'Meh']

// const findFriend = 'Meh'

// const hasFriend = people.includes(findFriend)

// if(hasFriend) {
//     console.log(`this is my friend ${findFriend}`)

// }

const lastName = 'Ropan'
console.log(lastName.split(''))

const message = 'I love javascript'
console.log(message.split(' '))

const appeal = ['hello', 'how', 'are', 'you', '?']
console.log(appeal.join(''))
console.log(appeal.join(' '))
console.log(appeal.join('-'))

const citrus = ['lime', 'orange', 'lemon']

console.log(citrus.indexOf('lime'))
console.log(citrus.indexOf('orange'))
console.log(citrus.indexOf('lemon'))

const numbers = []

numbers.push(1)
console.log(numbers)
numbers.push(2)
console.log(numbers)
numbers.push(3)
console.log(numbers)
numbers.push(4)
console.log(numbers)
numbers.push(5)
console.log(numbers)

numbers.pop(5)
console.log(numbers)
numbers.pop(4)
console.log(numbers)
numbers.pop(3)
console.log(numbers)
numbers.pop(2)
console.log(numbers)
numbers.pop(1)
console.log(numbers)

numbers.unshift(1)
console.log(numbers)
numbers.unshift(2)
console.log(numbers)
numbers.unshift(3)
console.log(numbers)
numbers.unshift(4)
console.log(numbers)
numbers.unshift(5)
console.log(numbers)

numbers.shift(5)
console.log(numbers)
numbers.shift(4)
console.log(numbers)
numbers.shift(3)
console.log(numbers)
numbers.shift(2)
console.log(numbers)
numbers.shift(1)
console.log(numbers)

const namesPlayers = ['Messi', 'Boateng', 'Pele']

console.log(namesPlayers.includes('Messi'))
console.log(namesPlayers.includes('Ronaldo'))

const prices = [30,90,70,100,10]
const priceMore = 50

for (let i = 0; i < prices.length; i = i + 1) {
    if(prices[i] < priceMore) {
        continue
    }
    console.log(`Ціни більше за ${priceMore} це: ${prices[i]}`)
}

const people = ['Madonna', 'Messi', 'Socrat', 'MeX']
const findFriend = 'MeX'

const isFriend = people.includes(findFriend)
if(isFriend) {
    console.log(`${findFriend} - Це мій друг!`)
}

const bestFriends = ['John', 'Mike', 'Piter', 'Stan']

console.log(bestFriends.slice(0,1))
console.log(bestFriends.slice(1,2))
console.log(bestFriends.slice(2,3))
console.log(bestFriends.slice(-1))

const scores = [1, 2, 3, 4, 5];
// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);
// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]
// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]

const groups = ['Onyx', 'WuTang', 'NWA', 'The Dog Pound']
const deleteGroups = groups.splice(0,2)

console.log(deleteGroups)
console.log(groups)
