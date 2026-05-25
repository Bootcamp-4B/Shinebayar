"use client";

// import MoviesData from "@/components/MoviesData";
// import { Pagination } from "@/components/ui/pagination";

// export default function Demo() {
//   return (
//     <div>
//       <MoviesData title="upcoming" />
//       <Pagination className=" h-50 text-black" />
//     </div>
//   );
// }

import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "next/navigation";

interface genreType {
  id: number;
  name: string;
}
interface production_companiesType {
  id: number;
  logo_path: string;
}
interface production_countriesType {
  iso_3166_1: string;
  name: string;
}
interface spoken_languagesType {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: genreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companiesType;
  production_countries: production_countriesType;
  release_date: number;
  revenue: number;
  runtime: number;
  softcore: false;
  spoken_languages: spoken_languagesType;
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

const Demo = () => {
  const params = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
        },
      })
      .then((response) => {
        setMovie(response.data);
      });
  }, [params.id]);
  console.log(movie);
  return (
    <div>
      <h1>{movie?.original_title}</h1>
      {movie?.genres.map((genre) => {
        return <p key={genre.id}>{genre.name} </p>;
      })}
    </div>
  );
};

export default Demo;
