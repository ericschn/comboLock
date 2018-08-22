
/// This script functions as a sort of combination lock using browser viewport width
/// Can be used as an easter egg on a portfolio site for example.
/// lining up the right side of the window with certain elements in a certain order
/// to show a special message or navigate to a hidden page

var zero = document.getElementById("zero");

var pos1 = 0;
var pos2 = 0;
var pos3 = 0;

var pos = [0,1,2];
var results = ["result1", "result2", "result3"];

// Debugging
if (window.innerWidth >= 500 && window.innerWidth < 700){
  console.log("window at position zero");
}

if (window.innerWidth >= 700 && window.innerWidth < 900){
  console.log("window at position one");
}

if (window.innerWidth >= 900 && window.innerWidth < 1100){
  console.log("window at position two");
}

if (window.innerWidth >= 1100 && window.innerWidth < 123300){
  console.log("window at position three");
}

function checkPos(currentPos) {

  var activatedPosition = document.getElementById(results[currentPos]);

  var prevPos = 2;
  if (currentPos > 0) prevPos = currentPos - 1;
  var nextPos = 0;
  if (currentPos < 2) nextPos = currentPos + 1;

  var prevPosition = document.getElementById(results[prevPos])
  var nextPosition = document.getElementById(results[nextPos])

  // set value in resultArea

  pos[currentPos] = getComboNumber();
  activatedPosition.innerHTML = pos[currentPos];

  // check if combo is right
  if (checkCombo()) {
    correctCombo();
    lightAll();
    return 0;
  }

  nextPosition.classList.toggle("lit");
 
  console.log(currentPos); 
  console.log(prevPos);
  console.log("------"); 

  if (currentPos < 2) {
    //console.log("loop number " + currentPos);
    activatedPosition.classList.toggle("lit");
    var t = setTimeout("checkPos(" + (currentPos + 1) + ")", 2000);
  } else {
    //console.log("loop number " + currentPos);
    activatedPosition.classList.toggle("lit");
    var t = setTimeout("checkPos(0)", 2000);
  }
  // use a counter var
}



function checkCombo() {
  
  if (pos[0] == 2 && pos[1] == 3 && pos[2] == 1) {
  //if (true){
    return true;
  }
}

function getComboNumber() { // should pass in window.innerWidth
  if (window.innerWidth < 700){
    console.log("window at position zero");
    return 0;
  }
  
  if (window.innerWidth >= 700 && window.innerWidth < 900){
    console.log("window at position one");
    return 1;
  }
  
  if (window.innerWidth >= 900 && window.innerWidth < 1100){
    console.log("window at position two");
    return 2;
  }
  
  if (window.innerWidth >= 1100){
    console.log("window at position three");
    return 3;
  }

  return 0;
}

function correctCombo() {
  var congrats = document.createElement("div");
  congrats.innerHTML = '23 is number 1';
  var resultarea = document.getElementById("resultarea");
  resultarea.parentNode.insertBefore(congrats, resultarea.nextSibling);
}

function lightAll() {
  results.forEach(r => {
    document.getElementById(r).classList.add("lit");
  });
}


function startProg() {
  var startItUp = setTimeout("checkPos(0)", 2000);
  console.log("start it up");
}