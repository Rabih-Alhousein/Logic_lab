
const a = { a: 1 };
const b = [1, 2, 3];
const isPlainObject = (a) => {
    return typeof a == 'object' && a.constructor == Object;
}

console.log(isPlainObject(b))