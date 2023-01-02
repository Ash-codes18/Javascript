let a={
    a:"Halua",
    b:"is",
    c:"very",
    d:"tasty",
    f:"yes",
    g:"100%"
}
console.log("This is an log")
console.assert(5>1)
console.assert(5<1)
console.error("This is an error")
console.warn("This is an warning")
console.info("This is some info")
console.table(a)
// console.clear()
let b=5
console.time("forloop")
for (let i=1;i<b;i++){
    console.log(b+i)
}
console.timeEnd("forloop")
let i=0
console.time("Whileloop")
while(i<b){
    i++
    console.log(b+i)
}
console.timeEnd("Whileloop")
