function code_1(){
    const firstName = prompt("Enter your first name")
    const lastName = prompt("Enter you last name")
    
    alert(`Hello ${firstName} ${lastName} Have a good day !`)
}
function code_2() {
    const favouriteMobile = prompt("Enter your favourite mobile phone")
    console.log(`Argument contains ${favouriteMobile.length} characters`)
}
function code_3() {
    const string = "pakistani"
    console.log(string.indexOf("n"))
}

function code_4() {
    const string = "Hello world"
    console.log(string.lastIndexOf("l"))
}

function code_5() {
    const string = "Pakistani"
    console.log(string.charAt(3))
}
function code_6(){
    const firstName = prompt("Enter your first name")
    const lastName = prompt("Enter you last name")
    
    alert(`Hello ${firstName.concat(" ").concat(lastName)} Have a good day !`)
}
function code_7(){
    const string = "Hyderabad"
    console.log(string.replace("Hyder", "Islam"))
}
function code_8(){
    const firstName = "Enter your first name"
    console.log(firstName.replaceAll("and","&"))
}
function code_9() {
    const string = "472"
    console.log(Number(string))
}
function code_10() {
    const word = prompt("Enter a word")
    console.log(word.toUpperCase())    
}
function code_11() {
    const input = prompt("Enter anything")
    console.log(input[0].toUpperCase() + input.slice(1).toLowerCase())
}
function code_12() {
    const num = 10
    console.log(String(num))
}