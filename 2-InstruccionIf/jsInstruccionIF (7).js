function mostrar()
{
//tomo la edad
    var edad;
    var estadoCivil;
    edad=parseInt(document.getElementById("edad").value);
    estadoCivil=document.getElementById("estadoCivil").value
    if (edad<19&&estadoCivil!="Soltero")
    {
        alert("Usted es muy pequeño para no ser SOLTERO");
    }
    else if(edad<18)
    {
        alert("Usted es menor de edad");
    }
    else
    {
        alert("Usted es mayor de edad");
    }
}//FIN DE LA FUNCIÓN
