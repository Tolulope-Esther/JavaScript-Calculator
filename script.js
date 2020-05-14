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

// Erase function
erase.onclick = () => {
  currentNum = '0';
  pendingNum = undefined;
  evalStringArray = [];
  user.innerHTML = currentNum;
  }

// Decimal function
// No two period is allowed in input
period.onclick = () => {
  if (!currentNum.includes ('.')) {
    currentNum += '.';
  }
  console.log(user.innerText = currentNum);
}

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
function operation (el) {
  var operator = el.target.innerText;
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
}
