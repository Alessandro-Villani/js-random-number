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

//3. Picking Target

const targetNumberDisplay = document.getElementById('number-display');
const targetErrorBox = document.getElementById('error-box');
const targetErrorMin = document.getElementById('error-min');
const targetErrorMax = document.getElementById('error-max');

//4. Adding event listener to Generate Button

buttonGenerate.addEventListener('click', function(){

    targetErrorBox.innerText ='';
    targetErrorBox.classList.remove('bg-danger');
    targetErrorMin.innerText ='';
    targetErrorMin.classList.remove('bg-danger');
    targetErrorMax.innerText ='';
    targetErrorMax.classList.remove('bg-danger');

    //4.1 Collecting values from inputs
    const boxNumber = parseInt(inputBoxNumber.value.trim());
    console.log(boxNumber);
    const min = parseInt(inputMin.value.trim());
    console.log(min);
    const max = parseInt(inputMax.value.trim());
    console.log(max);

    //4.2 Validation

    if (boxNumber <= 0 || !boxNumber){
        targetErrorBox.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i> Il numero di box deve essere maggiore di 0';
        targetErrorBox.classList.add('bg-danger');
        return;
    }

    if (min < 0 || isNaN(min)){
        targetErrorMin.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i> Il numero minimo deve essere maggiore o uguale a 0';
        targetErrorMin.classList.add('bg-danger');
        return;
    }
    
    if (max < 0 || !max){
        targetErrorMax.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i> Il numero massimo deve essere maggiore di 0';
        targetErrorMax.classList.add('bg-danger');
        return;
    }

    if (max <= min){
        targetErrorMax.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i> Il numero massimo deve essere maggiore del minimo';
        targetErrorMax.classList.add('bg-danger');
        return;
    }

    //4.3 Loop depending on input Box Number
    for (i = 0; i < boxNumber; i++){

        //4.3.1 Calculate random number between min and max input
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randomNumber);

        //4.3.2 If random number is even
        if (randomNumber % 2 === 0){
            targetNumberDisplay.innerHTML += 
            `<div class="col">
                <div class="number-box even text-center">
                    <span class="h5">${randomNumber}</span>
                </div>
            </div>`;
        }
        // //4.2.3 If random number is odd
        else{
            targetNumberDisplay.innerHTML += 
            `<div class="col">
                <div class="number-box odd text-center">
                    <span class="h5">${randomNumber}</span>
                </div>
            </div>`;
        }


    }
})

//5. Adding event listener to Reset Button

buttonReset.addEventListener('click', function(){
    inputBoxNumber.value='';
    inputMin.value='';
    inputMax.value='';
    targetNumberDisplay.innerText='';
    targetErrorBox.innerText ='';
    targetErrorBox.classList.remove('bg-danger');
    targetErrorMin.innerText ='';
    targetErrorMin.classList.remove('bg-danger');
    targetErrorMax.innerText ='';
    targetErrorMax.classList.remove('bg-danger');
})