function valor2() {
var x2 = document.getElementById("a2").value;
var y2 = document.getElementById("b2").value;
var z2 = document.getElementById("c2").value;
var w2 = (parseInt(x2) * parseInt(y2) * parseInt(z2))
d2.value = w2;}

function m2() {
    if (d2.value == 0){
        document.getElementById('m2').bgColor = 'green';
        document.getElementById('n2').bgColor = 'green';
        document.getElementById('n2').innerHTML = 'No existe riesgo de fallo';
        }
    if (d2.value >=1 && d2.value <= 124){
        document.getElementById('m2').bgColor = 'yellow';
        document.getElementById('n2').bgColor = 'yellow';
        document.getElementById('n2').innerHTML = 'Riesgo de falla bajo';
        }
    if (d2.value >=125 && d2.value <= 499){
        document.getElementById('m2').bgColor = 'orange';
        document.getElementById('n2').bgColor = 'orange';
        document.getElementById('n2').innerHTML = 'Riesgo de fallo medio';
        }
    if (d2.value >=500 && d2.value <= 1000){
        document.getElementById('m2').bgColor = 'red';
        document.getElementById('n2').bgColor = 'red';
        document.getElementById('n2').innerHTML = 'Alto riesgo de fallo';
        }
    if (d2.value >=1001){
        document.getElementById('m2').bgColor = 'white';
        document.getElementById('n2').bgColor = 'white';
        document.getElementById('n2').innerHTML = 'NO APLICA';
        }
      }
