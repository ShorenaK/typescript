import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js'


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('shorena', 'web work', 1000)
docTwo = new Payment('dima', 'pluming work', 1000)

let docs: HasFormatter[] =[]

docs.push(docOne)
docs.push(docTwo)

console.log(docs)

// interfaces 
interface isPerson {
    name: string;
    age: number; 
    speak(a: string): void;
    spend(a: number): number;

}
const me: isPerson = {
    name: 'shorena', 
    age: 47, 
    speak(text: string): void{
        console.log(text)
    }, 
     spend(amount: number): number{
        console.log('I spent', amount)
        return amount
     }
}
console.log(me)

const greetPerson = (person: isPerson)=>{
    console.log("Hello", person.name)
}
greetPerson(me)

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
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)  
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})


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
console.log(inv.client,
     inv.detailes, 
     inv.amount, 
     inv.format())
})