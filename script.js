
// script.js
import { addPlayer, displayPlayers } from './player.js';
import { startMatch, displayMatches } from './match.js';

window.addPlayer = addPlayer;
window.displayPlayers = displayPlayers;
window.startMatch = startMatch;
window.displayMatches = displayMatches;

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('playersList')) displayPlayers();
    if (document.getElementById('matchesList')) displayMatches();
});
