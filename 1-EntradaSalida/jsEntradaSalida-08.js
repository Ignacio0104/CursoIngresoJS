/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	var numero1;
	var numero2;
	var resultado;
	var mensaje

	numero1 = document.getElementById("txtIdNumeroDividendo").value; 

	numero2 = document.getElementById("txtIdNumeroDivisor").value;

	resultado = parseInt (numero1) % parseInt (numero2);

	mensaje = "El resto es ";

	alert (mensaje + resultado);
}


/* Entregado */