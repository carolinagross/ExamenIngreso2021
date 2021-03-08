function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let edadMinima;
	let nombreMinimo;
	let CONSTPRECIO = 600;
	let contMayores =0;
	let contJovenes =0;
	let totalpasajeros;

do{

	nombre = prompt("ingrse su nombre");
	estadoCivil = prompt("ingrese su estado civil");
	while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil!="viudo" ){
		estadoCivil = prompt("Error. ingrese su estado civil");
	}

edad = parseInt(prompt("ingrese su edad"));
while (edad < 17)
{
	edad = parseInt(prompt("ingrese su edad"));
}
temperaturaCorporal = parseInt(prompt("ingrese su temperatura"));
while( isNaN(temperatura) || temperatura <0 ){
	temperaturaCorporal = parseInt(prompt("ingrese su temperatura"));
}
sexo = prompt("ingrese su sexo");
while ( sexo!= "f" &&   sexo!= "m") {
	sexo = prompt("Error. ingrese su sexo");
}


if ( estado == "viudo" && edad > 60){
	contMayoresViudos ++; //punto a
}
if (flag || ( edad < edadMinima && sexo == "f")
	{
		edadMinima = edad;
	nombreMinimo = nombre;// punto b
	}


if ( edad >= 60){
	contMayores++;
} else  {
	contJovenes++;
}

preciosindescuento = CONSTPRECIO * (contMayores + contJovenes); // punto c
 totalpasajeros = contJovenes + contMayores
 if (contMayores > totalpasajeros*50/100 ){
	precioFinal=  preciosindescuento * 25/100;

seguir = prompt("desea ingresar mas datos");
 } while (seguir == "s")

}
}
