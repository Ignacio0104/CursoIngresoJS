/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;

function Sumar () 
{
	var suma;
    var mensaje;
   

    precio1= parseFloat(document.getElementById("txtIdPrecioUno").value); 

    precio2= parseFloat(document.getElementById("txtIdPrecioDos").value); 

    precio3= parseFloat(document.getElementById("txtIdPrecioTres").value); 

    suma = precio1 + precio2  + precio3;

    mensaje = "La suma de los 3 productos es $ ";

    alert(mensaje + suma.toFixed(2));
}

function Promedio () 
{
    var suma;
    var promedio;
    var mensaje;
   

    precio1= parseFloat (document.getElementById("txtIdPrecioUno").value); 
    precio2=parseFloat (document.getElementById("txtIdPrecioDos").value); 
    precio3=parseFloat (document.getElementById("txtIdPrecioTres").value); 

    suma = precio1 + precio2  + precio3;
    
    promedio = suma/3;

    mensaje = "El promedio de los 3 productos es $ ";

    alert(mensaje + promedio.toFixed(2))
	
}
function PrecioFinal () 
{
    var suma;
    var precioFinal;
    var mensaje;
  
    precio1= parseFloat (document.getElementById("txtIdPrecioUno").value); 
    precio2=parseFloat (document.getElementById("txtIdPrecioDos").value); 
    precio3=parseFloat (document.getElementById("txtIdPrecioTres").value); 

    suma = precio1 + precio2  + precio3;
    
    precioFinal = suma * 1.21;

    mensaje = "El precio final de los 3 productos es $ ";

    alert(mensaje + precioFinal.toFixed(2))
}

/* Entregado

Comentarios

Hay forma de reducir los decimales?



let precio1;
let precio2;
let precio3;

precio1=document.getElementById("txtIdPrecioUno").value; 

precio2=document.getElementById("txtIdPrecioDos").value;

precio3=document.getElementById("txtIdPrecioTres").value;

No pude ejecutar porque el mensaje era que no se podia leer el valor de .value, que era null.

*/