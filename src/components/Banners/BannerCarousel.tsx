import { BannerCarousel } from "../Carousels/BannerCarousel";
import { BannerImage } from "./BannerImage";

export function MainBanner() {
  return (
    <div className="flex w-full h-[400px] gap-6">
      <div className="hidden lg:block w-2/3 relative overflow-hidden rounded-lg shadow-md">
        <BannerCarousel />
      </div>
      <div className="w-full lg:w-1/3">
        <BannerImage />
      </div>
    </div>
  );
}
