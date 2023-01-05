let myObjectValues = (obj) => {
    return Object.entries(obj).map([key,value] => `${key}: ${value}`)
    // .map(i => `${i}: ${obj[i]}`).filter(x => typeof(x) != "function").join(", ")
}

module.exports = myObjectValues;