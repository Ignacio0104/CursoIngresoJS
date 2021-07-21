/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejericio 10 SWITCH

una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 

informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/


function mostrar()
{
	var estacion;
	var destino;
	var mensaje1;
	var mensaje2;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	mensaje1="Se viaja";
	mensaje2="No se viaja";

	switch (estacion) {
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					alert(mensaje1);
					break;
				default:
					alert(mensaje2);
					break;

			}break;

		case "Verano":
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
					alert(mensaje1);
					break;
				default:
					alert(mensaje2);
					break;
			}break;
	
		case "Otoño":
			alert(mensaje1);
			break;

		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
					alert(mensaje2);
					break;
				default:
					alert(mensaje1);
					break;
			}break;
	}	
}//FIN DE LA FUNCIÓN