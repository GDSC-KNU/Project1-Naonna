import axios from 'axios';

export const hourlyData = async(area:String) =>{
    const {data} = await axios(
      `http://35.165.68.251/weathers/hourly/${area}`
    );
    return data;
  };