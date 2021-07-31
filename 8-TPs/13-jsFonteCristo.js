/*El departamento de NUMEROS ESPECIALES del instituto matemático FonteCristo nos está pidiendo una aplicación 
que verifique las distintas cualidades de los números.

Para cada una de estas acciones debemos realizar la lógica para verificar las cualidades pedidas:

A. Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
B. Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
C. Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran 
desde el 1 al 100.
D. Se pedirán un número positivo y se mostrará si el número es un número primo o no.
E. Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/



function NumerosPares ()
{
    var numeroIngresado;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    var numerosPares;

    numerosPares=0;

    while(numeroIngresado>0)
    {
       if(numeroIngresado%2==0)
       {
           numerosPares=numerosPares+1;
       }

       numeroIngresado=numeroIngresado-1;
    }

    alert(numerosPares);
   
}

function NumerosImpares() 
{
    var numeroIngresado;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    var numerosImpares;

    numerosImpares=0;

    while(numeroIngresado>0)
    {
        if(numeroIngresado%2!=0)
        {
            numerosImpares=numerosImpares+1;
        }
        
        numeroIngresado=numeroIngresado-1;
    }
    alert(numerosImpares);
}

function NumerosDivisibles() 
{
    var numeroIngresado;
    var numerosDivisibles;
    var contador;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    contador=1;
    numerosDivisibles=0;

    while(contador<100)
    {
        if(contador%numeroIngresado==0)
        {
            numerosDivisibles=numerosDivisibles+1;
        }   

        contador=contador+1;
    }

    alert(numerosDivisibles);
}

function VerificarPrimo () 
{
    var numeroIngresado;
    var contador;
    var numerosDivisibles;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    contador=1;
    numerosDivisibles=0;


    while(contador<=numeroIngresado)
    {
        if(numeroIngresado%contador==0)
        {
            numerosDivisibles=numerosDivisibles+1;
        }   

        contador=contador+1;

    }

    if(numerosDivisibles>2)
    {
        alert("El número no es primo");
    } else
    {
        alert("El número es primo");
    }
}

function NumerosPrimos()
{
    var numeroIngresado;
    var contador;
    var numerosPrimos;
    var numerosDivisibles;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);

    numerosPrimos=0;
    contador=1;
    numerosDivisibles=0;
    
    
    while(numeroIngresado>1)
    {
        while(contador<=numeroIngresado)
        {
            if(numeroIngresado%contador==0)
            {
                numerosDivisibles=numerosDivisibles+1;
            }

            contador=contador+1;
        }
        contador=1;
    

        if (numerosDivisibles<3)
        {
            numerosPrimos=numerosPrimos+1;
        }

        numeroIngresado=numeroIngresado-1;
        numerosDivisibles=0;
    }

    alert(numerosPrimos);
}

function ComenzarIngreso () 
{
}
