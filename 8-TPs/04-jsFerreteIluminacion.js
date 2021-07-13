/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca 
    el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
    y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” 
    se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar 
    del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $"

    if (cantidadLamparas >= 6) 
    {
        precioLampara=precioLampara*0.5;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK


    } else if (cantidadLamparas==5&&marcaLamparas=="ArgentinaLuz")
    {
        precioLampara=precioLampara*0.60;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK

    } else if (cantidadLamparas==5&&marcaLamparas!="ArgentinaLuz")
    {

        precioLampara=precioLampara*0.70;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK


    } else if (cantidadLamparas==4&&marcaLamparas=="ArgentinaLuz"||cantidadLamparas==4&&marcaLamparas=="FelipeLamparas")
    {

        precioLampara=precioLampara*0.75;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK

    } else if (cantidadLamparas==4&&marcaLamparas!="ArgentinaLuz"&&marcaLamparas!="FelipeLamparas")
    {

        precioLampara=precioLampara*0.80;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK

    }else if(cantidadLamparas==3&&marcaLamparas=="ArgentinaLuz")
    {

        precioLampara=precioLampara*0.85;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK

    }else if(cantidadLamparas==3&&marcaLamparas=="FelipeLamparas")
    {

        precioLampara=precioLampara*0.90;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas;
        //OK 

    }else if (cantidadLamparas==3&&marcaLamparas!="ArgentinaLuz"&&marcaLamparas!="FelipeLamparas")
    {
        precioLampara=precioLampara*0.95;
        document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara*cantidadLamparas; 
        //OK
        
    } else {

        alert("Marca o cantidad inválido")

    }

}
