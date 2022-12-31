//Array methods
let n=[1,2,3,35,56]
console.log(n)
//1 toString() --> it converts an array to string
console.log(n.toString())
//2 join("") --> it prints all the characters of an array using the seperator provided
let a =n.join("+")
console.log(a)
console.log(typeof n )
console.log(typeof a )
//3 pop()  --> it return the value of the popped element
let r =n.pop()
console.log(n)
console.log(r)
// 4 push()  --> It returns the value of the new length of the array
let x = n.push("Fail")
console.log(n)
console.log(x)
//5 Shift() --> removes first element and returns it
console.log(n.shift())
console.log(n)
//6 unshift adds an element at the start of the array and returns new array ;ength
console.log(n.unshift("Pass"))
console.log(n)