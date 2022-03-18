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
