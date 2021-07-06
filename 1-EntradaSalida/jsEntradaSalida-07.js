/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;
	var mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value; 

	numero2 = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt (numero1) + parseInt (numero2);

	mensaje = "La suma es "

	alert (mensaje + suma);	
}

function restar()
{
	var numero1;
	var numero2;
	var resta;
	var mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value; 

	numero2 = document.getElementById("txtIdNumeroDos").value;

	resta = parseInt (numero1) - parseInt (numero2);

	mensaje = "La resta es "

	alert (mensaje + resta);	
	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicacion;
	var mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value; 

	numero2 = document.getElementById("txtIdNumeroDos").value;

	multiplicacion = parseInt (numero1) * parseInt (numero2);

	mensaje = "La multiplicacion es "

	alert (mensaje + multiplicacion);	

}

function dividir()
{	
	var numero1;
	var numero2;
	var division;
	var mensaje;
	
	numero1 = document.getElementById("txtIdNumeroUno").value; 

	numero2 = document.getElementById("txtIdNumeroDos").value;

	division = parseInt (numero1) / parseInt (numero2);

	mensaje = "La division es "

	alert (mensaje + division);	
	
}

/* Entregado */ 