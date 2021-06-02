// Assignment Code
var generateBtn = document.querySelector("#generate");
const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "!@#$%^&*()_+=-][";
up.split;
low.split;
num.split;
sym.split;
function generatePassword() {
  length = prompt("You may choose a length between 8-128 characters");
  if (length<8 || length>128) {
    alert("Passowrd can only be 8-128 characters");
    return;
  }
  up = confrim("Would you like to use uppercase letters?");
  low = confrim("Would you like to use lowercase letters?");
  num = confirm("Would you like to use numbers?");
  sym = confrim("Would you like to use special characters?");
  if (up && low && num && sym) {
    selection = up.concat(low, num, sym);
  } else if (!up && low && num && sym) {
    selection = low.concat(num, sym);
  } else if (up && !low && num && sym) {
    selection = up.concat(num, sym);
  } else if (up && low && !num && sym) {
    selection = up.concat(low, sym);
  } else if (up && low && num && !sym) {
    selection = up.concat(low, num);
  } else if (up && low) {
    selection = up.concat(low);
  } else if (up && num) {
    selection = up.concat(num);
  } else if (up && sym) {
    selection = up.concat(sym);
  } else if (low && num) {
    selection = low.concat(num);
  } else if (low && sym) {
    selection = low.concat(sym);
  } else if (num && sym) {
    selection = num.concat(sym);
  } else if (up) {
    selection = up;
  } else if (low) {
    selection = low;
  } else if (num) {
    selection = num;
  } else if (sym) {
    selection = sym;
  }
  let choices = ""; 
  for (var i=0; i<length; i++) {
    choices = choices + selection[Math.floor(Math.random() * selection.length)];
    console.log(); 
  }
  return choices; 
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
