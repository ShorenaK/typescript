
import {HasFormatter} from '../interfaces/HasFormatter.js'


//classes
export class Invoice implements  HasFormatter{
    client: string; 
    detailes: string; 
    amount: number; 
    constructor(c: string, d: string, a: number){
        this.client = c; 
        this.detailes = d; 
        this.amount = a;
    }
format(){
    return `${this.client} owes $${this.amount} for ${this.detailes}`
}
}