/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

*/


function mostrar()
{
	var destino;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			alert("Se encuentra en el Oeste de Argentina");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte de Argentina");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este de Argentina");
			break;
		case "Ushuaia":
			alert("Se encuentra en el sur de Argentina");
			break;
	}

}//FIN DE LA FUNCIÓN