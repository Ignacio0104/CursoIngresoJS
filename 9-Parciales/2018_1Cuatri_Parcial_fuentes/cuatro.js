/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".

*/

function mostrar() 
{
    var numeroUno;
    var numeroDos;
    var resta;
    var suma;

    numeroUno=prompt("Ingrese el primer número");
    numeroDos=prompt("Ingrese el segundo número");

    if(numeroDos==numeroUno)
    {
        alert(numeroUno+numeroDos);

    } else 
    {   
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        resta=numeroUno-numeroDos;
        suma=numeroUno+numeroDos;

        if(numeroUno>numeroDos)
        {
            alert(resta);

        } else 
        {   if(numeroUno<numeroDos)
            {
                if (suma>10)
                {
                    alert("La suma es "+ suma +" superó el 10")
                } else
                {
                    alert(suma);
                }
            }
        }
    }
}
