/*
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , 
el sexo (validar) y la nota del final (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:

a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino

*/


function mostrar()
{
    var edadIngresada;
    var sexoIngresado;
    var notaIngresada;
    var comenzar;
    var varonesAprobados;
    var notasMenores;
    var cantidadMenores;
    var notasAdolescentes;
    var cantidadAdolescentes;
    var notasMayores;
    var cantidadMayores;
    var promedioMenores;
    var promedioAdolescentes;
    var promedioMayores;
    var notasVarones;
    var notasMujeres;
    var cantidadVarones;
    var cantidadMujeres;

    contador=0;
    varonesAprobados=0;
    notasAdolescentes=0;
    notasMayores=0;
    notasMenores=0;
    cantidadMayores=0;
    cantidadAdolescentes=0;
    cantidadMenores=0;
    notasMujeres=0;
    notasVarones=0;
    cantidadMujeres=0;
    cantidadVarones=0;

    comenzar=prompt("Desea iniciar la carga de datos? y (si) o n (no)");

    while(comenzar=="y")
    {
        edadIngresada=prompt("Ingrese la edad del estudiante");
        edadIngresada=parseInt(edadIngresada);

        while(edadIngresada<1||edadIngresada>90)
        {
            edadIngresada=prompt("Error, edad fuera de rango. Vuelva a ingresar la edad")
            edadIngresada=parseInt(edadIngresada);
        }

        sexoIngresado=prompt("Ingrese el sexo del estudiante. f para femenino y m para masculino");

        while(sexoIngresado!="f"&&sexoIngresado!="m")
        {
            sexoIngresado=prompt("Error, sexo ingresado inválido. Vuelva a ingresar el sexo");
        }

        notaIngresada=prompt("Ingrese la nota del estudiante");
        notaIngresada=parseInt(notaIngresada);

        while(notaIngresada>10)
        {
            notaIngresada=prompt("Error, nota fuera de rango. Vuelva a ingresarla");
        }

        if(sexoIngresado=="m"&&notaIngresada>6)
        {
            varonesAprobados=varonesAprobados+1;
        }

        if(edadIngresada<13)
        {
            notasMenores=notasMenores+notaIngresada;
            cantidadMenores=cantidadMenores+1;
        } else
        {
            if(edadIngresada<17)
            {
                notasAdolescentes=notasAdolescentes+notaIngresada;
                cantidadAdolescentes=cantidadAdolescentes+1;
            } else
            {
                notasMayores=notasMayores+notaIngresada;
                cantidadMayores=cantidadMayores+1;
            }
        }
    
        if(sexoIngresado=="f")
        {
            notasMujeres=notasMujeres+notaIngresada;
            cantidadMujeres=cantidadMujeres+1;
        } else 
        {
            notasVarones=notasVarones+notasVarones;
            cantidadVarones=cantidadVarones+1;
        }    
    }


    if(notasMenores>1&&cantidadMenores>1)
    {
        promedioMenores=notasMenores/cantidadMenores;
    }

    if(notasMayores>1&&cantidadMayores>1)
    {
        promedioMayores=notasMayores/cantidadMayores;
    }

    if(notasAdolescentes>1&&cantidadAdolescentes>1)
    {
        promedioAdolescentes=notasAdolescentes/cantidadAdolescentes;
    }

  
    
}
