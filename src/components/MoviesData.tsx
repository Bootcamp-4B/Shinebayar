import type { MoviecardProps } from "@/app/page";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const MoviesData = ({ title }: { title: string }) => {
  const [movies, setMovies] = useState<MoviecardProps[]>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
          },
        },
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [title]);
  return (
    <div>
      <div className="flex justify-between px-20 py-10">
        <p className="flex justify-start w-[120px] h-[36px] items-center text-2xl font-bold">
          {title
            .replace("_", " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
        <button className="flex justify-center  w-[120px] h-[36px] ">
          <a className="flex gap-2 items-center" href="/demo">
            See more
            <Image src="/arrow-right.png" alt="arrow" width={16} height={16} />
          </a>
        </button>
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        {movies.map((movie: any) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesData;
