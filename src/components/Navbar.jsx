import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 relative top-0 w-full p-4 bg-amber-50">
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
