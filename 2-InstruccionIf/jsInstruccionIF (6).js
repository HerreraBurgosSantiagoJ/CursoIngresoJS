function mostrar()
{
//tomo la edad
    var edad;
    edad=parseInt(document.getElementById("edad").value);
    if (edad>18)
    {
        alert("Usted es mayor de edad");
    }
    else if(edad>12&&edad<19)
    {
        alert("Usted es un adolecente");
    }
    else
    {
        alert("Usted es un niño");
    }
}//FIN DE LA FUNCIÓN
