/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 05 Switch

Enunciado
	Al ingresar una hora, informar:
	si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	var hora;
	var mensaje;

	mensaje="Es de mañana"
	hora=document.getElementById("txtIdHora").value;
	hora=parseInt(hora);

	switch (hora){
		case 7: //Case usa el ===
		case 8:
		case 9:
		case 10:
		case 11:
			alert(mensaje);
			break;
	}
	
}//FIN DE LA FUNCIÓN