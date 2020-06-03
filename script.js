//Storing my selecmntors in a variable
const erase = document.querySelector("#erase");
const user = document.querySelector("#user");
const ops = document.getElementsByClassName("ops");
const equals = document.querySelector(".equals_to");
const num = document.getElementsByClassName("num");
const period = document.getElementById("period");

//Initialize variables
let calculation =[];
let previousNum = "";
let currentNum ="";
let operator = null;

// Event listener to operator and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updateNum);
}
for (i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', selectOperator);
}

equals.addEventListener('click', getResult);

//dynamically update the numbers
function updateNum (e) {
  if (operator === "" && previousNum !== ""){
  previousNum = "";
  }
  const numText = e.target.innerText;
  if (currentNum === "" && numText === ".") {
    currentNum = "0";
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

const result = eval(calculation.join("")).toString();
  // currentNum = result;
  user.innerHTML = result;
  previousNum = result;
  currentNum = "";
  calculation = [];
  operator = null;
 // console.log(typeof result);
}

// Erase function
erase.onclick = () => {
  user.innerHTML = "0";
  currentNum = "";
  pendingNum = "";
  calculation= [];
  }