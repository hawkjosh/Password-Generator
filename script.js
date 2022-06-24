// Assignment CodeuserAlphaUp
var generateBtn = document.querySelector("#generate");

// Define function to generate password
function generatePassword() {
  // Prompt user for password length
  var userLength = prompt("How many characters would you like to use?  (Min=8  |  Max=128)");
  // Validate input to ensure length meets acceptance criteria
  if (userLength < 8 || userLength > 128) {
    alert("Value must be a number between 8 and 128!");
    generatePassword();
    return;
  }
  // Prompt user for password character type
  var userAlphaLo = confirm("Do you want to include lowercase letters?  (Okay=Yes  |  Cancel=No)");
  var userAlphaUp = confirm("Do you want to include uppercase letters?  (Okay=Yes  |  Cancel=No)");
  var userNumber = confirm("Do you want to include any numeric values?  (Okay=Yes  |  Cancel=No)");
  var userSymbol = confirm("Do you want to include any special characters?  (Okay=Yes  |  Cancel=No)");
  // Validate input to ensure character type meets acceptance criteria
  if (!userAlphaLo && !userAlphaUp && !userNumber && !userSymbol) {
    alert("ERROR: You must choose at least one type of character. Please try again.");
    generatePassword();
    return;
  }

  // Generate password given user input

  // Add lists to store all possible characters
  var listAlphaLo = "abcdefghijklmnopqrstuvwxyz"
  var listAlphaUp = listAlphaLo.toUpperCase()
  // var listNumber = "0123456789"
  // var listSymbol = "!@#$%^&*_-+="
  var listAlphaLoUp = listAlphaLo + listAlphaUp

  var pwChars = ""
  for (i=0; i < userLength; i++) {
    if (userAlphaLo && !userAlphaUp) {
      pwChars += listAlphaLo.charAt(Math.floor(Math.random() * listAlphaLo.length));
    }
    else if (!userAlphaLo && userAlphaUp) {
      pwChars += listAlphaUp.charAt(Math.floor(Math.random() * listAlphaUp.length));
    }
    else if (userAlphaLo && userAlphaUp) {
      pwChars += listAlphaLoUp.charAt(Math.floor(Math.random() * listAlphaLoUp.length));
    }
  }

  // for (i=0; i < userLength; i++) {
  //   if (userAlphaUp) {
  //     pwChars += listAlphaUp.charAt(Math.floor(Math.random() * listAlphaUp.length));
  //   }
  // }

  // if (userNumber) {
  //   pwChars += listNumber.charAt(Math.floor(Math.random() * listNumber.length));
  // }

  // if (userSymbol) {
  //   pwChars += listSymbol.charAt(Math.floor(Math.random() * listSymbol.length));
  // }

  // Define variable to store randomly generated characters
  var pwFinal = pwChars
  // TODO: Remove code above and uncomment code below
  // var finalPassword = possChar1 + possChar2 + possChar3 + possChar4

  // Return the stored variable
  return pwFinal
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);