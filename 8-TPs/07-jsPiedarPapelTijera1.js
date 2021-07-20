/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.


Ejercicio son switch

var eleccionMaquina;



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
            alert("Elegiste piedra igual que la máquina, quedan empatados");
            break;
        case 2:
            alert("Elegiste piedra y la máquina eligió papel. Perdiste");
            break;
        case 3:
            alert("Elegiste piedra y la máquina eligió tijera. Ganaste!!");
            break;
    }

}
function papel()
{
    switch (eleccionMaquina) 
    {
        case 1:
            alert("Elegiste papel y la máquina eligió piedra. Ganaste!!");
            break;
        case 2:
            alert("Elegiste papel igual que la máquina, quedan empatados");
            break;

        case 3:
            alert("Elegiste papel y la máquina eligió tijera. Perdiste");
            break;
    }
}
function tijera()
{
    switch (eleccionMaquina) 
    {
        case 1:
            alert("Elegiste tijera y la máquina eligió piedra. Perdiste");
            break;
        case 2:
            alert("Elegiste tijera y la máquina eligió papel. Ganaste!!");
            break;

        case 3:
            alert("Elegiste tijera igual que la máquina, quedan empatados");
            break;
    }

}

Ejercicio con IF

*/

var eleccionMaquina;



function comenzar()
{
	eleccionMaquina=Math.random()*3+1;
    eleccionMaquina=parseInt(eleccionMaquina);

}
function piedra()
{
	if (eleccionMaquina==1)
    {
        alert("Elegiste piedra igual que la máquina, quedan empatados");
    } else 
    {
        if (eleccionMaquina==2)
        {
            alert("Elegiste piedra y la máquina eligió papel. Perdiste");
        } else 
        {
            if (eleccionMaquina==3)
            {
                alert("Elegiste piedra y la máquina eligió tijera. Ganaste!!");
            }
        }
    }
    

}
function papel()
{

    if (eleccionMaquina==1)
    {
        alert("Elegiste papel y la máquina eligió piedra. Ganaste!!");
    } else 
    {
        if (eleccionMaquina==2)
        {
            alert("Elegiste papel igual que la máquina, quedan empatados");
        } else 
        {
            if (eleccionMaquina==3)
            {
                alert("Elegiste papel y la máquina eligió tijera. Perdiste");
            }
        }
    }

}

function tijera()
{
    if (eleccionMaquina==1)
    {
        alert("Elegiste tijera y la máquina eligió piedra. Perdiste");
    } else 
    {
        if (eleccionMaquina==2)
        {
            alert("Elegiste tijera y la máquina eligió papel. Ganaste!!");
        } else 
        {
            if (eleccionMaquina==3)
            {
                alert("Elegiste tijera igual que la máquina, quedan empatados");
            }
        }
    }

}
