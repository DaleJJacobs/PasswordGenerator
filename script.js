
// Global arrays 
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Select the generate ID and add the 'click' function to start the generatePassword function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// The master function to create a password based on the user's input
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to contain?  Must be between 8-128 characters.");

  // Loop if answer is not between 8 and 128 
  while (parseInt(confirmLength) <= 7 || parseInt(confirmLength) >= 129) {
    alert("Password length must be between 8-128 characters.  Please try again");
    var confirmLength = prompt("How many characters would you like in your password?  8-128 please.");
  }

  // First set of prompts to confirm which characters the user would like to use
  var lowerCase = confirm('Would You like to use lower case characters?');
  console.log('this is lowerCase', lowerCase);
  var upperCase = confirm("Would you like to use upper case characters?")
  console.log('this is upppercase', upperCase);
  var spChar = confirm("Would you like to use Special Characters?");
  console.log('this is special characters', spChar);
  var numChar = confirm("Would you like to use numbers?");
  // console.log('this is numbers', numChar);

  // While loop if user chooses all options as false and 2nd set of prompts
  while (upperCase === false && lowerCase === false && spChar === false && numChar === false) {
    alert("You must choose at least one parameter");
    var lowerCase = confirm('Would You like to use lower case characters?');
    console.log('this is lowerCase', lowerCase);
    var upperCase = confirm("Would you like to use upper case characters?")
    console.log('this is upppercase', upperCase);
    var spChar = confirm("Would you like to use Special Characters?");
    console.log('this is special characters', spChar);
    var numChar = confirm("Would you like to use numbers?");
    // console.log('this is numbers', numChar);
  }

  //  Creation of empty array to plug in choices for characters of new password based on user input
  var possibleChoices = [];
  var passWORD = [];
  var counter = 0;
  if (upperCase) {
    //add upperCase array to possibleChoices array, and a random upper case character to new pasword
    possibleChoices = possibleChoices.concat(alphaUpper);
    var index = Math.floor(Math.random() * alphaUpper.length);
    counter += 1;
    passWORD.push(alphaUpper[index]);
    // console.log('Uppercase', possibleChoices);
  }
  if (lowerCase) {
    //add lowerCase array to possibleChoices array, and a random lower case character to new pasword
    possibleChoices = possibleChoices.concat(alphaLower);
    var index = Math.floor(Math.random() * alphaLower.length);
    counter += 1;
    passWORD.push(alphaLower[index]);
    // console.log("Lowercase", possibleChoices);
  }
  if (spChar) {
    //add spChar array to possibleChoices array, and a random special character to new pasword
    possibleChoices = possibleChoices.concat(specialChar);
    var index = Math.floor(Math.random() * specialChar.length);
    counter += 1;
    passWORD.push(specialChar[index]);
    // console.log('special characters', possibleChoices);
  }
  if (numChar) {
    //add numChar array to possibleChoices array, and a random number character to new pasword
    possibleChoices = possibleChoices.concat(number);
    var index = Math.floor(Math.random() * number.length);
    counter += 1;
    passWORD.push(number[index]);
    // console.log('numbers', possibleChoices);
  }
  // Creation of the new password, randomly picked characters from the new array at the length designated by the user, then writing that new password to the password ID in the HTML

  for (var i = counter + 1; i <= confirmLength; i++) {
    var index = Math.floor(Math.random() * possibleChoices.length);
    passWORD.push(possibleChoices[index]);
    // console.log('new password for loop:', passWORD);
  }

  console.log('new password', passWORD);
  document.getElementById("password").innerHTML = passWORD.join("");



}

