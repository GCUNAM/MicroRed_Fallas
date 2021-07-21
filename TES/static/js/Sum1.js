function valor() {
var x = document.getElementById("a").value;
var y = document.getElementById("b").value;
var z = document.getElementById("c").value;
var w = (parseInt(x) * parseInt(y) * parseInt(z))
d.value = w;}

function m() {
    if (d.value == 0){
        document.getElementById('m').bgColor = 'green';
        document.getElementById('n').bgColor = 'green';
        document.getElementById('n').innerHTML = 'No existe riesgo de fallo';
        }
    if (d.value >=1 && d.value <= 124){
        document.getElementById('m').bgColor = 'yellow';
        document.getElementById('n').bgColor = 'yellow';
        document.getElementById('n').innerHTML = 'Riesgo de falla bajo';
        }
    if (d.value >=125 && d.value <= 499){
        document.getElementById('m').bgColor = 'orange';
        document.getElementById('n').bgColor = 'orange';
        document.getElementById('n').innerHTML = 'Riesgo de fallo medio';
        }
    if (d.value >=500 && d.value <= 1000){
        document.getElementById('m').bgColor = 'red';
        document.getElementById('n').bgColor = 'red';
        document.getElementById('n').innerHTML = 'Alto riesgo de fallo';
        }
    if (d.value >=1001){
        document.getElementById('m').bgColor = 'white';
        document.getElementById('n').bgColor = 'white';
        document.getElementById('n').innerHTML = 'NO APLICA';
        }
      }
