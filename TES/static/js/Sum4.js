function valor3() {
var x3 = document.getElementById("a3").value;
var y3 = document.getElementById("b3").value;
var z3 = document.getElementById("c3").value;
var w3 = (parseInt(x3) * parseInt(y3) * parseInt(z3))
d3.value = w3;}

function m3() {
    if (d3.value == 0){
        document.getElementById('m3').bgColor = 'green';
        document.getElementById('n3').bgColor = 'green';
        document.getElementById('n3').innerHTML = 'No existe riesgo de fallo';
        }
    if (d3.value >=1 && d3.value <= 124){
        document.getElementById('m3').bgColor = 'yellow';
        document.getElementById('n3').bgColor = 'yellow';
        document.getElementById('n3').innerHTML = 'Riesgo de falla bajo';
        }
    if (d3.value >=125 && d3.value <= 499){
        document.getElementById('m3').bgColor = 'orange';
        document.getElementById('n3').bgColor = 'orange';
        document.getElementById('n3').innerHTML = 'Riesgo de fallo medio';
        }
    if (d3.value >=500 && d3.value <= 1000){
        document.getElementById('m3').bgColor = 'red';
        document.getElementById('n3').bgColor = 'red';
        document.getElementById('n3').innerHTML = 'Alto riesgo de fallo';
        }
    if (d3.value >=1001){
        document.getElementById('m3').bgColor = 'white';
        document.getElementById('n3').bgColor = 'white';
        document.getElementById('n3').innerHTML = 'NO APLICA';
        }
      }
