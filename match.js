const container = document.getElementById("match-container");

if (!matches || matches.length === 0) {
  container.innerHTML = "<p>試合履歴がありません</p>";
} else {

  const sorted = [...matches].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  sorted.forEach(match => {

    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <span>${match.date}</span>
      <span>
        <span class="win">${match.winner}</span>
        vs
        <span class="lose">${match.loser}</span>
      </span>
      <span>${match.change}</span>
    `;

    container.appendChild(card);
  });
}