/*Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 06

Enunciado

	Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/

function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17) 
	{
		alert ("La persona es mayor de edad");
	} else
	{
		if (edad > 12 && edad < 18)
		{
		alert ("La persona es un adolescente");
		} else
		{
			alert ("La persona es un niño")
		}
	}	
}

//Entregado