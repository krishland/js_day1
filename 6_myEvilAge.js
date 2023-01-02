function myAge (evilvalue) {
    let value = parseInt(evilvalue);
    if (value < 18) {
        return "Mineur";
    } else {
        return "Majeur";
    }
}

module.exports = myAge;