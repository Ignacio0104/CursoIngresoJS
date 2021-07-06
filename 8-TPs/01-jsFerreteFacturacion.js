/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
	let suma;
    let mensaje;
    let precio1;
    let precio2;
    let precio3;

    precio1= parseFloat (document.getElementById("txtIdPrecioUno").value); 

    precio2= parseFloat (document.getElementById("txtIdPrecioDos").value); 

    precio3= parseFloat (document.getElementById("txtIdPrecioTres").value); 

    suma = precio1 + precio2  + precio3;

    mensaje = "La suma de los 3 productos es $ ";

    alert(mensaje + suma.toFixed(2));
}

function Promedio () 
{
    let suma;
    let promedio;
    let mensaje;
    let precio1;
    let precio2;
    let precio3;

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
    let suma;
    let precioFinal;
    let mensaje;
    let precio1;
    let precio2;
    let precio3;
    

    precio1= parseFloat (document.getElementById("txtIdPrecioUno").value); 
    precio2=parseFloat (document.getElementById("txtIdPrecioDos").value); 
    precio3=parseFloat (document.getElementById("txtIdPrecioTres").value); 

    suma = precio1 + precio2  + precio3;
    
    precioFinal = suma * 1.21;

    mensaje = "El precio final de los 3 productos es $ ";

    alert(mensaje + precioFinal.toFixed(2))
}

/*Comentarios

Hay forma de reducir los decimales?



let precio1;
let precio2;
let precio3;

precio1=document.getElementById("txtIdPrecioUno").value; 

precio2=document.getElementById("txtIdPrecioDos").value;

precio3=document.getElementById("txtIdPrecioTres").value;

No pude ejecutar porque el mensaje era que no se podia leer el valor de .value, que era null.

*/