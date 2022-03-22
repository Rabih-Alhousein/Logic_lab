
const a = { a: 1, c: "I don't know " };

const modifyObject = (a) => {
    let isObject = typeof a == 'object' && a.constructor == Object;
    if (!isObject) return "it's not an object"
    a['isObject'] = isObject;
    a['getPropertiesNb'] = Object.keys(a).length;
    return a
}

console.log(modifyObject(a));