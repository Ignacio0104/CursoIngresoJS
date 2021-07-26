/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio 08

Enunciado

	Al presionar el botón pedir  números  hasta que el usuario quiera,
	sumar los que son positivos y multiplicar los negativos.

*/
function mostrar()
{
	var contador;
	var sumaPositivos;
	var multiplicacionNegativos;
	var comenzar;
	var numero;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=0;

	comenzar=prompt("Quiere ingresar un número? Y (sí) o N (no)");

	while(comenzar=="Y")
	{
		numero=prompt("Ingrese el número");
		numero=parseInt(numero);
		contador=contador+1;

		if(contador==1)
		{
			multiplicacionNegativos=multiplicacionNegativos+1;
		} else 
		{
			if (numero>0)
			{
				sumaPositivos=sumaPositivos+numero;
			} else
			{
				if (numero<=-1)
				{
					multiplicacionNegativos=multiplicacionNegativos*numero;
				}
			}
	
		}

		comenzar=prompt("Quiere ingresar otro número? Y (sí) o N (no)");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}