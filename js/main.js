import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";
import { mode, modeChanger } from "./constants.js";
import { elHands, elPlayer, elRefreshGameButton, elAI, elStatusText, elScore, elModeChanger } from "./html-selection.js";
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

            elScore.textContent=0;
            let numContent = Number(elScore.textContent);
            if (winner === "player") {
                numContent+1;
            }
            else if (winner === "ai" && elScore.textContent !== (0)) {
                numContent-1;
            } else {
                numContent;
            }


        }, 1000);

    });
});

// Refresh
elRefreshGameButton.addEventListener("click", () => {
    switchZone(false);
    elAI.src = `./images/oval.svg`;

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