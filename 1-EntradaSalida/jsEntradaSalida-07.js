/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numero1;
var numero2;
var resultado;

function sumar()
{	
	
	var mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value; 
	numero2 = document.getElementById("txtIdNumeroDos").value; 
	//Una vez que toman valor no es necesario asignarlo a cada funcion (siempre y cuando arranque con sumar)
	resultado = parseInt (numero1) + parseInt (numero2);
	
	mensaje = "La suma es "
	alert (mensaje + resultado);	
}

function restar()
{
	var mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value; 
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt (numero1) - parseInt (numero2);

	mensaje = "La resta es "

	alert (mensaje + resultado);	
	
}

function multiplicar()
{ 

	var mensaje;
	
	numero1 = document.getElementById("txtIdNumeroUno").value; 
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt (numero1) * parseInt (numero2);
	
	mensaje = "La multiplicacion es "

	alert (mensaje + resultado);	

}

function dividir()
{	

	var mensaje;
	
	numero1 = document.getElementById("txtIdNumeroUno").value; 
	numero2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt (numero1) / parseInt (numero2);

	mensaje = "La division es "

	alert (mensaje + resultado);	
	
}

/* Entregado */ 