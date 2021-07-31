/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 03

Enunciado:

Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

*/


function mostrar()
{
	var mensaje;
	var repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);

	mensaje="Hola UTN FRA"
	
	for(i=0; i<repeticiones; i=i+1)
	{
		document.write(mensaje+"<br>");
	}


}//FIN DE LA FUNCIÓN