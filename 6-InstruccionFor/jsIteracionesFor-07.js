/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 07

Enunciado:

al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.


*/


function mostrar()
{

	var numeroLimite;
	var cantidadDivisibles;

	numeroLimite=prompt("Ingrese un número");
	cantidadDivisibles=0;

	for(i=1;i<numeroLimite;i=i+1)
	{
		if(numeroLimite%i==0)
		{
			alert(i);
			cantidadDivisibles=cantidadDivisibles+1;
		}
	}

	alert("La cantidad de divisibles totales es = " + cantidadDivisibles);
}//FIN DE LA FUNCIÓN