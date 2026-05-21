import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Contentimage from "./Content";

const CarouselData = () => {
  return (
    <Carousel className="  relative group ">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative flex w-full h-auto overflow-hidden">
                <Contentimage
                  contentimage="/Feature.png"
                  playing="Now playing :"
                  contentname="Wicked"
                  rating={6.9}
                  contenttext="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
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
