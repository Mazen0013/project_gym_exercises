export const exerciseOptions = {
        method: 'GET',
        params: {limit: '1500', total: '1500'},
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          
        }
      };
    
  


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;

 }
