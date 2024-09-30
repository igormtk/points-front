"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bannerEletro from "../../../public/banner_eletro.png";
import bannerSmartphone from "../../../public/banner_smartphone.png";
import bannerClothes from "../../../public/banner_clothes.png";
import { NavigationButton } from "./NavigationButtons";
import { DotsCarousel } from "./DotsCarousel";

// Definindo a interface para os produtos apresentados no carrossel
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Promoção: 50% OFF em Eletrônicos",
    description: "Aproveite nossa promoção imperdível!",
    imageUrl: bannerEletro,
  },
  {
    id: 2,
    title: "Lançamento de Smartphones",
    description: "Confira os novos modelos com desconto exclusivo.",
    imageUrl: bannerSmartphone,
  },
  {
    id: 3,
    title: "Compre 1 Leve 2: Moda",
    description: "Promoção especial para você renovar o guarda-roupa.",
    imageUrl: bannerClothes,
  },
];

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-full">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Botões de navegação nas laterais */}
            <NavigationButton
              items={featuredProducts}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </motion.div>
        ))}
      </div>
      <div>
        <div className="absolute bottom-0 w-full py-4">
          <div className="flex justify-center">
            <DotsCarousel
              items={featuredProducts}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
}
