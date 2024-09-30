import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "./BannerCarousel";

interface NavigationButtonProps {
    items: Product[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export function NavigationButton({
    items,
    currentIndex,
    setCurrentIndex,
  }: NavigationButtonProps) {
    return (
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="bg-black/50 text-white rounded-full p-2 flex items-center"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + items.length) % items.length)
          }
        >
          <ArrowLeft />
        </button>
        <button
          className="bg-black/50 text-white rounded-full p-2"
          onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
        >
          <ArrowRight />
        </button>
      </div>
    );
  }