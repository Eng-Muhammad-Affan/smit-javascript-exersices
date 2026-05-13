function code_1() {
    // 1
    var num1 = 10;
    var num2 = 5;
    var sum = num1 + num2;
    document.write("Sum: " + sum + "<br>");
}

function code_2() {
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    var remainder = num1 % num2;
    document.write("Subtraction: " + difference + "<br>");
    document.write("Multiplication: " + product + "<br>");
    document.write("Division: " + quotient + "<br>");
    document.write("Modulus: " + remainder + "<br>");
}

function code_3() {
    var variable;
    document.write("Value after variable declaration is: " + variable + "<br>");
    variable = 5;
    document.write("Initial value: " + variable + "<br>");
    variable++;
    document.write("Value after increment is: " + variable + "<br>");
    variable += 7;
    document.write("Value after addition is: " + variable + "<br>");
    variable--;
    document.write("Value after decrement is: " + variable + "<br>");
    var remainderValue = variable % 3;
    document.write("The remainder is: " + remainderValue + "<br>");
}

function code_4() {
    const ticket_price = 600;
    document.writeln(`Total cost to buy 5 tickets to a movie is ${ticket_price * 5}`)
}

function code_5() {
    const string = ``
    for (let i = 1; i <= 10; i++) {
        string + `\n 4X${i} = ${4 * i}`
    }
    document.writeln(string)
}
function code_6() {
    var celsius = 25;
    var fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
    document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

    var fahrenheit = 77;
    var celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
    document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");
}

function code_7() {
    var priceItem1 = +prompt("Enter price of product 1");
    var priceItem2 = +prompt("Enter price of product 2");
    var quantityItem1 = +prompt("Enter price of product 3");
    var quantityItem2 = +prompt("Enter price of product 4");
    var shippingCharges = +prompt("Enter price of product 5");

    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

    document.write("<h3>Shopping Cart Receipt</h3>");
    document.write("Price of item 1: " + priceItem1 + "<br>");
    document.write("Quantity of item 1: " + quantityItem1 + "<br>");
    document.write("Price of item 2: " + priceItem2 + "<br>");
    document.write("Quantity of item 2: " + quantityItem2 + "<br>");
    document.write("Shipping charges: " + shippingCharges + "<br><br>");
    document.write("Total cost: " + totalCost);
}
function code_8() {
    var totalMarks = 500;
    var marksObtained = 410;
    var percentage = (marksObtained / totalMarks) * 100;

    document.write("Total marks: " + totalMarks + "<br>");
    document.write("Marks obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage + "%");
}
function code_9() {
    var totalPakRupees = (10 * 104.80) + (25 * 28);
    document.write("Total in Pakistani Rupees: " + totalPakRupees);
}

function code_10() {
    var num = 8;
    var result = ((num + 5) * 10) / 2;
    document.write("Result of arithmetic sequence: " + result + "<br><br>");
}

function code_11() {
    var currentYear = 2026;
    var birthYear = 2000;
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    document.write("They are either " + age2 + " or " + age1 + " years old");

}
function code_12() {
    var radius = 7;
    var pi = 3.142;

    var circumference = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("The circumference is " + circumference + "<br>");
    document.write("The area is " + area);
}
function code_13() {
    var favoriteSnack = "chocolate chip cookies";
    var currentAge = 25;
    var maxAge = 80;
    var amountPerDay = 2;

    var totalForRestOfLife = (maxAge - currentAge) * 365 * amountPerDay;

    document.write("You will need " + totalForRestOfLife + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
}