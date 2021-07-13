/*
Autor: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio IF 10

Enunciado

	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4
	
*/


function mostrar()
{
	var numero;


	numero=Math.round(Math.random()*10+1);

	if (numero >= 9) {
		alert("Tu nota es un " + numero + ". EXCELENTE");
	} else if (numero > 4 && numero < 9) {
		alert("Tu nota es un " + numero + ". APROBÓ");
	} else {
		alert ("Tu nota es un " + numero + ". Vamos, la próxima se puede");
	}
	
}

//Entregado