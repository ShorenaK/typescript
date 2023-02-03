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

import {Invoice} from './classes/invoice.js'

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