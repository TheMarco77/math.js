// 1. Alert announcement "Let's do some math!"
alert("Let's do some math!");

// 2. Create a variable and use the prompt() collect a number from a visitor
var num1 = prompt("Please type a number");
var num2 = prompt("Please type another number");

// 3. Convert those values from a string to floating point numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// 6. Create a new variable -- message -- which you'll use to build a complete message to print to the document use "<h1>Math with the numbers 3 and 4</h1>" 
// and use string concatenation
var message = '<h1>Math with the numbers ' + num1 + ' and ' + num2 + '!' + '</h1>';

// 7. Add another string to the message variable the string should look something like this after concatenation:
// "3 + 4 = 7"

// 8. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"
message += '<p>' + num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '</p>';
message += '<p>' + num1 + ' * ' + num2 + ' = ' + (num1 * num2) + '</p>';
message += '<p>' + num1 + ' / ' + num2 + ' = ' + (num1 / num2) + '</p>';
message += '<p>' + num1 + ' - ' + num2 + ' = ' + (num1 - num2) + '</p>';

// 10. Use the document.write() method to print the message variable to the web page.
document.write(message);