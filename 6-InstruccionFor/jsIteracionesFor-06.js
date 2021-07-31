/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 06

Enunciado:

al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

*/



function mostrar()
{
	var numeroLimite;
	var cantidadDePares;

	numeroLimite=prompt("Ingrese un número");
	cantidadDePares=0;

	for(i=1;i<numeroLimite;i=i+1)
	{
		if(i%2==0)
		{
			alert(i);
			cantidadDePares=cantidadDePares+1;
		}
	}
	alert("Números pares totales = " + cantidadDePares);
}//FIN DE LA FUNCIÓN