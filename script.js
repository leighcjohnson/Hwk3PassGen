var generateBtn = document.querySelector("#generate");
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowChar = "abcdefghijklmnopqrstuvwxyz";
const numChar = "0123456789";
const symChar = "!@#$%^&*()_+=-][";
upChar.split;
lowChar.split;
numChar.split;
symChar.split;
function generatePassword() {
  length = prompt("You may choose a length between 8-128 characters");
  if (length<8 || length>128) {
    alert("Passowrd can only be 8-128 characters");
    return;
  }
  up = confirm("Would you like to use uppercase letters?");
  low = confirm("Would you like to use lowercase letters?");
  num = confirm("Would you like to use numbers?");
  sym = confirm("Would you like to use special characters?");
  if (up && low && num && sym) {
    selection = upChar.concat(lowChar, numChar, symChar);
  } else if (!up && low && num && sym) {
    selection = lowChar.concat(numChar, symChar);
  } else if (up && !low && num && sym) {
    selection = upChar.concat(numChar, symChar);
  } else if (up && low && !num && sym) {
    selection = upChar.concat(lowChar, symChar);
  } else if (up && low && num && !sym) {
    selection = upChar.concat(lowChar, numChar);
  } else if (up && low) {
    selection = upChar.concat(lowChar);
  } else if (up && num) {
    selection = upChar.concat(numChar);
  } else if (up && sym) {
    selection = upChar.concat(symChar);
  } else if (low && num) {
    selection = lowChar.concat(numChar);
  } else if (low && sym) {
    selection = lowChar.concat(symChar);
  } else if (num && sym) {
    selection = numChar.concat(symChar);
  } else if (up) {
    selection = upChar;
  } else if (low) {
    selection = lowChar;
  } else if (num) {
    selection = numChar;
  } else if (sym) {
    selection = symChar;
  }
  let choices = ""; 
  for (var i=0; i<length; i++) {
    choices = choices + selection[Math.floor(Math.random() * selection.length)];
    console.log(); 
  } return choices; 
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);