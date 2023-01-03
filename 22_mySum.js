function mySum (arr) {
    let initialValue = 0;
    let sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue);
    return sumWithInitial;
}

module.exports = mySum;