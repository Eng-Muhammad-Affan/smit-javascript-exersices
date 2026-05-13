// Question 9: Array operations with colors
function q9_colorOperations() {
    let colors = ["Red", "Green", "Blue", "Yellow"];
    let output = "<h3>Original Array: " + colors.join(", ") + "</h3>";

    // a. Add color to beginning
    let addBeginning = prompt("Enter color to add to the beginning:");
    if (addBeginning) {
        colors.unshift(addBeginning);
        output += "<br>a) After adding '" + addBeginning + "' to beginning: " + colors.join(", ");
    }

    // b. Add color to end
    let addEnd = prompt("Enter color to add to the end:");
    if (addEnd) {
        colors.push(addEnd);
        output += "<br>b) After adding '" + addEnd + "' to end: " + colors.join(", ");
    }

    // c. Add two more colors to beginning
    colors.unshift("Purple", "Orange");
    output += "<br>c) After adding two colors to beginning: " + colors.join(", ");

    // d. Delete first color
    colors.shift();
    output += "<br>d) After deleting first color: " + colors.join(", ");

    // e. Delete last color
    colors.pop();
    output += "<br>e) After deleting last color: " + colors.join(", ");

    // f. Add color at specific index
    let index = parseInt(prompt("Enter index to add color:"));
    let colorName = prompt("Enter color name to add:");
    if (!isNaN(index) && colorName) {
        colors.splice(index, 0, colorName);
        output += "<br>f) After adding '" + colorName + "' at index " + index + ": " + colors.join(", ");
    }

    // g. Delete color(s) from specific index
    let delIndex = parseInt(prompt("Enter index to delete from:"));
    let delCount = parseInt(prompt("How many colors to delete:"));
    if (!isNaN(delIndex) && !isNaN(delCount)) {
        colors.splice(delIndex, delCount);
        output += "<br>g) After deleting " + delCount + " color(s) from index " + delIndex + ": " + colors.join(", ");
    }

    return output;
}