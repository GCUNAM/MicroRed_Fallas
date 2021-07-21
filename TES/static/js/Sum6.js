function valor5() {
var x5 = document.getElementById("a5").value;
var y5 = document.getElementById("b5").value;
var z5 = document.getElementById("c5").value;
var w5 = (parseInt(x5) * parseInt(y5) * parseInt(z5))
d5.value = w5;}

function m5() {
    if (d5.value == 0){
        document.getElementById('m5').bgColor = 'green';
        document.getElementById('n5').bgColor = 'green';
        document.getElementById('n5').innerHTML = 'No existe riesgo de fallo';
        }
    if (d5.value >=1 && d5.value <= 124){
        document.getElementById('m5').bgColor = 'yellow';
        document.getElementById('n5').bgColor = 'yellow';
        document.getElementById('n5').innerHTML = 'Riesgo de falla bajo';
        }
    if (d5.value >=125 && d5.value <= 499){
        document.getElementById('m5').bgColor = 'orange';
        document.getElementById('n5').bgColor = 'orange';
        document.getElementById('n5').innerHTML = 'Riesgo de fallo medio';
        }
    if (d5.value >=500 && d5.value <= 1000){
        document.getElementById('m5').bgColor = 'red';
        document.getElementById('n5').bgColor = 'red';
        document.getElementById('n5').innerHTML = 'Alto riesgo de fallo';
        }
    if (d5.value >=1001){
        document.getElementById('m5').bgColor = 'white';
        document.getElementById('n5').bgColor = 'white';
        document.getElementById('n5').innerHTML = 'NO APLICA';
        }
      }
