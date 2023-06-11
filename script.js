/** Voeg hier je code toe */
let buttonClickCounter = 0;

function addSquare() {
  // bij iedere click gaat de buttonClickCounter + 1
  buttonClickCounter++;

  // maak een nieuw div element aan
  const newDiv = document.createElement("div");

  // voeg aan de gemaakte div de class "block" toe
  newDiv.className = "block";

  // maak de achtergrond van de div rood
  newDiv.style.backgroundColor = "red";

  // voeg het huidige nummer van buttonClickCounter aan de div toe
  newDiv.textContent = buttonClickCounter;

  // plaats de nieuwe div binnen de selection tag met de id  id="assignment-03"
  document.querySelector("#assignment-03").appendChild(newDiv);

  // wanneer de buttonClickCounter 10 is
  if (buttonClickCounter === 10) {
    // wordt er een alert getoond
    alert("You can only add 10 blocks");

    // Ook wordt de button disabled
    document.querySelector("button").disabled = true;
  }
}

// voeg een eventLinstner toe aan de button, wanneer er op de button geklikt wordt zal de funtie van addSquare aangeroepen worden
document.querySelector("button").addEventListener("click", addSquare);