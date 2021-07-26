/*
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras

Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo 
se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% 
y cualquier otro medio 5% 

cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque

*/

function mostrar()
{

    var continente;
    var medioDePago;
    var descuento;
    var precioPorDia;
    var precioFinal;
    var recargo;

    descuento=1;
    precioPorDia=100;
    recargo=1;

    continente=document.getElementById("selecContinente").value;
    medioDePago=document.getElementById("selecPago").value;

    switch (continente)
    {
        case "America":
            switch (medioDePago)
            {
                case "Débito":
                    descuento=0.75;
                    break;
                default:
                    descuento=0.85;
                    break;
            } 
        break;

        case "África":
        case "Oceania":
            switch(medioDePago)
            {
                case "MercadoPago":
                case "Efectivo":
                    descuento=0.55;
                    break;
                default:
                    descuento=0.70;
            }
        break;

        case "Europa":
            switch(medioDePago)
            {
                case "Débito":
                    descuento=0.65;
                    break;   
                case "MercadoPago":
                    descuento=0.70;
                    break;
                default:
                    descuento=0.75;
                    break;
            }
        break;

        default:
            descuento=1.20;
            break;
    }

    switch (medioDePago)
    {
        case "Cheque":
            recargo=1.15;
            break;
    }

    precioFinal=(precioPorDia*descuento)*recargo;

    alert("El precio final es de $" + precioFinal.toFixed(2));

}
