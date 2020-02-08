function mostrar()
{
  //Genero el número RANDOM entre 1 y 10
    var nota;
    nota=Math.floor(Math.random() * 11);
    if (nota<4)
    {
        alert("Vamos, la proxima se puede su nota es un "+nota);
    }
    else if(nota>3&&nota<9)
    {
        alert("Aprobó, su nota es un "+nota);
    }
    else
    {
        alert("Exellente, su nota es un "+nota);
    }
}//FIN DE LA FUNCIÓN
