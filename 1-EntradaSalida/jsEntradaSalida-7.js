/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var valorUno;
    var valorDos;
    var suma;
    valorUno=parseInt(document.getElementById("numeroUno").value);
    valorDos=parseInt(document.getElementById("numeroDos").value);
    suma=valorUno+valorDos;
    alert(valorUno+"+"+valorDos+"="+suma);
}

function restar()
{
	var valorUno;
    var valorDos;
    var resta;
    valorUno=parseInt(document.getElementById("numeroUno").value);
    valorDos=parseInt(document.getElementById("numeroDos").value);
    resta=valorUno-valorDos;
    alert(valorUno+"-"+valorDos+"="+resta);
}

function multiplicar()
{ 
	var valorUno;
    var valorDos;
    var mult;
    valorUno=parseInt(document.getElementById("numeroUno").value);
    valorDos=parseInt(document.getElementById("numeroDos").value);
    mult=valorUno*valorDos;
    alert(valorUno+"x"+valorDos+"="+mult);
}

function dividir()
{
	var valorUno;
    var valorDos;
    var div;
    valorUno=parseInt(document.getElementById("numeroUno").value);
    valorDos=parseInt(document.getElementById("numeroDos").value);
    div=valorUno/valorDos;
    alert(valorUno+"/"+valorDos+"="+div);
}

