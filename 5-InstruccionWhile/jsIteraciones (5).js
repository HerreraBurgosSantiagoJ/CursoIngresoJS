function mostrar()
{
    var sexo="";
    while (sexo!="f" && sexo!="m")
    {
        sexo=prompt("ingrese f ó m.");
    }
    if (sexo=="f")
    {
        sexo="Femenino"
    }
    else
    {
        sexo="Masculino"
    }
    document.getElementById('Sexo').value=sexo;
}