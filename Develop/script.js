
// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?  Must be between 8-128 characters."));

  // Loop if answer is outside the parameters 
  while  (parseInt(confirmLength) <= 7 || parseInt(confirmLength) >= 129) {
    alert("Password length must be between 8-128 characters.  Please try again");
    var confirmLength = (prompt("How many characters would you like in your password?  8-128 please."));}

  
    var lowerCase = confirm('Would You like to use lower case characters?');
    console.log('this is lowerCase', lowerCase);
    var upperCase = confirm("Would you like to use upper case characters?")
    console.log('this is upppercase', upperCase);
    var spChar = confirm("Would you like to use Special Characters?");
    var numChar = confirm("Would you like to use numbers?"); 

     while (upperCase === false && lowerCase === false && spChar === false && numChar === false) 
      {alert("You must choose at least one parameter");
      var lowerCase = confirm('Would You like to use lower case characters?');
    console.log('this is lowerCase', lowerCase);
    var upperCase = confirm("Would you like to use upper case characters?")
    console.log('this is upppercase', upperCase);
    var spChar = confirm("Would you like to use Special Characters?");
    var numChar = confirm("Would you like to use numbers?"); }}


   
  
    //     
    //     function generateP() { 
    //         var passWord = ''; 
    //         
              
    //         for (i = 1; i = confirmLength; i++) { 
    //             var char = Math.floor(Math.random() 
    //                         * confirmLegth.length + 1); 
                  
    //             passWord += charAt(char) 
    //         } 
              
    //         return passWord; 
    //     } 
  
    //     function gfg_Run() { 
    //         el_down.innerHTML = generateP(); 
    //     } 

    

// var passwordCharacters = [];

// function inputChoices () {
      
//     if (spChar === true) {
//       passwordCharacters = passwordCharacters.concat(specialChar)
//     }

//     if (numChar) {
//       passwordCharacters = passwordCharacters.concat(number)
//     }
      
//     if (lowerCase) {
//       passwordCharacters = passwordCharacters.concat(alphaLower)
//     }

//     if (upperCase) {
//       passwordCharacters = passwordCharacters.concat(alphaUpper)
//     }

//       console.log(passwordCharacters)
//   }
  


//      function newPassword () {
//       for (i = 0; i < getLength; i++) 
     
     


//        // Empty string to be filled based on for loop selecting random characters from the array
//        var randomPassword = ""
      
//        for (var i = 0; i < confirmLength; i++) {
//        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
//        console.log(randomPassword)        }
      





//  function writePassword() {
//  var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//    passwordText.value = password;
//   }
//      }
