//Loops in array
let num=[1,5,3,8,9,2,7]
for (let i=0;i<num.length;i++)
console.log(num[i])
console.log()
console.log()
/// for each loop
num.forEach((Element)=>{
    console.log(Element*Element)
})

// array.from  --> it is used to create an array from any other object
let a ="Halua";
console.log(a)
console.log(typeof a)
Array.from(a)
console.log(a)
console.log(typeof a)
// for of loop gives the values present inside the array
for (let i of num){
    console.log(i)
}
// for in loop  gives the index values i.e  keys
for (let i in num){
    console.log(i)
}

