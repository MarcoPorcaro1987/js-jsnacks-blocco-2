// Inserisci un numero, se è pari stampa il numero,
var numeroutente = parseInt(prompt("inserisci un numero"));
while (isNaN(numeroutente)) {
    numeroutente = parseInt(prompt("Errore! Devi Inserire un numero"));
}
if ( numeroutente % 2 == 0 ) {
    alert("Il numero è " + numeroutente);
} 
// se è dispari stampa il numero successivo
else {
   numeroutente = numeroutente + 1;
   alert("Il numero è " + numeroutente);
}
