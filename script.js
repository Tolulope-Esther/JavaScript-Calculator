//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector(".equals_to");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Initialize variables
var firstNum = ""; // to invkoke a function later both for current and later number
var secondNum ="";
var evalStringArray = []; // array method to run the calculation 
var operator = null;

// Erase function
erase.onclick = () => {
  firstNum = '0';
  user.innerHTML = firstNum;
  evalStringArray = [];
  }

// Event listener to operation and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updateNum);
}
for (let i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', selectOperator);
}

equals.addEventListener('click', getResult);

//Functions that will update the numbers
function updateNum (e) {
  var numText = e.target.innerText;
  if (firstNum === "" && numText === ".") {
    firstNum = "0";
 user.innerText = firstNum;
  }
  // To check if firstNum already has .
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
function selectOperator (e) {
var operator = e.target.innerText;
if (firstNum !== "") {
  evalStringArray.push(firstNum);
}
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
  firstNum = "";
  user.innerText = firstNum;
  evalStringArray.push(secondNum);
  evalStringArray.push('/');
}
return firstNum;
}

// Calculation
function getResult (e) {
  if (firstNum !== "") {
    evalStringArray.push(firstNum);
  }
  console.log(e.target.innerText);
  var evaluation = eval(evalStringArray.join("")).toString();
  firstNum = evaluation + "";
  user.innerText = firstNum;
  evalStringArray = [];
}