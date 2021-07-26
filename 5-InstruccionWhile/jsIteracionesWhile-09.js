/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio 09 while

Enunciado:

	Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.

*/
function mostrar()
{	
	var maximo;
	var minimo;
	var comenzar;
	var numero;
	var contador;

	contador=0;

	comenzar=prompt("Quiere ingresar un número? Y (sí) o N (no)");

	while(comenzar=="Y")
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		contador=contador+1;
	
		if (contador==1) 
		{
			maximo=numero;
			minimo=numero;
		} else 
		{
			if(numero>maximo)
			{
				maximo=numero;
			}else 
			{
				if(numero<minimo) 
				{
					minimo=numero;
				}
			}
		}
		comenzar=prompt("Quiere ingresar otro número? Y (sí) o N (no)");
	}

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;
}


/*

Otra forma de hacerlo

	var maximo;
	var minimo;
	var comenzar;
	var numero;
	var banderaPrimerIngreso;

	while(comenzar=="si") 
	{
		numero=prompt("Ingrese su número");
		numero=parseInt(numero);

		if (numero>maximo || banderaPrimerIngreso=="si")
		{
			maximo=numero;
		}
		if (numero<minimo || banderaPrimerIngreso=="si")
		{
			minimo=numero;
			banderaPrimerIngreso="no";
		}
	}



*/