// Assignment Code
var generateBtn = document.querySelector("#generate");
//strings of possible characters
var passStrCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passStrLow = "abcdefghijklmnopqrstuvwxyz";
var passStrNum = "0123456789";
var passStrSpc = "!\'#$%^&*()|？/,.<>+_:;@\[{\]}`~";
//place to store new password
var newPass = "";
var newArray = [];
var shuffledArray = [];
var requirmentCount = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //ask for customized requirment
  var capConf = confirm("Do you want upper case letters in your password?");
  var lowConf = confirm("Do you want lower case letters in your password?");
  var numconf = confirm("Do you want numbers in your password?");
  var spcConf = confirm("Do you want special characters in your password?");
  var passLength = prompt("Please enter a password length between 8 and 128");
  var finalStr = "";
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
    for (var i = 0; i < Math.floor(passLength/requirmentCount); i++) {
      var newLet = Math.floor(Math.random()*newArray[j].length);
      newPass += newArray[j].charAt(newLet);
      console.log(passLength);
      console.log(newLet);
      console.log(newPass);
    }
    
  }
  if (passLength%requirmentCount != 0) {
      var reminderChar = passLength%requirmentCount;
      console.log(reminderChar)
      for (var q = 0; q <reminderChar; q++) {
        var newRandArray = Math.floor(Math.random()*newArray.length);
        var newRand = Math.floor(Math.random()*newArray[newRandArray].length);
        newPass += newArray[newRandArray].charAt(newRand);
        console.log(q);
        console.log(newRand);
        console.log(newPass);
      }
    }
  var shuffling= newPass.split("");
  console.log(shuffling);
  finalStr = shuffle(shuffling);
  return finalStr;
}

function shuffle(a) {
  for (var m = a.length - 1; m > 0; m--) {
    var n = Math.floor(Math.random()* (m+1));
    var tempArray = a[m];
    a[m] = a[n];
    a[n] = tempArray;
  }
  console.log(a);
  var arrayToStr = a.join("");
  console.log(arrayToStr);
  return arrayToStr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
