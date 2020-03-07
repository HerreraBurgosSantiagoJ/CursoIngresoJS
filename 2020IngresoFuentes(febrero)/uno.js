
function mostrar()
{
  var tipo;
  var tipos="barbijojabónalcohol";
  var precio;
  var cantidadUnidades;
  var marca;
  var fabricante;
  var barbijoCaroPrecio;
  var barbijoCaroCantidad;
  var barbijoCaroFabricante;
  var itemNumerosoCantidad;
  var itemNumerosoFabricante;
  var cantidadJabones=0;
  var flagPrimerBarbijo=true;
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

    if (contador==0||itemNumerosoCantidad<cantidadUnidades)
    {
      itemNumerosoCantidad=cantidadUnidades;
      itemNumerosoFabricante=fabricante;
    }

    if((flagPrimerBarbijo&&tipo=="barbijo")||barbijoCaroPrecio<precio)
    {
      barbijoCaroPrecio=precio;
      barbijoCaroCantidad=cantidadUnidades;
      barbijoCaroFabricante=fabricante;
      flagPrimerBarbijo=false;
    }

    if (tipo=="jabón")
    {
      cantidadJabones++
    }
  }
}
/*
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/
