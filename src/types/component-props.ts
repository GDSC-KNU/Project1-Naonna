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
