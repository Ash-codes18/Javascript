//1  delete variablename[index]
let a =[2,4,6,8,10]
console.log(a)
console.log(a.length)
delete a[0]
console.log(a)
console.log(a.length)
//length of array does not change upon the use if delete

// 2 .concat()  it can take any no. of arrays to add to an existing array
let b=[1,3,5,7,9]
console.log(b.concat(a))

//3  .sort()    sorts alphabatically
let c=[24,678,32,87654,743,4,790]
console.log(c.sort())
//to sort in ascending or descending order we need to define a function
// for ascending
let fun=(x,y)=>{
    return x-y
}
console.log(c.sort(fun))
// For descending
let funny=(x,y)=>{
    return y-x
}
console.log(c.sort(funny))

//4 .reverse()
b.reverse()
console.log(b)

//5 .splice()  it returns the value that it has deleted
let f = [5,9,144,16,15,123,4,12,5]
let j =f.splice(2,3,1021,1022,1023)
console.log(f)
console.log(j)

//6  .Slice()
let g=f.slice(2,5)
console.log(g)
