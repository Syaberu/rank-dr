/**
 * DeathRun Competitive Player Data
 * マップ構成: Cave, Flora, Gardens, Metropolis, Primus
 * active: true (現役 - Active Rankに表示), false (引退 - All-Time Rankに表示)
 * * ⚔️ VS MODEについて:
 * - 各マップ(Overall含む)ごとに `rank`, `wins`, `matches`, `rating` を別々に管理します。
 * - rank: 0 はランク外（OUT表示）。数字が大きいプレイヤーほど上位にソートされます。
 * - 同率ランクの場合は、勝率（wins / matches）が高いプレイヤーが自動的に上になります。
 */

const players = [
  {
    name: "tenntennYT",
    title: "ALL Maps Runner",
    region: "JP",
    active: true,
    // ⏱️ RTA MODE 用データ
    mapTiers: {
      Cave: { tier: "HT4", record: 48.612 },
      Flora: { tier: "LT3", record: 65.837 },
      Gardens: { tier: "LT3", record: 63.719 },
      Metropolis: { tier: "LT4", record: 44.114 },
      Primus: { tier: "LT4", record: 62.787 }
    },
    // ⚔️ VS MODE 用個別データ (数字が大きいほど強い)
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "MCsyaberu",
    title: "All Maps Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT3", record: 48.106 },
      Flora: { tier: "HT3", record: 64.941 },
      Gardens: { tier: "LT3", record: 63.579 },
      Metropolis: { tier: "LT2", record: 43.346 },
      Primus: { tier: "LT3", record: 61.640 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "Jason Games9024",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT3", record: 48.244 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "AntiUnlockJP",
    title: "Cave & Flora Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT6", record: 49.825 },
      Flora: { tier: "LT6", record: 71.258 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "MCdaichi9382",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.270 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "Kurobean1729",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT4", record: 49.060 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "dadan11pvp",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.220 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "hive clips5512",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.240 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "Youre cats",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.393 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "MCluminqYT",
    title: "Cave & Metropolis Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT6", record: 49.945 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "HT7", record: 48.323 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "beatdown2725",
    title: "Cave Runner",
    region: "JP",
    active: false, // 引退プレイヤー
    mapTiers: {
      Cave: { tier: "HT6", record: 49.993 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "Super Hiko14",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT7", record: 51.817 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "chikuwa03224837",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT7", record: 51.839 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "KenNova758",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "HT8", record: 52.577 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "hateran",
    title: "Gardens Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "-", record: 120.000 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "LT5", record: 67.507 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "LiveHydra444663",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT6", record: 50.921 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "umidukisora",
    title: "Cave Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "LT5", record: 49.611 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  },
  {
    name: "Act abso",
    title: "Metropolis Runner",
    region: "JP",
    active: true,
    mapTiers: {
      Cave: { tier: "-", record: 50.921 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "HT6", record: 46.196 },
      Primus: { tier: "-", record: 120.000 }
    },
    vsMaps: {
      Overall:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Cave_VS:       { rank: 0, wins: 0, matches: 0, rating: 0 },
      Flora_VS:      { rank: 0, wins: 0, matches: 0, rating: 0 },
      Gardens_VS:    { rank: 0, wins: 0, matches: 0, rating: 0 },
      Metropolis_VS: { rank: 0, wins: 0, matches: 0, rating: 0 },
      Primus_VS:     { rank: 0, wins: 0, matches: 0, rating: 0 }
    }
  }
];

const duos = [];

const TIER_ORDER = [
  "HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5",
  "HT6", "LT6", "HT7", "LT7", "HT8", "LT8", "HT9", "LT9", "HT10", "LT10", "-"
];

// index.htmlの外部スクリプト用にマップ名のリストを公開定義
const mapsList = ['Cave', 'Flora', 'Gardens', 'Metropolis', 'Primus'];
