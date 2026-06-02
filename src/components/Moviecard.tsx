import { Card } from "./ui/card";
import { CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import type { MoviecardProps } from "@/app/page";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: MoviecardProps }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="w-[230px] overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full h-[340px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 100vw, 230px"
              className="object-cover"
              loading="eager"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="flex flex-col py-2 px-3 bg-[#F4F4F5]">
            <p className="flex gap-1 h-[23px] items-center">
              <Star fill="yellow" stroke="yellow" size={16} />
              <span className="text-black text-sm flex items-center gap-0.5">
                {movie.vote_average}
                <span className="text-gray-300 text-xs">/10</span>
              </span>
            </p>

            <span className="flex text-lg items-start w-full h-[56px]">
              {movie.title}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;

// import { Card } from "./ui/card";
// import { CardContent } from "./ui/card";
// import Image from "next/image";
// import { Star } from "lucide-react";
// import type { MoviecardProps } from "@/app/page";
// import Link from "next/link";

// const MovieCard = ({ movie }: { movie: MoviecardProps }) => {
//   return (
//     <Link href={`/${movie.id}`}>
//       <Card className="w-[230px] overflow-hidden">
//         <CardContent className="p-0">
//           <div className="relative w-full h-[340px]">
//             <Image
//               src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//               alt={movie.title}
//               fill
//               sizes="(max-width: 768px) 100vw, 230px"
//               className="object-cover"
//               loading="eager"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>

//           <div className="flex flex-col py-2 px-3 bg-[#F4F4F5]">
//             <p className="flex gap-1 h-[23px] items-center">
//               <Star fill="yellow" stroke="yellow" size={16} />
//               <span className="text-black text-sm flex items-center gap-0.5">
//                 {movie.vote_average}
//                 <span className="text-gray-300 text-xs">/10</span>
//               </span>
//             </p>

//             <span className="flex text-lg items-start w-full h-[56px]">
//               {movie.title}
//             </span>
//           </div>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// };

// export default MovieCard;
