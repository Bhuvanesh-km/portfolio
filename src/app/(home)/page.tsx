import ScrollExplore from "@/components/scroll-explore";
import { Terminal } from "./terminal";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect rows={14} cols={35} cellSize={56} />
      <Terminal />
      <ScrollExplore />
    </div>
  );
}
