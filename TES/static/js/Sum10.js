function valor9() {
var x9 = document.getElementById("a9").value;
var y9 = document.getElementById("b9").value;
var z9 = document.getElementById("c9").value;
var w9 = (parseInt(x9) * parseInt(y9) * parseInt(z9))
d9.value = w9;}

function m9() {
    if (d9.value == 0){
        document.getElementById('m9').bgColor = 'green';
        document.getElementById('n9').bgColor = 'green';
        document.getElementById('n9').innerHTML = 'No existe riesgo de fallo';
        }
    if (d9.value >=1 && d9.value <= 124){
        document.getElementById('m9').bgColor = 'yellow';
        document.getElementById('n9').bgColor = 'yellow';
        document.getElementById('n9').innerHTML = 'Riesgo de falla bajo';
        }
    if (d9.value >=125 && d9.value <= 499){
        document.getElementById('m9').bgColor = 'orange';
        document.getElementById('n9').bgColor = 'orange';
        document.getElementById('n9').innerHTML = 'Riesgo de fallo medio';
        }
    if (d9.value >=500 && d9.value <= 1000){
        document.getElementById('m9').bgColor = 'red';
        document.getElementById('n9').bgColor = 'red';
        document.getElementById('n9').innerHTML = 'Alto riesgo de fallo';
        }
    if (d9.value >=1001){
        document.getElementById('m9').bgColor = 'white';
        document.getElementById('n9').bgColor = 'white';
        document.getElementById('n9').innerHTML = 'NO APLICA';
        }
      }
