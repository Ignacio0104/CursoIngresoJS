/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Parcial 2019
Ejercicio 03

Enunciado:

    Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.


*/ 


function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;


    precio=prompt("Ingrese el precio del producto: ");
    precio=parseFloat(precio);

    porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento (solo numero, sin signos)");
    porcentajeDeDescuento=parseFloat(porcentajeDeDescuento);

    descuento=precio*porcentajeDeDescuento/100;
   
    precioFinal=precio-descuento;

    document.getElementById("elPrecioFinal").value=precioFinal.toFixed(2);

}

//Entregado