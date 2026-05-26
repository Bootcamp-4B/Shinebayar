"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const [details, setDetails] = useState();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/{movie_id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
        },
      })
      .then((response) => {
        setDetails(response.data.results);
      });
  }, []);

  return <div>hello</div>;
};
export default MovieDetails;
