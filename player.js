export function addPlayer() {
    const playerName = prompt("Enter player name:");
    if (!playerName) return;
  
    let players = JSON.parse(localStorage.getItem('players')) || [];
    players.push(playerName);
    localStorage.setItem('players', JSON.stringify(players));
  
    alert(`${playerName} added successfully!`);
    displayPlayers();
  }
  
  export function displayPlayers() {
    const playersList = document.getElementById('playersList');
    if (!playersList) return;
  
    playersList.innerHTML = '';
    const players = JSON.parse(localStorage.getItem('players')) || [];
  
    if (players.length === 0) {
      playersList.innerHTML = '<p>No players added yet.</p>';
      return;
    }
  
    players.forEach(player => {
      const li = document.createElement('li');
      li.textContent = player;
      playersList.appendChild(li);
    });
  }
  