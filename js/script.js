/*-----------------------------------TRACCIA---------------------------------------------

Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati dall'utente e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.

BONUS: Create un bottone reset che svuota i valori negli input e cancella i box generati.

---------------------------------------------------------------------------------------*/


console.log('JS OK');

//1. Picking Input

const inputBoxNumber = document.getElementById('box-number');
console.log(inputBoxNumber);
const inputMin = document.getElementById('min');
console.log(inputMin);
const inputMax = document.getElementById('max');
console.log(inputMax);

//2. Picking Buttons

const buttonGenerate = document.getElementById('generate');
console.log(buttonGenerate);
const buttonReset = document.getElementById('reset');
console.log(buttonReset);