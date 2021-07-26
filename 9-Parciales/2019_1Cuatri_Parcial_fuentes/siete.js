/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Parcial siete 2019

Enunciado

    Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
    el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:


    a) El promedio de las alturas totales.
    b) La altura más baja y el sexo de esa persona.
    c) La cantidad de muheres que su altura supere los 190 centimetros.

*/



function mostrar()
{
    var contador;
    var alturaJugadores;
    var sexo;
    var totalAlturas;
    var jugadorMasBajo;
    var jugadorMasAlto;
    var alturaPromedio;
    var sexoMasAlto;
    var sexoMasBajo;
    var banderaPrimerIngreso;
    var mujeresAltas;

    contador=0;
    banderaPrimerIngreso="True";
    totalAlturas=0;
    mujeresAltas=0;

    while(contador<5)
    {
        alturaJugadores=prompt("Ingrese la altura del jugador/a (en cm sin puntos)");
        alturaJugadores=parseInt(alturaJugadores);

        while(alturaJugadores<0||alturaJugadores>250)
        {
            alturaJugadores=prompt("Error, favor volver a ingresar la altura");
            alturaJugadores=parseInt(alturaJugadores);
        }

        sexo=prompt("Ingrese el sexo del jugador/a");

        while(sexo!="f"&&sexo!="m")
        {
            sexo=prompt("Error, favor volver a ingresar el sexo");
        }
       
        alert("Jugador ingresado con éxito");

        if(alturaJugadores>jugadorMasAlto||banderaPrimerIngreso=="True")
        {
            jugadorMasAlto=alturaJugadores;
            sexoMasAlto=sexo; 
        } 
        
        if (alturaJugadores<jugadorMasBajo||banderaPrimerIngreso=="True")
        {
            jugadorMasBajo=alturaJugadores;
            sexoMasBajo=sexo;
            banderaPrimerIngreso=="False";
        }

        if(alturaJugadores>190&&sexo=="f")
        {
            mujeresAltas=mujeresAltas+1;
        }
        
        contador=contador+1;
        totalAlturas=totalAlturas+alturaJugadores;
    }

    alturaPromedio=totalAlturas/contador;

    if (sexoMasBajo=="f")
    {
        sexoMasBajo="Femenino";
    } else
    {
        sexoMasBajo="Masculino";
    }

    alert("La altura promedio es: " + alturaPromedio + ". La altura mas baja es " 
    + jugadorMasBajo + " cm" + " y el sexo de ese jugador es "+ sexoMasBajo + ". La cantidad de mujeres que superan los 190cm es: "
    + mujeresAltas);
}
