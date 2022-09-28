const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
for(let key in apartment) {
  keys.push(key)
}

const values = [];
for(let value in apartment){
  values.push(apartment[value])
}