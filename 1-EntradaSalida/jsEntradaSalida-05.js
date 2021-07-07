/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	var nombre;
	var edad;
	var mensajes;

	nombre = document.getElementById("txtIdNombre").value; 

	edad = document.getElementById("txtIdEdad").value;

	mensajes = "Usted se llama ";
	mensajes = mensajes + nombre;
	mensajes = mensajes + " y tiene ";
	mensajes = mensajes + edad;
	mensajes = mensajes + "años";

	alert (mensajes); 
}

/* Entregado  */ 