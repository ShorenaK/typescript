// let greet: Function; 

let greet: (a:string, b:string)=>void;


greet = ()=>{
    console.log('hello, again')
}

const add = (a: number, b: number, c: number | string= 10) => {
console.log(a +b)
console.log(c)
}

add(5, 6, 30)


const minus = (a: number, b:number): number =>{
    return a = b 

}

type StrigOrNum = string | number 
type objectwithName = { name: string, uid: StrigOrNum}

const logDetails = (user: objectwithName)=>{
        console.log(`${user.name} say hello`)
    }

    const object =(user: {name: string, age: number})=>{
            console.log(user.name, user.age)
    }
const greet2 = (uid: StrigOrNum, item: string)=>{
console.log(`${item} has a ${uid}`)
}

const greetAgain = (uid: StrigOrNum, item: string)=>{
console.log(`${item} has a ${uid}`)
}



greet2('d', 's')

let greet1: (a: string, b: string) => void 

greet1: (name: string, greeting: string)=>{
    console.log(`${name} says ${greeting}`)
}

let calc : (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string)=>{
   if(action === 'add'){
    return numOne + numTwo
   }else {
    return numOne - numTwo
   }
}

let logDetails2: (obj: { name: string, age : number}) => void

logDetails2 = (ninja: {name: string, age: number}) =>{
    console.log(`${ninja.name} is ${ninja.age}`)
}