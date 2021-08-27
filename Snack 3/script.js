// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, 
var nomi = ["Marco", "Carmen", "Giovanni"];
var cognomi = ["Del Piero", "Batistuta", "Baggio"];
// Gatsby vuole generare una falsa lista di 3 invitati.
listautenti = [];
for (var i = 0; i < 3; i++) {
    listautenti.push(nomi[Math.floor(Math.random() * nomi.length)] +  " " + cognomi[Math.floor(Math.random() * cognomi.length)]); 
}
alert("La lista utenti è composta da: " + listautenti);