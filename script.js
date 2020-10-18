// Assignment Code
var generateBtn = document.querySelector("#generate");
//strings of possible characters
var passStrCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passStrLow = "abcdefghijklmnopqrstuvwxyz";
var passStrNum = "0123456789";
var passStrSpc = "!'#$%^&*()|？/,.<>+_:;@[{]}`~";
//place to store newly generated password array
var newPass = [];
//place to store demanded criteria's strings into an array
var newArray = [];
//number of demanded criteria
var requirmentCount = 0;
//place to store final output
var finalStr = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password == null) {
    password = "";
  } else {
    passwordText.value = password;
  }
}
//generate password according to user demands
function generatePassword() {
  //ask for customized requirment for character types and password length
  var capConf = confirm("Do you want upper case letters in your password?");
  var lowConf = confirm("Do you want lower case letters in your password?");
  var numconf = confirm("Do you want numbers in your password?");
  var spcConf = confirm("Do you want special characters in your password?");
  var passLength = prompt("Please enter a password length between 8 and 128");

  //for every criteria chosen, add that criteria's possible character string into newArray and keep track of number of criteria picked
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
  //alert user is length exceed limit
  if (passLength < 8 || passLength > 128) {
    return alert("Must pick a length between 8 and 128");
  }
  //alert user if none of the critera is picked
  if (
    capConf === false &&
    lowConf === false &&
    numconf === false &&
    spcConf === false
  ) {
    alert("Must pick at least one type of character for password");
  }

  //generate new random password with newArray created above
  //go through chosen criteria by type
  for (var j = 0; j < requirmentCount; j++) {
    //divide total password length by number of criteria chosen to make sure each type of characters are about the same amount (if divisible)
    //if not divisible, only generate number of character till the last divisible length
    for (var i = 0; i < Math.floor(passLength / requirmentCount); i++) {
      //for each criteria, randomly pick a character from possible string in newArray
      var newLet = Math.floor(Math.random() * newArray[j].length);
      //add to newPass
      newPass += newArray[j].charAt(newLet);
    }
  }
  //if password length is no divisible, add reminder number of character from possible string
  if (passLength % requirmentCount != 0) {
    //calculate reminder
    var reminderChar = passLength % requirmentCount;
    //add reminder number of character to password
    for (var q = 0; q < reminderChar; q++) {
      //pick from chosen categories randomly
      var newRandArray = Math.floor(Math.random() * newArray.length);
      var newRand = Math.floor(Math.random() * newArray[newRandArray].length);
      //add to new password
      newPass += newArray[newRandArray].charAt(newRand);
    }
  }
  //change string to array for shuffling
  var shuffling = newPass.split("");
  //call shuffle function below to shuffle all elements in array shuffling
  finalStr = shuffle(shuffling);
  //output shuffled password string

  return finalStr;
}

//shuffle elements in array
function shuffle(a) {
  //for every element in array
  for (var m = a.length - 1; m > 0; m--) {
    //pick a random number within the length of array
    var n = Math.floor(Math.random() * (m + 1));
    //swap array with new array to a random place
    var tempArray = a[m];
    a[m] = a[n];
    a[n] = tempArray;
  }
  //change array to string
  var arrayToStr = a.join("");
  //output shuffled string
  return arrayToStr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


