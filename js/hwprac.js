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

// const lastName = 'Ropan'
// console.log(lastName.split(''))

// const message = 'I love javascript'
// console.log(message.split(' '))

// const appeal = ['hello', 'how', 'are', 'you', '?']
// console.log(appeal.join(''))
// console.log(appeal.join(' '))
// console.log(appeal.join('-'))

// const citrus = ['lime', 'orange', 'lemon']

// console.log(citrus.indexOf('lime'))
// console.log(citrus.indexOf('orange'))
// console.log(citrus.indexOf('lemon'))

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

// numbers.pop(5)
// console.log(numbers)
// numbers.pop(4)
// console.log(numbers)
// numbers.pop(3)
// console.log(numbers)
// numbers.pop(2)
// console.log(numbers)
// numbers.pop(1)
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

// numbers.shift(5)
// console.log(numbers)
// numbers.shift(4)
// console.log(numbers)
// numbers.shift(3)
// console.log(numbers)
// numbers.shift(2)
// console.log(numbers)
// numbers.shift(1)
// console.log(numbers)

// const namesPlayers = ['Messi', 'Boateng', 'Pele']

// console.log(namesPlayers.includes('Messi'))
// console.log(namesPlayers.includes('Ronaldo'))

// const prices = [30,90,70,100,10]
// const priceMore = 50

// for (let i = 0; i < prices.length; i = i + 1) {
//     if(prices[i] < priceMore) {
//         continue
//     }
//     console.log(`Ціни більше за ${priceMore} це: ${prices[i]}`)
// }

// const people = ['Madonna', 'Messi', 'Socrat', 'MeX']
// const findFriend = 'MeX'

// const isFriend = people.includes(findFriend)
// if(isFriend) {
//     console.log(`${findFriend} - Це мій друг!`)
// }

// const bestFriends = ['John', 'Mike', 'Piter', 'Stan']

// console.log(bestFriends.slice(0,1))
// console.log(bestFriends.slice(1,2))
// console.log(bestFriends.slice(2,3))
// console.log(bestFriends.slice(-1))

// const scores = [1, 2, 3, 4, 5];
// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);
// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]
// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const groups = ['Onyx', 'WuTang', 'NWA', 'The Dog Pound']
// const deleteGroups = groups.splice(0,2)

// console.log(deleteGroups)
// console.log(groups)


// const students = ['Mark', 'Lilia', 'Fernandez', 'Julia']
// const studentsFind = 'Julia'

// const isFind = students.includes(studentsFind)
// if(isFind) {
//     console.log(`This is my student: ${studentsFind}`)
// }

// const allsums = [30, 50, 80, 110, 200, 40]

// const findSum = 50;

// for (let i = 0; i < allsums.length; i = i + 1) {
//     if(allsums[i] < findSum) {
//         continue;
//     }
//     console.log(`Sum more ${findSum} its: ${allsums[i]}`)
// }

// const a = 50;
// const b = 50

// const what = a < b

// console.log(what)


// const myBestFriends = ['Casper', 'DemonX', 'West', 'Longman']

// const findBestFriends = 'DemonX'

// const hasBestFriend = myBestFriends.includes(findBestFriends)

// if(hasBestFriend) {
//     console.log(`this is my bestfriend ${findBestFriends}`)
// }

// const position = [4,7,10,9,12,11,3]

// const findPos = 5

// for (let i = 0; i < position.length; i = i + 1) {
//     if (position[i] < findPos) {
//         continue;
//     }
//     console.log(`this numbers: ${position[i]} more: ${findPos}`)
// }


// function numSummm (numBeOne, numBeTwo) {
//     let result = 1

//     for (let i = 0; i < numBeTwo; i = i + 1) {
//     result = result * numBeOne
//     }

//     return result
// }

// console.log(numSummm(2,3))

// function numbSum (numberOn, numberTw) {
//     if(numberTw === 1) {
//         return numberOn
//     } else {
//         return numberOn * numbSum(numberOn, numberTw -1)
//     }
// }

// console.log(numbSum(2,3))

// const numbers = ['Mango', 'Poly', 'Ajax', 'Kiwi']

// console.log(numbers.slice(0,4))
// console.log(numbers)

// console.log(numbers.slice(0,3))
// console.log(numbers)

// console.log(numbers.slice(0,2))
// console.log(numbers)

// console.log(numbers.slice(0,1))
// console.log(numbers)

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const numbers = [1,2,3,4,5]

// const newNumber = numbers.splice(2,3)
// console.log(newNumber)
// console.log(numbers)


// const numbers = [1,2,3,4,5,6,7]

// const newNumbers = numbers.splice(2,2)

// console.log(newNumbers)
// console.log(numbers)

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   const locate = user.location;
//   console.log(locate); // Об'єкт location
  
//   const country = user.location.country;
//   console.log(country); // 'Jamaica'

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   const locate = user.location;
//   console.log(locate); // Об'єкт location
  
//   const country = user.location.country;
//   console.log(country); // 'Jamaica'

//   const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

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

// const book = {
//     title: 'Enter',
//     author: 'Ropan',
//     genre: ['drama', 'roman']
// }

// const bookTitle = book['title']
// console.log(bookTitle)
// const bookGenre = book['genre']
// console.log(bookGenre)

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

// book.title = 'Pop'
// book.author = 'Ropan'
// book.genres.splice(0, 1)
// book.rating = 7
// book.genres.unshift('roman')

// console.log(book)

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];
  
//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'ru']
  

//   console.log(book)

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

// const filmsItem = {
//     films: ['Enter the void'],

//     getFilms () {
//         return this.films
//     },

//     addFilms(filmName) {
//         this.films.push(filmName)
//     },

//     removeFilm(filmName) {
//         const filmIndex = this.films.indexOf(filmName);
//         this.films.splice(filmIndex, 1)
//     }
// }

// console.log(filmsItem.getFilms())
// filmsItem.addFilms('Get Rich or die trying')
// filmsItem.addFilms('Green yard')
// console.log(filmsItem.getFilms())
// filmsItem.removeFilm('Green yard')
// console.log(filmsItem.getFilms())

// const filmsColection = {
//     films: ['One', 'Two', 'Three'],

//     getFilms() {
//         return this.films
//     },

//     addFilms(nameFilm) {
//         return this.films.push(nameFilm)
//     },

//     removeFilm (nameFilm) {
//         const findColcetion = this.films.indexOf(nameFilm)
//         return this.films.splice(findColcetion)
        
//     }
    

// }

// console.log(filmsColection.getFilms())
// filmsColection.addFilms('Four')
// console.log(filmsColection.getFilms())


// const myFriends = {
//     allFriends: ['bob', 'tom', 'mike'],

//     getFriends() {
//         return this.allFriends
//     },

//     removeFriend (name) {
//         const findFriend = this.allFriends.indexOf(name)
//         return this.allFriends.splice(findFriend, 1)
//     },

//     addFriend (name) {
//         return this.allFriends.push(name)
//     }
// }

// console.log(myFriends.getFriends())

// myFriends.removeFriend('bob')

// console.log(myFriends.getFriends())

// myFriends.addFriend('bob')

// console.log(myFriends.getFriends())


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

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
// const bookTitle = book['title']
// console.log(bookTitle)

// const bookGenres = book['genres']
// console.log(bookGenres)

// const author = 'author'
// const backAuthor = book[author]

// console.log(backAuthor)

// const songs = {
//     names: ['Hello world'],

//     getSongs () {
//         return this.names
//     },

//     addSongs (nameSong) {
//         this.names.push(nameSong)
//     },

//     removeSong (nameSong) {
//         const findSong = this.names.indexOf(nameSong)
//         this.names.splice(findSong, 1)
//     }
// }

// const rappers = {
//     names: ['Tupac'],

//     getRappers () {
//         return this.names
//     },

//     addNewRapper(name) {
//         this.names.push(name)
//     },

//     removeRapper(name) {
//         const findRapper = this.names.indexOf(name)

//         this.names.splice(findRapper, 1)
//     }
// }

// console.log(rappers.getRappers())

// rappers.addNewRapper('Eminem')
// rappers.addNewRapper('DMX')
// rappers.addNewRapper('Snoop Dogg')
// console.log(rappers.getRappers())

// rappers.removeRapper('Tupac')
// console.log(rappers.getRappers())

// const books = {
//     title: 'Jungle Book',
//     author: 'Ropan',
//     genres: ['Event', 'Action'],
//     location: {
//         country: 'Ukraine',
//         city: 'Lviv'
//     }
// }

// console.log(books)

// console.log(books.title)
// books.title = 'Most'
// books.genres[0] = 'Drama'
// books.genres[1] = 'Roman'
// console.log(books)
// books.location.city = 'Pryluky'
// console.log(books)
// books.location.country = 'USA'
// console.log(books)

// const songs = {
//     names: ['Wild'],

//     getSongs () {
//         return this.names
//     },

//     addNewSong (name) {
//         this.names.push(name)
//     },

//     removeSong (name) {
//         const findSong = this.names.indexOf(name)
//         this.names.splice(findSong, 1)
//     }
// }

// console.log(songs.getSongs())

// songs.addNewSong('Mimi')
// songs.addNewSong('Ponny')

// console.log(songs.getSongs())

// songs.removeSong('Wild')

// console.log(songs.getSongs())

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

// const rappers = {
//     names: 'Tupac',
//     genre: 'Rap',
//     year: 1991,
//     ratinng: 10
// };

// for (const key in rappers) {
//     console.log(key)

//     console.log(rappers[key])
// }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// const songs = {
//     name: 'Beer',
//     year: 1994,
//     genre: 'jungle',
//     rating: 5
// }

// const songKey = Object.keys(songs)
// console.log(songKey)

// const songValue = Object.values(songs);
// console.log(songValue)

// const songEntries = Object.entries(songs);
// console.log(songEntries)

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

//   for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

// const bookAuthors = [];

// for(const book of books) {
//     bookAuthors.push(book.author)
// }

// console.log(bookAuthors);

// const bookRatings = [];

// for(const book of books) {
//     bookRatings.push(book.rating)
// }

// console.log(bookRatings)

// const bookTitles = []

// for(const book of books) {
//     bookTitles.push(book.title)
// }

// console.log(bookTitles)

// let totalRating = 0;
// for (const book of books) {
//     totalRating = totalRating + book.rating 
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(totalRating)
// console.log(books.length)
// console.log(averageRating); // 8.2


// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

// const filmName = 'name'

// const film = {
//   genre: 'fantasy',

//   [filmName]: 'Enter the void'
// }

// console.log(film.name)

// const rappers = {
//   names: ['Tupac'],

//   getNames () {
//     return this.names
//   },

//   addNewRapper (name) {
//     this.names.push(name)
//   },

//   removeRapper (name) {
//     const findNmae = this.names.indexOf(name)
//     this.names.splice(findNmae, 1)
//   }
// }

// console.log(rappers.getNames())

// rappers.addNewRapper('Eminem')
// rappers.addNewRapper('Snoop Dogg')

// console.log(rappers.getNames())

// rappers.removeRapper('Tupac')

// console.log(rappers.getNames())

// for (const rapper in rappers) {
//   console.log(rapper)

// }

// const film = {
//   name: 'Enter the void',
//   year: 2010,
//   director: 'Ropan',
//   genre: 'fantasy',
// }

// for (const key in film) {
//   console.log(key)

//   console.log(film[key])
// }


// const song = {
//   name: 'still love',
//   author: 'John',
//   date: '13.07.1989',
//   rating: 9
// }

// for (const key in song) {
//   console.log(key)

//   console.log(song[key])
// }


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

for (const key of books) {
  console.log(key)

  console.log(key.author)
  console.log(key.title)
  console.log(key.rating)
}


const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]


const bookAuthors = []

for (const book of books) {
  bookAuthors.push(book.author)
}

console.log(bookAuthors)

const bookRatings = []

for (const book of books) {
  bookRatings.push(book.rating)
}

console.log(bookRatings)

let totalRating = 0

for (const book of books) {
  totalRating = totalRating + book.rating
}

const averageRating = (totalRating / books.length).toFixed(1)

console.log(averageRating)