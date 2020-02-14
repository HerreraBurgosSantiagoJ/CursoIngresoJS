function mostrar()
{
    var laHora = document.getElementById('hora').value;
    laHora=parseInt(laHora);
    if (laHora>6 && laHora<12)
    {
        alert("Es de mañana.");
    }
}