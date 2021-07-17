/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Enunciado:

  Al comenzar el juego generamos un número 
  secreto del 1 al 100, en la pantalla del juego
  dispondremos de un cuadro de texto para ingresar
    un número y un botón “Verificar”, si el número 
    ingresado es el mismo que el número secreto se dará 
    por terminado el juego con un mensaje similar a este: 
  “Usted es un ganador!!! y en solo X intentos”.
  de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.

*/

var contadorIntentos;
var numeroSecreto;

contadorIntentos=0;


function comenzar()
{
  numeroSecreto=Math.random()*100+1;
  numeroSecreto=parseInt(numeroSecreto);
  contadorIntentos=0;
}

function verificar()
{
	var intento;
  
  intento=document.getElementById("txtIdNumero").value;
  intento=parseInt(intento);
  

  if (intento==numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
    
  } else 

  {
    if (intento>numeroSecreto)
    {
      alert("Error, te pasaste!");
      
    } else 

      { if (intento<numeroSecreto)
        {
          alert("Error, te falta un poco");
         
        } else
        {
          alert("Numero ingresado en inválido");
        }
      }   
  }

  contadorIntentos=contadorIntentos+1;
  document.getElementById("txtIdIntentos").value=contadorIntentos;
 
}