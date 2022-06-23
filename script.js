// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function to generate password
function generatePassword() {
  // Prompt user for password length
  var pwLen = prompt("How many characters would you like to use?  (Min=8  |  Max=128)");
  // Validate input to ensure length is between 8 and 128
  if (pwLen < 8 || pwLen > 128) {
    alert("Value must be a number between 8 and 128!");
    generatePassword();
    return;
  }
  // Prompt user for password character type
  var pwLowCase = confirm("Do you want to include lowercase letters?  (Okay=Yes  |  Cancel=No)");
  var pwUpCase = confirm("Do you want to include uppercase letters?  (Okay=Yes  |  Cancel=No)");
  var pwNum = confirm("Do you want to include any numeric values?  (Okay=Yes  |  Cancel=No)");
  var pwSpec = confirm("Do you want to include any special characters?  (Okay=Yes  |  Cancel=No)");
  // Validate input to ensure at least one character type selected
  if (!pwLowCase && !pwUpCase && !pwNum && !pwSpec) {
    alert("ERROR: You must choose at least one type of character. Please try again.");
    generatePassword();
    return;
  }

// Generate password given user input

// TODO: Add a list of all possible characters given user input
var listLowCase = "abcdefghijklmnopqrstuvwxyz"
var listUpCase = lowCaseChar.toUpperCase()
var listNum = "0123456789"
var listSpec = "!#$%&*+,-./:;<=>?@^_`|~"

var possChar = ""

if (pwLowCase) {
  possChar += listLowCase;
}
if (pwUpCase) {
  possChar += listUpCase;
}
if (pwNum) {
  possChar += listNum;
}
if (pwSpec) {
  possChar += listSpec;
}

// TUTOR SESSION NOTES → Use a for loop here with my list, will need to apply math.floor && math.random

// TODO: Define variable to store chosen characters

// Return the stored variable

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
