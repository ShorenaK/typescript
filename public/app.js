import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('shorena', 'web work', 1000);
docTwo = new Payment('dima', 'pluming work', 1000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'shorena',
    age: 47,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const invOne = new Invoice('shorena', 'works on the website', 300);
const invTwo = new Invoice('teo', 'works on the website', 350);
// console.log(invOne, invTwo)
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
console.log(Invoices);
invOne.client = 'Dima';
invTwo.amount = 600;
// console.log(invOne, invTwo)
Invoices.forEach((inv) => {
    console.log(inv.client, inv.detailes, inv.amount, inv.format());
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne1 = addUID({ name: 'shorena', age: 47 });
console.log(docOne1);
