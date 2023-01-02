function myEvilPow (arg1, arg2) {
    let subResult = 1
    for (let i = 0; i < arg2; i++) {
        subResult = subResult * arg1;
    }
    return subResult;
}
module.exports = myEvilPow;