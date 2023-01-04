function mySortWordArray (str) {
    return str.split(" ").filter(Boolean).sort();
}

module.exports = mySortWordArray;