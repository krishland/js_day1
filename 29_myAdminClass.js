const User = require("./28_myUserClass");

class Admin extends User {
    constructor (surname, name, age, role) {
        super(surname, name, age);
        this.role = "administrateur";
    }
}

module.exports = Admin;