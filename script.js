// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// 1: code to make button trigger on click
// 2: create prompts upon clicking button to ask parameters of password, push parameters into an array
// 3: create functions which utilizes parameters to create password

function pushLowerCase() {
  for (var i = 0; i < lowerCase.length; i++){
    possiblePassword.push(lowerCase[i])
  }
}

function pushUpperCase() {
  for (var i = 0; i < upperCase.length; i++){
    possiblePassword.push(upperCase[i])
  }
}

function pushNumeric() {
  for (var i = 0; i < numeric.length; i++){
    possiblePassword.push(numeric[i])
  }
}

function pushSpecial() {
  for (var i = 0; i < special.length; i++){
    possiblePassword.push(special[i])
  }
}

function passwordAsk() {
  var reqPasswordLength = window.prompt("How long would you like your password to be?");
  if (isNaN(reqPasswordLength)){
    confirm("Please enter a number")
    passwordAsk()

  }
}

// 45-49 possible answer for function

//function generatePassword() {
  //for (var i = 0; i < reqPasswordLength; i++){
    //console.log(possiblePassword[(round(Math.random() * possiblePassword.length ))])
  //}

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ";", ":", "<", ">", "?"];
var possiblePassword = []

function writePassword() {
  window.alert("Starting password generation...");

  passwordAsk()

  var isLowerCase = window.confirm('Do you want lowercase letters in your password?');
  if (isLowerCase) {
    pushLowerCase()
  }

  var isUpperCase = window.confirm('Do you want uppercase letters in your password?');
  if (isUpperCase) {
    pushUpperCase()
  }

  var isNumeric = window.confirm('Do you want numeric characters in your password?');
  if (isNumeric) {
    pushNumeric()
  }

  var isSpecial = window.confirm('Do you want special characters in your password?');
  if (isSpecial) {
    pushSpecial()
  }




}
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);