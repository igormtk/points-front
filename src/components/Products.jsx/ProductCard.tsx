import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface CardWithFormProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
};

export function ProductCard({
  title,
  description,
  imageUrl
}: CardWithFormProps) {
  return (
    <Card className="w-[300px] cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
       1.328 Pontos ou R$ 80,00
      </CardContent>
      <CardFooter className="flex flex-col item-center">
        <h5>Para Assinantes Clube Pointigor: 800 Pontos</h5>
      </CardFooter>
    </Card>
  );
}
