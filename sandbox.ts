// const character = ' mario'
// console.log(character)

const inputs = document.querySelectorAll('input')

console.log(inputs)
inputs.forEach(input =>{
    console.log(input)
})

// let age = 30 
let isBlackBelt = false


const circ = (diameter: number)=>{
 return diameter * Math.PI;
}

console.log(circ(7.5))

let names = ['shorena', 'maka', 'teo', 'maria']
names.push('toad')


let character: string; 
let age: number;
let isLoggedIn: boolean; 
let ninjas: string[]= [];

ninjas.push('shaun')

console.log(ninjas)

// union types 

let mix: (string|number|boolean)[] =[]
// objects
mix.push('hello')
mix.push(20)
mix.push(false)
console.log(mix)

// any  
let age1: any = 25

age1 = true 

let mixed: any[] = []
mixed.push(5)
mixed.push('mario')
mixed.push(false)
