// Assignment code here
function generatePassword() {
  // Prompt a password length
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Check previous password length input
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    // Exit function due to invalid input 
    return;
  }

  // Prompts for preferred character types
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);