var deEersteButton = document.querySelector(".animatie");

/* de button laten luisteren naar clicks */
/* als er geklikt wordt de functie 'veranderDeVierdeP' uitvoeren */
deEersteButton.addEventListener("click", veranderDeEersteB);

function veranderDeEersteB()  {
    /* de p in de vierde section selecteren */
    let deEersteB = document.querySelector(".dza");
    /* de class 'anders' aan de p toevoegen */
    /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
    deEersteB.classList.toggle("anders");
    /* toggle voegt toe en verwijdert om-en-om */

}