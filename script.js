var erase = document.querySelector("#erase");
var user = parseFloat(document.querySelector("#user"));
var num = document.querySelector(".num");
var ops = document.querySelector(".ops");
var equals = document.querySelector("#equals");
// var restart = document.querySelector("#restart");
var theNum = ""; // to invkoke a function later both for current and later number
var oldNum = "";
var resultNum; // variable will be object later
var operator;


// Operator
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

var setNum = function () {
  if (resultNum){
    theNum = this.getAttribute("unit-num");
    resultNum = "";
  } else {
    theNum += this.getAttribute("data-num");
  }
  user.innerHTML = theNum;
}
