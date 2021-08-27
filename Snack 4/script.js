// Crea un array di numeri interi
var listanumeri = [3, 4, 37, 54, 58, 65];
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari
var sommadispari = 0;
for (i = 0; i < listanumeri.length; i++) {
    if( i % 2 == 1) {
    sommadispari += listanumeri[i]; 
    }
}
console.log(sommadispari);
