/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado=="f"||sexoIngresado=="m")
	{
		if (sexoIngresado == "f")
		{
			document.getElementById("txtIdSexo").value="Sexo ingresado: Femenino";
			break;
		} else 
		{
			document.getElementById("txtIdSexo").value="Sexo ingresado: Masculino";
			break;
		}
	}

}//FIN DE LA FUNCIÓN