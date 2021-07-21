function valor8() {
var x8 = document.getElementById("a8").value;
var y8 = document.getElementById("b8").value;
var z8 = document.getElementById("c8").value;
var w8 = (parseInt(x8) * parseInt(y8) * parseInt(z8))
d8.value = w8;}

function m8() {
    if (d8.value == 0){
        document.getElementById('m8').bgColor = 'green';
        document.getElementById('n8').bgColor = 'green';
        document.getElementById('n8').innerHTML = 'No existe riesgo de fallo';
        }
    if (d8.value >=1 && d8.value <= 124){
        document.getElementById('m8').bgColor = 'yellow';
        document.getElementById('n8').bgColor = 'yellow';
        document.getElementById('n8').innerHTML = 'Riesgo de falla bajo';
        }
    if (d8.value >=125 && d8.value <= 499){
        document.getElementById('m8').bgColor = 'orange';
        document.getElementById('n8').bgColor = 'orange';
        document.getElementById('n8').innerHTML = 'Riesgo de fallo medio';
        }
    if (d8.value >=500 && d8.value <= 1000){
        document.getElementById('m8').bgColor = 'red';
        document.getElementById('n8').bgColor = 'red';
        document.getElementById('n8').innerHTML = 'Alto riesgo de fallo';
        }
    if (d8.value >=1001){
        document.getElementById('m8').bgColor = 'white';
        document.getElementById('n8').bgColor = 'white';
        document.getElementById('n8').innerHTML = 'NO APLICA';
        }
      }
