
const a = { a: 1, b: 2 };
const makePairs = (object) => {
   return Object.keys(object).map((element) => [element, object[element]]);
}


console.log(makePairs(a))