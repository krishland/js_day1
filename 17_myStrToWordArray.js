function myStrToWordArray(str) {
    return str.split(" ").filter(Boolean);
}

module.exports = myStrToWordArray;