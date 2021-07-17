/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio TP 6 >>> Adivina el número v 2.0

Enunciado

		En esta oportunidad el juego evaluará tus
		aptitudes a partir de la cantidad de intentos, 
		por lo cual se informará lo siguiente:
		1° intento: “usted es un Psíquico”.
		2° intento: “excelente percepción”.
		3° intento: “Esto es suerte”.
		4° intento: “Excelente técnica”.
		5° intento: “usted está en la media”.
		Desde  6 Intentos hasta 10:”falta técnica”
		Más de 10 intentos: “afortunado en el amor!!”.

*/

var numeroSecreto; 
var contadorIntentos;

contadorIntentos=0;

function comenzar()
{
	numeroSecreto=Math.random()*100+1;
	numeroSecreto=parseInt(numeroSecreto);
	contadorIntentos=0;
	 
}

function verificar()
{
	var intento;

	intento=document.getElementById("txtIdNumero").value;
	intento=parseInt(intento);

	contadorIntentos=contadorIntentos+1;

	if (intento==numeroSecreto)
	{
		switch (contadorIntentos)
		{
			case 1:
				alert("Correcto!! Usted es psiquíco");
				break;
			case 2:
				alert("Correcto!! Excelente percepción");
				break;
			case 3:
				alert("Correcto!! Esto es suerte");
				break;
			case 4:
				alert("Correcto!! Excelente técnica");
				break;
			case 5:
				alert("Correcto!! Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Correcto!! Falta técnica");
			
			default:
				alert("Correcto!! Afortunado en el amor");
		}
	} else 
	{
		if (intento>numeroSecreto || intento<numeroSecreto) 
		{
			alert("Error");
		} else
			{
				alert("Numero ingresado inválido");
			}
		
		}
	
	document.getElementById("txtIdIntentos").value=contadorIntentos;
}