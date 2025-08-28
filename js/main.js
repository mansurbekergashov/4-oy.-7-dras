import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";
import { mode, modeChanger } from "./constants.js";
import { elHands, elPlayer, elRefreshGameButton, elAI, elStatusText, elScore, elModeChanger, elRules, elEasyModeModal, elHardModeModal, elResultZone, elCloseRules } from "./html-selection.js";
import { switchZone } from "./switch-zone.js";


// Hands
elHands.forEach((el) => {
    el.addEventListener("click", (e) => {
        const player = e.target.alt;
        const playerSrc = e.target.src;
        elPlayer.src = playerSrc;
        switchZone(true);
        setTimeout(() => {
            const ai = aiChoose(mode);
            const winner = checkWinner(ai, player);
            elAI.src = `./images/${ai}.svg`;
            elStatusText.textContent = winner;
            elResultZone.classList.remove("hidden");




            if (winner === "player") {
                elStatusText.textContent = "YOU WIN";
                elPlayer.style.cssText = `
                filter: drop-shadow(0 0 40px rgba(255,255,255,0.5));
                `;
                let numContent = Number(elScore.textContent);
                numContent += 1;
                elScore.textContent = numContent;
            }
            else if (winner === "ai") {
                elStatusText.textContent = "YOU LOSE";
                elAI.style.cssText = `
                filter: drop-shadow(0 0 40px rgba(255,255,255,0.5));
                `;
                let numContent = Number(elScore.textContent);
                if (numContent > 0) {
                    numContent -= 1;
                }
                elScore.textContent = numContent;
            }
            else {
                elStatusText.textContent = "DRAW";
                elResultZone.classList.remove("hidden");
            }

        }, 1000);

    });
});



// Refresh
elRefreshGameButton.addEventListener("click", () => {
    elResultZone.classList.add("hidden");
    switchZone(false);
    elAI.src = `./images/oval.svg`;
    elPlayer.style.cssText = `
                `;
    elAI.style.cssText = `
    `;

});



// Mode changer

elModeChanger.addEventListener("click", () => {
    if (mode === "easy") {
        modeChanger("hard");
        elModeChanger.textContent = "Hard mode";
    } else {
        modeChanger("easy");
        elModeChanger.textContent = "Easy mode";
    }
});



// Rules

elRules.addEventListener("click", () => {
    if (mode === "easy") {
        elEasyModeModal.classList.remove("hidden");

    }
    else if (mode === "hard") {
        elHardModeModal.classList.remove("hidden");
    }
});

for (let exitBtn of elCloseRules) {
  exitBtn.addEventListener("click", () => {
    if (mode === "easy") {
        elEasyModeModal.classList.add("hidden");
    }
    else if (mode === "hard") {
        elHardModeModal.classList.add("hidden");
    }
});

};
    








