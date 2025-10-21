import { ArrowDown } from "lucide-react";

const ScrollExplore = () => {
  return (
    <div className="text-muted-foreground absolute bottom-4 w-full animate-bounce text-center text-sm">
      <h2>Scroll To Explore</h2>
      <ArrowDown className="mx-auto mt-1 size-4" />
    </div>
  );
};

export default ScrollExplore;
