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