"use client";

import { MainBanner } from "@/components/Banners/BannerCarousel";
import ProductsSlider from "@/components/Products.jsx/ProductsSlider";

export default function Home() {


  return (
    <main className="flex flex-col items-center justify-between p-10">
      {/* Seção do Banner e Imagens */}
      <MainBanner />

      {/* Slider de Produtos */}
      <div className="w-full">
      <ProductsSlider />
      </div>
    </main>
  );
}
