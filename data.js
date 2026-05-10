@@ -1,264 +1,215 @@
/**
 * DeathRun Competitive Player Data
 * active: true (現役 - Active Rankに表示)
 * active: false (引退 - All-Time Rankのみに表示)
 */
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeathRun Rankings</title>
    <link rel="icon" href="maps/Cave.png" type="image/png">
    <script src="data.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

const players = [
  {
    name: "tenntennYT",
    rating: 980,
    region: "JP",
    title: "All Maps Runner",
    active: true,
    matches: 3,
    wins: 1,
    mapTiers: {
      Cave: { tier: "HT4", record: 48.612 },
      Flora: { tier: "LT3", record: 65.837 },
      Gardens: { tier: "LT3", record: 63.719 },
      Metropolis: { tier: "LT4", record: 44.459 }
    }
  },
  {
    name: "MCsyaberu",
    rating: 1135,
    region: "JP",
    title: "All Maps Runner",
    active: true,
    matches: 16,
    wins: 12,
    mapTiers: {
      Cave: { tier: "HT3", record: 48.106 },
      Flora: { tier: "HT3", record: 64.941 },
      Gardens: { tier: "LT3", record: 63.579 },
      Metropolis: { tier: "HT4", record: 43.991 }
    }
  },
  {
    name: "Jason Games9024",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "LT3", record: 48.244 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "AntiUnlockJP",
    rating: 0,
    region: "JP",
    title: "Cave & Flora Runner",
    active: true,
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT6", record: 49.825 },
      Flora: { tier: "LT6", record: 71.258 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "MCdaichi9382",
    rating: 1010,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 3,
    wins: 2,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.270 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "Kurobean1729",
    rating: 1015,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 2,
    wins: 1,
    mapTiers: {
      Cave: { tier: "LT4", record: 49.060 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "dadan11pvp",
    rating: 990,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 1,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.220 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "hive clips5512",
    rating: 985,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 5,
    wins: 1,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.240 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "Youre cats",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT5", record: 49.393 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "MCluminqYT",
    rating: 0,
    region: "JP",
    title: "Cave & Metropolis Runner",
    active: true,
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT6", record: 49.945 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "HT7", record: 48.323 }
    }
  },
  {
    name: "beatdown2725",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: false,
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT6", record: 49.993 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "Super Hiko14",
    rating: 1025,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 1,
    wins: 1,
    mapTiers: {
      Cave: { tier: "LT7", record: 51.817 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "chikuwa03224837",
    rating: 970,
    region: "JP",
    title: "Cave Runner",
    active: true,
    matches: 3,
    wins: 0,
    mapTiers: {
      Cave: { tier: "LT7", record: 51.839 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "KenNova758",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: true, 
    matches: 0,
    wins: 0,
    mapTiers: {
      Cave: { tier: "HT8", record: 52.577 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "hateran",
    rating: 0,
    region: "JP",
    title: "Gardens Runner",
    active: true,
    mapTiers: {
      Cave: { tier: "-", record: 120.000 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "LT5", record: 67.507 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "LiveHydra444663",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: true,
    mapTiers: {
      Cave: { tier: "LT6", record: 50.921 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  },
  {
    name: "umidukisora",
    rating: 0,
    region: "JP",
    title: "Cave Runner",
    active: true,
    mapTiers: {
      Cave: { tier: "LT5", record: 49.611 },
      Flora: { tier: "-", record: 120.000 },
      Gardens: { tier: "-", record: 120.000 },
      Metropolis: { tier: "-", record: 120.000 }
    }
  }
];
