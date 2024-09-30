"use client";
import { Fragment } from "react";
import { Input } from "../ui/input";
import ImageComponent from "../Image";
import logo from "../../../public/logo.png";
import { Cart } from "./Cart";

export default function HeaderActions() {
  return (
    <Fragment>
      <div className="flex items-center justify-between h-24 px-4">
        <div className="flex-shrink-0">
          <ImageComponent src={logo} alt="logo" height={20} width={120} />
        </div>
        <div className="flex items-center space-x-6">
          <Cart />
        </div>
        <div className="flex-grow mx-8">
          <Input
            className="w-full"
            placeholder="Pesquise por produtos, passagens, serviços e muito mais..."
          />
        </div>
      </div>
    </Fragment>
  );
}
