// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// 1: code to make button trigger on click
// 2: create prompts upon clicking button to ask parameters of password
// 3: create functions which utilizes parameters to create password

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generateBtn").addEventListener("click", writePassword());
