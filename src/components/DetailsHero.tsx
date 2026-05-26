"use client";
import Image from "next/image";

interface Props {
  movie: any;
}

const DetailsHero = ({ movie }: Props) => {
  return (
    <div className="flex gap-[30px]">
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
      <div className="relative w-[760px] h-[428px] overflow-hidden rounded-md">
        {movie?.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie?.original_title || "movie"}
            className=" object-cover"
            priority
            fill
            sizes="760px"
          />
        )}

        <div className="flex items-center gap-3 absolute bottom-4 left-4 text-gray-50 text-xl">
          <button className="bg-white h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
            <img className="h-3 w-2.5" src="/play.png" alt="play-icon" />
          </button>
          <p>Play trailer</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
