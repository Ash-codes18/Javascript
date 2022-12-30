//Arrays in javascript
let marks=[75,80,94,72,80,85,86,false,"Fail"]
for(let i of marks){
    console.log(i)
}
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7]) //Prints undefined as there is no value present at index 7
console.log("Length of the given array is :",marks.length)
marks[9]=0
console.log(marks[7]) //Since now i added a value at the 7th index it will print the defined value
//to find the length of an arry
console.log("Length of the given array is :",marks.length)
//Changing the existing value
marks[3]=70
console.log(marks[3])

//array is an object not a primitive data type
console.log(typeof marks)