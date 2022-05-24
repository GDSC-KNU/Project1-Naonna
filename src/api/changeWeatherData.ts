export const changeUVData: (uv: number) => string = (uv: number) => {
  const index = ['낮음', '보통', '높음', '매우 높음', '위험'];
  let result = '';
  if (uv < 3) {
    result = index[0];
  } else if (uv >= 3 && uv < 6) {
    result = index[1];
  } else if (uv >= 6 && uv < 8) {
    result = index[2];
  } else if (uv >= 8 && uv < 11) {
    result = index[3];
  } else {
    result = index[4];
  }
  return result;
};

export const changeHumidityData: (humid: number) => string = (
  humid: number,
) => {
  const humidArray = ['매우 건조', '건조', '좋음', '습함', '매우 습함', '비'];
  const index = parseInt(Math.floor(humid / 20).toFixed());
  const result = humidArray[index];
  return result;
};

export const changeDustData: (dust: number) => string = (dust: number) => {
  const index = ['좋음', '보통', '나쁨', '매우 나쁨'];
  let result = '';
  if (dust <= 30) {
    result = index[0];
  } else if (dust > 30 && dust <= 80) {
    result = index[1];
  } else if (dust > 80 && dust <= 150) {
    result = index[2];
  } else {
    result = index[3];
  }
  return result;
};
export const updateWeatherPreference = (code: number) => {
  switch (code) {
    case 1:
      return { weather: 'clear', wind: 0 };
    case 2:
      return { weather: 'bitCloudy', wind: 0 };
    case 3:
      return { weather: 'cloudy', wind: 1 };
    default:
      return { weather: 'clear', wind: 0 };
  }
};
