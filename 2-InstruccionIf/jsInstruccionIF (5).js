function mostrar()
{
//tomo la edad
    var edad;
    edad=parseInt(document.getElementById("edad").value);
    if (edad<13||edad>18)
    {
        alert("Usted no es un adolecente");
    }
}//FIN DE LA FUNCIÓN
