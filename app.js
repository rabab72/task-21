let day = new Date().getDay();
let message = "";

switch (day) {
    case 0:
        message = "Today is Sunday.";
        break;
    case 1:
        message = "Today is Monday.";
        break;
    case 2:
        message = "Today is Tuesday.";
        break;
    case 3:
        message = "Today is Wednesday.";
        break;
    case 4:
        message = "Today is Thursday.";
        break;
    case 5:
        message = "Today is Friday.";
        break;
    case 6:
        message = "Today is Saturday.";
        break;
    default:
        message = "Error: Invalid day!";
}

console.log(message);
let cityName = prompt("Enter a city name:");
let message = "";

switch (cityName.toLowerCase()) {
    case "paris":
        message = "You entered Paris!";
        alert(message);
        break;
    case "london":
        message = "You entered London!";
        alert(message);
        break;
    case "new york":
        message = "You entered New York!";
        alert(message);
        break;
    default:
        message = "City not recognized.";
        alert(message);
}

function calculateArea(radius) {
    // Local variable
    let pi = Math.PI;
    let area = pi * radius * radius;
    console.log("Area inside function:", area);
}

// Calling the function
calculateArea(5);

// Trying to access the local variable outside the function will result in an error
// console.log("Area outside function:", area); // This will throw an error
// Global variable
let globalVar = "I'm a global variable";

function printGlobalVariable() {
    // Accessing the global variable inside the function
    console.log("Inside function:", globalVar);
}

// Calling the function
printGlobalVariable();

// Global variables are accessible outside the function as well
console.log("Outside function:", globalVar);

function displayAlert() {
    function askName() {
        let userName = prompt("Enter name");

        function mainFunction() {
            // Call the first function
            function1();

            // Call the second function
            function2();
        }

        function displayName() {
            let name = prompt("Enter name");
            alert("Your name is: " + name);
        }

        // Calling the function
        displayName();

        function concat(a, b, c, variable, str, num) {
            function concatenateStrings(str1, str2) {
                let result = str1 + str2;

                function multiplyNumbers(num1, num2, num3) {
                    let result = num1 * num2 * num3;

                    function calculateAverage(numbers) {
                        let sum = 0;
                        for (let number of numbers) {
                            sum += number;
                        }
                        return sum / numbers.length;
                    }

                    // Example usage:
                    let numbers = [5, 10, 15, 20];
                    let average = calculateAverage(numbers);
                    console.log("Average:", average);
                    let dObj = new Date();
                    let dStr = new Date().toString();
                    let d = new Date();
                    let day = d.getDay();
                    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    let d = new Date();
                    let day = d.getDay();
                    alert(dayNames[day]);
                    let dateDetails = new Date();
                    let later = new Date(2020, 11, 31);
                    let specificDate = new Date(1992, 1, 2);
                    alert(new Date(1980, 0, 1).getTime());
                    let date = new Date();
                    date.setFullYear(2025);

                    function changeToJanuary(date) {
                        date.setMonth(0); // January is represented by 0
                    }

                    function changeMinutes(time, newMinutes) {
                        time.setMinutes(newMinutes);
                    }

                    function addHours(time, hoursToAdd) {
                        time.setHours(time.getHours() + hoursToAdd);
                    }

                    function calculateAge(dateOfBirth) {
                        let today = new Date();
                        let birthDate = new Date(dateOfBirth);
                        let age = today.getFullYear() - birthDate.getFullYear();
                        let monthDiff = today.getMonth() - birthDate.getMonth();

                        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                            age--;
                        }

                        return age;
                    }

                    // Example usage:
                    let age = calculateAge("1990-01-01");
                    console.log("Age:", age); // This will log the person's age based on the date of birth.
                    function power(a, b) {
                        return Math.pow(a, b);
                    }

                    function power(a, b) {
                        return Math.pow(a, b);
                    }

                    function isLeapYear(year) {
                        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
                    }

                    function calculateArea(a, b, c) {
                        let s = (a + b + c) / 2;
                        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
                    }

                    function mainFunction(subject1, subject2, subject3) {
                        let average = calculateAverage(subject1, subject2, subject3);
                        let percentage = calculatePercentage(subject1, subject2, subject3);
                        console.log("Average:", average);
                        console.log("Percentage:", percentage + "%");
                    }

                    function calculateAverage(subject1, subject2, subject3) {
                        return (subject1 + subject2 + subject3) / 3;
                    }

                    function calculatePercentage(subject1, subject2, subject3) {
                        let totalMarks = subject1 + subject2 + subject3;
                        return (totalMarks / 300) * 100;
                    }

                    // Example usage:
                    mainFunction(80, 85, 90);

                    function customIndexOf(string, char) {
                        for (let i = 0; i < string.length; i++) {
                            if (string[i] === char) {
                                return i;
                            }
                        }
                        return -1;
                    }

                    function removeVowels(sentence) {
                        return sentence.replace(/[aeiou]/ig, "");
                    }

                    function countSuccessiveVowels(text) {
                        let count = 0;
                        for (let i = 0; i < text.length - 1; i++) {
                            let char1 = text[i].toLowerCase();
                            let char2 = text[i + 1].toLowerCase();
                            switch (char1 + char2) {
                                case "aa":
                                case "ee":
                                case "ii":
                                case "oo":
                                case "uu":
                                    count++;
                                    break;
                            }
                        }
                        return count;
                    }

                    // Example usage:
                    let sentence = "Pleases read this application and give me gratuity";
                    console.log("Number of occurrences of any two vowels in succession:", countSuccessiveVowels(sentence));

                    function countSuccessiveVowels(text) {
                        let count = 0;
                        for (let i = 0; i < text.length - 1; i++) {
                            let char1 = text[i].toLowerCase();
                            let char2 = text[i + 1].toLowerCase();
                            switch (char1 + char2) {
                                case "aa":
                                case "ee":
                                case "ii":
                                case "oo":
                                case "uu":
                                    count++;
                                    break;
                            }
                        }
                        return count;
                    }

                    // Example usage:
                    let sentence = "Pleases read this application and give me gratuity";
                    console.log("Number of occurrences of any two vowels in succession:", countSuccessiveVowels(sentence));

                    function convertToMeters(km) {
                        return km * 1000;
                    }

                    function convertToFeet(km) {
                        return km * 3280.84;
                    }

                    function convertToInches(km) {
                        return km * 39370.1;
                    }

                    function convertToCentimeters(km) {
                        return km * 100000;
                    }

                    // Example usage:
                    let distanceInKm = 100;
                    console.log("Distance in meters:", convertToMeters(distanceInKm));
                    console.log("Distance in feet:", convertToFeet(distanceInKm));
                    console.log("Distance in inches:", convertToInches(distanceInKm));
                    console.log("Distance in centimeters:", convertToCentimeters(distanceInKm));

                    function calculateOvertimePay(hoursWorked) {
                        const regularHours = 40;
                        const hourlyRate = 12;
                        if (hoursWorked > regularHours) {
                            let overtimeHours = hoursWorked - regularHours;
                            return overtimeHours * hourlyRate;
                        } else {
                            return 0;
                        }
                    }

                    // Example usage:
                    let hoursWorked = 45;
                    console.log("Overtime pay:", calculateOvertimePay(hoursWorked));

                    function calculateCurrencyNotes(amountInHundreds) {
                        let hundredNotes = Math.floor(amountInHundreds);
                        let fiftyNotes = Math.floor((amountInHundreds % 1) * 10 / 5);
                        let tenNotes = Math.floor(((amountInHundreds % 1) * 10) % 5 / 1);
                        console.log(`You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes.`);
                    }

                    // Example usage:
                    let amountInHundreds = 4;
                    calculateCurrencyNotes(amountInHundreds);

                    function displayDateTime() {
                        let currentDateTime = new Date();
                        alert(currentDateTime.toString());
                    }

                    // Call the function
                    displayDateTime();

                    function greetUser(firstName, lastName) {
                        alert("Hello, " + firstName + " " + lastName);
                    }

                    // Example usage:
                    greetUser("John", "Doe");

                    function addNumbers(num1, num2) {
                        return num1 + num2;
                    }

                    // Example usage:
                    let result = addNumbers(5, 3);
                    console.log("Sum:", result);

                    function calculator(num1, num2, operator) {
                        let result;
                        switch (operator) {
                            case '+':
                                result = num1 + num2;
                                break;
                            case '-':
                                result = num1 - num2;
                                break;
                            case '*':
                                result = num1 * num2;
                                break;
                            case '/':
                                result = num1 / num2;
                                break;
                            default:
                                result = "Invalid operator";
                        }
                        return result;
                    }

                    // Example usage:
                    let operation = calculator(5, 3, '+');
                    console.log("Result:", operation);

                    function square(number) {
                        return number * number;
                    }

                    // Example usage:
                    console.log("Square of 5:", square(5));

                    function factorial(number) {
                        if (number === 0 || number === 1) {
                            return 1;
                        } else {
                            return number * factorial(number - 1);
                        }
                    }

                    // Example usage:
                    console.log("Factorial of 5:", factorial(5));

                    function countNumbers(start, end) {
                        for (let i = start; i <= end; i++) {
                            console.log(i);
                        }
                    }

                    // Example usage:
                    countNumbers(1, 5);

                    function calculateHypotenuse(base, perpendicular) {
                        function calculateSquare(number) {
                            return number * number;
                        }
                        let hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
                        return Math.sqrt(hypotenuseSquare);
                    }

                    // Example usage:
                    console.log("Hypotenuse:", calculateHypotenuse(3, 4));
                    // Arguments as value
                    function calculateRectangleArea(width, height) {
                        return width * height;
                    }

                    // Arguments as variables
                    let width = 5;
                    let height = 3;

                    function calculateRectangleArea(width, height) {
                        return width * height;
                    }

                    // Example usage:
                    console.log("Area:", calculateRectangleArea(5, 3));

                    function isPalindrome(str) {
                        let reversedStr = str.split("").reverse().join("");
                        return str === reversedStr;
                    }

                    // Example usage:
                    console.log(isPalindrome("madam")); // Output: true