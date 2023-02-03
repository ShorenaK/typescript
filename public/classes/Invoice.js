//classes
export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detailes = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detailes}`;
    }
}
