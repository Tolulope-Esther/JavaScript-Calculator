//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector("#equals");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Temporary variables
var firstNum = '0'; // to invkoke a function later both for current and later number
var secondNum;
var evalStringArray = []; // array method to run the calculation 
var operator =null;

// Erase function
erase.onclick = () => {
  firstNum = '0';
  secondNum = undefined;
  evalStringArray = [];
  user.innerHTML = currentNum;
  }

// Event listener to operation and number buttons using for loop
for (let i = 0; i<num.length; i++) {
  num[i].addEventListener('click', updateNum)
}
for (let i = 0; i<ops.length; i++) {
  ops[i].addEventListener('click', operation)
}
// Functions that will update the current number
function updateCurrentNum (e) {
  var numText = e.target.innerText; // Or I use getAttribute _unit-num
  if (firstNum === "0") {
    firstNum ="";
  }
  // Append current number
  firstNum += numText;

 user.innerText = firstNum;
}
function updateNum (e) {
  var numText = e.target.innerText; // Or I use getAttribute _unit-num
  if (firstNum === "0" && numText !== ".") {
    firstNum ="";
  }
 else if (numText === "." && firstNum.includes('.')) {
   numText = null;
 }
 else {
  firstNum += numText;
  user.innerText = firstNum;
 }
if (operator === null) {
  console.log(firstNum)
}
}

//Operator function
function operation (e) {
  var operator = e.target.innerText;
  if (operator === null){
   console.log(firstNum);
  }
  if (operator != null) {
    secondNum;
  }
// if(operator === "+") {
//   pendingNum = currentNum;
//   currentNum = "0";
//   user.innerText = currentNum;
// } else if (operator === "-") {
//   pendingNum = currentNum;
//   currentNum = "0";
//   user.innerText = currentNum;
// } else if (operator ==="*"){
//   pendingNum = currentNum;
//   currentNum = "0";
//   user.innerText = currentNum;
// } else if (operator === "/") {
//   pendingNum = currentNum;
//   currentNum = "0";
//   user.innerText = currentNum;
// }
}

//Equal functiom
  equals.addEventListener('click', calculate);

  function calculate () {
  
  }

//Operator functions
/*function operation (e) {
 var operator = e.target.innerText;
  switch (operator) {
    case '+':
      pendingNum = currentNum;
      currentNum ='0';
      user.innerText = currentNum;
      evalStringArray.push(pendingNum);
      evalStringArray.push('+');
        break;
    case '-':
      pendingNum = currentNum;
      currentNum = '0';
      user.innerText = currentNum;
      evalStringArray.push(pendingNum);
      evalStringArray.push('-');
        break;
    case '*':
      pendingNum = currentNum;
      currentNum = '0';
      user.innerText = currentNum;
      evalStringArray.push(pendingNum);
      evalStringArray.push('*');
        break;
    case '/':
      pendingNum = currentNum;
      currentNum = '0';
      user.innerText = currentNum;
      evalStringArray.push(pendingNum);
      evalStringArray.push('/');
        break;
    case '=':
      evalStringArray.push(currentNum);
      var evaluation = eval(evalStringArray.join(''));
      currentNum = evaluation + '';
      user.innerText = currentNum;
      evalStringArray =[];
        break;
}
}*/