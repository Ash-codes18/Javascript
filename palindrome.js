//js program to check if a given string is a palindrome or not
let a =prompt("Enter the string that you want to check")
function ReverseString(str) {
    return str.split('').reverse().join('')
    }
console.log(ReverseString(a))