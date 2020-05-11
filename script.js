var erase = document.querySelector("#erase");
var user = document.querySelector("#user");
var ops = document.getElementsByClassName("ops");
var equals = document.querySelector("#equals");
var num = document.getElementsByClassName("num");
var period = document.getElementById("period");h 
var currentNum = '0'; // to invkoke a function later both for current and later number
var pendingNum;
var resultNum = []; // array method to run the calculation 
var operator;

function stopPeriod() {
  var str = '.';
  document.getElementById("user").innerHTML += str.replace(1);
}

var addNum = function() {
  oldNum = theNum;
  theNum = "";
  operator = getAttribute("unit-ops");
}

for (let i = 0; i < num.length; i++) {
  let button = num[i];
  
  button.addEventListener("click", function() {
    // Operators
    // if (num === '.' && this.theNum.includes('.'))
    // return;
    // });


if (ops == "plus") {
  resultNum = oldNum + theNum;
} else if (ops == "minus") {
  resultNum = oldNum - theNum;
} else if (ops == "multiply") {
  resultNum = oldNum * theNum;
} else if (ops == "divide") {
  resultNum = oldNum / theNum;
}
resultNum = theNum; //if equal button is clicked without an operator
// To display number when button is clicked
  });
}


// var setNum = function () {
//     if (resultNum){
//       theNum = this.getAttribute("unit-num");
//       resultNum = "";
//     } else {
//       theNum += this.getAttribute("data-num");
//    }
//    console.log(user.innerHTML = theNum);
// }

// function view(val){
//   document.getElementById("user").value += val;
// }
// 