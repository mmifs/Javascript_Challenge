// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// 1: code to make button trigger on click
// 2: create prompts upon clicking button to ask parameters of password, push parameters into an array
// 3: create functions which utilizes parameters to create password
//function pushLowerCase() {
  //for (var i = 0; i < lowerCase.length; i++){
    //possiblePassword.push(lowerCase[i])
 // }

function writePassword() {
  window.alert("Starting password generation...");
}
  //var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  //var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ";", ":", "<", ">", "?"];
  //var possiblePassword = []
  //var isLowerCase = window.confirm('Do you want lowercase letters in your password?');
  //if (isLowerCase) {
    //pushLowerCase()
  //}
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword());