function mostrar()
{
	let nombre;
	let tipo;
	let cantidad;
	let sexo;
	let nota;
	let edad;
	let seguir;
	let flagnomasculino =1;
	let mejorpromedio =0;
	let nombrenomasculino;
	let flaglibre=1;
	let edadlibre;
	let nombrelibre;
 let acumF =0;
 let contF =0;
 let acumM =0;
 let contM =0;
 let acumNB =0;
 let contNB =0;
 let promedioF;
let promedioNB;
let promedioM;
let edadnoremota ;
let nombrenoremota;
let flagremota =1;
let cantidadmaterias;


do{
  
nombre = prompt("ingrese su nombre");
tipo = prompt("ingrese el tipo de cursada libre/presencial/remota");
while (tipo  != "libre" && tipo  != "presencial" && tipo  != "remota"){
	tipo = prompt("Error.ingrese el tipo de cursada libre/presencial/remota");
}

cantidad = parseInt(prompt("ingrese la cantidad de materias"));
while ( cantidad <0 || cantidad >7){
	cantidad = parseInt(prompt("Error.ingrese la cantidad de materias"));
}
sexo = prompt("ingrese su sexo f o m o no binario");
while ( sexo!="f" && sexo!="m" && sexo!="no binario" ){
	sexo = prompt("Error.ingrese su sexo f o m o no binario");
}
nota = parseInt(prompt("ingrese su nota"));
  while(nota <0 || nota >10){
	nota = parseInt(prompt("Error. ingrese su nota"));
  }
edad= parseInt(prompt("ingrese su edad"));
while ( isNaN(edad) || edad<0 ){
	edad= parseInt(prompt("Error. ingrese su edad"));
}

if (sexo != "m" &&(flagnomasculino || nota > mejorpromedio)){
	mejorpromedio = nota;
	nombrenomasculino = nombre;
	flagnomasculino =0;
}//punto a 


if(tipo =="libre" && (flaglibre || edad < edadlibre)) {
edadlibre = edad;
nombrelibre = nombre;
flaglibre = 0;//b
}

if( sexo == "f"){
acumF = acumF + nota;
contF ++;
} else if (sexo == "m"){
acumM = acumM + nota;
contM ++;
}else{
acumNB = acumNB + nota;
contNB ++;
}//punto c

if(tipo !="remota" &&(flagremota || cantidad > cantidadmaterias)){
cantidadmaterias = cantidad;
	edadnoremota =edad;
nombrenoremota = nombre;
flag =0;
}

seguir = prompt("desea seguir ingresando alumnos");

}while (seguir == "s")//parentesis del do
if (contF != 0){
promedioF = acumF/contF;
}
if (contM != 0 ){
promedioM = acumM/contM;
}
if (contNB != 0){
promedioNB = acumNB/contNB;
}


if (flagnomasculino == 1){
	console.log("no se ingresaron  no masculinos")
} else {console.log(" El nombre del mejor promedio que no sea masculino " + nombrenomasculino); //a
}
if(flaglibre == 1){
console.log("no se ingresaron alumnos libres")
} else {
	console.log("El nombre del mas joven de los alumnos entre los que la dan libre " + nombrelibre);
}

console.log("proemdeio femenino " + promedioF + "promedio masculino " + promedioM + "promedio nobinario" + promedioNB); 

if( flagremota==1){
console.log("  la edad y nombre del que cursa ,as materias quer no sean en forma remota  " + edadnoremota + nombrenoremota);
}

}// fin funcion
/* nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/