/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;
	var mensaje

	numero1 = document.getElementById("txtIdNumeroUno").value; 

	numero2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt (numero1) + parseInt (numero2);

	mensaje = "La suma es "

	alert (mensaje + resultado);
}

/* Entregado */ 

