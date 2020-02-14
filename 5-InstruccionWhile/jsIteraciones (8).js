function seguir(respuesta)
{
	if (respuesta=='no')
	{
		return false
	}
	return true
}
function mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta='';
	while (seguir(respuesta))
	{
		respuesta=prompt("Ingrese un número, para terminar ingrese 'no'")
		if (seguir(respuesta))
		{
			respuesta=parseInt(respuesta)
			if(respuesta>-1)
			{
				positivo+=respuesta;
			}
			else
			{
				negativo*=respuesta;
			}
		}
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN
