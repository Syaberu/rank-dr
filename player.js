const playerContainer = document.getElementById("player-container");

// レート順に並び替え（高い順）
const sortedPlayers = [...players].sort((a, b) => b.rating - a.rating);

sortedPlayers.forEach((player, index) => {

  const winCount = matches.filter(m => m.winner === player.name).length;
  const loseCount = matches.filter(m => m.loser === player.name).length;
  const total = winCount + loseCount;

  const winRate = total === 0
    ? "0%"
    : ((winCount / total) * 100).toFixed(1) + "%";

  const rank = index + 1;

  let crown = "";
  if (rank === 1) crown = "👑";
  if (rank === 2) crown = "🥈";
  if (rank === 3) crown = "🥉";

  const card = document.createElement("div");
  card.className = "player-card";

  if (rank <= 3) {
    card.classList.add("top-rank");
  }

  card.innerHTML = `
    <span class="rank">${rank}位 ${crown}</span>
    <span>${player.name}</span>
    <span>${player.tier}</span>
    <span>レート: ${player.rating}</span>
    <span>勝率: ${winRate} (${winCount}勝${loseCount}敗)</span>
  `;

  playerContainer.appendChild(card);
});