import Image from "next/image";
import { Star } from "lucide-react";

// interface Props {
//   title?: string;
//   onSeeMore?: () => void;
// }

interface Props {
  movies: any[];
}

const DetailsMoreLike = ({ movies }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="flex justify-between">
        <h2 className="text-2xl font-semibold">More like this</h2>
        <button className="flex items-center cursor-pointer gap-2 text-sm font-medium">
          See more
          <Image src="/vector.png" alt="arrow" width={10} height={10} />
        </button>
      </span>
      <div className="grid grid-cols-5 gap-4">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex flex-col gap-2">
            <div className="relative w-[190px] h-[372px] overflow-hidden rounded-md">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
                priority
                sizes="190px"
              />
            </div>

            <div className="flex flex-col text-sm py-2 px-3 bg-[#F4F4F5] ">
              <p className="flex gap-1 h-[23px] items-center">
                <Star fill="yellow" stroke="yellow" size={16} />
                <span className="text-black flex items-center gap-0.5 ">
                  {movie.vote_average}
                  <span className="text-gray-300 text-xs">/10</span>
                </span>
              </p>
              <span className="flex text-lg  items-start w-full h-[56px]">
                {movie.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsMoreLike;
