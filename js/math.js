// declare program variable
var num1;
var num2;
var message;

// announcement the program
alert("Let's do some math!");

// collect numeric inputs
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

// if and else if clause 
if (num2 === 0) {
    alert("The second number is 0. You can't divide by zero. Reload and try again.");
}
else if (isNaN(num1) || isNaN(num2)) {
    alert("At least one of the values you typed is not a number. Reload and try again.");
}
else {
// build HTML message
message = '<h1>Math with the numbers ' + num1 + ' and ' + num2 + '!' + '</h1>';
message += '<p>' + num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '</p>';
message += '<p>' + num1 + ' * ' + num2 + ' = ' + (num1 * num2) + '</p>';
message += '<p>' + num1 + ' / ' + num2 + ' = ' + (num1 / num2) + '</p>';
message += '<p>' + num1 + ' - ' + num2 + ' = ' + (num1 - num2) + '</p>';

// write message to the web browser
document.write(message);
}