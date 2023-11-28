export async function fillInfo() {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${location?.latitude},${location?.longitude}` },
    headers: {
      "X-RapidAPI-Key": "9452a09c0bmsh844d338fef42946p1419c1jsnb844a2c88c9d",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    setInfos(response?.data);
    setCity(response?.data?.location.name);
  } catch (error) {
    console.error(error);
  }
}
