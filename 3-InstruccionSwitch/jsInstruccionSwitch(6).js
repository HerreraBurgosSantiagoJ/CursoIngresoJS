function momentoDelDia(hora)
{
    var parteDelDia="";
    if (hora>6 && hora<12)
    {
        parteDelDia="mañana";
    }
    if (hora>11 && hora<20)
    {
        parteDelDia="tarde";
    }
    if (hora>19 && hora<25)
    {
        parteDelDia="noche";
    }
    if (hora>-1 && hora<7)
    {
        parteDelDia="noche";
    }
    if (hora>24 || hora<0)
    {
        parteDelDia="error";
    }
    return parteDelDia
}

function mostrar()
{
    var laHora = parseInt(document.getElementById('hora').value);
    var parteDelDia=momentoDelDia(laHora);
    switch (parteDelDia)
    {
        case "mañana":
        {
            alert("Es de "+parteDelDia+".");
            break;
        }
        case "tarde":
        {
            alert("Es de "+parteDelDia+".");
            break;
        }
        case "noche":
        {
            alert("Es de "+parteDelDia+".");
            break;
        }
        case "error":
        {
            alert("La hora indicada no existe.");
            break;
        }
    }
}