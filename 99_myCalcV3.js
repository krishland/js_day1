class Calc {
    constructor() {
        this.lastOp = ""
        this.lastRes = 0
        this.operation = []
    }

    compute(str) {
        this.lastRes = eval(str)
        this.lastOp = `${str}=${this.lastRes}`;
        this.operation.push(this.lastOp)
        return this.lastOp
    }

    lastResult() {
        return this.lastRes
    }

    history() {
        return this.operation
    }
}

module.exports = Calc;