/*
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) 
y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:

a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color

*/


function mostrar()
{
    var colorAuto;
    var valorAuto;
    var contador;
    var comenzar;
    var contadorRojo;
    var rojosCaros;
    var autosBaratos;
    var promedioAutos;
    var acumuladorValores;
    var valorMasCaro;
    var colorMasCaro;

    contador=0;
    contadorRojo=0;
    rojosCaros=0;
    autosBaratos=0;
    acumuladorValores=0;
    comenzar=prompt("Desea comenzar el ingreso de datos? y(si) o n (no)")

    while(comenzar=="y")
    {
        colorAuto=prompt("De que color es el vehículo? rojo, verde o amarillo");

        while(colorAuto!="rojo"&&colorAuto!="verde"&&colorAuto!="amarillo")
        {
            colorAuto=prompt("Error favor ingresar un color dentro de las opciones (rojo, verde o amarillo)");
        }

        valorAuto=prompt("Ingrese el valor del vehículo");
        valorAuto=parseInt(valorAuto);

        while(valorAuto>10000||valorAuto<0)
        {
            valorAuto=prompt("Error, valor ingresado fuera del rango. Vuelva a ingresarlo");
        }
        

        if(colorAuto=="rojo")
        {
            contadorRojo=contadorRojo+1;

            if(valorAuto>5000)
            {
                rojosCaros=rojosCaros+1;
            }
        }

        if(valorAuto<5000)
        {
            autosBaratos=autosBaratos+1;
        }

        if(valorAuto>valorMasCaro||contador==0)
        {
            valorMasCaro=valorAuto;
            colorMasCaro=colorAuto;
        }

        contador=contador+1;
        acumuladorValores=acumuladorValores+valorAuto;

        comenzar=prompt("Desea ingresar otro vehículo? y(si) o n (no)");

    }

    promedioAutos=acumuladorValores/contador;

    document.write("La cantidad de vehículos rojos es de: " + contadorRojo + "<br>" + 
    "La cantidad de vehículos rojos que superan los $5000 es de: " + rojosCaros + "<br>" +
    "La cantidad de vehículos con precio inferior a $5000 es de " + autosBaratos + "<br>" +
    "El promedio de todos los vehículos ingresados es de: " + promedioAutos.toFixed(2) + "<br>" + 
    "El vehículo mas caro cuesta $" + valorMasCaro + " y su color es " + colorMasCaro);
}
