function myGetNbr (evilValue) {
    let value = parseInt(evilValue);
    if (value === 0) {
        return "0";
    } else if (value > 0) {
        return "+";
    } else {
        return "-";
    }
}

module.exports = myGetNbr;