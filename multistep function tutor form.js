
var currentStept = 0;
var stepst = document.getElementsByClassName('stept');
var progressBar = document.querySelector('.progres-bar-t');

function showStept(steptIndex) {
  for (var i = 0; i < stepst.length; i++) {
    if (i === steptIndex) {
      stepst[i].classList.add('activet');
    } else {
      stepst[i].classList.remove('activet');
    }
  }
  
  var progress = ((steptIndex + 1) / stepst.length) * 100;
  progressBar.style.width = progress + '%';
}

function nextStept() {  
if (currentStept === 1) {
var isValid = tvalidateStep2();
if (!isValid) {
  return; // Don't proceed to the next step if validation fails
}
} 
else if (currentStept === 2) {
var isValid = tvalidateStep3();
if (!isValid) {
  return; // Don't proceed to the next step if validation fails
}
} 

else if (currentStept === 3) {
var isValid = ttvalidateStep4();
if (!isValid) {
  return; // Don't proceed to the next step if validation fails
}
} 

else if (currentStept === 4) {
var isValid = tvalidateStep5();
if (!isValid) {
  return; // Don't proceed to the next step if validation fails
}
} 


if (currentStept < stepst.length - 1) {
currentStept++;
showStept(currentStept);
}
}

function previousStept() {
  if (currentStept > 0) {
    currentStept--;
    showStept(currentStept);
  }
}

showStept(currentStept);
