import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js'
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('shorena', 'web work', 1000)
docTwo = new Payment('dima', 'pluming work', 1000)

let docs: HasFormatter[] =[]

docs.push(docOne)
docs.push(docTwo)

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


const greetPerson = (person: isPerson)=>{
    console.log("Hello", person.name)
}
greetPerson(me)

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
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
  list.render(doc, type.value, 'end')
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

const addUID = <T extends object >(obj: T)=>{
let uid = Math.floor(Math.random() * 100)
return{...obj, uid}
}

let docOne1 = addUID({name: 'shorena', age: 47})
// let docOne2 = addUID('hello')

console.log(docOne1.name)

// with interfaces
interface Resource <T>{
    uid: number; 
    resourceName: string; 
    data: T;
}

const docThree: Resource<object>={
     uid: 1, 
     resourceName: 'person', 
     data: {name: 'shorena'}
}

const docFour: Resource<string[]>={
     uid: 2, 
     resourceName: 'person', 
     data: ['shorena', 'milk']
}

console.log(docFour, docThree)

//nums 

enum ResourceType {BOOK, AUTHOR, FILM , DERCTOR, PERSON}

interface Resource<T>{
    uid: number; 
    resourceType: ResourceType; 
    data: T;
}

const docOne11: Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK, 
    data: {name: 'shorena'}
}

const docTwo11: Resource<object>={
    uid: 10, 
    resourceType: ResourceType.FILM, 
    data: {name: 'shorena2'}
}

console.log(docOne11, docTwo11)

// tuples. 

let arr = ['ray', 23, true]

arr[0]= false

let tup: [string, number, boolean] = ['rye', 25, true]
tup[0] = false 
