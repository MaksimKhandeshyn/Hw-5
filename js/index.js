"use strict";
// --1--
const drinks = prompt("Please enter your drink(coffee, juice, tea)");
switch (drinks) {
  case "coffee":
    alert(`Your order is ${drinks}`);
    break;
  case "juice":
    alert(`Your order is ${drinks}`);
    break;
  case "tea":
    alert(`Your order is ${drinks}`);
    break;
  default:
    alert("We have only this product");
    break;
}
// --2--
const dayWeek = prompt("Please enter day of the week");
//P.S тут если написать слово с большой буквы выведиться дефолт. Как пофиксить это я хз(
switch (dayWeek) {
  case "monday":
    alert("Its work day");
    break;
  case "tuesday":
    alert("Its work day");
    break;
  case "wednesday":
    alert("Its work day");
    break;
  case "thuesday":
    alert("Its work day");
    break;
  case "friday":
    alert("Its work day");
    break;
  case "saturday":
    alert("Its weekend");
    break;
  case "sunday":
    alert("Its weekend");
    break;

  default:
    alert("It isnt day of the week");
    break;
}
//--3--
const monthNumber = parseInt(
  prompt("Enter number from 1 to 12 and I will tell you what season it is")
);
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("It is winter");
    break;
  case 3:
  case 4:
  case 5:
    alert("It is spring");
    break;
  case 6:
  case 7:
  case 8:
    alert("It is summer");
    break;
  case 9:
  case 10:
  case 11:
    alert("It is autumn");
    break;
  default:
    alert("Season with this month's number isn't");
    break;
}
// --4--
const emountDays = parseInt(prompt("Enter number of any month"));
switch (emountDays) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("In this month 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("In this month 30 days");
    break;
  case 2:
    alert("Only in thuis day we have 28 days");
    break;
  default:
    alert("We haven't this month");
    break;
}
// --5--
const color = prompt("Enter color(red, green or yellow)");
switch (color) {
  case "red":
    alert("Stop");
    break;
  case "yellow":
    alert("Wait");
    break;
  case "green":
    alert("Go");
    break;
  default:
    alert("You need to choose only red, green or yellow");
    break;
}
//--6--
alert("Dont forger that in this task can be share on 0");
const number = parseInt(prompt("Enter first number"));
const number2 = parseInt(prompt("Enter second number"));
const symbole = prompt("Enter symbole(+ - / *)");
let result;
switch (symbole) {
  case "+":
    result = number + number2;
    alert(`Answer is ${result}`);
    break;
  case "-":
    result = number - number2;
    alert(`Answer is ${result}`);
    break;
  case "*":
    result = number * number2;
    alert(`Answer is ${result}`);
    break;
  case "/":
    result = number / number2;
    alert(`Answer is ${result}`);
    break;

  default:
    alert("Something wrong. Try again");
    break;
}
