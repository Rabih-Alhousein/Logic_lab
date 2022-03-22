
const a = { a: undefined, b: undefined}
const isEmpty = (object) => {
    let isemtpty = true;
    if (Object.keys(object).length === 0) return true
    Object.keys(object).map((element) => {
        if (object[element] !== undefined) isemtpty = false
    })

    return isemtpty;
}
console.log(isEmpty(a))