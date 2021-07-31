/*
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , 
sabor validar(carne vegetales pollo) e informar por alert:

a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne

*/

function mostrar()
{
    var contador;
    var kilosAlimento;
    var sabor;
    var promedioKilos;
    var totalKilos;
    var masLiviano;
    var saborMasLiviano;
    var cantidadCarne;
    var pesoCarne;
    var promedioCarne;

    contador=0;
    totalKilos=0;
    cantidadCarne=0;
    pesoCarne=0;

    while(contador<10)
    {
        kilosAlimento=prompt("Ingrese los kilos de alimento");
        kilosAlimento=parseInt(kilosAlimento);

        while(kilosAlimento<0||kilosAlimento>500)
        {
            kilosAlimento=prompt("Error, favor volver a ingresar los kilos de alimento");
            kilosAlimento=parseInt(kilosAlimento);
        }

     

        sabor=prompt("Favor ingrese el sabor del alimento (carne, vegetales o pollo)");

        while(sabor!="carne"&&sabor!="vegetales"&sabor!="pollo")
        {
            sabor=prompt("Error, el sabor ingresado no está dentro de las opciones, vuelva a ingresarlo");
        }

        if(kilosAlimento<masLiviano||contador==0)
        {
            masLiviano=kilosAlimento
            saborMasLiviano=sabor;

        }

        if(sabor=="carne")
        {
            cantidadCarne=cantidadCarne+1;
            pesoCarne=pesoCarne+kilosAlimento;
        }

        totalKilos=totalKilos+kilosAlimento;
        contador=contador+1;

    }

    promedioKilos=totalKilos/contador;
    if(cantidadCarne>1&&pesoCarne>1)
    {
        promedioCarne=pesoCarne/cantidadCarne;
    }

    document.write("El promedio de kilos total es de: " + promedioKilos.toFixed(2) + "<br>" + 
    "La bolsa mas liviana pesa: " + masLiviano + " kg y su sabor es " + saborMasLiviano + "<br>" + 
    "La cantidad de bolsas de carne son: " + cantidadCarne + " y el promedio de kilos de carne es de: " + promedioCarne.toFixed(2))

}
