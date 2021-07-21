/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var segundos;
var numeroRandom1;
var numeroRandom2;
var resultado;

segundos=0;

function comenzar()
{
    setInterval(sumarSegundo,1000);
    numeroRandom1=Math.random()*10+1;
    numeroRandom1=parseInt(numeroRandom1);
    numeroRandom2=Math.random()*10+1;
    numeroRandom2=parseInt(numeroRandom2);

    document.getElementById("txtIdPrimerNumero").value=numeroRandom1;
    document.getElementById("txtIDSegundoNumero").value=numeroRandom2;

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
    segundos=0;

}

function sumarSegundo() {
    segundos=segundos+1;
    if (segundos>4)
    {
        Responder()
    }
}
