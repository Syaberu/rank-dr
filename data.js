const players = [
  {
    name: "Jason Games9024",
    rating: 1040,
    matches: 6,
    wins: 5,
    tier: "LT3",
    mapTiers: { Cave: "LT3", Temple: "-", Factory: "-" }
  },
  {
    name: "MCsyaberu",
    rating: 1040,
    matches: 6,
    wins: 5,
    tier: "LT3",
    mapTiers: { Cave: "LT3", Temple: "-", Factory: "-" }
  },
  {
    name: "Kurobean1729",
    rating: 1015,
    matches: 2,
    wins: 1,
    tier: "LT4",
    mapTiers: { Cave: "LT4", Temple: "-", Factory: "-" }
  },
  {
    name: "ykgalleria",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "HT5",
    mapTiers: { Cave: "HT5", Temple: "-", Factory: "-" }
  },
  {
    name: "tenntennyt",
    rating: 980,
    matches: 2,
    wins: 0,
    tier: "HT5",
    mapTiers: { Cave: "HT5", Temple: "-", Factory: "-" }
  },
  {
    name: "AntiUnlockJP",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "HT6",
    mapTiers: { Cave: "HT6", Temple: "-", Factory: "-" }
  },
  {
    name: "beatdown2725",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "HT6",
    mapTiers: { Cave: "HT6", Temple: "-", Factory: "-" }
  },
  {
    name: "Super Hiko14",
    rating: 1025,
    matches: 1,
    wins: 1,
    tier: "LT7",
    mapTiers: { Cave: "LT7", Temple: "-", Factory: "-" }
  },
  {
    name: "chikuwa03224837",
    rating: 970,
    matches: 3,
    wins: 0,
    tier: "LT7",
    mapTiers: { Cave: "LT7", Temple: "-", Factory: "-" }
  },
  {
    name: "KenNova758",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "HT8",
    mapTiers: { Cave: "HT8", Temple: "-", Factory: "-" }
  }
];
function getTierScore(tierStr) {
    if (!tierStr) return 0;
    const type = tierStr.substring(0, 2); // "HT" or "LT"
    const level = parseInt(tierStr.substring(2)); // "1" to "10"
    
    // 計算式: (11 - レベル) * 10 + (HTなら5, LTなら0) などの重み付け
    // HT1=20, LT1=19, HT2=18, LT2=17...
    let base = (11 - level) * 2;
    return type === "HT" ? base : base - 1;
}

