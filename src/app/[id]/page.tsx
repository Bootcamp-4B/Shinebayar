"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import MovieDetails from "@/components/MovieDetails";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MovieDescriptionType } from "../page";
import Navigation from "@/components/Navigation";
import DetailsHero from "@/components/DetailsHero";
import DetailsContent from "@/components/Detailscontent";
import DetailsMoreLike from "@/components/DetailsMoreLike";

export interface genreType {
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
export interface MovieDetails {
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
  const [credits, setCredits] = useState<MovieDescriptionType | null>(null);
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [morelike, setMorelike] = useState<any[]>([]);
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
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}/credits`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
        },
      })
      .then((res) => setCredits(res.data));
  }, [params.id]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}/similar`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
        },
      })
      .then((res) => {
        setMorelike(res.data.results);
      });
  }, [params.id]);
  const director = credits?.crew.find((person) => person.job === "Director");

  const writers = credits?.crew.filter(
    (person) => person.job === "Writer" || person.job === "Screenplay",
  );

  const stars = credits?.cast.slice(0, 5);
  console.log(movie);
  return (
    <div className="flex w-full justify-center flex-col">
      <Navigation />
      <div className="flex justify-center w-full">
        <div className="max-w-[1080px] flex flex-col gap-5">
          <DetailsHero movie={movie} />
          <DetailsContent
            movie={movie}
            director={director}
            writers={writers}
            stars={stars}
          />
          <DetailsMoreLike movies={morelike} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

{
  /* <div className="flex gap-[30px]">
            <div className="relative w-[290px] h-[428px]">
              {movie?.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie?.original_title || "movie"}
                  className=" rounded-md"
                  priority
                  sizes="290px"
                  fill
                />
              )}
            </div>
            <div className="relative  w-[760px] h-[428px]">
              {movie?.backdrop_path && (
                <Image
                  key={movie?.id}
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie?.original_title || "movie"}
                  className=" rounded-md "
                  priority
                  sizes="760px"
                  fill
                />
              )}
              <div className="flex items-center gap-3  absolute text-xl bottom-4 left-4 text-gray-50 ">
                <button className="bg-white h-10 w-10 flex justify-center items-center rounded-4xl cursor-pointer ">
                  <img className="h-3 w-2.5" src="/play.png" alt="play-icon" />
                </button>
                <p>Play trailer</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex gap-2">
              {movie?.genres?.map((genre) => (
                <Badge variant={"outline"} key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            </p>
            <p>{movie?.overview}</p>
            <span className="flex gap-[53px]">
              <p className="w-16 h-7 text-[#09090B] font-inter text-base font-bold leading-7">
                Director
              </p>
              <p>{director?.name}</p>
            </span>
            <span className="flex gap-[53px]">
              <p className="w-16 h-7 text-[#09090B] font-inter text-base font-bold leading-7">
                Writers
              </p>
              <p>{writers?.map((w) => w.name).join(" ·  ")} </p>
            </span>
            <span className="flex gap-[53px]">
              <p className="w-16 h-7 text-[#09090B] font-inter text-base font-bold leading-7">
                Stars
              </p>
              <p>{stars?.map((s) => s.name).join(" ·  ")} </p>
            </span>
          </div>
          <div>
            <span className="flex justify-between">
              <h2 className="text-[#09090B] font-inter text-2xl font-semibold leading-8 tracking-[-0.6px]">
                More like this
              </h2>
              <button className="flex items-center gap-2">
                See more
                <img className="h-2.5 w-2.5" src="/vector.png" alt="arrow" />
              </button>
            </span>
            <span></span>
          </div> */
}
