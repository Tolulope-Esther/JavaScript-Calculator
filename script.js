//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector(".equals_to");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Initialize variables
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
 console.log(firstNum);
 }
}

//Operator function
function selectOperator (e) {
var operator = e.target.innerText;
if (firstNum !== "") {
  evalStringArray.push(firstNum);
}
if(evalStringArray[evalStringArray.length -1] !== ("+")) {
  operator = e.target.innerText;
  evalStringArray.push(operator);
}
firstNum = "";
console.log(operator);
console.log(evalStringArray);
}

// Calculation
function getResult (e) {
  if (firstNum !== "") {
    evalStringArray.push(firstNum);
  }
  console.log(e.target.innerText);
  var evaluation = eval(evalStringArray.join("")).toString();
  firstNum = evaluation;
  user.innerHTML = evaluation;
  evalStringArray = [];
  console.log(typeof result);
}