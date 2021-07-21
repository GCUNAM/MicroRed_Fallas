function valor6() {
var x6 = document.getElementById("a6").value;
var y6 = document.getElementById("b6").value;
var z6 = document.getElementById("c6").value;
var w6 = (parseInt(x6) * parseInt(y6) * parseInt(z6))
d6.value = w6;}

function m6() {
    if (d6.value == 0){
        document.getElementById('m6').bgColor = 'green';
        document.getElementById('n6').bgColor = 'green';
        document.getElementById('n6').innerHTML = 'No existe riesgo de fallo';
        }
    if (d6.value >=1 && d6.value <= 124){
        document.getElementById('m6').bgColor = 'yellow';
        document.getElementById('n6').bgColor = 'yellow';
        document.getElementById('n6').innerHTML = 'Riesgo de falla bajo';
        }
    if (d6.value >=125 && d6.value <= 499){
        document.getElementById('m6').bgColor = 'orange';
        document.getElementById('n6').bgColor = 'orange';
        document.getElementById('n6').innerHTML = 'Riesgo de fallo medio';
        }
    if (d6.value >=500 && d6.value <= 1000){
        document.getElementById('m6').bgColor = 'red';
        document.getElementById('n6').bgColor = 'red';
        document.getElementById('n6').innerHTML = 'Alto riesgo de fallo';
        }
    if (d6.value >=1001){
        document.getElementById('m6').bgColor = 'white';
        document.getElementById('n6').bgColor = 'white';
        document.getElementById('n6').innerHTML = 'NO APLICA';
        }
      }
