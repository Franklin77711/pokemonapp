const submitBtn = document.getElementById("submitBtn");
const submitInp = document.getElementById("submitInp");
const currentDiv = document.getElementById("current-api-response")
const historyDiv = document.getElementById("history-cards")

//API call (only lowercase is good)
async function getCard(){
    let cardname = submitInp.value.toLowerCase(); 
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${cardname}`);
    const card = await APIresponse.json();
    makeCard(card);
    hisotryMakeCard(card);
}

//help function to set multiple attributes
function setAttributes(elem, attri) {
    for(let key in attri) {
      elem.setAttribute(key, attri[key]);
    }
  }
//current search card
function makeCard(card){ 
    currentDiv.innerHTML = "";
    let properDiv = document.createElement("div");
    properDiv.setAttribute("class", "properties");
    currentDiv.appendChild(properDiv);
    let pokeImg = document.createElement("img");
    setAttributes(pokeImg, {"class":"poke-img", "id":"current-response-img", "src": card.sprites.front_default, "alt": "pokemon image"})
    properDiv.appendChild(pokeImg);
    let hpStat = document.createElement("p");
    setAttributes(hpStat, {"class":"stats hp"});
    hpStat.textContent = `${card.stats[0].base_stat}❤`;
    properDiv.appendChild(hpStat);
    let attStat = document.createElement("p");
    setAttributes(attStat, {"class":"stats attack"});
    attStat.textContent = `${card.stats[1].base_stat}⚔`;
    properDiv.appendChild(attStat);
    let defStat = document.createElement("p");
    setAttributes(defStat, {"class":"stats defense"});
    defStat.textContent = `${card.stats[2].base_stat}🦾`;
    properDiv.appendChild(defStat);
    let speedStat = document.createElement("p");
    setAttributes(speedStat, {"class":"stats speed"});
    properDiv.appendChild(speedStat);
    speedStat.textContent = `${card.stats[3].base_stat}👣`;
}

//search history
function hisotryMakeCard(card){
    let historyCard = document.createElement("div");
    historyCard.setAttribute("class", "history-response card-div");
    historyDiv.prepend(historyCard);
    let pokeImg = document.createElement("img");
    setAttributes(pokeImg, {"class":"poke-img", "id":"current-response-img", "src": card.sprites.front_default, "alt": "pokemon image"})
    historyCard.appendChild(pokeImg);
    let hpStat = document.createElement("p");
    setAttributes(hpStat, {"class":"stats hp"});
    hpStat.textContent = `${card.stats[0].base_stat}❤`;
    historyCard.appendChild(hpStat);
    let attStat = document.createElement("p");
    setAttributes(attStat, {"class":"stats attack"});
    attStat.textContent = `${card.stats[1].base_stat}⚔`;
    historyCard.appendChild(attStat);
    let defStat = document.createElement("p");
    setAttributes(defStat, {"class":"stats defense"});
    defStat.textContent = `${card.stats[2].base_stat}🦾`;
    historyCard.appendChild(defStat);
    let speedStat = document.createElement("p");
    setAttributes(speedStat, {"class":"stats speed"});
    historyCard.appendChild(speedStat);
    speedStat.textContent = `${card.stats[3].base_stat}👣`;
}


//makes the input value into the button + capitalize 1. letter
function changeBtnText(e){
    submitBtn.textContent = `${e.target.value.charAt(0).toUpperCase()}${e.target.value.slice(1)}, I Choose You!`
}

submitInp.addEventListener("input", changeBtnText)
submitBtn.addEventListener("click", getCard)