//Q.1
let marks={
    ash:83,
    subham:55,
    pankaj:90,
    halua:99,
    tullu:33
}
for (let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of",Object.keys(marks)[i],"are",marks[Object.keys(marks)[i]])
}
//Q.2
for (let key in marks){
    console.log("The marks of",key,"are",marks[key])
}
//Q.3
let correct_no = 7
let a
while(a!=correct_no){
    console.log("Please try again")
    a=prompt("Please enter the no.")
}
console.log("You have entered the correct no.")
//Q.4
function mean(g,h,j,k,l){
    return (g+h+j+k+l)/5
}
let a=prompt("PLease enter the 1st no")
a=Number.parseInt(a)
let b=prompt("PLease enter the 2nd no")
b=Number.parseInt(b)
let c=prompt("PLease enter the 3rd no")
c=Number.parseInt(c)
let d=prompt("PLease enter the 4th no")
d=Number.parseInt(d)
let e=prompt("PLease enter the 5th no")
e=Number.parseInt(e)
console.log("The mean of the provided nos. is :",mean(a,b,c,d,e))