/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destino;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino){
		
		case "Bariloche":
		case "Ushuaia":
			alert("Destino de frío");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Destino de calor");
			break;
	}
}//FIN DE LA FUNCIÓN