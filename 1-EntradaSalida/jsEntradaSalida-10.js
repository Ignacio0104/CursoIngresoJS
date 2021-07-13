/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*

function mostrarAumento()
{
	var importe;
	var resultado;

	importe = document.getElementById("txtIdImporte").value; 

	resultado = parseInt(importe) - (parseInt (importe) * 25/100);

	document.getElementById ("txtIdResultado").value = resultado;
}

*/

function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	importe = document.getElementById("txtIdImporte").value; //Tambien se puede poner importe=txtIdImporte.value;
	descuento = prompt ("Ingrese el porcentaje de descuento (solo números, sin signos)")

	resultado = parseInt(importe) - (parseInt (importe) * parseInt(descuento)/100);

	document.getElementById ("txtIdResultado").value = resultado;
}

/* Entregadas las 2 versiones 10 y 10bis */ 