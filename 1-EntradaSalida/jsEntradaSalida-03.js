/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado=document.getElementById("txtIdNombre").value; //get elementById recibe una cadena de str

	alert(nombreIngresado);

}


/*  Entregado 

Tambien se puede hacer:

let nombreIngresado;

nombreIngresado = txtIdNombre.value

alert (nombreIngresado);

Pero es mejor practica hacerlo con getElementById */
