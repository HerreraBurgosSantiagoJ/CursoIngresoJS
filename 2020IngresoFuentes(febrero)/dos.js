function mostrar()
{
  var peso;
  var precio;
  var tipo;
  var importe;
  var descuento;
  var alimentoCaroPrecio;
  var alimentoCaroTipo;
  var promedioPrecio=0;
  var tipos="vam";
  var cantidadVentas=0;
  var continuar=true;
  var mensaje;

  while(continuar)
  {
    peso=prompt('Ingrese el peso que lleva el cliente (mayor que 10 kg y menor a 1000 kg)');
    peso=parseInt(peso);
    while(isNaN(peso)||peso<10||peso>1000)
    {
        peso=prompt('Error. El dato ingresado es incorrecto, el peso que lleva el cliente debe ser mayor que 10 kg y menor a 1000 kg');
        peso=parseInt(peso);
    }

    precio=prompt('Ingrese el precio del producto por kg (mayor que 0)');
    precio=parseInt(precio);
    while(isNaN(precio)||precio<1)
    {
        precio=prompt('Error. El dato ingresado es incorrecto, el precio del producto por kg debe ser mayor que 0)');
        precio=parseInt(precio);
    }

    tipo=prompt('Ingrese si lleva un producto de tipo vegetal,animal o mezcla("v", "a" o "m")');
    tipo=tipo.toLowerCase();
    while(tipos.indexOf(tipo)==-1)
    {
        tipo=prompt('Error. El dato ingresado es incorrecto, lleva un producto de tipo vegetal,animal o mezcla("v", "a" o "m")?');
        tipo=tipo.toLowerCase();
    }

    if(cantidadVentas==0||alimentoCaroPrecio<precio)
    {
      alimentoCaroPrecio=precio;
      alimentoCaroTipo=tipo;
    }

    mensaje="";
    importe=peso*precio;
    mensaje+="El importe total a pagar es de "
    if (peso>100)
    {
      if (peso>300)
      {
        descuento=0.75;
      }
      else
      {
        descuento=0.85;
      }
      importe*=descuento;
      descuento=importe-peso*precio;
      mensaje+=importe+" pesos con un descuento de "+descuento+" pesos.";
    }
    else
    {
      mensaje+=importe+" pesos.";
    }

    alert(mensaje)

    promedioPrecio+=precio;
    cantidadVentas++;
    descuento=1;
    continuar=confirm("Desea continuar el ingreso de datos?");
  }
  promedioPrecio/=cantidadVentas;
  mensaje="El tipo de alimento mas caro es "+alimentoCaroTipo+".\nEl promedio de precio por kilo en total es de "+promedioPrecio+" pesos.";
  alert(mensaje);
}
/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/
