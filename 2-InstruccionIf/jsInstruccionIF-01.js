/* 
Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 01

Enunciado

	Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". 
	
*/

function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById("txtIdEdad").value); 

	if(edad == 15) 
	{
		alert("Niña bonita");
	} 
	
}

//Entregado