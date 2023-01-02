function myAge (value) {
    if (value < 18) {
        return "Mineur";
    } else {
        return "Majeur";
    }
}

module.exports = myAge;