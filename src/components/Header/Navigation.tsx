"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { MenuBar } from "./MenuBar";
import { navigationMock } from "@/data/navigationMock";
import { AccordionMenu } from "./AccordionMenu";

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    setIsMobile(window.innerWidth < 768);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <AccordionMenu navigation={navigationMock}/>
  ) : (
    <MenuBar navigation={navigationMock}/>
  );
}
