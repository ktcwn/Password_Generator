
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Objects and Arrays for Character Selection
var characters = {
  lowerLetter:["a","b","c","d","e","f","g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperLetter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numbers:[0,1,2,3,4,5,6,7,8,9],
  symbols:["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."],
}


// User prompts and confirms for password generator
var userAnswer = parseInt(prompt("Choose a password character length between 8 and 128."));
var wantLowerCase = confirm("Do you want lower case?");
var wantUpperCase = confirm("Do you want upper case?");
var wantNumbers = confirm("Do you want numbers?");

// Write password to the #password input
function writePassword() {
 password = generatePassword()

}


//Trial 

function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  var pass = "";
  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
  }
  return pass;
}

// generatePassword Function 
 function generatePassword (lowerLetter, upperLetter, numbers, symbols) {
  var password = ("");
  var passwordHolder = ("");

  if(!userAnswer) {
  alert("Please enter a number value between 8 and 128.");
}
else if (userAnswer < 8 || userAnswer > 128) {
  alert("Please choose a number between 8 and 128 characters");
}
else {
  alert("Your password will be " + userAnswer + " characters long.")
}


for (var i = 0; i < userAnswer; i++){
  var randomNumber = Math.floor(Math.random() * passwordHolder.length)
  
  password = password + passwordHolder[randomNumber];
}

var passwordText = document.querySelector("#password"); 
passwordText.value = password + passwordHolder[randomNumber];
 }
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
