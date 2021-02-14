// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
var UppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersArr = "0123456789";
var specialArr = "@#$%^&*()_+!:;><?/}{[]";
var passwordLength = "";

// Write password to the #password input


 
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userPassword = "";
  passwordCharacters = "";
}
// Password must be between 8 - 128 characters
var passwordLength = prompt("please choose a number you want password to be in length (has to be between 8 - 128)");
// statement if password is correct length in number//
if (passwordLength >= 8 && passwordLength <= 128){
  alert("Awesome!");
} else {
  alert("'Following simple directions is hard on the brain' - George Washington (probably)");
}
// Password will/wont have special characters
var specialArr = confirm("Will password have special characters?")
if (specialArr = specialArr){
  alert("Cool Beans");
} else {
  alert("Guess we'll move on then.");
}
// Password will/wont have lowercase letters
var lowerCase = confirm("will password have lowercase letters?");
if (lowerCase = lowerCase){
  alert("Yippie!");
} else {
  alert("whatever...");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

