
const a = { a: 1, c:3 }
const b = { c: 1, b: 2, c: 3 , a:1}
const intersection = (a, b) => {
    let inter = {}
    for (let x in a) {
        for (let y in b) {
            if (x === y && a[x] === b[y]) inter[x] = a[x]
        }
    }
    return inter
}
console.log(intersection(a, b))