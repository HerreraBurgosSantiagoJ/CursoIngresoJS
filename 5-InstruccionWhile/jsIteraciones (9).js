function mayor(numero1,numero2)
{
    if (numero1>numero2)
    {
        return numero1
    }
    else
    {
        return numero2
    }
}
function menor(numero1,numero2)
{
  if (numero1<numero2)
  {
      return numero1
  }
  else
  {
      return numero2
  }
}
function mostrar()
{
  var respuesta='si';
  var maximo=0;
  var minimo;
  respuesta=prompt("Ingrese un número, para terminar ingrese 'no'");
  minimo=respuesta;
	while(respuesta!='no')
	{
      if (respuesta!='no')
      {
          maximo=mayor(maximo,parseInt(respuesta));
          minimo=menor(minimo,parseInt(respuesta));
      }
      respuesta=prompt("Ingrese un número, para terminar ingrese 'no'");
  }
  document.getElementById("maximo").value=maximo;
  document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN
