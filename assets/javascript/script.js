// Assignment CodeuserAlphaUp
var generateBtn = document.querySelector("#generate");

// Define function to generate password
function generatePassword() {
  // Prompt user for password length
  var userLength = prompt("How many characters would you like to use?  (Min=8  |  Max=128)");
  // Validate input to ensure length meets acceptance criteria
  if (userLength < 8 || userLength > 128) {
    return "😕ERROR: You must choose a number between 8 and 128.";
  }
  // Prompt user for password character type
  var userAlphaLo = confirm("Do you want to include lowercase letters?  (Okay=Yes  |  Cancel=No)");
  var userAlphaUp = confirm("Do you want to include uppercase letters?  (Okay=Yes  |  Cancel=No)");
  var userNumber = confirm("Do you want to include any numeric values?  (Okay=Yes  |  Cancel=No)");
  var userSymbol = confirm("Do you want to include any special characters?  (Okay=Yes  |  Cancel=No)");
  // Validate input to ensure character type meets acceptance criteria
  if (!userAlphaLo && !userAlphaUp && !userNumber && !userSymbol) {
    return "😕ERROR: You must choose at least one character type.";
  }

  // Generate password given user input

  // Define variables to store possible characters
  var listAlphaLo = "abcdefghijklmnopqrstuvwxyz"
  var listAlphaUp = listAlphaLo.toUpperCase()
  var listNumber = "0123456789"
  var listSymbol = "!@#$%^&*_-+="
  var listAlphaLoUp = listAlphaLo + listAlphaUp
  var listAlphaLoNum = listAlphaLo + listNumber
  var listAlphaLoSym = listAlphaLo + listSymbol
  var listAlphaUpNum = listAlphaUp + listNumber
  var listAlphaUpSym = listAlphaUp + listSymbol
  var listNumSym = listNumber + listSymbol
  var listAlphaLoUpNum = listAlphaLo + listAlphaUp + listNumber
  var listAlphaLoUpSym = listAlphaLo + listAlphaUp + listSymbol
  var listAlphaLoNumSym = listAlphaLo + listNumber + listSymbol
  var listAlphaUpNumSym = listAlphaUp + listNumber + listSymbol
  var listAll = listAlphaLo + listAlphaUp + listNumber + listSymbol

  // Define variable to store randomly generated characters
  var pwChars = ""

  // Generate password given user input
  for (i=0; i < userLength; i++) {
    // User input = lowercase only
    if (userAlphaLo && !userAlphaUp && !userNumber & !userSymbol) {
      pwChars += listAlphaLo.charAt(Math.floor(Math.random() * listAlphaLo.length));
    }
    // User input = uppercase only
    else if (!userAlphaLo && userAlphaUp && !userNumber & !userSymbol) {
      pwChars += listAlphaUp.charAt(Math.floor(Math.random() * listAlphaUp.length));
    }
    // User input = number only
    else if (!userAlphaLo && !userAlphaUp && userNumber & !userSymbol) {
      pwChars += listNumber.charAt(Math.floor(Math.random() * listNumber.length));
    }
    // User input = symbol only
    else if (!userAlphaLo && !userAlphaUp && !userNumber & userSymbol) {
      pwChars += listSymbol.charAt(Math.floor(Math.random() * listSymbol.length));
    }
    // User input = lowercase and uppercase
    else if (userAlphaLo && userAlphaUp && !userNumber & !userSymbol) {
      pwChars += listAlphaLoUp.charAt(Math.floor(Math.random() * listAlphaLoUp.length));
    }
    // User input = lowercase and number
    else if (userAlphaLo && !userAlphaUp && userNumber & !userSymbol) {
      pwChars += listAlphaLoNum.charAt(Math.floor(Math.random() * listAlphaLoNum.length));
    }
    // User input = lowercase and symbol
    else if (userAlphaLo && !userAlphaUp && !userNumber & userSymbol) {
      pwChars += listAlphaLoSym.charAt(Math.floor(Math.random() * listAlphaLoSym.length));
    }
    // User input = uppercase and number
    else if (!userAlphaLo && userAlphaUp && userNumber & !userSymbol) {
      pwChars += listAlphaUpNum.charAt(Math.floor(Math.random() * listAlphaUpNum.length));
    }
    // User input = uppercase and symbol
    else if (!userAlphaLo && userAlphaUp && !userNumber & userSymbol) {
      pwChars += listAlphaUpSym.charAt(Math.floor(Math.random() * listAlphaUpSym.length));
    }
    // User input = number and symbol
    else if (!userAlphaLo && !userAlphaUp && userNumber & userSymbol) {
      pwChars += listNumSym.charAt(Math.floor(Math.random() * listNumSym.length));
    }
    // User input = lowercase, uppercase, and number
    else if (userAlphaLo && userAlphaUp && userNumber & !userSymbol) {
      pwChars += listAlphaLoUpNum.charAt(Math.floor(Math.random() * listAlphaLoUpNum.length));
    }
    // User input = lowercase, uppercase, and symbol
    else if (userAlphaLo && userAlphaUp && !userNumber & userSymbol) {
      pwChars += listAlphaLoUpSym.charAt(Math.floor(Math.random() * listAlphaLoUpSym.length));
    }

    // User input = lowercase, number, and symbol
    else if (userAlphaLo && !userAlphaUp && userNumber & userSymbol) {
      pwChars += listAlphaLoNumSym.charAt(Math.floor(Math.random() * listAlphaLoNumSym.length));
    }
    // User input = uppercase, number, and symbol
    else if (!userAlphaLo && userAlphaUp && userNumber & userSymbol) {
      pwChars += listAlphaUpNumSym.charAt(Math.floor(Math.random() * listAlphaUpNumSym.length));
    }
    // User input = lowercase, uppercase, number, and symbol
    else if (userAlphaLo && userAlphaUp && userNumber & userSymbol) {
      pwChars += listAll.charAt(Math.floor(Math.random() * listAll.length));
    }

  }

  // Return the stored variable
  return pwChars;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);