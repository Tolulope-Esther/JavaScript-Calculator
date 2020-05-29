//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector(".equals_to");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Initialize variables
var calculation =[];
var previousNum = "";
var currentNum ="";
var operator = null;

// Erase function
erase.onclick = () => {
  user.innerHTML = "0";
  currentNum = "";
  pendingNum = "";
  calculation= [];
  }

// Event listener to operation and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updateNum);
}
for (let i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', selectOperator);
}

equals.addEventListener('click', getResult);

//dynamically update the numbers
function updateNum (e) {
  if (operator === "" && previousNum !== ""){
  previousNum = "";
  }
  var numText = e.target.innerText;
  if (currentNum === "" && numText === ".") {
    currentNum = "0.";
 user.innerHTML = currentNum;
  } else if (numText === "." && currentNum.includes('.')) {
   numText = null;
 } else {
  currentNum += numText;
 user.innerHTML = currentNum;
 console.log(currentNum);
 }
}

//Operator function
function selectOperator (e) {
if (previousNum !== "") {
  calculation.push(previousNum);
  if(calculation[calculation.length -1] !== ("+" || "-" || "*" || "/")) {
    operator = e.target.innerText;
    calculation.push(operator);
}
previousNum = "";
}
if (currentNum !== "") {
  calculation.push(currentNum);
  if(calculation[calculation.length -1] !== ("+" || "-" || "*" || "/")) {
    operator = e.target.innerText;
    calculation.push(operator);
}
}
currentNum = "";
// console.log(operator);
// console.log(calculation);
}

// Calculation
function getResult (e) {
  if (currentNum !== "") {
    calculation.push(currentNum);
  }
 // console.log(e.target.innerText);

  var result = eval(calculation.join("")).toString();
  // currentNum = result;
  user.innerHTML = result;
  previousNum = result;
  currentNum = "";
  calculation = [];
  operator = null;
 // console.log(typeof result);
}