function valor10() {
var x10 = document.getElementById("a10").value;
var y10 = document.getElementById("b10").value;
var z10 = document.getElementById("c10").value;
var w10 = (parseInt(x10) * parseInt(y10) * parseInt(z10))
d10.value = w10;}

function m10() {
    if (d10.value == 0){
        document.getElementById('m10').bgColor = 'green';
        document.getElementById('n10').bgColor = 'green';
        document.getElementById('n10').innerHTML = 'No existe riesgo de fallo';
        }
    if (d10.value >=1 && d10.value <= 124){
        document.getElementById('m10').bgColor = 'yellow';
        document.getElementById('n10').bgColor = 'yellow';
        document.getElementById('n10').innerHTML = 'Riesgo de falla bajo';
        }
    if (d10.value >=125 && d10.value <= 499){
        document.getElementById('m10').bgColor = 'orange';
        document.getElementById('n10').bgColor = 'orange';
        document.getElementById('n10').innerHTML = 'Riesgo de fallo medio';
        }
    if (d10.value >=500 && d10.value <= 1000){
        document.getElementById('m10').bgColor = 'red';
        document.getElementById('n10').bgColor = 'red';
        document.getElementById('n10').innerHTML = 'Alto riesgo de fallo';
        }
    if (d10.value >=1001){
        document.getElementById('m10').bgColor = 'white';
        document.getElementById('n10').bgColor = 'white';
        document.getElementById('n10').innerHTML = 'NO APLICA';
        }
      }
