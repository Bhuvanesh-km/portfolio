"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const ScrollExplore = () => {
  const handleScroll = () => {
    console.log(window.innerHeight, " scrolling");
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleScroll}
      className="text-muted-foreground absolute bottom-4 z-20 w-full animate-bounce text-center text-sm"
    >
      <h2>Scroll To Explore</h2>
      <ArrowDown className="mx-auto mt-1 size-4 cursor-pointer" />
    </div>
  );
};

export default ScrollExplore;
