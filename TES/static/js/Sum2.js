function valor1() {
var x1 = document.getElementById("a1").value;
var y1 = document.getElementById("b1").value;
var z1 = document.getElementById("c1").value;
var w1 = (parseInt(x1) * parseInt(y1) * parseInt(z1))
d1.value = w1;}

function m1() {
    if (d1.value == 0){
        document.getElementById('m1').bgColor = 'green';
        document.getElementById('n1').bgColor = 'green';
        document.getElementById('n1').innerHTML = 'No existe riesgo de fallo';
        }
    if (d1.value >=1 && d1.value <= 124){
        document.getElementById('m1').bgColor = 'yellow';
        document.getElementById('n1').bgColor = 'yellow';
        document.getElementById('n1').innerHTML = 'Riesgo de falla bajo';
        }
    if (d1.value >=125 && d1.value <= 499){
        document.getElementById('m1').bgColor = 'orange';
        document.getElementById('n1').bgColor = 'orange';
        document.getElementById('n1').innerHTML = 'Riesgo de fallo medio';
        }
    if (d1.value >=500 && d1.value <= 1000){
        document.getElementById('m1').bgColor = 'red';
        document.getElementById('n1').bgColor = 'red';
        document.getElementById('n1').innerHTML = 'Alto riesgo de fallo';
        }
    if (d1.value >=1001){
        document.getElementById('m1').bgColor = 'white';
        document.getElementById('n1').bgColor = 'white';
        document.getElementById('n1').innerHTML = 'NO APLICA';
        }
      }
