/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.

*/



function mostrar()
{
    var numeroIngresadoUno;
    var numeroIngresadoDos;
    var resta;
    var resto;

    numeroIngresadoUno=prompt("Ingrese el primer número");
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=prompt("Ingrese el segundo número");
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    resta=numeroIngresadoUno-numeroIngresadoDos;
    resto=numeroIngresadoUno%numeroIngresadoDos;

    if(numeroIngresadoDos==numeroIngresadoUno)
    {
        alert(numeroIngresadoUno*numeroIngresadoDos);
    } else 
    {
        if(resto==0)
        {
            alert(resta);
        } else 
        {
            if (resto>3)
            {
                alert("El resto es mayor que 3");
            } else 
            {
            alert(resto);
            }
        }
    }
}
