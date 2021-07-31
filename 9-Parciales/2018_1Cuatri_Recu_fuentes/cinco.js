/*

AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos 
datos estadísticos:

Se ingresará hasta que usuario decida:'

Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).

Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

*/


function mostrar()
{

    var comenzar;
    var personaCaliente;
    var mayorTemperatura;
    var vacunaCaliente;
    var banderaPrimerIngreso;
    var contadorMujeresSputnikV;
    var contadorHombres;
    var contadorMujeres;
    var contadorNb;
    var contadorNbAstraOtra;
    var astraCaliente;
    var sputnikVHombresFrios;
    var AcumuladorEdadSputnikVHombresFrios;
    var promedioSputnikVFrios;
    var personasVacunadas;
    var personasVacunadasAstra;
    var personasVacunadasSputnikV;
    var personasVacunadasOtra;
    var vacunaMasAplicada;
    var porcentajeAstrazeneca;
    var acumuladorEdadAstra;
    var acumuladorEdadSputnikV;
    var acumuladorEdadOtra;
    var promedioEdadAstra;
    var promedioEdadSput;
    var promedioEdadOtra;
    var porcentajeMujeres;
    var porcentajeNb;
    var porcentajeHombres;


    comenzar=prompt("Desea comenzar con la carga de datos? si (y) o n (no)");
    banderaPrimerIngreso=true;
    contadorMujeresSputnikV=0;
    contadorMujeres=0;
    contadorHombres=0;
    contadorNb=0;
    contadorNbAstraOtra=0;
    astraCaliente=0;
    sputnikVHombresFrios=0;
    AcumuladorEdadSputnikVHombresFrios=0;
    personasVacunadas=0;
    personasVacunadasAstra=0;
    personasVacunadasSputnikV=0;
    personasVacunadasOtra=0;
    acumuladorEdadAstra=0;
    acumuladorEdadOtra=0;
    acumuladorEdadSputnikV=0;


    while(comenzar=="y")
    {
        var nombreIngresado;
        var edadIngresada;
        var generoIngresado;
        var vacunaIngresada;
        var temperaturaCorporal;

        nombreIngresado=prompt("Ingrese el nombre");

        edadIngresada=prompt("Ingrese la edad");
        edadIngresada=parseInt(edadIngresada);

        while(edadIngresada<1||edadIngresada>99)
        {
            edadIngresada=prompt("Error, edad fuera de rango. Vuelva a ingresarla");
            edadIngresada=parseInt(edadIngresada);
        }

        generoIngresado=prompt("Ingrese el genero. f (femenino), m (masculino) o nb (no binario)");

        while(generoIngresado!="f"&&generoIngresado!="m"&&generoIngresado!="nb")
        {
            generoIngresado=prompt("Error, dato ingresado inválido");
        }

        vacunaIngresada=prompt("Ingrese la vacuna. SputnikV, AstraZeneca u Otra.")

        while(vacunaIngresada!="SputnikV"&&vacunaIngresada!="AstraZeneca"&&vacunaIngresada!="Otra")
        {
            vacunaIngresada=prompt("Error, dato ingresado inválido");
        }

        temperaturaCorporal=prompt("Ingrese la temperatura corporal.")
        temperaturaCorporal=parseInt(temperaturaCorporal);

        while(temperaturaCorporal<28||temperaturaCorporal>45)
        {
            temperaturaCorporal=prompt("Error, temperatura fuera de rango");
            temperaturaCorporal=parseInt(temperaturaCorporal);
        }

        if(temperaturaCorporal>mayorTemperatura||banderaPrimerIngreso) //punto A
        {
            mayorTemperatura=temperaturaCorporal;
            personaCaliente=nombreIngresado;
            vacunaCaliente=vacunaIngresada;
            banderaPrimerIngreso=false;
        }

        switch(generoIngresado)
        {
            case "f":
                contadorMujeres=contadorMujeres+1;
                if(vacunaIngresada=="SputnikV")
                {
                    contadorMujeresSputnikV=contadorMujeresSputnikV+1; //punto b
                }
                break;
            case "nb":
                contadorNb=contadorNb+1;
                if(vacunaIngresada!="SputnikV")
                {
                    contadorNbAstraOtra=contadorNbAstraOtra+1; //punto c
                }
                break;  
            case "m":
                contadorHombres=contadorHombres+1;
                if(vacunaIngresada=="SputnikV"&&temperaturaCorporal<37) //punto e
                {
                    sputnikVHombresFrios=sputnikVHombresFrios+1;
                    AcumuladorEdadSputnikVHombresFrios=AcumuladorEdadSputnikVHombresFrios+edadIngresada;
                }
                break;
        }

        switch(vacunaIngresada) //punto g
        {
            case "AstraZeneca":
                personasVacunadasAstra=personasVacunadasAstra+1;
                acumuladorEdadAstra=acumuladorEdadAstra+edadIngresada;
                if(temperaturaCorporal>38)
                {
                    astraCaliente=astraCaliente+1; //punto d
                }
                break;
            case "SputnikV":
                personasVacunadasSputnikV=personasVacunadasSputnikV+1;
                acumuladorEdadSputnikV=acumuladorEdadSputnikV+edadIngresada;
                break;
            case "Otra":
                personasVacunadasOtra=personasVacunadasOtra+1;
                acumuladorEdadOtra=acumuladorEdadOtra+edadIngresada;
                break; 
        }

        personasVacunadas=personasVacunadas+1; //punto f
        comenzar=prompt("Desea ingresar otro dato? y (si) o n (no)");
    }

    document.write("El nombre de la persona con mayor temperatura es " + personaCaliente + 
    " y la vacuna que se aplicó es la " + vacunaCaliente + "<br>"); //punta a

    document.write("La cantidad de mujeres que recibieron la SputnikV es de " + contadorMujeresSputnikV+ "<br>"); //punto b

    document.write("La cantidad de personas de género no binario que recibieron AstraZeneca u otra es de " +
    contadorNbAstraOtra+ "<br>"); //punto c

    document.write("La cantidad de personas que recibieron la vacuna AstraZeneca y presentaron mas de 38 grados es de "
    + astraCaliente + "<br>");  //punto d

    if(sputnikVHombresFrios>0)
    {
        promedioSputnikVFrios=AcumuladorEdadSputnikVHombresFrios/sputnikVHombresFrios; //punto e
        document.write("El promedio de edad de los hombres que recibieron la vacuna SputnikV y no presentaron fiebre es de "
        + promedioSputnikVFrios.toFixed(2) + "<br>");
    }

    porcentajeAstrazeneca=personasVacunadasAstra*100/personasVacunadas; //punto f
    document.write("El porcentaje de personas que recibieron la AstraZeneca es de " + porcentajeAstrazeneca.toFixed(2)+
    "%" + "<br>");

    if(personasVacunadasAstra>personasVacunadasOtra&&personasVacunadasAstra>personasVacunadasSputnikV)
    {
        vacunaMasAplicada="AstraZeneca";
    } else 
    {
        if(personasVacunadasOtra>personasVacunadasSputnikV)
        {
            vacunaMasAplicada="Otra";
        } else 
        {
            vacunaMasAplicada="SputnikV"; //punto g 
        }
    }

    if(personasVacunadasSputnikV>0)
    {
        promedioEdadSput=acumuladorEdadSputnikV/personasVacunadasSputnikV;
        document.write("El promedio de edad de las personas vacunadas con SputnikV es de " + promedioEdadSput.toFixed(2) + "<br>");
    } else 
    {
        document.write("No hubo vacunados con SputnikV");
    }

    if(personasVacunadasAstra>0)
    {
        promedioEdadAstra=acumuladorEdadAstra/personasVacunadasAstra;
        document.write("El promedio de edad de las personas vacunadas con Astrazeneca es de " + promedioEdadAstra.toFixed(2)+ "<br>");
    } else 
    {
        document.write("No hubo vacunados con AstraZeneca" + "<br>");
    }

    if(personasVacunadasOtra>0)
    {
        promedioEdadOtra=acumuladorEdadOtra/personasVacunadasOtra;
        document.write("El promedio de edad de las personas vacunadas con Otra es de " + promedioEdadOtra.toFixed(2)+ "<br>");
    } else 
    {
        document.write("No hubo vacunados con Otras vacunas" + "<br>");
    } // punto h

 
        porcentajeHombres=contadorHombres*100/personasVacunadas;
        porcentajeMujeres=contadorMujeres*100/personasVacunadas;
        porcentajeNb=contadorNb*100/personasVacunadas;
  
    document.write("El porcentaje de hombres vacunados es de " + porcentajeHombres + "%" + "<br>"
    + "El porcentaje de mujeres vacunadads es de " + porcentajeMujeres + "%" + "<br>"
    + "El porcentaje de personas genero no binario vacunadas es de " + porcentajeNb+ "%" + "<br>")

}
