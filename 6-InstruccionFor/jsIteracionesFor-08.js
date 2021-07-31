/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 08

Enunciado:

al presionar el botón pedir un número. Informar si el numero es PRIMO o no

*/

function mostrar()
{

	var numeroIngresado;
	var cantidadDivisibles;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	cantidadDivisibles=0;

	for (i=1;i<numeroIngresado+1;i=i+1)
	{
		if(numeroIngresado%i==0)
		{
			cantidadDivisibles=cantidadDivisibles+1;
		}
	}

	if (cantidadDivisibles>2)
	{
		alert("El número ingresado no es primo");
	} else 
	{
		alert("El número ingresado es primo");
	}

}//FIN DE LA FUNCIÓN