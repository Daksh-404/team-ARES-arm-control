var variables = [[0,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59],
                  [0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,28,29,28,30,31,29,30,31,32,29,28,30,32,33,34,33,33,32,33,34,36,32,35,36,32,34,33,32,33,31,29,30,34,32,32,33,32,33,33,30,31,32,29,28,30,32,33,35,36],
                  [0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,28,29,28,30,31,29,30,31,32,29,28,30,32,33,34,33,33,32,33,34,36,32,35,36,28,29,31,29,30,34,32,32,33,32,33,33,35,36,34,32,34,33,32,33,32,33,36,34,35,31,29,30,34,32,32,33,32,33,33,30,31,32,29,28,30,33,35],
                  [0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,29,32,33,32,34,36,34,33,32,35,33,34,32,32,33,32,33,33,35,36,34,31,28,29,30,32,34,33,32,33,31,29,30,34,32,32,33,32,33,33,30,31,33,32,33,32,32,29,28,30,32,33,35,36],
                  [0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,28,29,29,31,30,32,34,33,33,32,33,34,36,32,35,32,33,32,34,36,34,33,32,35,33,31,28,29,28,30,31,29,30,31,32,29,28,30,32,33,34,33,33,32,33,34,36,32,35,36],
                  [0,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,29,28,29,31,30,28,29,31,29,30,34,32,32,33,32,33,33,35,36,34,32,34,33,32,33,32,33,36,34,35,32,33,32,34,36,34,33,32,35,33,34,32,32,33,32,33,33,35,36,34]]
var variable_cir = document.getElementsByClassName('variable');
var variable_num = document.getElementsByClassName('variable_num');

var id = null;   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 300);
  function frame() {
    if (pos == 100) {
      pos = 0;
    } else { 
      for (var i = 0; i < variable_cir.length; i++) {
      variable_cir[i].style.strokeDashoffset = (440 - (440 * variables[i][pos]) / 100);
      variable_num[i].innerHTML = variables[i][pos]+"%"
      }
      pos++;
    }
  }