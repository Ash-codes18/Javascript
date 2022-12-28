// Q.1
let a=prompt("Please enter your age.")
if (a>=10 && a<=20){
    console.log("Yes the age is in the required limit.")
}
 //Q.2
 let age = prompt("Please enter your age")
 switch (age){
    case 12:
        console.log("You are almost a teen")
    case 13:
        console.log("Congrats!, you are a teen now!")
    case 14:
        console.log("You have been a teen for an year now")
    case 15:
        console.log("You are midway to being an adult")
    default:
        console.log("Your age is not special")
 }
// Q.3
let z = parseInt(prompt("Enter the no."))
if (z%2==0 && z%3==0){
    console.log("Yes the no. is divisible")
}
else{
    console.log("The no. is not divisible")
}
//Q.4
let x = parseInt(prompt("Enter the no."))
if (x%2==0 || x%3==0){
    console.log("Yes the no. is divisible")
}
else{
    console.log("The no. is not divisible")
}
//Q.5
let f=parseInt(prompt("Enter your age"))
console.log("You can", f>18? "drive since you are 18":"not drive since you are not 18")