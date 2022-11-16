// When the user clicks one of these options, a cookie called Selection should be set
function selectShining(event){
    Cookies.set(`selection`, `TheShining`);
    // I want the user sent to a new page when the select an option
    location.href = `/pages/selection.html`;
}

function selectPetSem(event){
    // every time a button is clicked we're overwriting the last Cookie that was set for Selection
    Cookies.set(`selection`, `PetSematary`);
    location.href = `/pages/selection.html`;
}

function selectSalems(event){
    Cookies.set(`selection`, `Salem'sLot`);
    // the selected Cookie will show in the Application window on the page selection.html
    location.href = `/pages/selection.html`;
}

let selection = Cookies.get(`selection`);
// if selection is NOT EQUAL / undefined, we want the cookie set to say Selection : Make Selection
if(selection != undefined){
    Cookies.set(`selection`, `makeSelection`)
}

// I set each button up with an ID and called each one separately
document.getElementById(`theShining`).addEventListener(`click`, selectShining);
document.getElementById(`petSematary`).addEventListener(`click`, selectPetSem);
document.getElementById(`salemsLot`).addEventListener(`click`, selectSalems);