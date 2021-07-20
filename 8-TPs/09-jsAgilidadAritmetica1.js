/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroRandom1;
var numeroRandom2;
var resultado;

function comenzar()
{

    numeroRandom1=Math.random()*10+1;
    numeroRandom1=parseInt(numeroRandom1);
    numeroRandom2=Math.random()*10+1;
    numeroRandom2=parseInt(numeroRandom2);

    document.getElementById("txtIdPrimerNumero").value=numeroRandom1;
    document.getElementById("txtIdSegundoNumero").value=numeroRandom2;

    operacion=Math.random()*4+1;
    operacion=parseInt(operacion);

    switch (operacion)
    {
        case 1:
            document.getElementById("txtIdOperador").value="-";
            resultado=numeroRandom1-numeroRandom2;
            break;
        case 2:
            document.getElementById("txtIdOperador").value="+";
            resultado=numeroRandom1+numeroRandom2;
            break;
        case 3:
            document.getElementById("txtIdOperador").value="*";
            resultado=numeroRandom1*numeroRandom2;
            break;
        case 4:
            document.getElementById("txtIdOperador").value="/";
            resultado=numeroRandom1/numeroRandom2;
            break;
    }

}
function Responder()
{
	respuesta=document.getElementById("txtIdRespuesta").value;

    if(respuesta==resultado)
    {
        alert("Correcto!!");
    } else 
    {
        alert("Error");
    }

}//FIN DE LA FUNCIÓN
