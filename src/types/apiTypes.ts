export type weatherType = {
  location: string;
  temperature: number;
  weatherCode: string;
  todayScore: number;
  weekScoreData: {
    date: string;
    score: number;
  }[];
  criteriaTime: string;
};
