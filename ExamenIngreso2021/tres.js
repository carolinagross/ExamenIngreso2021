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
	let flag =1;
	let contMayoresViudos =0;
	let preciosindescuento;
	let precioFinal;


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
while( isNaN(temperaturaCorporal) || temperaturaCorporal <0 ){
	temperaturaCorporal = parseInt(prompt("ingrese su temperatura"));
}
sexo = prompt("ingrese su sexo");
while ( sexo!= "f" &&   sexo!= "m") {
	sexo = prompt("Error. ingrese su sexo");
}


if ( estadoCivil == "viudo" && edad > 60){
	contMayoresViudos ++; //punto a
}
if (sexo == "f" ){
if(estadoCivil == "soltero" && (flag || edad < edadMinima)){
		edadMinima = edad;
	nombreMinimo = nombre;
	flag=0;// punto b
	}
}

if ( edad >= 60){
	contMayores++;
} else  {
	contJovenes++;
}



seguir = prompt("desea ingresar mas datos");
 } while (seguir == "s")


 totalpasajeros = contMayores + contJovenes;
preciosindescuento = CONSTPRECIO * totalpasajeros; // punto c
 


console.log("el viaje total sin descuentooooooooooooooooooooooooo es "+ preciosindescuento);

 if (contMayores > totalpasajeros*50/100 ){
	precioFinal=  preciosindescuento - preciosindescuento * 25/100;
	console.log("el precio con descuento es " +  precioFinal);
}




  console.log("los viudos mayores de 60 son " + contMayoresViudos);
  
  console.log("la mujer soltera mas joven se llamaaaa " + nombreMinimo +"y tiene " + edadMinima );
  }
  
// corchete de la funcio 