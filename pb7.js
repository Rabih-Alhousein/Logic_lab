const a = { a: 1, b: 1 }
const b = { a: 1, b: 1 }

const isEqual = (a, b) => {
    if (Object.keys(a).length !== Object.keys(b).length) return false
    let x = Object.keys(b).length
    for (let x in a) {
        if (a[x] !== b[x]) return false
    }
    return true
}
console.log(isEqual(a, b))