/* CAROUSEL */



// Blauw - button 1


//

var deEersteButton = document.querySelector(".button-1");

/* de button laten luisteren naar clicks */
/* als er geklikt wordt de functie 'veranderDeVierdeP' uitvoeren */
deEersteButton.addEventListener("click", veranderDeEersteB);

function veranderDeEersteB() {
    /* de p in de vierde section selecteren */
    let deEersteB = document.querySelector(".inner");
    /* de class 'anders' aan de p toevoegen */
    /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
    deEersteB.classList.toggle("anders-1");
    /* toggle voegt toe en verwijdert om-en-om */

}
// JavaScript Document
// Groen - button 2

var deTweedeButton = document.querySelector(".button-2");

/* de button laten luisteren naar clicks */
/* als er geklikt wordt de functie 'veranderDeVierdeP' uitvoeren */
deTweedeButton.addEventListener("click", veranderDeTweedeB);

function veranderDeTweedeB() {
    /* de p in de vierde section selecteren */
    let deTweedeB = document.querySelector(".inner");
    /* de class 'anders' aan de p toevoegen */
    /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
    deTweedeB.classList.toggle("anders-2");
    /* toggle voegt toe en verwijdert om-en-om */
}
// JavaScript Document


// Rood - button 3

var deDerdeButton = document.querySelector(".button-3");

/* de button laten luisteren naar clicks */
/* als er geklikt wordt de functie 'veranderDeVierdeP' uitvoeren */
deDerdeButton.addEventListener("click", veranderDeDerdeB);

function veranderDeDerdeB() {
    /* de p in de vierde section selecteren */
    let deDerdeB = document.querySelector(".inner");
    /* de class 'anders' aan de p toevoegen */
    /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
    deDerdeB.classList.toggle("anders-3");
    /* toggle voegt toe en verwijdert om-en-om */
}
// JavaScript Document


// Geel - button 4

var deVierdeButton = document.querySelector(".button-4");

/* de button laten luisteren naar clicks */
/* als er geklikt wordt de functie 'veranderDeVierdeP' uitvoeren */
deVierdeButton.addEventListener("click", veranderDeVierdeB);

function veranderDeVierdeB() {
    /* de p in de vierde section selecteren */
    let deVierdeB = document.querySelector(".inner");
    /* de class 'anders' aan de p toevoegen */
    /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
    deVierdeB.classList.toggle("anders-4");
    /* toggle voegt toe en verwijdert om-en-om */
}
// JavaScript Document



