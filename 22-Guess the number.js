arr=[]
alert("Welcome to The Number guessing game!")
let x = Math.floor((Math.random() * 100) + 1);
alert("A random no. is being generated between 1-100.......")
let a =prompt("Guess the No.")
while(a!=x){
a=prompt("Wrong...Guess again!")
    if(a>x){
        alert("The guessed no. is greater than the random no.")
        document.write("The guessed no. is greater than the random no.")
        document.write("<br>")
        let g="The guessed no. is greater than the random no."
        console.log(g)
        arr.push(g)
    }
    if(a<x){
        alert("The guessed no. is less than the random no.")
        document.write("The guessed no. is less than the random no.")
        document.write("<br>")
        let h="The guessed no. is less than the random no."
        console.log(h)
        arr.push(h)
        }
        if(a==x){
    alert("Congratulations, you have guessed the no. correctly!")
    document.write("<br>")
    document.write("Correct no. guessed")
}
}
let j =arr.length
document.write("<br>")
document.write("<br>")
document.write("Your score is : ",100-j)