function mostrar()
{
  var nombre;
  var edad;
  var sexo;
  var sexos="fm";
  var estadoCivil;
  var estadoCivils="solterocasadoviudo";
  var continuar=true;

  while(continuar)
  {
    edad=prompt('Ingrese la edad del pasajero (mayor de 18)');
    edad=parseInt(edad);
    while(isNaN(edad)||edad<19)
    {
        edad=prompt('Error. El dato ingresado es incorrecto, la edad del pasajero debe ser mayor de 18');
        edad=parseInt(edad);
    }

    sexo=prompt('Ingrese el sexo del pasajero ("f" o "m")');
    sexo=sexo.toLowerCase();
    while(sexos.indexOf(sexo)==-1)
    {
        sexo=prompt('Error. El dato ingresado es incorrecto, el sexo del pasajero debe ser "f" o "m"');
        sexo=sexo.toLowerCase();
    }

    estadoCivil=prompt('Ingrese el estado civil del pasajero ("soltero", "casado" o "viudo")');
    estadoCivil=estadoCivil.toLowerCase();
    while(estadoCivils.indexOf(estadoCivil)==-1)
    {
        estadoCivil=prompt('Error. El dato ingresado es incorrecto, el estado civil del pasajero debe ser "soltero", "casado" o "viudo"');
        estadoCivil=estadoCivil.toLowerCase();
    }
    continuar=confirm("Desea continuar el ingreso de datos?");
  }
}
/*En el ingreso a un viaje en crucero nos solicitan
nombre ,
edad(mayores de 18),
sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/
