let footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [{
    name: "Sergio Almirón",
    position: "forward",
    isCaptain: false
  }, {
    name: "Sergio Batista",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Ricardo Bochini",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Claudio Borghi",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "José Luis Brown",
    position: "defender",
    isCaptain: false
  }, {
    name: "Daniel Passarella",
    position: "defender",
    isCaptain: false
  }, {
    name: "Jorge Burruchaga",
    position: "forward",
    isCaptain: false
  }, {
    name: "Néstor Clausen",
    position: "defender",
    isCaptain: false
  }, {
    name: "José Luis Cuciuffo",
    position: "defender",
    isCaptain: false
  }, {
    name: "Diego Maradona",
    position: "midfielder",
    isCaptain: true
  }, {
    name: "Jorge Valdano",
    position: "forward",
    isCaptain: false
  }, {
    name: "Héctor Enrique",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Oscar Garré",
    position: "defender",
    isCaptain: false
  }, {
    name: "Ricardo Giusti",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Luis Islas",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Julio Olarticoechea",
    position: "defender",
    isCaptain: false
  }, {
    name: "Pedro Pasculli",
    position: "forward",
    isCaptain: false
  }, {
    name: "Nery Pumpido",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Oscar Ruggeri",
    position: "defender",
    isCaptain: false
  }, {
    name: "Carlos Tapia",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Marcelo Trobbiani",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Héctor Zelada",
    position: "goalkeeper",
    isCaptain: false
  }]
};

const headCoach = document.querySelector("#head-coach");
const team = document.querySelector("#team");
const year = document.querySelector("#year");
const playerCards = document.querySelector("#player-cards");
const filterMenu = document.querySelector("#players");

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

const players = footballTeam.players;

function createPlayerCard(player){
  const newCard = document.createElement("div");
  newCard.classList.add("player-card");

  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");

  if(player.isCaptain){
    heading.textContent = `(Captain) ${player.name}`;
  }else{
    heading.textContent = player.name;
  }
  paragraph.textContent = player.position;

  newCard.appendChild(heading)
  newCard.appendChild(paragraph);
  
  return newCard;
}

// Filter fuctionality
function displayPlayerCards(playerArr, container){
  container.innerHTML = "";
  playerArr.forEach((player) => {
    const card = createPlayerCard(player);
    container.appendChild(card);
  });
}

displayPlayerCards(players, playerCards);

filterMenu.addEventListener("change", () => {
  const selectedPosition = filterMenu.value;
  
  if (selectedPosition === "all") {
    displayPlayerCards(players, playerCards);
  } else {
    const filteredPlayers = players.filter((player) =>
      player.position === selectedPosition
    );

    displayPlayerCards(filteredPlayers, playerCards);
  }
});
