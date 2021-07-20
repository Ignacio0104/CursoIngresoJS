/*

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

*/


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	

	contador=0;
	acumulador=0;
	
	while (contador<5)
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
	}
	
	document.getElementById("txtIdSuma").value=acumulador;

	promedio=acumulador/contador;

	document.getElementById("txtIdPromedio").value=promedio;

	

}//FIN DE LA FUNCIÓN