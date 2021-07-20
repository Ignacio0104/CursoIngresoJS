/*

pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).

*/

function mostrar()
{
    var planetaIngresado;

    planetaIngresado=prompt("Ingrese el planeta (en minúscula)");

    switch (planetaIngresado)
    {
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
            break;
        case "tierra":
            alert("Acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluto":
            alert("Acá hace mas frío");
            break;
        default:
            alert("Dato ingresado es inválido");
            break;
    }

}
