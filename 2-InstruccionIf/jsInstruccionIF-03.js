/*
Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 03

Enunciado

	Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. 

*/

function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById("txtIdEdad").value); 

	if(edad > 17)
	{
		alert ("Eres mayor de edad");
	} else {
		alert("Eres menor de edad");
	}

}
//Entregado