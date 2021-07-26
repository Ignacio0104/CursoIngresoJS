/*

AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 10 

Enunciado:

		Al presionar el botón pedir  números  
		hasta que el usuario quiera, mostrar:
		1-Suma de los negativos.
		2-Suma de los positivos.
		3-Cantidad de positivos.
		4-Cantidad de negativos.
		5-Cantidad de ceros.
		6-Cantidad de números pares.
		7-Promedio de positivos.
		8-Promedios de negativos.
		9-Diferencia entre positivos y negativos, (positvos-negativos). 

*/
function mostrar()
{
	
	var numeroIngresado;
	var comenzar;
	var contadorNegativos;
	var acumuladorNegativos;
	var contadorPositivos;
	var acumuladorPositivos;
	var contadorDeCeros;
	var contadorDePares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	
	contadorNegativos=0;
	acumuladorNegativos=0;
	contadorPositivos=0;
	acumuladorPositivos=0;
	contadorDeCeros=0;
	contadorDePares=0;

	comenzar=prompt("Quiere ingresar un número? Y (si) o N (no)")

	while(comenzar=="Y")
	{
		numeroIngresado=prompt("Ingrese el número");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>=1) 
		{
			contadorPositivos=contadorPositivos+1;
			acumuladorPositivos=acumuladorPositivos+numeroIngresado;
			
		} else 
		{ 
			if (numeroIngresado<=-1)
			{
				contadorNegativos=contadorNegativos+1;
				acumuladorNegativos=acumuladorNegativos+numeroIngresado;
			} else
			{
				contadorDeCeros=contadorDeCeros+1;
			}
			
		}

		if (numeroIngresado%2==0 && numeroIngresado!=0) 
		{
			contadorDePares=contadorDePares+1;
		}

		comenzar=prompt("Quiere ingresar otro número? Y (si) o N (no)")

	}

	if(contadorNegativos>1) 
	{
		promedioNegativos=acumuladorNegativos/contadorNegativos;
	}

	if (contadorPositivos>1)
	{
		promedioPositivos=acumuladorPositivos/contadorPositivos;
	}

	diferenciaPositivosNegativos=acumuladorPositivos + acumuladorNegativos; 

	document.write("Suma de negativos= " + acumuladorNegativos + "<br>"+ " Suma de positivos= " + acumuladorPositivos 
	+ "<br>"+ " Cantidad de positivos= " + contadorPositivos + "<br>"+  " Cantidad de negativos= " + contadorNegativos 
	+ "<br>"+  " Cantidad de ceros= " + contadorDeCeros  + "<br>"+  " Cantidad de pares= " + contadorDePares + "<br>"+  
	" Promedio de positivos= " + promedioPositivos.toFixed(2) + "<br>"+  " Promedio de negativos= " + 
	promedioNegativos.toFixed(2) + "<br>"+  " Diferencia entre positivos y negativos= " + diferenciaPositivosNegativos);

}