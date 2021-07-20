/*

Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página

*/


var eleccionMaquina;
var contadorDeEmpates;
var contadorDeGanadas;
var contadorDePerdidas;

contadorDeEmpates=0;
contadorDeGanadas=0;
contadorDePerdidas=0;


function comenzar()
{
	eleccionMaquina=Math.random()*3+1;
	eleccionMaquina=parseInt(eleccionMaquina);
}

function piedra()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("Elegiste piedra al igual que la máquina. Empataste");
			contadorDeEmpates=contadorDeEmpates+1;
			break;
		case 2:
			alert("Elegiste piedra y la máquina eligió papel. Perdiste");
			contadorDePerdidas=contadorDePerdidas+1;
			break;
		case 3:
			alert("Elegiste piedra y la máquina eligió tijera. Ganaste!!");
			contadorDeGanadas=contadorDeGanadas+1;
			break;
	}
	document.getElementById("txtIdGanadas").value="Ganados: " + contadorDeGanadas;
	document.getElementById("txtIdPerdidas").value="Perdidos: " + contadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value="Empatados: " + contadorDeEmpates;
	eleccionMaquina=Math.random()*3+1;
	eleccionMaquina=parseInt(eleccionMaquina);

}
function papel()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("Elegiste papel y la máquina eligió piedra. Ganaste!!");
			contadorDeGanadas=contadorDeGanadas+1;
			break;
		case 2:
			alert("Elegiste papel al igual que la máquina. Empataste")
			contadorDeEmpates=contadorDeEmpates+1;
			break;
		case 3:
			alert("Elegiste papel y la máquina eligió tijera. Perdiste");
			contadorDePerdidas=contadorDePerdidas+1;
			break;
	}
	document.getElementById("txtIdGanadas").value="Ganados: " + contadorDeGanadas;
	document.getElementById("txtIdPerdidas").value="Perdidos: " + contadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value="Empatados: " + contadorDeEmpates;
	eleccionMaquina=Math.random()*3+1;
	eleccionMaquina=parseInt(eleccionMaquina);

}
function tijera()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("Elegiste tijera y la máquina eligió piedra. Perdiste");
			contadorDePerdidas=contadorDePerdidas+1;
			break;
		case 2:
			alert("Elegiste tijera y la máquina eligió papel. Ganaste!!")
			contadorDeGanadas=contadorDeGanadas+1;
			break;
		case 3:
			alert("Elegiste tijera al igual que la máquina. Empataste");
			contadorDeEmpates=contadorDeEmpates+1;
			break;
	}
	document.getElementById("txtIdGanadas").value="Ganados: " + contadorDeGanadas;
	document.getElementById("txtIdPerdidas").value="Perdidos: " + contadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value="Empatados: " + contadorDeEmpates;
	eleccionMaquina=Math.random()*3+1;
	eleccionMaquina=parseInt(eleccionMaquina);
}


function mostrarResultado()
{
	
}
