var sum = 0;
var value = "";
var oper;
window.onload = click1;

function click1(){
  var screen = document.getElementById('screen');
  var op = document.getElementById('operator');
  var row_1 = document.getElementById('row_1');
  var row_2 = document.getElementById('row_2');
  var row_3 = document.getElementById('row_3');
  var row_4 = document.getElementById('row_4');
  var row_5 = document.getElementById('row_5');
  var row_6 = document.getElementById('row_6');
  var total = document.getElementById('total');
  var equals = document.getElementById('equals');

  row_2.children[0].onclick = clear;
  row_2.children[1].onclick = plusminus;
  row_2.children[2].onclick = divide;
  row_2.children[3].onclick = times;
  row_3.children[0].onclick = seven;
  row_3.children[1].onclick = eight;
  row_3.children[2].onclick = nine;
  row_3.children[3].onclick = minus;
  row_4.children[0].onclick = four;
  row_4.children[1].onclick = five;
  row_4.children[2].onclick = six;
  row_4.children[3].onclick = plus;
  row_5.children[0].onclick = one;
  row_5.children[1].onclick = two;
  row_5.children[2].onclick = three;
  row_6.children[1].onclick = dot;
  row_6.children[0].children[0].onclick = zero;

  equals.onclick = equal;
  oper = op;
}

var decimalAdded = false;
function dot() {
  if(decimalAdded == false) {
    value += ".";
    decimalAdded = true;
    total.innerHTML += ".";
  }
}




var positiveFlag = true;
function plusminus(){
if (value != "0"){
  if(positiveFlag == true) {
    total.innerHTML = ("-").concat(total.innerHTML);
    value = ("!").concat(value);
    positiveFlag = false;
  }
  else if (positiveFlag == false){
    total.innerHTML = total.innerHTML.substring(1, total.innerHTML.length);
    value= value.substring(1, value.length);
    positiveFlag = true;
  }
}
}

var Called = false;
var Flag = true;
var Exists = 0;

function plus() {
    value += "+";
    oper.innerHTML = '+';
    total.innerHTML = "";
    decimalAdded = false;
    Called = true;
    Exists++;
    console.log(Called);
}

function minus() {
  value += "-";
  oper.innerHTML = '-';
  total.innerHTML = "";
  decimalAdded = false;
  Called = true;
  Exists++;
    console.log(Called);
}

function times() {
  value += "*";
  oper.innerHTML = 'x';
  total.innerHTML = "";
  decimalAdded = false;
  Called = true;
  Exists++;
}

function divide() {
  value += "/";
  oper.innerHTML = ('&div;');
  total.innerHTML = "";
  decimalAdded = false;
  Called = true;
  Exists++;
}

function clear() {
  value = "";
  sum=0;
  decimalAdded = false;
  positiveFlag = true;
  Called = false;
  total.innerHTML = 0;
  oper.innerHTML = "";
}

var evalFlag = false;
function one() {
  value += "1";
  Called = false;

  if(Exists <= 1) {
    Exists = 0;
  }

  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "1";
  }
  else if (Flag == false){
    total.innerHTML += "1";
  }
}

function two() {
  value += "2";
  Called = false;

  if(Exists <= 1) {
    Exists = 0;
  }

  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    Called = false;
    total.innerHTML = "2";
  }
  else if (Flag == false){
    total.innerHTML += "2";
  }
}

function three() {
  value += "3";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "3";
  }
  else if (Flag == false){
    total.innerHTML += "3";
  }
}

function four() {
  value += "4";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "4";
  }
  else if (Flag == false){
    total.innerHTML += "4";
  }
}

function five() {
  value += "5";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "5";
  }
  else if (Flag == false){
    total.innerHTML += "5";
  }
}

function six() {
  value += "6";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "6";
  }
  else if (Flag == false){
    total.innerHTML += "6";
  }
}

function seven() {
  value += "7";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "7";
  }
  else if (Flag == false){
    total.innerHTML += "7";
  }
}

function eight() {
  value += "8";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "8";
  }
  else if (Flag == false){
    total.innerHTML += "8";
  }
}

function nine() {
  value += "9";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "9";
  }
  else if (Flag == false){
    total.innerHTML += "9";
  }
}

function zero() {
  value += "0";
  Called = false;
  if(Exists <= 1) {
    Exists = 0;
  }
  if(evalFlag != false) {
    total.innerHTML = "";
    evalFlag = false;
  }

  if (total.innerHTML == "0" || Flag == true) {
    Flag = false;
    total.innerHTML = "0";
  }
  else if (Flag == false){
    total.innerHTML += "0";
  }
}

function add(a, b) {
  if(a[0] == "!" || b[0] == "!") {

    if (a[0] == "!") {
      c=parseFloat(a.substring(1, a.length));
      c= 0-c;}
    else {
      c=parseFloat(a);
    }


if(b[0] == "!") {
      d=parseFloat(b.substring(1, b.length));
      d=0-d;
      }
else {
      d= parseFloat(b);
      }
  }
else {
  c= parseFloat(a);
  d= parseFloat(b);
}
  return c+d;
}

function sub(a, b) {
if(a[0] == "!" || b[0] == "!") {

if (a[0] == "!") {
      c=parseFloat(a.substring(1, a.length));
      c= 0-c;}
else {
      c=parseFloat(a);
    }


if(b[0] == "!") {
      d=parseFloat(b.substring(1, b.length));
      d=0-d;
      }
else {
      d= parseFloat(b);
      }
  }
else {
  c= parseFloat(a);
  d= parseFloat(b);
}
  return c-d;
}

function mult(a, b) {
  if(a[0] == "!" || b[0] == "!") {

if (a[0] == "!") {
      c=parseFloat(a.substring(1, a.length));
      c= 0-c;}
else {
      c=parseFloat(a);
    }


    if(b[0] == "!") {
      d=parseFloat(b.substring(1, b.length));
      d=0-d;
      }
    else {
      d= parseFloat(b);
      }
  }
else {
  c= parseFloat(a);
  d= parseFloat(b);
}
  return c*d;
}

function div(a, b) {
  if(a[0] == "!" || b[0] == "!") {

    if (a[0] == "!") {
      c=parseFloat(a.substring(1, a.length));
      c= 0-c;}
    else {
      c=parseFloat(a);
    }


 if(b[0] == "!") {
      d=parseFloat(b.substring(1, b.length));
      d=0-d; }
else {
      d= parseFloat(b);
      }
  }
else {
  c= parseFloat(a);
  d= parseFloat(b);
} return c/d;
}

function evaluate(){
  console.log(value);
  var counter = 0;
  var opList = [];
  var numList= [];
  var count1 = 0;
  var count2 = 0;
  var last;
  var first;
  var second;
  var result;

  for(var i = 0; i<value.length; i++) {
    var curr = value[i];

    if (curr === '+' || curr === "-" || curr === "*" || curr === ("/")) {
console.log(Called);
       if (!Called && Exists >1) {
            if(opList.length > 0) {
              opList[opList.length-1] = curr;
            } else{
              opList.push(curr);
            }
        } else {
            opList.push(curr);
        }

numList.push(value.substring(count1, count2));
console.log(value.substring(count1, count2));
count1 = count2+1;
console.log(count1);
count2++;}

else {
      count2++;
    }}

  console.log(opList);
  console.log(numList);

if (result == undefined) {
  result = numList[counter];}
last = value.substring(count1, count2);
console.log(last);
console.log(counter);
console.log(Called);

if (opList === undefined || opList.length == 0) {
  if(last[0] != "!") {
    sum = last;
  } else if (last[0] === "!") {
    sum = ("-").concat(last.substring(1, last.length));
  }}



for (var j=0; j<opList.length; j++) {
if (opList[j] == '+') {
      first = result;
      if (counter< opList.length-1) {
        second = numList[counter+1];
        console.log(numList[counter+1]);
      }
      else {
        second = last;
        console.log(last);
      }
      result = add(first, second);
      sum = result;
      counter++;
    }if (opList[j] == '-') {
      first = result;
      if (counter< opList.length-1) {
        second = numList[counter+1];
        console.log(numList[counter+1]);
      }
      else {
        second = last;
      }
      result = sub(first, second);
      sum = result;
      counter++;
    }if (opList[j] == "*") {
      first = result;
      if (counter< opList.length-1) {
        second = numList[counter+1];
        console.log(numList[counter+1]);
      }
      else {
        second = last;
      }
      result = mult(first, second);
      sum = result;
      counter++;
    }if (opList[j] == "/") {
      first = result;
      if (counter< opList.length-1) {
        second = numList[counter+1];
        console.log(numList[counter+1]);
      }
      else {
        second = last;
      }
      console.log(first, second);
      result = div(first, second);
      sum = result;
      counter++;
    }}}

function equal() {
  evaluate();
  console.log(sum);
  if (sum == "Infinity"){
    sum = "Not a number";
  }
  total.innerHTML = sum;
  oper.innerHTML = "";
  evalFlag = true;
  Exists = 0;
}
