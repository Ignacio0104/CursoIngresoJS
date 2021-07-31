/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 05

Enunciado:

al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

*/



function mostrar()
{
	var numeroFinal;


	for(;;)
	{
		numeroFinal=prompt("Ingrese un número");

		if(numeroFinal==9)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN