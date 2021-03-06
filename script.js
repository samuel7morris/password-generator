
//break into array instead
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var specChar = "!@#$%^&*()_+|>,./;'-=}{<:?".split("")
var numbers = "1234567890".split("")


function passwordOptions(){
  var passwordLength = parseInt(prompt("How many characters for your password(Must be between 8 and 128)")) 

  if(isNaN(passwordLength) === true) { 

    alert("Password length must be a number")
    return;
  } 

  if(passwordLength < 8){
    alert("Password length must be between 8 and 128 characters")
    return;
  }

  if(passwordLength > 128){
    alert("Password length must be between 8 and 128 characters")
    return;
  }  

  var specialCharacters = confirm("Include special characters")
  var lowerCaseChar = confirm("Include lower case")
  var upperCaseChar = confirm("include upper case")
  var numChar = confirm("include numbers")

  if(specialCharacters === false && lowerCaseChar === false && upperCaseChar === false && numChar === false){
    alert("must select at least one character type")
    return;
  }

  var userOptions = {
    passwordLength: passwordLength,
    specialCharacters: specialCharacters,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar,
    numChar: numChar
  }

  return userOptions;
} 

function generatePassword() {
  var options = passwordOptions();
  var result = []
  var possible = []
  var guaranteed = []
  var password = ""

  if(options.specialCharacters){
    possible = possible.concat(specChar)
    guaranteed.push(getRandom(specChar))
    password+= getRandom(specChar)
  }

  if(options.lowerCaseChar){
    possible = possible.concat(lowerCase)
    guaranteed.push(getRandom(lowerCase))
    password+= getRandom(lowerCase)
  }

  if(options.upperCaseChar){
    possible = possible.concat(upperCase)
    guaranteed.push(getRandom(upperCase))
    password+= getRandom(upperCase)
  }

  if(options.numChar){
    possible = possible.concat(numbers)
    guaranteed.push(getRandom(numbers))
    password+= getRandom(upperCase)
  }


  let passwordLength = options.passwordLength
  while(password.length < passwordLength) {
    password+=guaranteed[Math.floor(Math.random() * guaranteed.length)]
  }
  return password;
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]

  
  return randomElement;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
