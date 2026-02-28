/**
 * DeathRun Competitive Player Data
 * 【順位決定の優先順位】
 * 1. Tier順 (HT1 > LT1 > HT2...)
 * 2. 同Tier内の場合：Record（タイム）が速い順
 * 3. タイムも同じ場合：Ratingが高い順
 */

const players = [
  {
    name: "Jason Games9024",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "LT3", record: 48.244 },
      Flora: { tier: "-", record: 120.000 }, // Caveの隣に配置
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "MCsyaberu",
    rating: 1040,
    matches: 6,
    wins: 5,
    tier: "HT5",
    mapTiers: {
      Cave: { tier: "LT3", record: 48.230 },
      Flora: { tier: "LT6", record: 71.461 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "Kurobean1729",
    rating: 1015,
    matches: 2,
    wins: 1,
    tier: "-",
    mapTiers: {
      Cave: { tier: "LT4", record: 49.060 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "ykgalleria",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT5", record: 49.240 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "tenntennyt",
    rating: 980,
    matches: 2,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT5", record: 49.464 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "AntiUnlockJP",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT6", record: 49.825 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "beatdown2725",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT6", record: 49.993 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "Super Hiko14",
    rating: 1025,
    matches: 1,
    wins: 1,
    tier: "-",
    mapTiers: {
      Cave: { tier: "LT7", record: 51.817 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "chikuwa03224837",
    rating: 970,
    matches: 3,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "LT7", record: 51.839 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  },
  {
    name: "KenNova758",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT8", record: 52.577 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    },
    {
    name: "makurakun323",
    rating: 0,
    matches: 0,
    wins: 0,
    tier: "-",
    mapTiers: {
      Cave: { tier: "HT8", record: 48.924 },
      Flora: { tier: "-", record: 120.000 },
      Temple: { tier: "-", record: 999.999 },
      Factory: { tier: "-", record: 999.999 }
    }
  }
];

const TIER_ORDER = [
  "HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5",
  "HT6", "LT6", "HT7", "LT7", "HT8", "LT8", "HT9", "LT9", "HT10", "LT10", "-"
];




