"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ProductCard } from "@/components/Products.jsx/ProductCard";
import barbeador from "../../../public/barbeador.jpeg";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductsSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 17,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  return (
    <div className="w-full relative">
      <h1 className="mt-12 mb-4 flex items-center justify-start font-bold">
        Produtos Em Destaque:
      </h1>

      {/* Botões de navegação */}
      <>
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        >
          <ArrowRight />
        </button>
      </>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 1"
            description="Descrição do Produto 1"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 2"
            description="Descrição do Produto 2"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 3"
            description="Descrição do Produto 3"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 4"
            description="Descrição do Produto 4"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 5"
            description="Descrição do Produto 5"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 6"
            description="Descrição do Produto 6"
            imageUrl={barbeador}
          />
        </div>
        <div className="keen-slider__slide">
          <ProductCard
            title="Produto 7"
            description="Descrição do Produto 7"
            imageUrl={barbeador}
          />
        </div>
      </div>
    </div>
  );
}
