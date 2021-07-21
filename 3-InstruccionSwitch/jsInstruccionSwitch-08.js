/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 08 SWITCH

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino){
		
		case "Bariloche":
		case "Ushuaia":
			mensaje="Destino de frío";
			alert(mensaje);
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje="Destino de calor";
			alert(mensaje);
			break;
	}
}//FIN DE LA FUNCIÓN