var steps = document.querySelectorAll('.process-chart > li');

for (var i = steps.length - 1; i >= 0; i--) {
  var step = steps[i];
  var pos = i;
  
  step.classList.add( (i == 0) ? 'current' : 'after' );
  
  step.addEventListener('click', 
    toggleClasses);
}

function toggleClasses(evt){
  var after = true;
  this.classList.add('current');
  for (var j = steps.length - 1; j >= 0; j--) {
    var step = steps[j];
    
    if (this === step) {
      after = false;
      step.classList.remove('before', 'after');
    }
    else {
      step.classList.remove('current', 'before', 'after');
      step.classList.add( after ? 'after' : 'before');
    }    
  }
}
