/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	var nombre;
	var edad;

	nombre = document.getElementById("txtIdNombre").value; 

	edad = document.getElementById("txtIdEdad").value;


	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

/* Entregado 

Se recomienda tambien hacerlo de la siguiente manera, para mejorar la edición en caso de corrección:


mensajes = "Usted se llama ";
mensajes = mensajes + nombre;
mensajes = mensajes + " y tiene ";
mensajes = mensajes + edad;
mensajes = mensajes + "años";

alert (mensajes); */ 