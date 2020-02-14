function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while (respuesta!='no')
	{
		respuesta=prompt('Ingrese un numero (para terminar ingrese "no")');
		if (respuesta!='no')
		{
			respuesta=parseInt(respuesta);
			acumulador+=respuesta;
			contador+=1;
		}
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}