"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu, X } from "lucide-react"; // Added the 'X' icon to close the drawer
import { Profile } from "./Profile";
import { Navigation } from "./Navigation";
import logo from "../../../public/logo.png";
import ImageComponent from "../Image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the drawer open or closed
  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the drawer on window resize if the screen is larger than mobile size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center py-1 px-8 bg-white">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-start">
          <ImageComponent src={logo} width={120} height={40} alt="logo" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-8">
          <Input type="search" placeholder="Search..." className="w-full px-4 py-2 border rounded-lg" />
        </div>

        {/* Profile and Cart */}
        <div className="flex items-center space-x-4 mr-8">
          <Profile />
          <ShoppingCart className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block mx-auto px-8">
        <Navigation />
      </div>

      {/* Mobile Header - Appears only on `sm` */}
      <div className="flex sm:flex md:hidden justify-between items-center py-4 px-6 bg-white w-full">
        {/* Menu Button */}
        <button onClick={toggleDrawer} className="flex items-center space-x-2 text-gray-700 focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0">
          <ImageComponent src={logo} width={100} height={20} alt="logo" />
        </div>

        {/* Shopping Cart */}
        <ShoppingCart className="w-6 h-6 text-gray-700" />
      </div>

      {/* Drawer for Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay to close the drawer when clicking outside */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-64 bg-white shadow-md h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              {/* Close Button */}
              <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4">
              {/* Profile and Navigation */}
              <Profile />
              <div className="border-t my-4"></div>
              <Navigation />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
