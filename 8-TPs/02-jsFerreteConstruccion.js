/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y 
se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con 
tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas 
se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var perimetro;
    var mensaje;
    var mensaje2;
    var largo;
    var ancho;
    var rectanguloAlambre;
    

    largo = parseInt(document.getElementById("txtIdLargo").value); 
    ancho = parseInt(document.getElementById("txtIdAncho").value); 
    
    perimetro = (largo + ancho) * 2;

    rectanguloAlambre = perimetro * 3;

    mensaje = "La cantidad de alambre que se necesita es de ";
    mensaje2 = " metros"

    alert(mensaje + rectanguloAlambre + mensaje2);
    
}

function Circulo () 
{
	var perimetro;
    var radio;
    var circuloAlambre;
    const PI = 3.14;
    var mensaje;
    var mensaje2;
    
    radio = parseInt(document.getElementById("txtIdRadio").value); 
    
    perimetro = 2 * PI * radio;

    circuloAlambre = perimetro * 3;

    mensaje = "La cantidad de alambre que se necesita es de ";
    mensaje2 = " metros"

    alert(mensaje + circuloAlambre.toFixed(2)  + mensaje2);
}


function Materiales () 
{
	var area;
    var mensaje;
    var mensaje2;
    var mensaje3;
    var largo;
    var ancho;
    var cemento;
    var cal;
    
    largo = parseInt(document.getElementById("txtIdLargo").value); 
    ancho = parseInt(document.getElementById("txtIdAncho").value); 
    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;

    mensaje = "Para este terreno necesitamos ";
    mensaje2 = " bolsas de cemento y "
    mensaje3 = " bolsas de cal"

    alert(mensaje + cemento + mensaje2 + cal + mensaje3);
}

/* Entregado */ 