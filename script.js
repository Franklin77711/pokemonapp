const submitBtn = document.getElementById("submitBtn");
const submitInp = document.getElementById("submitInp");
const currentDiv = document.getElementById("current-api-response")


//API call (only lowercase is good)
async function getCard(){
    let cardname = submitInp.value.toLowerCase(); 
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${cardname}`);
    const card = await APIresponse.json();
    console.log(card);
}

//makes the input value into the button + capitalize 1. letter
function changeBtnText(e){
    submitBtn.textContent = `${e.target.value.charAt(0).toUpperCase()}${e.target.value.slice(1)}, I Choose You!`
}

submitInp.addEventListener("input", changeBtnText)
submitBtn.addEventListener("click", getCard)