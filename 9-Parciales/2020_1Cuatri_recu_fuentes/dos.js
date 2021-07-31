/*

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:

Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro


*/


function mostrar()
{
  var comenzar;
  var acumuladorDeBolsas;
  var descuento;
  var precioCompra;
  var acumuladorPrecioCompra;
  var precioDescuento;
  var acumuladorCal;
  var acumuladorArena;
  var acumuladorCemento;
  var mayorCantidad;
  var precioMasCaro;
  var tipoMasCaro;
  var primerProducto;

  comenzar=prompt("Desea ingresar un producto? y (si) o n (no)");
  acumuladorDeBolsas=0;
  descuento=1;
  acumuladorPrecioCompra=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  acumuladorArena=0;
  primerProducto=true;

  while(comenzar=="y")
  {
    var tipoProducto;
    var cantidadBolsas;
    var precioBolsa;

    tipoProducto=prompt("Ingrese el tipo de producto (arena, cal o cemento)");

    while(tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento")
    {
      tipoProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
    }

    cantidadBolsas=prompt("Ingrese la cantidad de bolsas a comprar");
    cantidadBolsas=parseInt(cantidadBolsas);

   precioBolsa=prompt("Ingrese el precio de la bolsa");
   precioBolsa=parseInt(precioBolsa);

   while(precioBolsa<1)
   {
     precioBolsa=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
   }

    precioCompra=precioBolsa*cantidadBolsas;
    acumuladorDeBolsas=acumuladorDeBolsas+cantidadBolsas;
    acumuladorPrecioCompra=acumuladorPrecioCompra+precioCompra;


    switch(tipoProducto)
    {
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadBolsas;
        break;
      case "arena":
        acumuladorArena=acumuladorArena+cantidadBolsas;
        break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadBolsas;
        break;
    }

    if(precioBolsa>precioMasCaro||primerProducto)
    {
      precioMasCaro=precioBolsa;
      tipoMasCaro=tipoProducto;
      primerProducto=false;
    }

    comenzar=prompt("Desea ingresar otro producto? y (si) o n (no)");
  }
  

  if(acumuladorDeBolsas>30)
  {
    descuento=0.75;
  } else 
  {
    if(acumuladorDeBolsas>10)
    {
      descuento=0.85;
    }
  }

  if(acumuladorCal>acumuladorCemento&&acumuladorCal>acumuladorArena)
  {
    mayorCantidad="Cal";
  } else
  {
    if (acumuladorCemento>acumuladorArena)
    {
      mayorCantidad="Cemento";
    } else 
    {
      mayorCantidad="Arena";
    }
  }

  precioDescuento=acumuladorPrecioCompra*descuento;

  alert("El importe a pagar bruto es de $" + acumuladorPrecioCompra);

  if(precioDescuento<acumuladorPrecioCompra)
  {
    alert("El importa con descuento es de $" + precioDescuento);
  }

  alert("El producto con mayor cantidad de unidades compradas es " + mayorCantidad);

  alert("El tipo de producto mas caro fue " + tipoMasCaro);
}
