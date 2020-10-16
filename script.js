// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passStrCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passStrLow = "abcdefghijklmnopqrstuvwxyz";
  var passStrNum = "0123456789";
  var passStrSpc = [" ","!","'","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<",">","?","@","\[","\\","\]","^","_","`","{","|","}","~"];
  var newPass = "";
  var capConf = confirm("Do you want upper case letters in your password?");
  var lowConf = confirm("Do you want lower case letters in your password?");
  var numconf = confirm("Do you want numbers in your password?");
  var specConf = confirm("Do you want special characters in your password?");
  var passLength = prompt("Please enter a password length between 8 and 128");

  for (var i = 0; i < passLength; i++) {
    var newChar = Math.floor(Math.random()*passStrLow.length)
    newPass += passStrLow.charAt(newChar);
    console.log(passLength);
    console.log(newChar);
    console.log(newPass);
  }
  return newPass;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
