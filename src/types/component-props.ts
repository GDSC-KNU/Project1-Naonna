export type WeatherMainProps = {
  locationName: string;
  weatherCode: string;
  temperature: number;
  criteriaTime: string;
};

export type ItemSelectorProps = {
  title: string;
  items: string[];
  selected: string;
  setSelected: (newItem: string) => void;
};

export type HeaderProps = {
  isFirstStepCompleted: boolean;
  isSecondStepCompleted: boolean;
};

export type CalendarProps = {
  style?: React.CSSProperties;
  dateList?: Date[];
  rankDateList?: Date[];
  dateOnClick: React.MouseEventHandler<HTMLDivElement>;
};

export type weatherType = 'clear' | 'bitCloudy' | 'cloudy' | 'snow' | 'rain';
export type windType = 0 | 1 | 2 | 3;

export type ResultDetailProps = {
  date: Date;
  location: string;
  weatherCode: string;
  temperature: number;
  criteriaTime: string;
  score: number;
};
