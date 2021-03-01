// creo un array contenete 5 email
var elencoMail = ["0@gmail.com" , "1@gmail.com" , "2@gmail.com" , "3@gmail.com" , "4@gmail.com"];
console.log(elencoMail);

// chiedo all'utente di inserire la mail da verificare
var mailVerifica = prompt("Inserisci qui, la tua e-mail");
for (var i = 0; i < elencoMail.length; i++) {

if (mailVerifica === elencoMail[i]) {
 console.log("Si può accedere");
 break;
} else {
  console.log("No non può accedere");
}

}
