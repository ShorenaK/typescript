// const anchor = document.querySelector('a')!
// if(anchor){
// console.log(anchor.href)
// }
// console.log(anchor.href)

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault()
    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber
    )
})
//classes
class Invoice {
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

const invOne = new Invoice('shorena', 'works on the website', 300)
const invTwo = new Invoice('teo', 'works on the website', 350)
// console.log(invOne, invTwo)

let Invoices: Invoice[]=[]
Invoices.push(invOne)
Invoices.push(invTwo)
console.log(Invoices)

invOne.client = 'Dima'
invTwo.amount = 600 
// console.log(invOne, invTwo)
Invoices.forEach((inv)=>{
console.log(inv.client, inv.detailes, inv.amount, inv.format())
})