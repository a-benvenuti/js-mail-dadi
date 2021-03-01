var nomeGiocatore = prompt("Inserisci il tuo Nome");
// creo le variabili dado contenenti numeri randomici per simulare un dado
var dadoGiocatore = Math.floor(Math.random() * 6) + 1;
var dadoComputer = Math.floor(Math.random() * 6) + 1;
// controllo chi è il vincetore tra i due dadi
if (dadoGiocatore > dadoComputer){
  document.getElementById('stamp').innerHTML = "Congratulazioni: " + nomeGiocatore + " Hai Vinto!";
  console.log(dadoGiocatore);
  console.log(dadoComputer);
}else if (dadoGiocatore < dadoComputer) {
  document.getElementById('stamp').innerHTML = "Mi dispiace: " + nomeGiocatore + " Hai perso!";
  console.log(dadoGiocatore);
  console.log(dadoComputer);
}else {
  document.getElementById('stamp').innerHTML = "PAREGGIO!";
  console.log(dadoGiocatore);
  console.log(dadoComputer);
}
