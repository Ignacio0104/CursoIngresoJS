/*

Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , 
edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.


*/

function mostrar()
{
	var comenzar;
	var personaCaliente;
	var nacionalidadPersonaCaliente;
	var primerPasajero;
	var mayoresSolteros;
	var mujeresNoCasadas;
	var viejosCalientes;
	var acumuladorMujeresCasadas;
	var acumuladorEdadMujeresCasadas;
	var promedioMujeresCasadas;

	comenzar=prompt("Desea ingresar un pasajero? y (si) o n (no)");
	primerPasajero=true;
	mayoresSolteros=0;
	mujeresNoCasadas=0;
	viejosCalientes=0;
	acumuladorMujeresCasadas=0;
	acumuladorEdadMujeresCasadas=0;

	while(comenzar=="y")
	{
		var nombreIngresado;
		var nacionalidadIngresada;
		var edadIngresada;
		var sexoIngresado;
		var estadoCivil;
		var temperaturaCorporal;

		nombreIngresado=prompt("Ingrese el nombre del pasajero");

		nacionalidadIngresada=prompt("Ingrese la nacionalidad del pasajero");

		edadIngresada=prompt("Ingrese la edad del pasajero");
		edadIngresada=parseInt(edadIngresada);

		sexoIngresado=prompt("Ingrese el sexo del pasajero f (femenino) o m (masculino)")

		while(sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
		}

		estadoCivil=prompt("Ingrese el estado civil del pasajero. soltero, casado o viudo");

		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
		}
		
		temperaturaCorporal=prompt("Ingrese la temperatura corporal del pasajero");
		temperaturaCorporal=parseInt(temperaturaCorporal);

		if(temperaturaCorporal>personaCaliente||primerPasajero)
		{
			personaCaliente=temperaturaCorporal;
			nacionalidadPersonaCaliente=nacionalidadIngresada;
			primerPasajero=false;
		}

		if(edadIngresada>17&&estadoCivil=="soltero")
		{
			mayoresSolteros=mayoresSolteros+1;
		}
		
		if(sexoIngresado=="f"&&estadoCivil!="casado")
		{
			mujeresNoCasadas=mujeresNoCasadas+1;
		} else 
		{
			acumuladorMujeresCasadas=acumuladorMujeresCasadas+1;
			acumuladorEdadMujeresCasadas=acumuladorEdadMujeresCasadas+edadIngresada;
		}

		if(edadIngresada>60&&temperaturaCorporal>38)
		{
			viejosCalientes=viejosCalientes+1;
		}	

		comenzar=prompt("Desea ingresar otro pasajero? y (si) o n (no)");
	}

	document.write("la Nacionalidad de la persona con mas temperatura es " + nacionalidadPersonaCaliente + "<br>");
	document.write("La cantidad de mayores de edad que están solteros es de " + mayoresSolteros +"<br>");
	document.write("La cantidad de mujeres que hay viudas o solteras es " + mujeresNoCasadas + "<br>");
	document.write("La cantidad de personas mayores a 60 años con mas de 38 grados de temperatura es " + viejosCalientes + "<br>");

	if (acumuladorMujeresCasadas>0)
	{
		promedioMujeresCasadas=acumuladorEdadMujeresCasadas/acumuladorMujeresCasadas;
		document.write("El promedio de edad de las mujeres casadas es de " + promedioMujeresCasadas.toFixed(2));
	}

	
}
