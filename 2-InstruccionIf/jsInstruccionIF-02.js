/* 
Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 02

Enunciado

	Al ingresar una edad debemos informar solo si la persona es mayor de edad

*/


function mostrar()
{
	var edad; 

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17)
	{
		alert("Eres mayor de edad");
	}
	
}

/*Entregado

tambien se puede poner:

var=esMayorDeEdad = edad >= 18;

if (!esMayorDeEdad) {
	alert ("No es mayor de edad")
}


*/


