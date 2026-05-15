
function code_1() {
    let now = new Date();
    document.write(now);
}


function code_2(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}


function code_3() {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    return num1 + num2;
}


function code_4(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
    document.write("Result: " + result);
    return result;
}

function code_5(num) {
    return num * num;
}


function code_6(n) {
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


function code_7(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}


function code_8(base, per) {
    function calculateSquare(num) { 
        return num * num;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(per)); 
    document.write("Hypotenuse: " + hypotenuse);
}


function code_9(width, height) {
    let area = width * height; 
    return area;
}


function code_10(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}


function code_11(str) {
    let words = str.split(" "); 
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" "); 
}


function code_12(str) {
    let words = str.split(" "); 
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord; 
}


function code_13(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}


function code_14_circumference(radius) { 
    let circumference = 2 * Math.PI * radius; 
    document.write("The circumference is " + circumference.toFixed(2)); 
}

function code_14_area(radius) {
    let area = Math.PI * (radius * radius);
    document.write("The area is " + area.toFixed(2));
}