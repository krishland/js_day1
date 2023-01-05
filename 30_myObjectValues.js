let myObjectValues = (obj) => {
    return Object.entries(obj).filter(([key,value]) => typeof(value) !== "function" && typeof(value) !== "object" ).map(([key,value]) => `${key}: ${value}`).join(", ")
}

module.exports = myObjectValues;