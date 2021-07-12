// Assignment Code

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", '[', ']', '^', '_', '`', '{', '}', '|', '~'];
var possiblePassword = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  possiblePassword.length = 0
}

// characterAsk function determines what characters are to be in the password, pushes them into an array through other functions


function characterAsk() {
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

  if (possiblePassword.length === 0) {
    alert("Please select atleast one type of character")
    characterAsk()
  }
}

// functions push possible password combinations into an array

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
  let reqPasswordLength = window.prompt("How long would you like your password to be?");

  // if conditions verify correct input for length

  if (
    isNaN(reqPasswordLength) ||
    (reqPasswordLength < 8) ||
    (reqPasswordLength > 128)
    ){
    confirm("Please enter a number between 8 and 128")
    reqPasswordLength = passwordAsk();
  }
  return reqPasswordLength
}

// makePassword uses array of possible password characters and creates a tempPassword with Math.random

function makePassword() {
  let reqPasswordLength = passwordAsk();
  let tempPassword = ""
  characterAsk();
  for (var i = 0; i < reqPasswordLength; i++){
    tempPassword += (possiblePassword[Math.floor(Math.random() * possiblePassword.length)])
  }
  console.log(tempPassword)
  return tempPassword
}

function generatePassword() {
  window.alert("Starting password generation, passwords must be between 8 - 128 characters.");

  return makePassword()

}

document.getElementById("generate").addEventListener("click", writePassword);