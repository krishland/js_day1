class User {
    constructor (surname, name, age) {
        this.surname = surname;
        this.name = name;
        this.age = age;
    }

    presentation () {
        return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
    }
}

class Admin extends User {
    constructor (a, b, c, role) {
        super(a, b, c);
        this.role = "administrateur";
    }
}