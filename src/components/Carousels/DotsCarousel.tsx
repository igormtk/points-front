import { Product } from "./BannerCarousel";

interface DotsCarouselProps {
    items: Product[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
  }
  
  export const DotsCarousel = ({
    items,
    currentIndex,
    setCurrentIndex,
  }: DotsCarouselProps) => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-700" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    );
  };