function valor7() {
var x7 = document.getElementById("a7").value;
var y7 = document.getElementById("b7").value;
var z7 = document.getElementById("c7").value;
var w7 = (parseInt(x7) * parseInt(y7) * parseInt(z7))
d7.value = w7;}

function m7() {
    if (d7.value == 0){
        document.getElementById('m7').bgColor = 'green';
        document.getElementById('n7').bgColor = 'green';
        document.getElementById('n7').innerHTML = 'No existe riesgo de fallo';
        }
    if (d7.value >=1 && d7.value <= 124){
        document.getElementById('m7').bgColor = 'yellow';
        document.getElementById('n7').bgColor = 'yellow';
        document.getElementById('n7').innerHTML = 'Riesgo de falla bajo';
        }
    if (d7.value >=125 && d7.value <= 499){
        document.getElementById('m7').bgColor = 'orange';
        document.getElementById('n7').bgColor = 'orange';
        document.getElementById('n7').innerHTML = 'Riesgo de fallo medio';
        }
    if (d7.value >=500 && d7.value <= 1000){
        document.getElementById('m7').bgColor = 'red';
        document.getElementById('n7').bgColor = 'red';
        document.getElementById('n7').innerHTML = 'Alto riesgo de fallo';
        }
    if (d7.value >=1001){
        document.getElementById('m7').bgColor = 'white';
        document.getElementById('n7').bgColor = 'white';
        document.getElementById('n7').innerHTML = 'NO APLICA';
        }
      }
