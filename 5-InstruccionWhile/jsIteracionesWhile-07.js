/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Ejercicio 07

Enunciado

	Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
	e informar la suma acumulada y el promedio.

*/
function mostrar()
{
	var contador;
	var acumulador;
	var continuar;
	var promedio;
	var numero;


	contador=0;
	acumulador=0;

	continuar=prompt("Quiere ingresar un número? Y (sí) o N (no)");


	while (continuar=="Y")
	{
		numero=prompt("Ingrese el número");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
		continuar=prompt("Quiere ingresar otra número? Y (sí) o N (no)");
	}

	promedio=acumulador/contador;
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN