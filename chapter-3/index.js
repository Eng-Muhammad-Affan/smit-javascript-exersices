// 1
var age = 25;
alert("I am " + age + " years old");

// 2
var visitCount = localStorage.getItem("visitCount");
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem("visitCount", visitCount);
alert("You have visited this site " + visitCount + " times");

// 3
function code_3() {
    const birth_year = "2006"
    document.writeln(`My birth year is ${birth_year}`)
    document.writeln(`Data type of my declared variable is number`)
}



// 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");


