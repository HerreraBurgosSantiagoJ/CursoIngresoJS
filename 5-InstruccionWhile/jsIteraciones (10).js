function mostrar()
{
  var contadorPositivo=0;
  var contadorNegativo=0;
  var contadorPares=0;
  var contadorCeros=0;
  var negativos=0;
  var positivos=0;
  var promedioPositivo;
  var promedioNegativo;
  var diferencia;
	var respuesta="si";
	while(respuesta!="no")
	{
      respuesta=prompt("Ingrese un número, para terminar ingrese 'no'");
      if (respuesta!="no") {
          respuesta=parseInt(respuesta);
          if (esPositivo(respuesta)){
            positivos+=respuesta;
            contadorPositivo+=1;
          }
          else{
            negativos+=respuesta;
            contadorNegativo+=1;
          }
          if (esPar(respuesta)){
            contadorPares+=1;
          }
          if (respuesta==0){
            contadorCeros+=1;
          }
      }
  }
  promedioNegativo=(-negativos)/contadorNegativo;
  promedioPositivo=positivos/contadorPositivo;
  diferencia=positivos+negativos
  document.write("La suma de los numeros positivos es: "+positivos);
  document.write("La suma de los numeros negativos es: "+negativos);
  document.write("La cantidad de los numeros positivos es: "+contadorPositivo);
  document.write("La cantidad de los numeros negativos es: "+contadornegativo);
  document.write("La cantidad de ceros es: "+contadorCeros);
  document.write("La cantidad de numeros pares es: "+contadorPares);
  document.write("El promedio de numeros positivos es: "+promedioPositivo);
  document.write("El promedio de numeros negativos es: "+promedioNegativo);
  document.write("La diferencia entre los positivos y los negativos es: "+diferencia);
}
