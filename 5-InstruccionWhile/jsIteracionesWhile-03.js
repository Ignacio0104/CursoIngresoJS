/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 03

Enunciado

	al presionar el botón pedir la CLAVE (ayuda: es utn750)

*/
function mostrar()
{
	var claveIngresada;
	var claveCorrecta;

	claveIngresada = prompt("ingrese el número clave."); 
	claveCorrecta= "utn750";


	while (claveIngresada!=claveCorrecta) //Validaciones siempre se hacen por la negativa
	{
		alert("Error, ingrese la clave correcta");
		claveIngresada = prompt("ingrese el número clave.");
	} 	

	alert("Bienvenido");

}
