/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 04

Enunciado

	al presionar el botón 
	pedir un número entre 0 y 9 inclusive.

*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);


	while(numeroIngresado>9||numeroIngresado<0) 
	{
		alert("Error, número inválido")
		numeroIngresado=prompt("ingrese un número entre 0 y 10.");
	}
	document.getElementById("txtIdNumero").value=numeroIngresado;

}