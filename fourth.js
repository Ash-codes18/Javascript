// Data types in javascript:
//     1. N = Null 
//     2. N = Number
//     3. S = Symbol
//     4. S = String
//     5. B = Boolean
//     6. B = Bigint
//     7. U = undefined

let a=null;
let b=345;
let c=Symbol("I am a halua symbol")
let d="halua";
let e=true; 
let f=BigInt("567");
let g=undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof c)
console.log(typeof f)

// Object

const halua={  //basically like a dictionary in python
    "Ash": true,
    "Ashmit": false,
    "Mehta":69,
    "Night": undefined
}
console.log(halua["Ash"])