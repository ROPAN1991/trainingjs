let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesArray = Object.values(salaries).reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);

console.log(salariesArray);
