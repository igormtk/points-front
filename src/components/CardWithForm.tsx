import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import SelectOptions from "./SelectOptions";

type CardWithFormProps = {
  title: string;
  description: string;
  placeholderSelect: string;
  linkTo: string;
};

export function CardWithForm({
  title,
  description,
  placeholderSelect,
  linkTo,
}: CardWithFormProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="region">Region</Label>
              <Select>
                <SelectOptions
                  title={title}
                  placeholderSelect={placeholderSelect}
                />
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col item-center">
        <Link href={linkTo}>
          <Button>Start</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
