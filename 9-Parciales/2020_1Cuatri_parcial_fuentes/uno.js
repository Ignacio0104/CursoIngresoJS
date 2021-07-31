/*

AUTOR:Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Parcial 2020 Ejercicio 01

Enunciado A + B + C

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/

var precioAlcoholBarato;
var cantidadAlcoholBarato;
var fabricanteAlcoholBarato;
var cantidadAlcohol;
var precioAlcoholAcumulado;
var cantidadBarbijo;
var precioBarbijoAcumulado;
var cantidadJabon;
var precioJabonAcumulado;
var promedioMayorCantidad;
var tipoMayorCantidad;

cantidadBarbijo=0;
cantidadAlcohol=0;
cantidadJabon=0;
precioAlcoholAcumulado=0;
precioBarbijoAcumulado=0;
precioJabonAcumulado=0;

function mostrar()
{

	for(i=0; i<5; i=i+1)
	{
		var tipoProducto;
		var precioProducto;
		var cantidadProducto;
		var marcaProducto;
		var fabricanteProducto;
		var primerAlcohol=true;

		tipoProducto=prompt("Ingrese el tipo de producto (alcohol, barbijo o jabon)");

		while(tipoProducto!="alcohol"&&tipoProducto!="barbijo"&&tipoProducto!="jabon")
		{
			tipoProducto=prompt("Error, dato ingresado inválido. Vuelve a ingresarlo");
		}

		precioProducto=prompt("Ingrese el precio del producto");
		precioProducto=parseInt(precioProducto);

		while(precioProducto<100||precioProducto>300)
		{
			precioProducto=prompt("Error, precio fuera de rango. Vuelva a ingresarlo");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto=prompt("Ingrese la cantidad de producto comprado");
		cantidadProducto=parseInt(cantidadProducto);

		while(cantidadProducto<0&&cantidadProducto>1000)
		{
			cantidadProducto=prompt("Error, cantidad fuera de rango. Vuelva a ingresarlo");
			cantidadProducto=parseInt(cantidadProducto);
		}

		marcaProducto=prompt("Ingrese la marca del producto");
		fabricanteProducto=prompt("Ingrese el fabricante del producto");


		switch(tipoProducto)
		{
			case "alcohol":
				cantidadAlcohol=cantidadAlcohol+cantidadProducto;
				precioAlcoholAcumulado=precioAlcoholAcumulado+precioProducto;

				if(precioProducto<precioAlcoholBarato||primerAlcohol)
				{
					precioAlcoholBarato=precioProducto;
					fabricanteAlcoholBarato=fabricanteProducto;
					cantidadAlcoholBarato=cantidadProducto;
					primerAlcohol=false;	
				}
				break;
			case "barbijo":
				cantidadBarbijo=cantidadBarbijo+cantidadProducto;
				precioBarbijoAcumulado=precioBarbijoAcumulado+precioProducto;
				break;
			case "jabon":
				cantidadJabon=cantidadJabon+cantidadProducto;
				precioJabonAcumulado=precioJabonAcumulado+precioProducto;
				break;

		}
	}

	if(cantidadAlcohol>cantidadBarbijo&&cantidadAlcohol>cantidadJabon)
	{
		promedioMayorCantidad=precioAlcoholAcumulado/cantidadAlcohol;
		tipoMayorCantidad="alcohol";
	
	} else 
	{
		if (cantidadBarbijo>cantidadJabon)
		{
			promedioMayorCantidad=precioBarbijoAcumulado/cantidadBarbijo;
			tipoMayorCantidad="barbijo";
		} else
		{
			promedioMayorCantidad=precioJabonAcumulado/cantidadJabon;
			tipoMayorCantidad="jabon";
		}
	}


	alert("El alcohol más barato tiene un precio de $" + precioAlcoholBarato + " la cantidad de unidades compradas es de " +
	cantidadAlcoholBarato + " y el fabricante es " + fabricanteAlcoholBarato);

	alert("El producto mas comprado es el " + tipoMayorCantidad + " con un promedio de $" + promedioMayorCantidad.toFixed(2));

	alert("La cantidad de jabones comprados es de: " + cantidadJabon);

}



/*

Primer versión


function mostrar()
{

	var primerProducto;
	var contador;
	var precioAlcoholBarato;
	var marcaAlcoholBarato;
	var cantidadAlcoholBarato;
	var cantidadAlcohol;
	var cantidadBarbijo;
	var cantidadJabon;
	var mayorCantidadTipo;
	var precioAlcoholAcumulado;
	var precioBarbijoAcumulado;
	var precioJabonAcumulado;
	var promedioMayorCantidad;


	contador=0
	cantidadAlcoholBarato=0;
	primerProducto=true;
	cantidadAlcohol=0;
	cantidadBarbijo=0;
	cantidadJabon=0;
	precioAlcoholAcumulado=0;
	precioBarbijoAcumulado=0;
	precioJabonAcumulado=0;
	
	while(contador<5)
	{
		var tipoProducto;
		var precioProducto;
		var cantidadProducto;
		var marcaProducto;
		var fabricanteProducto;
		
		tipoProducto=prompt("Ingrese el tipo de producto que va a ingresar (barbijo, jabon o alcohol)");

		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
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
			cantidadProducto=prompt("Error, cantidad fuera de rango");
			cantidadProducto=parseInt(cantidadProducto);
		}

		marcaProducto=prompt("Ingrese la marca del producto");
		fabricanteProducto=prompt("Ingrese el fabricante del producto");

		if(tipoProducto=="alcohol"&&primerProducto)
		{
			precioAlcoholBarato=precioProducto;
			marcaAlcoholBarato=marcaProducto;
			cantidadAlcoholBarato=cantidadProducto;
			primerProducto=false;

		} else 
		{
			if(tipoProducto=="alcohol"&&precioProducto<precioAlcoholBarato)
			{
				precioAlcoholBarato=precioProducto;
				marcaAlcoholBarato=marcaProducto;
				cantidadAlcoholBarato=cantidadProducto;
			}
		}

		if(tipoProducto=="alcohol")
		{
			cantidadAlcohol=cantidadAlcohol+cantidadProducto;
			precioAlcoholAcumulado=precioAlcoholAcumulado+precioProducto;
		} else 
		{
			if(tipoProducto=="jabon")
			{
				cantidadJabon=cantidadJabon+cantidadProducto;
				precioJabonAcumulado=precioJabonAcumulado+precioProducto;
			} else 
			{	
				if (tipoProducto=="barbijo")
				{
					cantidadBarbijo=cantidadBarbijo+cantidadProducto;
					precioBarbijoAcumulado=precioBarbijoAcumulado+precioProducto;
				}
				
			}
		}

		contador=contador+1;
	}

	if(cantidadAlcohol>cantidadJabon&&cantidadAlcohol>cantidadBarbijo)
	{
		promedioMayorCantidad=precioAlcoholAcumulado/cantidadAlcohol;
		mayorCantidadTipo="alcohol";

		

	} else 
	{
		if(cantidadBarbijo>cantidadJabon)
		{
			promedioMayorCantidad=precioBarbijoAcumulado/cantidadBarbijo;
			mayorCantidadTipo="barbijo";

		} else 
		{
			promedioMayorCantidad=precioJabonAcumulado/cantidadJabon;
			mayorCantidadTipo="jabon";
		}
	}

	

	alert("El alcohol mas barato es el de la marca " + marcaAlcoholBarato + " con un precio de $" + precioAlcoholBarato +
	" y se compraron " + cantidadAlcoholBarato + " unidades");

	alert("El producto con mas unidades compradas es: " + mayorCantidadTipo + " con un precio promedio de $" + promedioMayorCantidad.toFixed(2));

	alert("La cantidad de jabones comprados es de: " + cantidadJabon);
}

*/