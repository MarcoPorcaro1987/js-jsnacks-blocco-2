var somma=0;

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
for ( var i=0; i < 5; i++) {
    var numeroutente = parseInt(prompt("Inserisci un numero"));
    while (isNaN(numeroutente)) {
        var numeroutente = parseInt(prompt("Errore! Devi Inserire un numero"));
    }
    somma+=numeroutente;
}
// Il programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
// Esegui ciclo while.
var contatore=0;
while(contatore<5) {
    numeroutente=parseInt(prompt("Inserisci un numero"));
     while (isNaN(numeroutente)) {
        var numeroutente = parseInt(prompt("Errore! Devi Inserire un numero"));
    }
    somma+=numeroutente;
    contatore++;
}

alert("Somma:" + somma);
