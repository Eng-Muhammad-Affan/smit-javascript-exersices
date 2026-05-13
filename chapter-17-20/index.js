function code_1() {
    const arr = [
        [],
        [],
        [],
    ]
}

function code_2(){
    const arr = [
        [0,1,2,3],
        [1,0,1,2],
        [2,1,0,1],
    ]
}

function code_3() {
    for(let i=1; i<=10; i++) {
        console.log(i)
    }
}

function code_4() {
    const q = +prompt("Enter a number and I'll print its table");
    for(let i=1; i<=10; i++) {
        console.log(`${q} X ${i} = ${q*i}`)
    }
}

function code_5(){
    const arr = ["apple", "banana","mango","orange","strawberry"]
    arr.forEach((el) => {
        console.log(el)
    })
}
function code_6() {
    for(let i=1; i<=15; i++) {
        document.writeln(i,",")
        document.writeln("<br>")
    }
    for(let j=10; j>=1; j--) {
        document.writeln(j,",")
        document.writeln("<br>")
    }
    for(let k=0; k<=20; k= j+2) {
        document.writeln(k)
        document.writeln("<br>")
    }
    for(let l=1; l<=20; l= j+2) {
        document.writeln(l)
    }
    for(let m=2; m<=20; m = m+2){
        document.writeln(m,"k")
    }
}

function code_7(){
    const arr = ["cake","apple","pie","cookie","chips","patties"]
    let search_query = prompt("Search products")
    search_query = search_query.trim().toLowerCase();

    if(search_query !== ""){
        const required = arr.indexOf(search_query)

        required? console.log(`Found : ${required}`) : console.log("Not found")
    }
}

function code_8() {
    let max = 0;
    const arr =[ 24, 53, 78, 91, 12]
    arr.forEach((el) => {
        if(el > max)
            {max=el} 
    })
    console.log(`largest : ${max}`)
}
function code_9() {
        let min = +Infinity;
    const arr =[ 24, 53, 78, 91, 12]
    arr.forEach((el) => {
        if(el < min)
            {max=el} 
    })
    console.log(`smallest : ${min}`)
}
function code_10(){
    for(let i=5; i<=100; i = i+5){
        document.writeln(i)
    }
}