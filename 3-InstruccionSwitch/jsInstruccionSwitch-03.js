/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 03 Switch

	al seleccionar un mes informar.
	si es Febrero: " Este mes no tiene más de 29 días."
	si NO es Febrero: "Este mes tiene 30 o más días"

*/


function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
			alert("Este mes tiene 30 o más días");
			break;
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o más días");
			break;
	}
	
}//FIN DE LA FUNCIÓN