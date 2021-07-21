function valor4() {
var x4 = document.getElementById("a4").value;
var y4 = document.getElementById("b4").value;
var z4 = document.getElementById("c4").value;
var w4 = (parseInt(x4) * parseInt(y4) * parseInt(z4))
d4.value = w4;}

function m4() {
    if (d4.value == 0){
        document.getElementById('m4').bgColor = 'green';
        document.getElementById('n4').bgColor = 'green';
        document.getElementById('n4').innerHTML = 'No existe riesgo de fallo';
        }
    if (d4.value >=1 && d4.value <= 124){
        document.getElementById('m4').bgColor = 'yellow';
        document.getElementById('n4').bgColor = 'yellow';
        document.getElementById('n4').innerHTML = 'Riesgo de falla bajo';
        }
    if (d4.value >=125 && d4.value <= 499){
        document.getElementById('m4').bgColor = 'orange';
        document.getElementById('n4').bgColor = 'orange';
        document.getElementById('n4').innerHTML = 'Riesgo de fallo medio';
        }
    if (d4.value >=500 && d4.value <= 1000){
        document.getElementById('m4').bgColor = 'red';
        document.getElementById('n4').bgColor = 'red';
        document.getElementById('n4').innerHTML = 'Alto riesgo de fallo';
        }
    if (d4.value >=1001){
        document.getElementById('m4').bgColor = 'white';
        document.getElementById('n4').bgColor = 'white';
        document.getElementById('n4').innerHTML = 'NO APLICA';
        }
      }
