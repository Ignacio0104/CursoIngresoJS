/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 02 Switch

	al seleccionar un mes informar.
	si estamos en Invierno: "Abrigate que hace frio."
	si aún no llego el Invierno: "Falta para el invierno."
	si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

*/

function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno"); //Se pone asi para que de Enero hasta el primero break se ejecute un solo alert
			break;								//Es la forma de agrupar cases iguales
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}
}