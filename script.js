//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector("#equals");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Temporary variables
var firstNum = '0'; // to invkoke a function later both for current and later number
var secondNum ="0 ";
var evalStringArray = []; // array method to run the calculation 
var operator =null;

// Erase function
erase.onclick = () => {
  firstNum = '0';
  secondNum = "0";
  evalStringArray = [];
  user.innerHTML = firstNum;
  }

// Event listener to operation and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updatefirstNum)
}
for (let i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', operation)
}

//Functions that will update the current number
function updatefirstNum (e) {
  var numText = e.target.innerText;
  if (firstNum === "0") {
    firstNum = "";
  }
  // To check if firstNum already has .

  if (firstNum === "0" && numText !== ".") {
    firstNum ="";
  }
 else if (numText === "." && firstNum.includes('.')) {
   numText = null;
 }
 else {
   // Append first number
  firstNum += numText;
 user.innerText = firstNum;
 firstNum;
 }
}

//Operator function
function operation (e) {
 var operator = e.target.innerText;
//  if (operator && isLastEnteredNumber()) {
//    console.log(user.innerHTML);
//    content.split(operator);
// }
if(operator === "+" ) {
  secondNum = firstNum;
  firstNum ="0";
  user.innerText = firstNum;
  evalStringArray.push(secondNum);
  evalStringArray.push('+');
} else if (operator === "-") {
  secondNum = firstNum;
  firstNum = "0";
  user.innerText = firstNum;
  evalStringArray.push(secondNum);
  evalStringArray.push('-');
} else if (operator === "*"){
  secondNum = firstNum;
  firstNum = "0";
  user.innerText = firstNum;
  evalStringArray.push(secondNum);
  evalStringArray.push('*');
} else if (operator === "/") {
  secondNum = firstNum;
  firstNum = "0";
  user.innerText = firstNum;
  evalStringArray.push(secondNum);
  evalStringArray.push('/');
}
else if (operator === "=") {
  evalStringArray.push(firstNum);
  var evaluation = eval(evalStringArray.join(''));
   firstNum = evaluation + '';
    user.innerText = firstNum;
    evalStringArray =[];
}
return firstNum;
}