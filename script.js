// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// I Check if the forge has enough heat to make swords.
// If the heat is =< 30 , subtract 30 heat and add one sword.
// Show a success message after each creation
// If there is not enough heat, do not change anything.
// Show a message saying more heat is needed when crafting
// Update the forge display.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.querySelector("#forge");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const forgeStatus = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const actionMessage = document.querySelector("#action-message");


// 2. Create the two state variables: heat and swords made.

let heat = 20;
let swordsMade = 0;


// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}


// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

function updateForge() {
  heatValue.textContent = heat;
  swordCount.textContent = swordsMade;

  const status = getForgeStatus(heat);
  forgeStatus.textContent = status;

  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small fire starting to burn";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks ready for chaos";
  }
}


// 5. Write resetForge(). Restore the state, message, and display.

function resetForge() {
  heat = 20;
  swordsMade = 0;

  actionMessage.textContent = "Welcome to the forge. Add heat to begin the.";

  updateForge();
}


// 6. Write heatForge(amount). Add heat, cap it, and update the page.

function heatForge(amount) {
  heat = heat + amount;

  if (heat > 100) {
    heat = 100;
  }

  actionMessage.textContent = "The forge was heated.";

  updateForge();
}


// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
  if (heat >= 30) {
    heat = heat - 30;
    swordsMade = swordsMade + 1;

    actionMessage.textContent = "You made a sword!";
  } else {
    actionMessage.textContent = "The forge needs more heat to make a sword.";
  }

  updateForge();
}


// 8. Call resetForge() once to start the game.

resetForge();
