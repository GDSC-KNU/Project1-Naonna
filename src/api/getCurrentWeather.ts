import axios from 'axios';


export const currentData = async(area:String) =>{
    const {data} = await axios(
      `http://35.165.68.251/weathers/current/${area}`
    );
    return data;
  };