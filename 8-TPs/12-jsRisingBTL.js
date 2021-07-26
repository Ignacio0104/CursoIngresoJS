/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Tp 12 While

Enunciado:

	RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
	censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
	(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
	12.   Los datos requeridos son los siguientes:
	A.	Edad, entre 18 y 90 años inclusive.
	B.	Sexo, “M” para masculino y “F” para femenino
	C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	D.	Sueldo bruto, no menor a 8000.
	E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso() 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLejago;
	var nacionalidad;

	edadIngresada=prompt("Ingrese la edad")
	edadIngresada=parseInt(edadIngresada);

	while(edadIngresada<18||edadIngresada>90)
	{
		edadIngresada=prompt("Error, favor vuelva a ingresar la edad")
		edadIngresada=parseInt(edadIngresada);
	}

	sexoIngresado=prompt("Ingrese el sexo. f (femenino) o m (masculino)");

	while(sexoIngresado!="f"&&sexoIngresado!="m") 
	{
		sexoIngresado=prompt("Sexo ingresado es inválido.Vuelva a ingresar el sexo. f (femenino) o m (masculino)");
	}

	estadoCivilIngresado=prompt("Ingrese el estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	estadoCivilIngresado=parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado>4||estadoCivilIngresado<1) 
	{
		estadoCivilIngresado=prompt("Error, favor vuelva a ingresa el estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}

	sueldoBruto=prompt("Favor ingrese su salario bruto")
	sueldoBruto=parseInt(sueldoBruto);

	while(sueldoBruto<7999) 
	{
		sueldoBruto=prompt("Error, favor vuelva a ingresar el salario, o pida un aumento")
		sueldoBruto=parseInt(sueldoBruto);
	}

	numeroLejago=prompt("Ingrese el número de legajo")
	numeroLejago=parseInt(numeroLejago);

	while(numeroLejago<999||numeroLejago>9999)
	{
		numeroLejago=prompt("Error, el legajo no puede empezar con 0. Vuelva a ingresar el número de legajo")
		numeroLejago=parseInt(numeroLejago);
	}

	nacionalidad=prompt("Ingrese su nacionalidad:“A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
	{
		nacionalidad=prompt("Error, vuelta a ingresar la nacionalidad“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}


	document.getElementById("txtIdEdad").value="La edad ingresada es: " + edadIngresada;

	if (sexoIngresado=="f")
	{
		sexoIngresado="Femenino"
	} else 
	{
		sexoIngresado="Masculino"
	}

	document.getElementById("txtIdSexo").value="Sexo ingresado: " + sexoIngresado;

	if (estadoCivilIngresado==1)
	{
		estadoCivilIngresado="Soltero";
	} else
	{
		if (estadoCivilIngresado==2)
		{
			estadoCivilIngresado="Casado";
		} else
		{
			if (estadoCivilIngresado==3)
			{
				estadoCivilIngresado="Divorciado";
			} else
			{
				estadoCivilIngresado="Viudo";
			}
		}
	}

	document.getElementById("txtIdEstadoCivil").value="El estado civil ingresado es: " + estadoCivilIngresado;
	
	document.getElementById("txtIdSueldo").value="El sueldo bruto es de $" + sueldoBruto;

	document.getElementById("txtIdLegajo").value="El número de legajo es: " + numeroLejago;

	if (nacionalidad=="A")
	{
		nacionalidad="Argentino";
	} else
	{
		if (nacionalidad=="E")
		{
			nacionalidad="Extranjero";
		} else 
		{
			nacionalidad="Nacionalizado";
		}
	}
	document.getElementById("txtIdNacionalidad").value="La nacionalidad es: " + nacionalidad;
	
}
