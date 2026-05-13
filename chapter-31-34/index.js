// 1. Write a program that displays current date and time in your browser.
function code_1() {
  let currentDate = new Date();
  document.write(currentDate);
}

// 2. Write a program that alerts the current month in words.
function code_2() {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let now = new Date();
  let currentMonth = months[now.getMonth()];
  alert("Current month: " + currentMonth);
}

// 3. Write a program that alerts the first 3 letters of the current day.
function code_3() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let now = new Date();
  let currentDay = days[now.getDay()];
  alert("Today is " + currentDay);
}

// 4. Write a program that displays a message "It's Fun day" if its Saturday or Sunday today.
function code_4() {
  let now = new Date();
  let dayIndex = now.getDay();
  if (dayIndex === 0 || dayIndex === 6) {
    alert("It's Fun day");
  }
}

// 5. Write a program that shows "First fifteen days..." if date is less than 16th else "Last days...".
function code_5() {
  let now = new Date();
  let date = now.getDate();
  if (date < 16) {
    alert("First fifteen days of the month");
  } else {
    alert("Last days of the month");
  }
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970.
function code_6() {
  let now = new Date();
  let milliseconds = now.getTime();
  let minutes = milliseconds / (1000 * 60);
  console.log("Current Date: " + now);
  console.log("Elapsed milliseconds since January 1, 1970: " + milliseconds);
  console.log("Elapsed minutes since January 1, 1970: " + minutes);
}

// 7. Write a program that tests whether it's before noon and alert "Its AM" else "its PM".
function code_7() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 12) {
    alert("Its AM");
  } else {
    alert("Its PM");
  }
}

// 8. Create a Date object for the last day of the last month of 2020 (laterDate).
function code_8() {
  let laterDate = new Date(2020, 11, 31);
  console.log("Later date: " + laterDate);
}

// 9. Create a date object for starting date of Ramadan (June 18, 2015) and alert days past.
function code_9() {
  let ramadanStart = new Date("June 18, 2015");
  let today = new Date();
  let diff = today - ramadanStart;
  let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
  alert(daysPast + " days have passed since 1st Ramadan, 2015");
}

// 10. Display seconds elapsed between a reference date (beginning of 2015) and a specific date.
function code_10() {
  let referenceDate = new Date("Dec 05, 2015 22:50:16");
  let start2015 = new Date("Jan 01, 2015");
  let secondsElapsed = (referenceDate - start2015) / 1000;
  document.write("On reference date " + referenceDate + ", " + secondsElapsed + " seconds had passed since beginning of 2015");
}

// 11. Extract hours, reset date object an hour ahead and display.
function code_11() {
  let now = new Date();
  document.write("current date: " + now + "<br>");
  let hours = now.getHours();
  now.setHours(hours - 1); // Document shows '1 hour ago' in example, so setting back 1 hour
  document.write("1 hour ago, it was " + now);
}

// 12. Create a date object and show the date reset to 100 years back in an alert.
function code_12() {
  let now = new Date();
  let currentYear = now.getFullYear();
  let pastDate = new Date();
  pastDate.setFullYear(currentYear - 100);
  alert("current date: " + now + "\n100 years back, it was " + pastDate);
}

// 13. Ask user age, calculate and show birth year.
function code_13() {
  let age = prompt("Please enter your age:");
  let currentYear = new Date().getFullYear();
  let birthYear = currentYear - age;
  document.write("Your age is " + age + "<br>Your birth year is " + birthYear);
}

// 14. Generate K-Electric bill.
function code_14() {
  let customerName = "ABC Customer";
  let currentMonth = "February";
  let numberOfUnits = 410;
  let chargesPerUnit = 16;
  let latePaymentSurcharge = 350;

  let netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
  let grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

  document.write("<h1>K-Electric Bill</h1>");
  document.write("Customer Name: <b>" + customerName + "</b><br>");
  document.write("Month: <b>" + currentMonth + "</b><br>");
  document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
  document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
  document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
  document.write("Late payment surcharge: <b>" + latePaymentSurcharge + "</b><br>");
  document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>");
}