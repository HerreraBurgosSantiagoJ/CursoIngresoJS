/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroA;
    var numeroB;
    var suma;
    numeroA=parseInt(document.getElementById("numeroUno").value);
    numeroB=parseInt(document.getElementById("numeroDos").value);
    suma=numeroA+numeroB;
    alert(numeroA+"+"+numeroB+"="+suma);
}

