import axios from 'axios';

export const dailyData = async(area:String) =>{
    const {data} = await axios(
      `http://35.165.68.251/weathers/daily/${area}`
    );
    return data;
  };