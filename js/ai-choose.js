export function aiChoose() {
    const hands = ["rock", "scissors", "paper"];
    const randIndex = Math.trunc(Math.random * hands.length);
    return hands[randIndex];
};

