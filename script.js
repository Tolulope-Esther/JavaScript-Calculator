//Storing my selectors in a variable
var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
// var equals = document.querySelector("#equals");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");

//Temporary variables
var firstNum = '0'; // to invkoke a function later both for current and later number
var secondNum = '0';
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
  //Append first number
  firstNum += numText;

  user.innerText = firstNum;
}
function updatefirstNum (e) {
  var numText = e.target.innerText; // Or I use getAttribute _unit-num
  if (firstNum === "0" && numText !== ".") {
    firstNum ="";
  }
  //check if firstNum already has .
 else if (numText === "." && firstNum.includes('.')) {
   numText = null;
 }
 else {
  firstNum += numText;
 user.innerText = firstNum;
 firstNum;
 }
}

// function updatesecondNum (e) {
//   var numText = e.target.innerText;
//   if (secondNum === "0") {
//     secondNum = "";
//   }
//   //Append first number
//   secondNum += numText;

//   user.innerText = secondNum;
// } 
// function updatesecondNum (e) {
//   var numText = e.target.innerText; // Or I use getAttribute _unit-num
//   if (secondNum === "0" && numText !== ".") {
//     secondNum ="";
//   }
  //check if secondNum already has .
//  else if (numText === "." && firstNum.includes('.')) {
//    numText = null;
//  }
//  else {
//   secondNum += numText;
//  user.innerText = secondNum;
//  console.log(secondNum);
//  }
// }

//Operator function
function operation (e) {
 var operator = e.target.innerText;
if(operator === "+") {
  secondNum = firstNum;
  firstNum = "0";
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
else if (operator === "="){
  evalStringArray.push(firstNum);
  var evaluation = eval(evalStringArray.join(''));
   firstNum = evaluation + '';
    user.innerText = firstNum;
    evalStringArray =[];
}
return firstNum ="0";
}

// function equals () {
//   if ( equals === "=") {
//     evalStringArray.push(firstNum);
//     var evaluation = eval(evalStringArray.join(''));
//      firstNum = evaluation + '';
//       user.innerText = firstNum;
//       evalStringArray =[];
//   }
//   return firstNum ="0";
// }