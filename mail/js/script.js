// creo un array contenete 5 email
var elencoMail = ["0@gmail.com" , "1@gmail.com" , "2@gmail.com" , "3@gmail.com" , "4@gmail.com"];
console.log(elencoMail);

// chiedo all'utente di inserire la mail da verificare
var mailVerifica = prompt("Inserisci qui, la tua e-mail");

// controllo se l'accesso dell'utente è consentito
for (var i = 0; i < elencoMail.length; i++) {

  if (mailVerifica === elencoMail[i]) {
   console.log("Si può accedere");
   document.getElementById('stamp').innerHTML = "Accesso Autorizzato";
   break;
  }else {
    console.log("No non può accedere");
    document.getElementById('stamp').innerHTML = "Accesso NON Autorizzato";
  }

}
