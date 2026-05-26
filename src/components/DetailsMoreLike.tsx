import Image from "next/image";

// interface Props {
//   title?: string;
//   onSeeMore?: () => void;
// }

interface Props {
  movies: any[];
}

const DetailsMoreLike = ({ movies }: Props) => {
  return (
    // <div className="w-full">
    //   <span className="flex justify-between items-center">
    //     <h2 className="text-[#09090B] text-2xl font-semibold tracking-[-0.6px]">
    //       {title}
    //     </h2>

    //     <button
    //       onClick={onSeeMore}
    //       className="flex items-center gap-2 text-sm font-medium"
    //     >
    //       See more
    //       <Image src="/vector.png" alt="arrow" width={10} height={10} />
    //     </button>
    //   </span>

    //   {/* content grid placeholder */}
    //   <div className="mt-4">{/* Here you will render similar movies */}</div>
    // </div>
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

            <p className="text-sm line-clamp-1">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsMoreLike;
