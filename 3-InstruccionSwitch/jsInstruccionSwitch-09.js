/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 09 Switch

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%, cataratas y Cordoba tiene un descuento del 10% y Mar del plata 
tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%, cataratas y Cordoba tiene un aumento del 10% y Mar del plata 
tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% ,cataratas tiene un aumento del 10% y Mar del plata tiene un 
aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
	var estacion;
	var destino;
	var precio;
	var mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	precio=15000;
	mensaje="El precio final de su viaje es de $"

	switch (estacion){
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					precio=precio/0.8;
					alert(mensaje + precio.toFixed(2));
					break;
				case "Cataratas":
				case "Cordoba":
					precio=precio*0.9;
					alert(mensaje + precio.toFixed(2));
					break;
				default:
					precio=precio*0.8;
					alert(mensaje + precio.toFixed(2));
					break;
			}break;

		
		case "Verano":
			switch (destino)
			{
				case "Bariloche":
					precio=precio*0.8;
					alert(mensaje + precio.toFixed(2));
					break;
				case "Cataratas":
				case "Cordoba":
					precio=precio/0.9;
					alert(mensaje + precio.toFixed(2))
					break;
				default:
					precio=precio/0.8;
					alert(mensaje + precio.toFixed(2));
					break;
			}break;
		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precio=precio/0.9;
					alert(mensaje + precio.toFixed(2));
					break;
				default:
					alert(mensaje + precio.toFixed(2));
					break;
			}break;
		}
}//FIN DE LA FUNCIÓN