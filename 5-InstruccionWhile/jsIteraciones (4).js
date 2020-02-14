function mostrar()
{
	var numero=-1;
	while (numero<0 || numero>9)
	{
		numero=parseInt(prompt("Ingrese un número entre 0 y 9."));
	}
	document.getElementById("Numero").value="El numero ingresado ("+numero+") es valido"
}