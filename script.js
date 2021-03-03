// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersArr = "0123456789";
var specialArr = "!@#$%^&*()_|}{[]:;?><,./-=+~`";
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

    // how long will the password be?
    var passwordLength = prompt("please choose a number you want password to be in length (must be between 8 - 128)");
    if (passwordLength >= 8 && passwordLength <= 128){ password.length = password

    } 
    // Password must be between 8 - 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) { password.length = passwordLength;

        // Password will/wont have lowercase letters
        var islowercaseArr = confirm("⬇️ will password have lowercase letters ⬇️");
        
      
        // Password will/wont have uppercase letters
        var isuppercaseArr = confirm("⬆️ will password have uppercase letters ⬆️");
        
        
        // Password will/wont have numbers
        var isnumbersArr = confirm("#️⃣ will password have numbers #️⃣");
    
        
        
        // Password will/wont have special characters
        var isspecialArr = confirm("👏 will password have special characters 🎉");
        
        } else {
          alert("🚫 Cannot process password without proper criteria 🚫"); return;
        }
        
    // conditionals
    if (islowercaseArr === true) {
        passwordCharacters += lowercaseArr;
    }
    if (isuppercaseArr === true) {
        passwordCharacters += uppercaseArr;
    }
    if (isnumbersArr === true) {
        passwordCharacters += numbersArr;
    }
    if (isspecialArr === true) {
        passwordCharacters += specialArr;
    } 
    for (var i = 0; i < passwordLength; i++) {
        userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    // console.log(userPassword);
    return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



