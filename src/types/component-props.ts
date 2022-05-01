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
  dateList: Date[];
  selectedVillage: string;
};

export type CalendarProps = {
  dateList?: Date[];
  rankDateList?: Date[];
  dateOnClick: React.MouseEventHandler<HTMLDivElement>;
};

export type StepOneProps = {
  dateList: Date[];
  setDateList: React.Dispatch<React.SetStateAction<Date[]>>;
};

export type StepTwoProps = {
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedTown: string;
  setSelectedTown: React.Dispatch<React.SetStateAction<string>>;
  selectedVillage: string;
  setSelectedVilage: React.Dispatch<React.SetStateAction<string>>;
};

export type weatherType = 'clear' | 'bitCloudy' | 'cloudy' | 'snow' | 'rain';
export type windType = 0 | 1 | 2 | 3;

export type StepThreeProps = {
  weather: weatherType;
  setWeather: React.Dispatch<React.SetStateAction<weatherType>>;
  wind: windType;
  setWind: React.Dispatch<React.SetStateAction<windType>>;
  onBtnClick: () => Promise<void>;
};

export type ResultDetailProps = {
  date: Date;
  location: string;
  weatherCode: string;
  temperature: number;
  criteriaTime: string;
  score: number;
};
