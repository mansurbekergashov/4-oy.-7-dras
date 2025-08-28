const elHands = document.querySelectorAll(".hand");
const elPlayer = document.querySelector(".player");
const elAI = document.querySelector(".ai");
const elStatusZone = document.getElementById("statusZone");
const elChooseZone = document.getElementById("chooseZone");
const elRefreshGameButton = document.getElementById("refreshGameButton");
const elStatusText = document.getElementById("statusText");
const elScore = document.getElementById("score");
const elModeChanger = document.getElementById("modeChanger");
const elRules = document.getElementById("rules");
const elCloseRules = document.getElementsByClassName("closeRules")
const elEasyModeModal = document.getElementById("easyModeModal");
const elHardModeModal = document.getElementById("hardModeModal");
const elHandsHard = document.querySelectorAll(".mode-hard");
const elZoneGrid = document.getElementById("zoneGrid");
const elResultZone = document.getElementById("resultZone");



export { elHands, elHandsHard, elPlayer, elStatusZone, elChooseZone, elRefreshGameButton, elAI, elStatusText, elScore, elModeChanger, elZoneGrid, elRules, elEasyModeModal, elResultZone, elCloseRules, elHardModeModal };