/* 
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
Enunciado:

    Realizar el algoritmo que pida los datos necesarios para un triángulo 
    equilátero por prompt y que muestre el perímetro por alert.

*/
function mostrar()
{
    var lado;
    var perimetro;
    var mensaje;

    lado=prompt("Ingrese el largo del lado");

    lado=parseInt(lado);

    perimetro=lado*3;

    mensaje="El perimetro del triángulo ingresado es ";

    alert(mensaje + perimetro);
   
}

//Entregado