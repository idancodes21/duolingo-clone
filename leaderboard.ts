export type League = { name: string; face: string; edge: string };
export type Player = { name: string; xp: number; isYou?: boolean };
export type Zone = "promotion" | "safe" | "demotion";

export const LEAGUES: League[] = [
  { name: "Bronze", face: "#E39A5B", edge: "#C07A3C" },
  { name: "Silver", face: "#B8BFC8", edge: "#97A0AB" },
  { name: "Gold", face: "#FFC800", edge: "#D9A400" },
  { name: "Sapphire", face: "#1CB0F6", edge: "#1899D6" },
  { name: "Ruby", face: "#FF4B4B", edge: "#D63A3A" },
];

export const CURRENT_LEAGUE = 1;
export const PROMOTION_COUNT = 10;
export const DEMOTION_COUNT = 5;

export const PLAYERS: Player[] = [
  { name: "Amara", xp: 2310 },
  { name: "Tunde", xp: 2185 },
  { name: "Lena", xp: 2040 },
  { name: "Kofi", xp: 1960 },
  { name: "Sofia", xp: 1875 },
  { name: "Ravi", xp: 1790 },
  { name: "Chidi", xp: 1720 },
  { name: "You", xp: 1655, isYou: true },
  { name: "Mei", xp: 1590 },
  { name: "Omar", xp: 1510 },
  { name: "Zara", xp: 1430 },
  { name: "Diego", xp: 1360 },
  { name: "Ngozi", xp: 1285 },
  { name: "Jonas", xp: 1210 },
  { name: "Yuki", xp: 1130 },
  { name: "Hassan", xp: 1045 },
  { name: "Bola", xp: 960 },
  { name: "Ines", xp: 870 },
  { name: "Tariq", xp: 760 },
  { name: "Elif", xp: 640 },
];

/** Which zone a 1-based rank falls in. */
export const getZone = (rank: number, total: number): Zone => {
  if (rank <= PROMOTION_COUNT) return "promotion";
  if (rank > total - DEMOTION_COUNT) return "demotion";
  return "safe";
};
