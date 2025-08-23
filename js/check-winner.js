export function checkWinner(ai, player) {
    const { rock, scissors, paper } = {
        rock: "rock",
        scissors: "scissors",
        paper: "paper",
    };

    if (ai == player) {
        return "draw";
    }
    else if (ai == rock && player == scissors) {
        return "ai"
    }
    else if (ai == scissors && player == paper) {
        return "ai"
    }
    else if (ai == paper && player == rock) {
        return "ai"
    }
    else {
        return "player"
    }

}