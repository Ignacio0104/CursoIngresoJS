/*

AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Parcial 2020
Ejercicio 02

Consignas A + B + D + F

Enunciado:

  Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
  hasta que el cliente quiera:

  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas,
  Precio por bolsa (más de cero ),

  Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.


  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.
  f) El tipo mas caro

*/

function mostrar()
{
  
  var comenzar;
  var precioCompra;
  var productoMayorCantidad;
  var mayorCantidadBolsas;
  var cantidadCal;
  var cantidadArena;
  var cantidadCemento;
  var productoCaro;
  var precioProductoCaro;
  var cantidadBolsasTotales;
  var primerProducto;
  var descuento;
  var precioConDescuento;

  comenzar=prompt("Desea comenzar con la carga de productos? y (si) o n (no)");
  precioCompra=0;
  cantidadArena=0;
  cantidadCal=0;
  cantidadCemento=0;
  cantidadBolsasTotales=0;
  primerProducto=true;
  descuento=1;

  while(comenzar=="y")
  {
    var tipoProducto;
    var cantidadBolsa;
    var precioProducto;
    
  
    tipoProducto=prompt("Ingrese el tipo de producto. (arena, cal o cemento)");

    while(tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento")
    {
      tipoProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
    }

    cantidadBolsa=prompt("Ingrese la cantidad de bolsas");
    cantidadBolsa=parseInt(cantidadBolsa);

    precioProducto=prompt("Ingrese el precio del producto");
    precioProducto=parseInt(precioProducto);

    while(precioProducto<1)
    {
      precioProducto=prompt("Error, el precio debe ser mayor a 0. Vuelva a ingresarlo");
      precioProducto=parseInt(precioProducto);
    }


    switch(tipoProducto)
    {
      case "cemento":
        cantidadCemento=cantidadCemento+cantidadBolsa;
        break;
      case "arena":
        cantidadArena=cantidadArena+cantidadBolsa;
        break;
      case "cal":
        cantidadCal=cantidadCal+cantidadBolsa;
        break;
    }

    cantidadBolsasTotales=cantidadBolsasTotales+cantidadBolsa;

    if(precioProducto>precioProductoCaro||primerProducto)
    {
      precioProductoCaro=precioProducto;
      productoCaro=tipoProducto;
      primerProducto=false;
    }

    precioCompra=precioCompra+precioProducto;
    

    comenzar=prompt("Desea ingresar otro producto? y (si) o n (no)");

  }

  

  if(cantidadBolsasTotales>30)
  {
    descuento=0.75;
  } else 
  {
    if(cantidadBolsasTotales<30&&cantidadBolsasTotales>10)
    {
      descuento=0.85;
    }
  }

  precioConDescuento=precioCompra*descuento;

  alert("El precio final bruto de la compra es $" + precioCompra)

  if(precioConDescuento<precioCompra)
  {
    alert("E precio final con descuento es de $" + precioConDescuento);
  }

  if(cantidadCal>cantidadArena&&cantidadCal>cantidadCemento)
  {
    productoMayorCantidad="cal";
    mayorCantidadBolsas=cantidadCal;

  } else 
  {
    if(cantidadArena>cantidadCemento)
    {
      productoMayorCantidad="arena";
      mayorCantidadBolsas=cantidadArena;
    } else
    {
      productoMayorCantidad="cemento";
      mayorCantidadBolsas=cantidadCemento;
    }
  }

  alert("El tipo con mayor cantidad de bolsas es " + productoMayorCantidad + " con " + mayorCantidadBolsas + " bolsas");
  alert("El producto mas caro es: " + productoCaro);

}
