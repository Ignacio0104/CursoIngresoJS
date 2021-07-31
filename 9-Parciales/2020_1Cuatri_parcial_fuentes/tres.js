/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/



function mostrar()
{
	var comenzar;
	var primerPasajero;
	var temperaturaMasAlta;
	var pasajeroTemperaturaAlta;
	var mayoresDeEdadViudos;
	var hombresSolteros;
	var hombresViudos;
	var mayoresAltaTemperatura;
	var cantidadDeHombres;
	var acumuladorEdadHombres;
	var promedioEdadHombres;

	comenzar=prompt("Desea comenzar con el ingreso de datos? y (si) o n (no)");

	primerPasajero=true;
	mayoresDeEdadViudos=0;
	hombresSolteros=0;
	hombresViudos=0;
	mayoresAltaTemperatura=0;
	cantidadDeHombres=0;
	acumuladorEdadHombres=0;

	while(comenzar=="y")
	{
		var nombreIngresado;
		var sexoIngresado;
		var estadoCivil;
		var edadIngresada;
		var temperaturaCorporal;

		nombreIngresado=prompt("Ingrese su nombre");

		sexoIngresado=prompt("Ingrese su sexo. m masculino o f femenino");

		while(sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, vuelva a ingresar el sexo");
		}

		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);

		while(edadIngresada<1||edadIngresada>100)
		{	
			edadIngresada=prompt("Error, vuelva a ingresar la edad");
			edadIngresada=parseInt(edadIngresada);
		}

		estadoCivil=prompt("Ingrese su estado civil. soltero, casado o viudo");

		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Error, vuelva a ingresar el estado civil");
		}

		temperaturaCorporal=prompt("Ingrese su temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);

		while(temperaturaCorporal<28||temperaturaCorporal>45)
		{
			temperaturaCorporal=prompt("Error, vuelva a ingresar la temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(edadIngresada>18&&estadoCivil=="viudo")
		{
			mayoresDeEdadViudos=mayoresDeEdadViudos+1;
		}

		if(sexoIngresado=="m") 
		{
			cantidadDeHombres=cantidadDeHombres+1;
			acumuladorEdadHombres=acumuladorEdadHombres+edadIngresada;

			if(estadoCivil=="soltero")
			{
				hombresSolteros=hombresSolteros+1;
			} else
			{
				if(estadoCivil=="viudo")
				{
					hombresViudos=hombresViudos+1;
				}
			}
		}
		
		
		if(edadIngresada>60&&temperaturaCorporal>38)
		{
			mayoresAltaTemperatura=mayoresAltaTemperatura+1;
		}

		if(temperaturaCorporal>temperaturaMasAlta||primerPasajero)
		{
			temperaturaMasAlta=temperaturaCorporal;
			pasajeroTemperaturaAlta=nombreIngresado;
			primerPasajero=false;
		}

		comenzar=prompt("Desea ingresar los datos de otro pasajero? y (si) o n (no)");
	}

	if(cantidadDeHombres>1&&acumuladorEdadHombres>1)
	{
		promedioEdadHombres=acumuladorEdadHombres/cantidadDeHombres;
	}

	alert("El pasajero con mayor temperatura es " + pasajeroTemperaturaAlta + " con un temperatura de " 
	+ temperaturaMasAlta + " grados");

	alert("La cantidad de mayores de edad viudos es de " + mayoresDeEdadViudos + " pasajeros");

	alert("La cantidad de hombres solteros es de " + hombresSolteros + " y la cantidad de hombres viudos es de " +
	hombresViudos);

	alert("La cantidad de personas mayores con 38 grados o mas son " + mayoresAltaTemperatura);

	alert("El promedio de edad de los hombres es de " + promedioEdadHombres.toFixed(2));
}
