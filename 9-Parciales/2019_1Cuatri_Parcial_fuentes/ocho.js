/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Parcial 08 2019

Enunciado

    Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
    hasta que el usuario quiera e informar al terminar el ingreso por document.write:

    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.

    Testeo con los siguientes datos
    ( d , -150(mal) , -50(bien))
    ( z , 0)
    ( g , 20)
    ( a , 150(mal) , 0(bien))
    ( b , 3)
    ( k , 7)
*/

function mostrar()
{

    var letraIngresada;
    var numeroIngresado;
    var comenzar;
    var contadorPares;
    var contadorImpares;
    var contadorCeros;
    var acumuladorPositivos;
    var contadorPositivos;
    var acumuladorNegativos;
    var contador;
    var maximo;
    var letraMaximo;
    var minimo;
    var letraMinimo;
    var promedioPositivos;

    contadorPares=0;
    contadorImpares=0;
    contadorCeros=0;
    acumuladorPositivos=0;
    contadorPositivos=0;
    acumuladorNegativos=0;
    
    contador=0;
    comenzar=prompt("Desea ingresar un dato? y (si) o n (no)");

    while(comenzar=="y")
    {
        letraIngresada=prompt("Ingrese la letra");

        numeroIngresado=prompt("Ingrese un número (entre -100 y 100)")
        numeroIngresado=parseInt(numeroIngresado);

        while(numeroIngresado<-100||numeroIngresado>100)
        {
            numeroIngresado=prompt("Error, el número ingresado está fuera del rango, vuelva a ingresarlo");
            numeroIngresado=parseInt(numeroIngresado);
        }

        if(numeroIngresado>maximo||contador==0)
        {
            maximo=numeroIngresado;
            letraMaximo=letraIngresada;
        }
        
        if(numeroIngresado<minimo||contador==0)
        {
            minimo=numeroIngresado;
            letraMinimo=letraIngresada;
        } 
        
        if(numeroIngresado%2==0)
        {
            contadorPares=contadorPares+1;
        } else 
        {
            contadorImpares=contadorImpares+1;
        }

        if(numeroIngresado>1)
        {
            contadorPositivos=contadorPositivos+1;
            acumuladorPositivos=acumuladorPositivos+numeroIngresado;
        } else 
        {
            if(numeroIngresado<-1)
            {
                acumuladorNegativos=acumuladorNegativos+numeroIngresado;
            } else 
            {
                contadorCeros=contadorCeros+1;
            }
        }

        contador=contador+1;
        comenzar=prompt("Desea ingresar otro dato? y (si) o n (no)");
    }

    if(contadorPositivos>1)
    {
        promedioPositivos=acumuladorPositivos/contadorPositivos;
    }

    document.write ("La cantidad de números pares es: " + contadorPares + "<br>" +
    "La cantidad de números impares es: " + contadorImpares + "<br>" +
    "La cantidad de ceros es: " + contadorCeros + "<br>" + 
    "El promedio de todos los números positivos es: " + promedioPositivos.toFixed(2) + "<br>"+
    "La suma de todos los negativos es: " + acumuladorNegativos + "<br>" + 
    "La letra y el valor máximo es: " + letraMaximo + " " + maximo + "<br>" +
    "La letra y el valor minimo es: " + letraMinimo + " " + minimo + "<br>")

}
