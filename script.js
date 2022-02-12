// Assignment Code
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];

var genPassword = [];

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var masterARR = [];
  // window.prompt("What is your desired character length, between 8 and 128");

  var passwordLength = parseInt(prompt("What is your desired character length, between 8 and 128")
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password length of at least 8 characters and no more than 128");
    writePassword();
  }
  console.log(passwordLength);

  var chooseLower = confirm("Does your password contain lowercase letters?");
  console.log(chooseLower);
  if (chooseLower == true) {
    masterARR = masterARR.concat(lowerCase);
    console.log(masterARR);
  }

  var chooseUpper = confirm("Does your password contain uppercase characters?");
  console.log(chooseUpper);
  if (chooseUpper == true) {
    masterARR = masterARR.concat(upperCase);
    console.log(masterARR);
  }

  var chooseNumeric = confirm("Does your password contain numeric characters?");
  console.log(chooseNumeric);
  if (chooseNumeric == true) {
    masterARR = masterARR.concat(numeric);
    console.log(masterARR);
  }

  var chooseSpecial = confirm("Does your password contain special characters?");
  console.log(chooseSpecial);
  if (chooseSpecial == true) {
    masterARR = masterARR.concat(specialCharacters);
    console.log(masterARR);
  }

  // Write password to the #password input
  //what they picked
  confirmation = alert("You chose " + passwordLength + " characters, " 
  + "lower case letters = " + chooseLower + ", upper case letters = " + chooseUpper
   + ", numeric = " + chooseNumeric + ", special characters = " + chooseSpecial );

  if (
    chooseLower == false &&
    chooseUpper == false &&
    chooseNumeric == false &&
    chooseSpecial == false
  ) {
    alert("Please Choose at least one character type");
    window.location.reload();
  }

  // Randomly select the amount of characters the user chose from the master array 
  for (i = 0; i < passwordLength; i++) {
    genPassword += masterARR[Math.floor(Math.random() * masterARR.length)];
    console.log(genPassword);
  }
  // return password
  console.log(genPassword);
  return genPassword;
}
