/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com
TP 04

Enunciado:

	
Para el departamento de iluminación:
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

Hacer con If, If + Switch, Switch + If y Switch


 */

//if según OCTAVIO
/*
function CalcularPrecio() 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var ingresosBrutos;
    var descuento;


    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $";
    mensaje2="Usted pagó $";
    mensaje3= " de ingresos brutos";
    ingresosBrutos=0;
    descuento=1;

    if (cantidadLamparas > 5) 
    {
        descuento=0.5;
    } else 
    {
        if (cantidadLamparas===5)
        {
           if (marcaLamparas=="ArgentinaLuz")
           {
               descuento=0.60;
           } else 
           {
               descuento=0.70;
           }
        } else
        {
            if (cantidadLamparas==4) 
            {
                if (marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
                {
                    descuento=0.75;
                } else 
                {
                    descuento=0.80;
                }
            } else
            {
                if (cantidadLamparas===3) 
                {
                    if (marcaLamparas=="ArgentinaLuz") 
                    {
                        descuento=0.85;
                    } else 
                    {
                        if (marcaLamparas=="FelipeLamparas")
                        {
                            descuento=0.90;
                        } else 
                        {
                            descuento=0.95;
                        }
                    }
                }     
            }

        }
    }
    
    precioLampara=precioLampara*cantidadLamparas
    precioLampara=precioLampara*descuento

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;

}


//if + switch SEGUN OCTAVIO

function CalcularPrecio() 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var ingresosBrutos;
    var descuento;


    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $";
    mensaje2="Usted pagó $";
    mensaje3= " de ingresos brutos";
    ingresosBrutos=0;
    descuento=1;

    if (cantidadLamparas > 5) 
    {
        descuento=0.5;
    } else 
    {
        if (cantidadLamparas===5){
            
            switch (marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.60;
                    break;
                default:
                    descuento=0.70;
            }
        } else
        {
            if (cantidadLamparas==4) 
            {
                switch (marcaLamparas){
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento=0.75;
                        break;
                    default:
                        descuento=0.80;
                }
        
            } else
            {
                if (cantidadLamparas===3) 
                {
                    switch (marcaLamparas){
                        case "ArgentinaLuz":
                        
                            descuento=0.85;
                            break;
                        
                        case "FelipeLamparas":
                            descuento=0.90;
                            break;
                        default:
                            descuento=0.95;
                    }
                    
                }   
            }

        }
    }
    
    precioLampara=precioLampara*cantidadLamparas;
    precioLampara=precioLampara*descuento;

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;

}

//switch


function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var mensaje3;
    var ingresosBrutos;
    var descuento;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $"
    mensaje2="Usted pagó $"
    mensaje3= " de IIBB"
    ingresosBrutos=0;
    descuento=1;

    switch (cantidadLamparas) {
        case 5:
            switch (marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.6;
                    
                    
                    break;
                 default:
                    descuento=0.7;
                    
                    break; 
            }break;
        case 4:
            switch (marcaLamparas) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=0.75;
                    
                    break;
                default:
                    descuento=0.8;
                    
                    break;
            }break;
        case 3:
            switch (marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.85;
                   
                    break;
                case "FelipeLamparas":
                    descuento=0.90;
                    
                    break;
                default:
                    descuento=0.95;
                    
                    break;
            }break;
        case 2:
        case 1:
            
            break;
        
        default:
            precioLampara=precioLampara*0.5;
        
            break;   
    }    

    precioLampara=precioLampara*cantidadLamparas;
    precioLampara=precioLampara*descuento;

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;  
} 

/*


//switch + if Segun OCTAVIO

function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var mensaje3;
    var ingresosBrutos;
    var descuento;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $"
    mensaje2="Usted pagó $"
    mensaje3= " de IIBB"
    ingresosBrutos=0;
    descuento=1;
    
    switch (cantidadLamparas) {
        case 5:
            if (marcaLamparas=="ArgentinaLuz"){
                descuento=0.6;

            }else {
                descuento=0.7;
                
                
            }
            break;
        case 4:
            if (marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
                descuento=0.75;
                
               
             }else {
                descuento=0.8;
                    
             }
            break;
        case 3:
            if (marcaLamparas=="ArgentinaLuz"){
                descuento=0.85;
              
                
            } else 
            {
                if (marcaLamparas=="FelipeLamparas"){
                    descuento=0.90;
                } else 
                {
                    descuento=0.95;  
                }
            }
            break;
        case 2:
        case 1:
                  
            break;
        default:
            precioLampara=precioLampara*0.5;
               
    }    

    precioLampara=precioLampara*cantidadLamparas;
    precioLampara=precioLampara*descuento;

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;  
} 


--------------------------------------------------------------------------------------------------------

//switch + if


function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var mensaje3;
    var ingresosBrutos;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $"
    mensaje2="Usted pagó $"
    mensaje3= " de IIBB"
    ingresosBrutos=0;
    /*
    switch (cantidadLamparas) {
        case 5:
            if (marcaLamparas=="ArgentinaLuz"){
                    precioLampara=precioLampara*0.6;
                    
                    
            }else {
                precioLampara=precioLampara*0.7;
                
                
            }
        break;
        case 4:
            if (marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
                precioLampara=precioLampara*0.75;
                
               
             }else {
                    precioLampara=precioLampara*0.8;
                    
                      
             }
        break;
        case 3:
            if (marcaLamparas=="ArgentinaLuz"){
                precioLampara=precioLampara*0.85;
              
                
            } else if (marcaLamparas=="FelipeLamparas"){
                precioLampara=precioLampara*0.90;
                
                
            }else {
                precioLampara=precioLampara*0.95;
               
                
            }
        break;
        case 2:
        case 1:
            
            
        break;
        default:
            precioLampara=precioLampara*0.5;
            
    
            break;   
    }    

    precioLampara=precioLampara*cantidadLamparas

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;  
} 


//if (versión original)

function CalcularPrecio() 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var ingresosBrutos;
    var mensaje2;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $";
    mensaje2="Usted pagó $";
    mensaje3= " de ingresos brutos";
    ingresosBrutos=0;

    if (cantidadLamparas >= 6) 
    {
        precioLampara=precioLampara*0.5;
        
        

    } else if (cantidadLamparas==5) {
        if (marcaLamparas=="ArgentinaLuz") {
            precioLampara=precioLampara*0.60;
            
            
        } else 
        {
            precioLampara=precioLampara*0.70;
        }

    } else if (cantidadLamparas==4) {
        if (marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas") 
        {
            precioLampara=precioLampara*0.75;
            
        } else 
        {
            precioLampara=precioLampara*0.80;
    
        }
    
    }else if(cantidadLamparas==3){
        if (marcaLamparas=="ArgentinaLuz") {
            precioLampara=precioLampara*0.85;
           
        } else if (marcaLamparas=="FelipeLamparas") {
            precioLampara=precioLampara*0.90;
            
        }else {
            precioLampara=precioLampara*0.95;

        }

    } else if (cantidadLamparas >=1 && cantidadLamparas<3) {
    
    }
    
    else {
        alert("Marca o cantidad inválido")
    }
    
    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    precioLampara=precioLampara*cantidadLamparas
    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara;
}


//if + Switch (original)

function CalcularPrecio () 
{
    var precioLampara;
    var cantidadLamparas;
    var marcaLamparas;
    var mensaje;
    var mensaje2;
    var mensaje3;
    var ingresosBrutos;

    precioLampara=35;
    cantidadLamparas=parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas=document.getElementById("Marca").value;
    mensaje="El precio final es de $"
    mensaje2="Usted pagó $"
    mensaje3= " de IIBB"
    ingresosBrutos=0;

    if (cantidadLamparas >= 6) {

        precioLampara=precioLampara*0.5;
        
    }else if (cantidadLamparas == 5) {
        switch (marcaLamparas){
            case "ArgentinaLuz":
                precioLampara=precioLampara*0.6;
                
                break;
            
            default:
                precioLampara=precioLampara*0.7;
                
                break;
         }          
    } else if (cantidadLamparas==4){
        switch (marcaLamparas){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                precioLampara=precioLampara*0.75;

                break;

            default:
                precioLampara=precioLampara*0.8;

                break;
        }
    } else if (cantidadLamparas==3) {
        switch (marcaLamparas){
            case "ArgentinaLuz":
                precioLampara=precioLampara*0.85;
            
                break;
            case "FelipeLamparas":
                precioLampara=precioLampara*0.90;
                
                break;

            default:
                precioLampara=precioLampara*0.95;
                break;
        }
    } else {
        alert("Marca o cantidad inválido")
    }
    precioLampara=precioLampara*cantidadLamparas;

    if (precioLampara>120){
        ingresosBrutos=precioLampara*10/100;
        precioLampara=precioLampara+ingresosBrutos;
        alert(mensaje2 + ingresosBrutos + mensaje3);
    } 

    document.getElementById("txtIdprecioDescuento").value=mensaje + precioLampara; 
} 





*/
//Todo entregado

