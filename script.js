
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for Arrays
var lowerLetter = ["a","b","c","d","e","f","g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."];

// User prompts and confirms for password generator
var howMany = prompt("How many characters do you want?")
var wantLowerCase = confirm("Do you want lower case?")
var wantUpperCase = confirm("Do you want upper case?")
var wantNumbers = confirm("Do you want numbers?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword()

}
// generatePassword Function 
 function generatePassword () {
    var passwordHolder = [];
    var password = [];
    var userAnswer = parseInt(prompt("Choose a password character length between 8 and 128."));

  if(!userAnswer) {
  alert("Please enter a number value between 8 and 128.");
}
else if (userAnswer < 8 || userAnswer > 128) {
  alert("Please choose a number between 8 and 128 characters");
}
else {
  alert("Thank you! Your password will be " + userAnswer + " characters long.")
}


for (var i = 0; i < userAnswer; i++){
  var randomNumber = Math.floor(Math.random() * passwordHolder.length)
  
password = password + passwordHolder [randomNumber];
}

var passwordText = document.querySelector("#password"); 
passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
