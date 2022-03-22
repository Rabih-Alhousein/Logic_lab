const a = { a: 1, b: true, c: "I don't know" };
console.log(a)
const getProperties = (object) => {
    let array = []
    for (let x in object) {
        array.push(x)
    }
    return array
}
getProperties(a);
console.log(getProperties(a))