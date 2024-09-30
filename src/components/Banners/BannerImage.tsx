import Image from "next/image";
import barbeador from "../../../public/barbeador.jpeg";

export function BannerImage() {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      <Image
        src={barbeador}
        alt="Promoção de Eletrônicos"
        fill
        className="object-cover"
      />
    </div>
  );
}
