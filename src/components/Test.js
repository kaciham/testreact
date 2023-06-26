import React, { useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
  params: {
    league: "39",
    season: "2022",
  },
  headers: {
    "X-RapidAPI-Key": "721ba98917msh9d10985fa9521fcp16f82djsnac422b771168",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

const Test = () => {
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
    return <div></div>;
  });
};
export default Test;
