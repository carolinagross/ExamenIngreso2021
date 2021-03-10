
function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let tipoInflamable;
	let marca;
	let acumAlcohol =0;
	let acumIac =0;
	let acumQuat=0;
	let contIac =0;
	let contAlcohol =0;
	let contQuat =0;
	let promedioA;
	let promedioI;
	let promedioQ;
	let acumIgnifugo =0;
	let acumCombustible =0;
	let acumExplosivo =0;
	let maxTipo;
	let contIacBarato =0;
	let precioMax;
	let marcaMax;
	let tipoMax;
	let flag =1;



for (let i =0 ; i<5; i++) {
tipo = prompt("ingrese el tipo ALCOHOL/IAC/QUAT");
while(tipo  != "ALCOHOL" && tipo != "IAC" && tipo !="QUAT"){
	tipo = prompt("Error. ingrese el tipo ALCOHOL/IAC/QUAT");
}
cantidad = parseInt(prompt("ingrese cantidad"));
while ( cantidad <= 0 || cantidad > 1000){
	cantidad = parseInt(prompt("Error.ingrese cantidad"));
}

precio = parseInt(prompt("ingrese el precio"));
while ( precio <100 || precio >300){
	precio = parseInt(Prompt("Error.ingrese el precio"));
}

tipoInflamable = prompt("ingrese el tipo inflamable");
while( tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo" ){
	tipoInflamable = prompt("ingrese el tipo inflamable");
}

marca = prompt("Ingrese la marca");


if ( tipo == "ALCOHOL"){
	acumAlcohol = acumAlcohol + cantidad;
	contAlcohol++;
} else if ( tipo == "IAC"){
	acumIac += cantidad;
		contIac++;
}else{
	acumQuat += cantidad;
	contQuat++;
} 
if (contAlcohol !=0 ){
promedioA = acumAlcohol / contAlcohol;
}
if (contIac != 0){
promedioI = acumIac / contIac;
}
if (contQuat !=0){
promedioQ = acumQuat / contQuat;
}// punto a

if (tipoInflamable == "ignifugo"){
	acumIgnifugo += cantidad;
	
} else if (tipoInflamable == "combustible"){
	acumCombustible+= cantidad;
} else {
	acumExplosivo+= cantidad; //punto b
}

if( tipo == "IAC" && precio <= 200 ){
	contIacBarato++; //punto c
}
if(flag || precio > precioMax){
	precioMax = precio;
	marcaMax = marca;
	tipoMax = tipo;
	flag =0;//punto d
}

}//corchete del for

if (acumIgnifugo > acumCombustible && acumIgnifugo > acumExplosivo){
	maxTipo= "ignifugo";
}else if (acumCombustible >= acumIgnifugo && acumCombustible> acumExplosivo){
	maxTipo = "combustible";
}else {
	maxTipo = "explosivo"; //punto b
}



console.log ( "A- promedioooo alcohol "+ promedioA + "promedioIac " + promedioI + "promedioQuat" + promedioQ);
console.log("B- la categoria con mas cantidad de unidades " + maxTipo);
console.log(" C- se compraron " + contIacBarato + "de iac menos o igual de $200");
console.log("D-la marca y el tipo masssssssssssssssssssssssss caro sonnnnnnnnnnnnnnnnnnnnnn: "+ marcaMax + tipoMax)

}//corchete de funcion