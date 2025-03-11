import axios from "axios";


export const tmdb = async(url)=>{

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB}` 
    }
  };

  const response = await axios.get(url,options)

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
}
  
  return response.data;
  

}