/*

AUTOR:Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 01
	Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:

	el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),

	la Marca y el fabricante.

	Se debe Informar al usuario lo siguiente:
	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total


*/


function mostrar()
{
	var acumuladorJabones;
	var acumuladorBarbijos;
	var acumuladorAlcohol;
	var acumuladorPrecioAlcohol;
	var acumuladorPrecioJabon;
	var acumuladorPrecioBarbijos;
	var fabricanteJabonCaro;
	var precioJabonCaro;
	var cantidadJabonCaro;
	var primerJabon;
	var mayorCantidad;
	var precioMayorCantidad;
	var promedioMayorCantidad;

	primerJabon=true;
	acumuladorAlcohol=0;
	acumuladorBarbijos=0;
	acumuladorJabones=0;
	acumuladorPrecioAlcohol=0;
	acumuladorPrecioBarbijos=0;
	acumuladorPrecioJabones=0;

	for(i=0;i<5;i=i+1)
	{
		var tipoProducto;
		var precioProducto;
		var cantidadProducto;
		var marcaProducto;
		var fabricanteProducto;


		tipoProducto=prompt("Ingrese el tipo del producto (barbijo, jabon o alcohol)");

		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Dato ingresado inválido, vuelva a ingresarlo");
		}

		precioProducto=prompt("Ingrese el precio del producto");
		precioProducto=parseInt(precioProducto);

		while(precioProducto<100||precioProducto>300)
		{
			precioProducto=prompt("Error, precio fuera de rango. Vuelva a ingresarlo");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto=prompt("Ingrese la cantidad del producto");
		cantidadProducto=parseInt(cantidadProducto);

		while(cantidadProducto<1||cantidadProducto>1000)
		{
			cantidadProducto=prompt("Error, cantidad fuera de rango. Vuelva a ingresarla");
			cantidadProducto=parseInt(cantidadProducto);
		}

		marcaProducto=prompt("Ingrese la marca del producto");
		fabricanteProducto=prompt("Ingrese el fabricante del producto");

		switch(tipoProducto)
		{
			case "jabon":
				acumuladorJabones=acumuladorJabones+cantidadProducto;
				acumuladorPrecioJabon=acumuladorPrecioJabon+precioProducto;

				if(precioProducto>precioJabonCaro||primerJabon)
				{
					precioJabonCaro=precioProducto;
					cantidadJabonCaro=cantidadProducto;
					fabricanteJabonCaro=fabricanteProducto;
					primerJabon=false;
				}
				break;
			case "barbijo":
				acumuladorBarbijos=acumuladorBarbijos+cantidadProducto;
				acumuladorPrecioBarbijos=acumuladorPrecioBarbijos+precioProducto;
				break;
			case "alcohol":
				acumuladorAlcohol=acumuladorAlcohol+cantidadProducto;
				acumuladorPrecioAlcohol=acumuladorPrecioAlcohol+precioProducto;
				break;
		}
	}

	if(acumuladorAlcohol>acumuladorBarbijos&&acumuladorAlcohol>acumuladorJabones)
	{
		mayorCantidad=acumuladorAlcohol;
		precioMayorCantidad=acumuladorPrecioAlcohol;
	} else 
	{
		if(acumuladorBarbijos>acumuladorJabones)
		{
			mayorCantidad=acumuladorBarbijos;
			precioMayorCantidad=acumuladorPrecioBarbijos;
		} else 
		{
			mayorCantidad=acumuladorJabones;
			precioMayorCantidad=acumuladorPrecioJabones;
		}
	}

	promedioMayorCantidad=precioMayorCantidad/mayorCantidad;
	
	document.write("El jabón mas caro es del fabricante " + fabricanteJabonCaro 
	+ " y la cantidad de unidades ingresadas es " + cantidadJabonCaro + "<br>" +
	"y el promedio de compra del producto mas comprado es " + promedioMayorCantidad + "<br>"
	+ "La cantidad de barbijo comprados fue de " + acumuladorBarbijos);
}
