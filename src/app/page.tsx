"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import CarouselData from "@/components/Carousel";
import MoviesData from "@/components/MoviesData";

export interface MoviecardProps {
  adult: boolean;
  backdrop_path: string;

  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  softcore: boolean;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col relative">
      <div className="">
        <CarouselData />
        <div className="flex flex-col ">
          <MoviesData title="upcoming" />
          <MoviesData title="top_rated" />
          <MoviesData title="popular" />
        </div>
      </div>
    </div>
  );
}
