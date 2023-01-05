let myObjectValues = (obj) => {
    return Object.entries(obj).filter(([key,value]) => typeof(value) !== "function" && "object" ).map(([key,value]) => `${key}: ${value}`).join(", ")
}

module.exports = myObjectValues;