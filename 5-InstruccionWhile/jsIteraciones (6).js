function mostrar()
{
	var contador=0;
	var acumulador=0;
	while (contador<5)
	{
		acumulador+=parseInt(prompt("Ingrese un numero"));
		contador+=1;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
}