"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

interface Props {
  movie: any;
  trailer: string;
  trailerShow: boolean;
  handleOnclick: () => void;
}

const DetailsHero = ({ movie, trailer, trailerShow, handleOnclick }: Props) => {
  // const [trailerShow, setTrailerShow] = useState(false);
  // const handleOnclick = () => setTrailerShow(!trailerShow);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="flex relative gap-[30px]">
      {/* Poster */}
      <div className="relative w-[290px] h-[428px] overflow-hidden rounded-md">
        {movie?.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie?.original_title || "movie"}
            className="object-cover"
            priority
            fill
            sizes="290px"
          />
        )}
      </div>

      {/* Backdrop */}
      <div className=" w-`[760px]` h-`[428px]` overflow-hidden rounded-md">
        <div className="relative">
          <Image
            onClick={handleOnclick}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie?.original_title || "movie"}
            className=" object-cover"
            priority
            fill
            sizes="760px"
          />

          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${trailer}`}
            width={760}
            height={428}
          />

          <div className="flex  items-center  gap-3 absolute bottom-4 left-4 text-gray-50 text-xl h-10 w-58">
            <button
              onClick={handleOnclick}
              className="bg-white h-10 w-10 flex justify-center items-center rounded-full cursor-pointer"
            >
              <img className="h-3 w-2.5" src="/play.png" alt="play-icon" />
            </button>
            <p>Play trailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
