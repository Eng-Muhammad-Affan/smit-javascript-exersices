function code_1() {
    const int = +prompt("Enter positive number")
    console.log(`Number ${int}`)
    console.log(`Round ${Math.round(int)}`)
    console.log(`Floor ${Math.floor(int)}`)
    console.log(`Ceil ${Math.ceil(int)}`)
}

function code_2() {
    const neg = +prompt("Negative floating point")
    console.log(`Number ${neg}`)
    console.log(`Round ${Math.round(neg)}`)
    console.log(`Floor ${Math.floor(neg)}`)
    console.log(`Ceil ${Math.ceil(neg)}`)
}

function code_3() {
    const abs = +prompt("Write a number")
    console.log(`Absolute value is ${Math.abs(abs)}`)
}
function code_4() {
    const random = Math.floor(Math.random() + 1 * 6)
    console.log(`Dice ${random}`)
}

function code_5() {
    const random = Math.floor(Math.random() + 1 * 100)
    console.log(random % 2 === 0 ? "Heads" : "Tails")
}
function code_6() {
    const random = Math.floor(Math.random() + 1 * 100)
    console.log(`Random number between 1 and 100 : ${random}`)
}

function code_7() {
    const weight = +prompt("Enter your weight in kilograms")
    console.log(`Your weight is ${weight} kg`)
}
function code_8() {
    const secret= Math.floor(Math.random() + 1 * 100)
    const int = +prompt("Guess number between 1 - 100")
    console.log(int === secret?"Conguratulations" : "Try again" )
}

