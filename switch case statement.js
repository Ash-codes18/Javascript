const vegetable= prompt("Enter the vegetable that you want to purchase.")
switch  (vegetable){
    case "potato":
        console.log("potato is 20 rupees for a KG.")
        break
    case  "capsicum" :
    case "pointed gourd" :
        console.log("capsicum and pointed gourd cost 20 rupees per quarter KG. ")
        break
    default:
        console.log('Sorry, we are out of',vegetable)
}