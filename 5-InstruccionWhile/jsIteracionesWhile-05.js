/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 05

Enunciado

	Al presionar el botón pedir un sexo
	'f' para femenino, 'm' para masculino.

*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("ingrese f ó m .");

	while(sexoIngresado!="f"&&sexoIngresado!="m")
	{
		alert("Error, dato inválido");
		sexoIngresado=prompt("ingrese f ó m .");
	}

	if (sexoIngresado=="f")
		{
			document.getElementById("txtIdSexo").value="Sexo ingresado: Femenino";
		
		} else 
		{
			document.getElementById("txtIdSexo").value="Sexo ingresado: Masculino";
		
		}

}