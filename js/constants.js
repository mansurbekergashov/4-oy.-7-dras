import { elHands, elHandsHard, elZoneGrid } from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper",
    spock: "spock",
    lizard: "lizard",
};

export const hands = [rock, scissors, paper, spock, lizard];


export let mode = "easy";

export function modeChanger(value) {
    mode = value;


    elHands.forEach((el) => {
        let hand = el.alt;
        if (hand === rock) {
            if (value === "hard") {
                el.parentElement.classList.remove("col-start-1", "col-end-3");
            }
            else {
                el.parentElement.classList.add("col-start-1", "col-end-3");

            }
        }

        if (hand === paper) {
            if (value === "hard") {
                el.parentElement.classList.add("col-start-1", "col-end-3", "translate-y-6");
                
            }
            else {
                el.parentElement.classList.remove("col-start-1", "col-end-3", "translate-y-6");
            }

        }

        if (hand === lizard) {
            if (value === "hard") {
                el.classList.remove("hidden");
                el.parentElement.classList.add("place-items-end");
            }
            else {
                el.classList.add("hidden");
                el.parentElement.classList.remove("place-items-end");
            }

        }

        if (hand === spock) {
            if (value === "hard") {
                el.classList.remove("hidden");
            }
            else {
                el.classList.add("hidden");
            }

        }

    });


    if (value === "hard") {
        elZoneGrid.classList.remove("grid-cols-2", "grid-rows-2", "gap-x-20", "gap-y-6", "max-w-[400px]", "bg-[url('../images/path.svg')]");
        elZoneGrid.classList.add("grid-cols-2", "grid-rows-3", "gap-x-14", "gap-y-5", "max-w-[540px]", "bg-[url('../images/polygon.svg')]");


    }
    else {
        elZoneGrid.classList.remove("grid-cols-2", "grid-rows-3", "gap-x-14", "gap-y-5", "max-w-[540px]", "bg-[url('../images/polygon.svg')]");
        elZoneGrid.classList.add("grid-cols-2", "grid-rows-2", "gap-x-20", "gap-y-6", "max-w-[400px]", "bg-[url('../images/path.svg')]");
    }

};


