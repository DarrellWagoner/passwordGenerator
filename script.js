// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersArr = "0123456789";
var specialArr ="@#$%^&*()_+!:;><?/}{[]";
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
 if (passwordLength >= 8 && passwordLength <= 128) { password = passwordLength;
 

// Password will/wont have special characters
var specialArr = confirm("Will password have special characters?")
if (specialArr = specialArr){
  alert("Cool Beans");
} else {
  alert("Guess we'll move on then.");
}
// Password will/wont have lowercase letters
var lowercaseArr = confirm("will password have lowercase letters?");
if (lowercaseArr = lowercaseArr){
  alert("Yippie!");
} else {
  alert("whatever...");
}
// Password will/wont have uppercase letters
var uppercaseArr = confirm("will password have uppercase letters?");
if (uppercaseArr = uppercaseArr){
  alert("NICE!");
} else {
  alert("Booooooo");
}
// Password will/wont have numbers
var numbersArr = confirm("will password have numbers?");
if (numbersArr = numbersArr){
  alert("Excellent (in Montgomery Burns voice)");
} else {
  alert("You must be anti-number");
} 

if (numbersArr === true){
  passwordCharacters += numbersArr;
}
if (specialArr === true) {
  passwordCharacters += specialArr;
}
if (uppercaseArr === true) {
  passwordCharacters += numbersArr;
}
if (lowercaseArr === true) {
  passwordCharacters += lowercaseArr;
} else {
  alert ("cannot give you password!!");
}
 }
 
for (var i = 0; i < passwordLength; i++){
  userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

