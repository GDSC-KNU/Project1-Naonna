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

export type subScreenProps = {
  setNowActive: React.Dispatch<React.SetStateAction<number>>;
};

export type HeaderProps = {
  dateList: Date[];
};

export type CalendarProps = {
  dateList: Date[];
  setDateList: React.Dispatch<React.SetStateAction<Date[]>>;
  rankDateList?: Date[];
  dateOnClick: React.MouseEventHandler<HTMLDivElement>;
};

export type StepOneProps = {
  dateList: Date[];
  setDateList: React.Dispatch<React.SetStateAction<Date[]>>;
};

export type weatherType = 'clear' | 'bitCloudy' | 'cloudy' | 'snow' | 'rain';
export type windType = 0 | 1 | 2 | 3;

export type StepTwoProps = {
  weather: weatherType;
  setWeather: React.Dispatch<React.SetStateAction<weatherType>>;
  wind: windType;
  setWind: React.Dispatch<React.SetStateAction<windType>>;
};
