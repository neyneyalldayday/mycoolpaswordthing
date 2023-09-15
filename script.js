

// Get references to the #generate element
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const symbols = ['!','@','#','$','%','^','&','*','(',')','?','>','<','=','+','-'];
const passwordLengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const passwordOptions = []
const password = []

uppercaseEl.addEventListener("change" , () => {
  let wantOption = uppercaseEl.checked
  if(wantOption){
  passwordOptions.push(...upper)
  } 
})
lowercaseEl.addEventListener("change" , () => {
  let wantOption = lowercaseEl.checked
  if(wantOption){
    passwordOptions.push(...lower)
  } 
})
numbersEl.addEventListener("change" , () => {
  let wantOption = numbersEl.checked
  if(wantOption){
    passwordOptions.push(...numbers)
  } 
})
symbolsEl.addEventListener("change" , () => {
  let wantOption = symbolsEl.checked
  if(wantOption){
   passwordOptions.push(...symbols)
  } 
})
function generatePassword(){
  const passwordLength = parseInt(passwordLengthEl.value)

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert(" must be a number value greater than 8 and less than 128")
  }

for (let i = 0; i < passwordLength; i++){
  const mixItUp = Math.floor(Math.random() * passwordOptions.length)
  password.push(passwordOptions[mixItUp])
}
 
return password.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


