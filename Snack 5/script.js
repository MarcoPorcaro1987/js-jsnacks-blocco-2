// Crea due array che hanno un numero di elementi diversi.
var pari = [1,3,5,7];
var dispari = [0,2,4,6,8,10,12,14,16,18,20];
console.log("Grandezza archivio pari iniziale= " + pari.length);
console.log( "Grandezza archivio dispari iniziale= " + dispari.length);
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
if(pari.length > dispari.length){

    while (pari.length > dispari.length){
           dispari.push(Math.floor(Math.random() *100));  
     }
}else if(pari.length < dispari.length) {
    while (pari.length < dispari.length){
        pari.push(Math.floor(Math.random() *100));
  }
}else{
    console.log("Gli archivi hanno la stessa grandezza");
}
console.log("Dopo il push, gli archivi stessa grandezza:");
console.log("Grandezza archivio pari finale= " + pari.length);
console.log( "Grandezza archivio dispari finale= " + dispari.length);

