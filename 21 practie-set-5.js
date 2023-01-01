//Q.1
let arr = [1, 3, 5, 7, 9,10,22,20,30,330,12690]
let a = prompt("Enter the no. that you want to add")
a = Number.parseInt(a)
arr.push(a)

//Q.2
while (a != 0) {
    let b = prompt("Enter the no. that you want to add")
    arr.push(b)
    console.log(arr)
}

//or 

do {
    {
        let b = prompt("Enter the no. that you want to add")
        arr.push(b)
    }
}while(a != 0)
console.log(arr)

//Q.3
let z=arr.filter((div)=>{
    if (div%10==0){
        return div
    }
})
console.log(z)

//or 
let y=arr.filter((fun)=>{
    return fun%10==0
})
console.log(fun)

//Q.4
let x=arr.map((j)=>{
    return j*j
})
console.log(x)

//Q.5
let f=[1,2,3,4,5]
let u=f.reduce((ok,nok)=>{
    return ok*nok
})
console.log(u)