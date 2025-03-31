// Importing from other modules if they exist
import { addPlayer, displayPlayers } from './players.js';
import { startMatch, displayMatches } from './match.js';

// Ensure functions are accessible globally for onclick events in HTML
window.addPlayer = addPlayer;
window.displayPlayers = displayPlayers;
window.startMatch = startMatch;
window.displayMatches = displayMatches;

// Initialize data on page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.id === 'playersPage') {
    displayPlayers();
  } else if (document.body.id === 'matchesPage') {
    displayMatches();
  }
});
