import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";
import { elHands, elPlayer, elRefreshGameButton, elAI, elStatusText } from "./html-selection.js";
import { switchZone } from "./switch-zone.js";

elHands.forEach((el) => {
    el.addEventListener("click", (e) => {
        const player = e.target.alt;
        const playerSrc = e.target.src;
        elPlayer.src = playerSrc;
        switchZone(true);
        setTimeout(() => {
            const ai = aiChoose();
            const winner = checkWinner(ai, player);
            elAI.src = `./images/${ai}.svg`;
            elStatusText.textContent = winner;

        }, 1000);

    });
});


elRefreshGameButton.addEventListener("click", () => {
    switchZone(false)
})