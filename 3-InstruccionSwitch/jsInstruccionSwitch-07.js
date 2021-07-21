/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 07 Switch

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

*/


function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje="Se encuentra en el Oeste de Argentina";
			alert(mensaje);
			break;
		case "Cataratas":
			mensaje="Se encuentra en el Norte de Argentina";
			alert(mensaje);
			break;
		case "Mar del plata":
			mensaje="Se encuentra en el Este de Argentina";
			alert(mensaje);
			break;
		case "Ushuaia":
			mensaje="Se encuentra en el sur de Argentina";
			alert(mensaje);
			break;
	}

}//FIN DE LA FUNCIÓN