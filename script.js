// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetter = ["a","b","c","d","e","f","g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
for (var i = 0; i < lowerLetter.length; i++) {
  console.log(lowerLetter[i]);
}
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = "~!@#$%^&*(){};:<>=+"
var passwordString = ""
var test = upperLetter.charAt(0)
console.log(test)
var howMany = prompt("How many characters do you want?")
var wantLowerCase = confirm("Do you want lower case?")
var wantUpperCase = confirm("Do you want upper case?")
var wantNumbers = confirm("Do you want numbers?")
var wantLowerCase = confirm("Do you want lower case?")

// // generatePassword Function 
// function generatePassword() {
//   for (var i = 0; i < lowerLetter.length; i++) {
    
//   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
