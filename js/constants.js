import { elHands, elZoneGrid, elChooseZone } from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper",
    spock: "spock",
    lizard: "lizard",
};

export const hands = [rock, scissors, paper, spock, lizard];


export let mode = elZoneGrid.dataset.mode;

export function modeChanger(value) {
    mode = value;
    elZoneGrid.dataset.mode = value;
    if (mode ==="hard"){
        elChooseZone.classList.remove("pt-40");
        elChooseZone.classList.add("pt-5");
    }
    else if (mode ==="easy"){
        elChooseZone.classList.remove("pt-5");
        elChooseZone.classList.add("pt-40");
    }

};


