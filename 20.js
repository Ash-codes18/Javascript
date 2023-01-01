// Map()  --> Used for making a new array after performing some function on it
let a=[15,25,85,67,20]
let array =a.map((arr,index,array)=>{
    console.log(arr,index,array)
    return arr+1
})
console.log(array)  

// Filter()
let b=a.filter((grt)=>{
    return grt>30
})
console.log(b)

// reduce  --> It operates the provided function until all the elements of the given array have been gone thorugh that function

let c=a.reduce((v1,v2)=>{
   return v1/v2
})
console.log(c)