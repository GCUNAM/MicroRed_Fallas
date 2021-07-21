function valor11() {
var x11 = document.getElementById("a11").value;
var y11 = document.getElementById("b11").value;
var z11 = document.getElementById("c11").value;
var w11 = (parseInt(x11) * parseInt(y11) * parseInt(z11))
d11.value = w11;}

function m11() {
    if (d11.value == 0){
        document.getElementById('m11').bgColor = 'green';
        document.getElementById('n11').bgColor = 'green';
        document.getElementById('n11').innerHTML = 'No existe riesgo de fallo';
        }
    if (d11.value >=1 && d11.value <= 124){
        document.getElementById('m11').bgColor = 'yellow';
        document.getElementById('n11').bgColor = 'yellow';
        document.getElementById('n11').innerHTML = 'Riesgo de falla bajo';
        }
    if (d11.value >=125 && d11.value <= 499){
        document.getElementById('m11').bgColor = 'orange';
        document.getElementById('n11').bgColor = 'orange';
        document.getElementById('n11').innerHTML = 'Riesgo de fallo medio';
        }
    if (d11.value >=500 && d11.value <= 1000){
        document.getElementById('m11').bgColor = 'red';
        document.getElementById('n11').bgColor = 'red';
        document.getElementById('n11').innerHTML = 'Alto riesgo de fallo';
        }
    if (d11.value >=1001){
        document.getElementById('m11').bgColor = 'white';
        document.getElementById('n11').bgColor = 'white';
        document.getElementById('n11').innerHTML = 'NO APLICA';
        }
      }
