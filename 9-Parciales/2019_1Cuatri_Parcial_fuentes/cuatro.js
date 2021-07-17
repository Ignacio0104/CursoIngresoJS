/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Enunciado:

    Pedir dos números y mostrar el resultado:
    Si son iguales los muestro concatenados.
    Si el primero es mayor, los resto,
    de lo contrario los sumo.
    Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
    "la resta es xxx y superó el 10".
*/


function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resta;
    var suma;

    numeroUno=prompt("Ingrese el primer número");


    numeroDos=prompt("Ingrese el segundo número");


    resta=numeroUno-numeroDos;
    suma=numeroUno+numeroDos;

    if (numeroUno==numeroDos) 
    {
        alert(numeroUno + numeroDos);

    } else 
    {
        if (numeroUno<numeroDos) 
        {
            var suma;

            suma=parseInt(numeroUno)+ parseInt(numeroDos);
            alert(suma);
        } else 
        {
            if (numeroUno>numeroDos) 
            {
                if (resta>10) 
                {
                    var resta;

                    resta=parseInt(numeroUno)-parseInt(numeroDos);
                    alert("La resta es " + resta + " y superó el 10");
                } else
                {
                    alert(resta);
                }
            
            } else 
            {
               alert("Número ingresado inválido");
            }

        }
    }
}
