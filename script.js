//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector("#equals");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Temporary variables
var currentNum = '0'; // to invkoke a function later both for current and later number
var pendingNum;
var evalStringArray = []; // array method to run the calculation 
var operator;

// Event listener to operation and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updateCurrentNum)
}
for (let i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', operation)
}

// Functions that will update the current number
function updateCurrentNum (el) {
  var numText = el.target.innerText; // Or I use getAttribute _unit-num
  if (currentNum === "0") {
    currentNum ="";
  }
  // Append current number
  currentNum += numText;

  user.innerText = currentNum;
}

//Operator functions
function operation() {
  if (op.indexOf("+") > -1) {operation = 1; };
  if (ops.indexOf("-") > -1) {operation = 2; };
  if (ops.indexOf("*") > -1) {operation = 3; };
  if (ops.indexOf("/") > -1) {operation = 4; };
  pendingNum = currentNum;
  currentNum = "";
  document.user.value = currentNum;
}
//Calculate
function calculate() {
  if (operation == 1) {currentNum = eval(pendingNum) + eval(currentNum); };
  if (operation == 2) {currentNum = eval(pendingNum) - eval(currentNum); };
  if (operation == 3) {currentNum = eval(pendingNum) * eval(currentNum); };
  if (operation == 4) {currentNum = eval(pendingNum) / eval(currentNum); };
  operation = 0;
  pendingNum ="0";h
  document.user.value =currentNum;
}




      /*pendingNum = currentNum;
      currentNum = '0';
      user.innerText = currentNum;
      evalStringArray.push(pendingNum);
      evalStringArray.push('add');
      break;
    case '=':
      evalStringArray.push(currentNum);
      var evaluation = eval(evalStringArray.join(''));
      currentNum = exaluation + '';
      
      user.innerText = currentNum;
      evalStringArray = [];*/