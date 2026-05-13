// Question 1: Declare an empty array using JS literal notation to store student names in future.
function q1_emptyArrayLiteral() {
    let studentNames = [];
    return studentNames;
}

// Question 2: Declare an empty array using JS object notation to store student names in future.
function q2_emptyArrayObject() {
    let studentNames = new Array();
    return studentNames;
}

// Question 3: Declare and initialize a strings array.
function q3_stringsArray() {
    let stringsArray = ["Apple", "Banana", "Cherry", "Date"];
    return stringsArray;
}

// Question 4: Declare and initialize a numbers array.
function q4_numbersArray() {
    let numbersArray = [10, 20, 30, 40, 50];
    return numbersArray;
}

// Question 5: Declare and initialize a boolean array.
function q5_booleanArray() {
    let booleanArray = [true, false, true, false, true];
    return booleanArray;
}

// Question 6: Declare and initialize a mixed array.
function q6_mixedArray() {
    let mixedArray = [1, "Hello", true, 3.14, "World", false];
    return mixedArray;
}

// Question 7: Declare and Initialize an array and store available education qualifications in Pakistan
function q7_qualifications() {
    let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    let output = "<h2>Qualifications:</h2>";
    for (let i = 0; i < qualifications.length; i++) {
        output += (i + 1) + ") " + qualifications[i] + "<br>";
    }
    return output;
}

// Question 8: Store 3 student names and their scores, calculate percentages
function q8_studentScores() {
    let students = ["Michael", "John", "Tony"];
    let scores = [320, 230, 480];
    let totalMarks = 500;
    let output = "";

    for (let i = 0; i < students.length; i++) {
        let percentage = (scores[i] / totalMarks) * 100;
        output += "Score of " + students[i] + " is " + scores[i] +
            ". Percentage: " + percentage + "%<br>";
    }
    return output;
}



// Question 10: Sort student scores in ascending order
function q10_sortScores() {
    let scores = [320, 230, 480, 120];
    let sortedScores = [...scores].sort((a, b) => a - b);

    let output = "Scores of Students: " + scores.join(", ") + "<br>";
    output += "Ordered Scores of Students: " + sortedScores.join(", ");
    return output;
}

// Question 11: Copy 3 array elements from cities to selectedCities
function q11_copyCities() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let selectedCities = cities.slice(2, 4);

    let output = "Cities list: " + cities.join(", ") + "<br>";
    output += "Selected cities list: " + selectedCities.join(", ");
    return output;
}

// Question 12: Create a single string from array using join method
function q12_joinArray() {
    let arr = ["This ", " is ", " my ", " cat"];
    let resultString = arr.join("");
    return resultString;
}

// Question 13: FIFO (First In First Out) using queue
function q13_fifoQueue() {
    let fifoArray = [];

    // Store values
    fifoArray.push("First");
    fifoArray.push("Second");
    fifoArray.push("Third");
    fifoArray.push("Fourth");

    let output = "<h3>FIFO (First In First Out) - Queue</h3>";
    output += "Stored values in order: " + fifoArray.join(", ") + "<br>";
    output += "Accessing values in FIFO order:<br>";

    while (fifoArray.length > 0) {
        let value = fifoArray.shift();
        output += "Retrieved: " + value + "<br>";
    }

    return output;
}

// Question 14: LIFO (Last In First Out) using stack
function q14_lifoStack() {
    let lifoArray = [];

    // Store values
    lifoArray.push("First");
    lifoArray.push("Second");
    lifoArray.push("Third");
    lifoArray.push("Fourth");

    let output = "<h3>LIFO (Last In First Out) - Stack</h3>";
    output += "Stored values in order: " + lifoArray.join(", ") + "<br>";
    output += "Accessing values in LIFO order:<br>";

    while (lifoArray.length > 0) {
        let value = lifoArray.pop();
        output += "Retrieved: " + value + "<br>";
    }

    return output;
}

// Question 15: Display phone manufacturers dropdown
function q15_phoneDropdown() {
    let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    let dropdown = "<select>";

    for (let i = 0; i < manufacturers.length; i++) {
        dropdown += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
    }
    dropdown += "</select>";

    return dropdown;
}