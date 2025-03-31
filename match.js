export function startMatch() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
  
    if (players.length < 2) {
      alert('You need at least 2 players to start a match!');
      return;
    }
  
    const team1 = prompt("Enter Team 1 name:");
    const team2 = prompt("Enter Team 2 name:");
    
    if (!team1 || !team2) return;
  
    const tossWinner = Math.random() < 0.5 ? team1 : team2;
    alert(`${tossWinner} won the toss!`);
  
    const matchData = {
      team1,
      team2,
      tossWinner,
      date: new Date().toLocaleString()
    };
  
    let matches = JSON.parse(localStorage.getItem('matches')) || [];
    matches.push(matchData);
    localStorage.setItem('matches', JSON.stringify(matches));
  
    alert('Match Started!');
  }
  
  export function displayMatches() {
    const matchesList = document.getElementById('matchesList');
    if (!matchesList) return;
  
    matchesList.innerHTML = '';
    const matches = JSON.parse(localStorage.getItem('matches')) || [];
  
    if (matches.length === 0) {
      matchesList.innerHTML = '<p>No matches available.</p>';
      return;
    }
  
    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = `${match.team1} vs ${match.team2} - Toss Winner: ${match.tossWinner} (Date: ${match.date})`;
      matchesList.appendChild(li);
    });
  }
  