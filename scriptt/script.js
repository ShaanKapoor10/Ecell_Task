const buttons = document.querySelectorAll(".buttons");
const specialButton = document.querySelector(".special-buttons");
let clickedButtons = [];


function changeButtonColorToRed(button) {
    button.classList.add("red-buttons");
}


function returnButtonColorToOriginal(button) {
    button.classList.remove("red-buttons");
}


buttons.forEach((button) => {
    button.addEventListener("click", function() {
        changeButtonColorToRed(this);
        clickedButtons.push(this);

        if (this === specialButton) {
            
            clickedButtons.forEach((clickedButton, index) => {
                setTimeout(() => {
                    returnButtonColorToOriginal(clickedButton);
                }, 500 * index);
            });
            clickedButtons = []; 
        }
    });
});
