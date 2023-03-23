// make connections with Rapid API
// ExerciseDB API Documentation & API:
// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

// Youtube Search and Download API
// https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
