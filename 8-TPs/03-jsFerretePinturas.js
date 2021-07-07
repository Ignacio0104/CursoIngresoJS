/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado 
(ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
    var centigrados;
    var mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;

    centigrados = (temperatura - 32) / 1.8;

    mensaje = temperatura + " grados farenheit es igual " + centigrados.toFixed(2) + " grados centígrados";

    alert (mensaje)

}

function CentigradosFahrenheit () 
{
    var temperatura;
    var farenheit;
    var mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;

    farenheit = (temperatura * 1.8) + 32;

    mensaje = temperatura + " grados centígrados es igual " + farenheit.toFixed(2) + " grados farenheit";

    alert (mensaje)
}
