/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Parcial 2019
Ejercicio 02

Enunciado:

    A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
    que sumados son xx kilos y el promedio de peso xx ".


*/ 


function mostrar()
{
  
    var nombrePersonaUno;
    var nombrePersonaDos;
    var pesoPersonaUno;
    var pesoPersonaDos;
    var pesoTotal;
    var promedioPeso;

    nombrePersonaUno=prompt("Ingrese su nombre");

    nombrePersonaDos=prompt("Ingrese el nombre de su pareja");
    
    pesoPersonaUno=prompt("Ingrese su peso (en kg)");
    pesoPersonaUno=parseFloat(pesoPersonaUno);

    pesoPersonaDos=prompt("Ingrese el peso de su pareja (en kg)");
    pesoPersonaDos=parseFloat(pesoPersonaDos);

    pesoTotal=pesoPersonaUno+pesoPersonaDos;

    promedioPeso=pesoTotal/2;

    mensaje="Ustedes se llaman ";
    mensaje=mensaje+nombrePersonaUno;
    mensaje=mensaje+" y ";
    mensaje=mensaje+nombrePersonaDos;
    mensaje=mensaje+" pesan ";
    mensaje=mensaje+pesoPersonaUno;
    mensaje=mensaje+" y ";
    mensaje=mensaje+pesoPersonaDos;
    mensaje=mensaje+" kilos, que sumados son ";
    mensaje=mensaje+pesoTotal;
    mensaje=mensaje+" kilos y el promedio de peso es ";
    mensaje=mensaje+promedioPeso;

    alert(mensaje);
}

//Entregado