/*Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 05

Enunciado

	Al ingresar una edad solo debemos informar si la persona NO es adolescente. 

*/ 

function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 18)
	{
		alert("No eres adolescente");
	}
}

//Entregado