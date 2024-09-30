"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownContentProfile } from "./DropdownContentProfile";
import { UserAvatar } from "./Avatar";

export function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsOpen(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        disabled={isMobile}
        className="flex flex-row focus:outline-none"
        onMouseEnter={handleMouseEnter}
 
      >
        <UserAvatar />
      </DropdownMenuTrigger>
      <div ref={menuRef}>
        <DropdownContentProfile />
      </div>
    </DropdownMenu>
  );
}
