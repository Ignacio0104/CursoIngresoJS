/* Al ingresar una edad debemos informar solo si la persona es mayor de edad*/


function mostrar()
{
	var edad; 

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{
		alert("Eres mayor de edad");
	}
	
}