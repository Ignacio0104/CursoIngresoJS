/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var claveCorrecta;

	claveIngresada = prompt("ingrese el número clave.");
	claveCorrecta= "utn750";


	while (claveIngresada!=claveCorrecta)
	{
		alert("Error, ingrese la clave correcta");
		claveIngresada = prompt("ingrese el número clave.");
	} 	
	
}//FIN DE LA FUNCIÓN
