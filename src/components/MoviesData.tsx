"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MovieCard from "./MovieCard";

const MoviesData = ({ title }: { title: string }) => {
  const router = useRouter();
  const [movies, setMovies] = useState<any[]>([]);

  const pushSeeMore = (category: string) => {
    router.push(`/SeeMore/${category}`);
  };

  useEffect(() => {
    if (!title) return;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer YOUR_TOKEN`,
          },
        },
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [title]);

  return (
    <div>
      <div className="flex justify-between px-20 py-10">
        <p className="text-2xl font-bold">
          {title.replace("_", " ").toUpperCase()}
        </p>

        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => pushSeeMore(title)}
        >
          See more
          <Image src="/vector.png" alt="arrow" width={10} height={10} />
        </button>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesData;
