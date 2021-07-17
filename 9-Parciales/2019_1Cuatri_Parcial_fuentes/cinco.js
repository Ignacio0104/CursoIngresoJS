/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
2019 TP 05

Enunciado:

    Bienvenidos (SOLO WITCH).
    una empresa de viajes le solicita ingresar que continente le gustaria visitar
    y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
    Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
    Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
    Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y 
    cualquier otro medio 5%.
    cualquier otro continente tiene un recargo del 20%

*/

function mostrar()
{
    var continente;
    var cantidadDeDias;
    var descuento;
    var metodoDePago;
    var costoDia;
    var precioFinal;

    continente=document.getElementById("Marca").value;
    cantidadDeDias=prompt ("Cuantos días desea viajar?");
    metodoDePago=prompt("Elija método de pago (solo numero): 1. Débito - 2. MercadoPago - 3. Efectivo - 4. Otro");
    //Aca establecí que la opción sea un número para evitar posibles errores de tipeo al ingresar el método de pago.
    cantidadDeDias=parseInt(cantidadDeDias);
    descuento=1;
    costoDia=100;


    switch (continente)
    {
        case "América":

            switch (metodoDePago) 
            {
                case "1":
                    descuento=0.40;
                    break;

                default:
                    descuento=0.50;
                    break;
            }break;

        case "África":
            switch (metodoDePago)
            {
                case "2":
                case "3": 
                    descuento=0.25;
                    break;
                default:
                    descuento=0.40;
                    break;
            }break;
        
        case "Europa":
            switch (metodoDePago)
            {
                case "1":
                    descuento=0.65;
                    break;
                case "2":
                    descuento=0.90;
                    break;
                case "3":
                case "4":
                    descuento=0.95;
                    break;
            }break;

        default:
            descuento=1.20; 
    }

    precioFinal=costoDia*descuento;
    precioFinal=precioFinal*cantidadDeDias;

    alert("$ " + precioFinal);
}   
