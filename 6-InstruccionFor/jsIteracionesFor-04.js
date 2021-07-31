/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

For 04

Enunciado:

al presionar el botón repetir hasta que utilizamos 'BREAK'.

*/

function mostrar()
{
	for (i=0;i<100;i=i+1)
	{
		alert("Mensaje " + i);
		if (i==4)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN