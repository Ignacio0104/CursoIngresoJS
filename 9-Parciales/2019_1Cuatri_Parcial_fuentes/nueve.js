/*

Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:

a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.


*/

function mostrar()
{

    var paisIngresado;
    var habitantes;
    var totalHabitantes;
    var temperatura;
    var temperaturaPar;
    var poblacionMinima;
    var paisMenosHabitantes;
    var paisesMasDeCuarenta;
    var totalPaises;
    var promedioHabitantes;
    var temperaturaMinima;
    var paisFrio;
    var comenzar;
    var contador;

    temperaturaPar=0;
    paisesMasDeCuarenta=0;
    contador=0;
    totalPaises=0;
    totalHabitantes=0;

    comenzar=prompt("Desea ingresar el primer dato? y (si) o n (no)");

    while(comenzar=="y") 
    {
        paisIngresado=prompt("Ingrese el nombre del país");

        while(paisIngresado=="")
        {
            paisIngresado=prompt("Dato ingresado inválido, inténtelo de nuevo");
        }
        habitantes=prompt("Ingrese la cantidad de habitantes (en millones)");
        habitantes=parseInt(habitantes);

        while(habitantes<1||habitantes>7000)
        {
            habitantes=prompt("Dato ingresado inválido, inténtelo de nuevo");
            habitantes=parseInt(habitantes);
        }

        temperatura=prompt("Ingrese la temperatura mínima de ese país");
        temperatura=parseInt(temperatura);

        while(temperatura>50||temperatura<-50)
        {
            temperatura=prompt("Dato ingresado inválido, inténtelo de nuevo");
            temperatura=parseInt(temperatura);
        }

        totalPaises=totalPaises+1;
        totalHabitantes=totalHabitantes+habitantes;

        if(temperatura%2==0)
        {
            temperaturaPar=temperaturaPar+1;
        }

        if(habitantes<poblacionMinima||contador==0) 
        {
            poblacionMinima=habitantes;
            paisMenosHabitantes=paisIngresado;
        }

        if(temperatura>40) 
        {
            paisesMasDeCuarenta=paisesMasDeCuarenta+1;
        }

        if(temperatura<temperaturaMinima||contador==0)
        {
            paisFrio=paisIngresado;
            temperaturaMinima=temperatura;
        }

        contador=contador+1;
        comenzar=prompt("Desea ingresar otro país? y (si) o n (no)")
    }

    promedioHabitantes=totalHabitantes/totalPaises;

    document.write("La cantidad de temperaturas pares es: " + temperaturaPar + "<br>" +
    "El pais con menos habitantes es: " + paisMenosHabitantes + "<br>" + 
    "La cantidad de países que superan los 40 grados es: " + paisesMasDeCuarenta + "<br>" + 
    "El promedio de habitantes entre los paises ingresados es de: " + promedioHabitantes.toFixed(2) + " millones" + "<br>" + 
    "La temperatura mínima ingresada es: " + temperaturaMinima + " grados, y corresponde a " + paisFrio);

}
