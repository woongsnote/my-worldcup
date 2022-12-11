export interface TeamGameResult {
  country: string;
  games: string;
  points?: number;
}

export interface GameResult {
  country: string;
  score?: number;
  penalty?: number;
}
