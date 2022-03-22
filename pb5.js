const a = { a: 1, b: 2 };
const b = 'b'

const without = (a, b) => {
    let c = {};
    for (let x in a) {
        if (x == b) continue;
        c[x] = a[x];
    }

    return c

}

console.log(without(a, b))