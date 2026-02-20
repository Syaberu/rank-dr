const searchInput = document.getElementById("search");

function getTierClass(tier) {
  if (tier.startsWith("HT")) return "ht";
  if (tier.startsWith("LT")) return "lt";
  return "";
}

function render() {
  const searchValue = searchInput.value.toLowerCase();

  const tierContainer = document.getElementById("tier-container");
  const ratingContainer = document.getElementById("rating-container");

  tierContainer.innerHTML = "";
  ratingContainer.innerHTML = "";

  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(searchValue)
  );

  // Tier表示
  filtered.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <span>${player.name}</span>
      <span class="${getTierClass(player.tier)}">${player.tier}</span>
    `;
    tierContainer.appendChild(card);
  });

  // Rating表示
  const sorted = [...filtered].sort((a, b) => b.rating - a.rating);

  sorted.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <span>${player.name}</span>
      <span class="rating">${player.rating}</span>
    `;
    ratingContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", render);
render();