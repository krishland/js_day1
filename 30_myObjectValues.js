let myObjectValues = (obj) => {
    return Object.keys(obj).map(i => `${i}: ${obj[i]}`).join(", ")
}

module.exports = myObjectValues;