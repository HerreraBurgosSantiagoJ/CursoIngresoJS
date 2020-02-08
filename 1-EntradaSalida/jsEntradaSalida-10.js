/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
    var importe;
    var descuento=0.75;
    importe=parseInt(document.getElementById("importe").value);
    importe=importe*descuento;
    document.getElementById("resultado").value=importe;
}
