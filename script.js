// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetter = ["a","b","c","d","e","f","g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
for (var i = 0; i < lowerLetter.length; i++) {
  console.log(lowerLetter[i]);
}

// Variables for Arrays
var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."];
var passwordString = ""

var howMany = prompt("How many characters do you want?")
var wantLowerCase = confirm("Do you want lower case?")
var wantUpperCase = confirm("Do you want upper case?")
var wantNumbers = confirm("Do you want numbers?")
var wantLowerCase = confirm("Do you want lower case?")

// // generatePassword Function 
// function generatePassword() {
//   for (var i = 0; i < lowerLetter.length; i++) {
    
//   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
