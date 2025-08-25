import { rock, paper, scissors, lizard, spock } from "./constants.js";

export function checkWinner(ai, player) {

    if (ai == player) {
        return "draw";
    }
    else if (ai == rock && (player == scissors || player == lizard)) {
        return "ai"
    }
    else if (ai == paper && (player == rock || player == spock)) {
        return "ai"
    }
    else if (ai == scissors && (player == paper || player == lizard)) {
        return "ai"
    }
    else if (ai == lizard && (player == paper || player == spock)) {
        return "ai"
    }
    else if (ai == spock && (player == scissors || player == rock)) {
        return "ai"
    }
    else {
        return "player"
    }

}