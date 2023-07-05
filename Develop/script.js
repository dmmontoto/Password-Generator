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

  // Prompt for whether or not user wants lowercases included
  var includeLowercase = prompt("Include lowercase characters? (yes or no)").toLowerCase() === "yes";

  // Prompt for whether or not user wants uppercases included
  var includeUppercase = prompt("Inlcude uppercase characters? (yes or no)").toLowerCase() === "yes";

  // Prompt for whether or not user wants numeric characters included
  var includeNumeric = prompt("Include numeric characters? (yes or no)").toLowerCase() === "yes";

  // Prompt for whether or not user wants special characters included
  var includeSpecial = prompt("Include special characters? (yes or no)").toLowerCase() === "yes";

  // Validate acceptable character type selection
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    // Exit the funciton call if no character type is selected
    return;
  }

  // Create variables for generated password and available characters
  var password = "";
  var availableChars = [];

  // Add characters that were selected
  if (includeLowercase) {
    availableChars = availableChars.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  }
  if (includeUppercase) {
    availableChars = availableChars.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  }
  if (includeNumeric) {
    availableChars = availableChars.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  }
  if (includeSpecial) {
    availableChars = availableChars.concat(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?", "{", "}", "[", "]"]);
  }

  // Concatenate password with one available char, till desired length is reached 
  for (var i = 0; i < passwordLength; i++) {
    var RandomCharIdx = Math.floor(Math.random() * availableChars.length);
    password += availableChars[RandomCharIdx];
  }

  // Return generated password
  return password;
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