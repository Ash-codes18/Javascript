//Q.1
let age = prompt("PLease enter the age")
age=Number.parseInt(age)
if (age>18){
    document.write("You can drive")
}
else{
    document.write("You cannot drive")
}
//Q.2
let  b=confirm("Do you want to enter your age again?")
if (b){
    age = prompt("PLease enter the age")
}
//Q.3
if(age<0){
    console.error("The age entered is negative")
}
//Q.4
let a=prompt("Enter a no.")
if(a>4){
    location.href="https://www.google.com"
}
//Q.5
let col=prompt("Chosse the color from : Red,Yellow,Green,Blue")
document.body.style.background =col