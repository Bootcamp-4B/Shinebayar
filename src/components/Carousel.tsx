import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Contentimage from "./Content";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarouselProps } from "@/app/page";

const CarouselData = () => {
  const [carousel, setCarousel] = useState<CarouselProps[]>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ5NzM4NTlmMTM3MzQzNjQ1MWJlZWM3NWFlNzVkOSIsIm5iZiI6MTc3OTI2ODIxMi4xMDYsInN1YiI6IjZhMGQ3YTc0ZjBiNDVhZGU5MDA2YTdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJVw16x-JbKpRDDJV1sTdA2WmEsgbhKXLBvgCrn81SU",
          },
        },
      )
      .then((response) => {
        setCarousel(response.data.results);
      });
  }, []);
  return (
    <Carousel className="  relative group ">
      <CarouselContent>
        {carousel
          .filter((movie) => movie.backdrop_path)
          .map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="p-1">
                <Card className="relative flex w-full h-auto overflow-hidden">
                  <Contentimage
                    contentimage={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    playing="Now Playing"
                    contentname={movie.title}
                    rating={movie.vote_average}
                    contenttext={movie.overview}
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious
        className=" absolute  left-12
        w-4 py-5 px-5
    top-1/2
    -translate-y-1/2
    z-10
    opacity-0
    group-hover:opacity-100
    transition "
      />
      <CarouselNext
        className=" absolute   right-11
          w-4 py-5 px-5
    top-1/2
    -translate-y-1/2
    z-10
    opacity-0
    group-hover:opacity-100
    transition "
      />
    </Carousel>
  );
};

export default CarouselData;
