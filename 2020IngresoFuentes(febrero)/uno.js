
function mostrar()
{
  var tipo;
  var tipos="barbijojabónalcohol";
  var precio;
  var cantidadUnidades;

  for(var contador=0;contador<5;contador++)
  {
    tipo=prompt('Ingrese el tipo de producto ("barbijo" , "jabón" o "alcohol")');
    tipo=tipo.toLowerCase();
    while(tipos.indexOf(tipo)==-1)
    {
      tipo=prompt('Error. El dato ingresado es incorrecto, el tipo de producto deve ser "barbijo", "jabón" o "alcohol"');
      tipo=tipo.toLowerCase();
    }

    precio=prompt('Ingrese el precio del producto (entre 100 y 300 pesos)');
    precio=parseInt(precio);
    while(isNaN(precio)||precio<100||precio>300)
    {
        precio=prompt('Error. El dato ingresado es incorrecto, el precio del producto debe estar entre 100 y 300 pesos');
        precio=parseInt(precio);
    }

    cantidadUnidades=prompt('Ingrese la cantidad de unidades (mayor que 0 y no mayor que 1000 unidades)');
    cantidadUnidades=parseInt(cantidadUnidades);
    while(isNaN(cantidadUnidades)||cantidadUnidades<1||cantidadUnidades>1000)
    {
        cantidadUnidades=prompt('Error. El dato ingresado es incorrecto, la cantidad de unidades deve ser mayor que 0 y no mayor que 1000 unidades');
        cantidadUnidades=parseInt(cantidadUnidades);
    }
    marca=prompt("");
    fabricante=prompt("");
  }
}
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/
