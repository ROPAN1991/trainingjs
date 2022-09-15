// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
  for(let i = min; i <= max; i += 1){
    console.log(i)
    numbers.push(i)
  }
    // Change code above this line
    return numbers;
  }
  console.log(createArrayOfNumbers(1, 3))
