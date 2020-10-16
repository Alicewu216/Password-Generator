// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //strings of possible characters
  var passStrCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passStrLow = "abcdefghijklmnopqrstuvwxyz";
  var passStrNum = "0123456789";
  var passStrSpc = "!\'#$%^&*()|？/,.<>+_:;@\[{\]}`~";
  //place to store new password
  var newPass = "";
  var newArray =[];
  var requirmentCount = 0;
  
  //ask for customized requirment
  var capConf = confirm("Do you want upper case letters in your password?");
  var lowConf = confirm("Do you want lower case letters in your password?");
  var numconf = confirm("Do you want numbers in your password?");
  var spcConf = confirm("Do you want special characters in your password?");
  var passLength = prompt("Please enter a password length between 8 and 128");
  //position to put costomized characters

  if (capConf === true) {
    newArray.push(passStrCap);
    requirmentCount++;
  }
  if (lowConf === true) {
    newArray.push(passStrLow);
    requirmentCount++;
  }
  if (numconf === true) {
    newArray.push(passStrNum);
    requirmentCount++;
  }
  if (spcConf === true) {
    newArray.push(passStrSpc);
    requirmentCount++;
  }
  console.log(newArray);
  console.log(requirmentCount);
  for (var j = 0; j < requirmentCount; j++) {
    for (var i = 0; i < passLength/requirmentCount; i++) {
      var newLet = Math.floor(Math.random()*newArray[j].length);
      newPass += newArray[j].charAt(newLet);
      console.log(passLength);
      console.log(newLet);
      console.log(newPass);
    }
  }
  
  

  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
