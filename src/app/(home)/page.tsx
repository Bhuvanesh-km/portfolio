import ScrollExplore from "@/components/scroll-explore";
import { Terminal } from "./terminal";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <BackgroundRippleEffect rows={14} cols={35} cellSize={56} />
        <Terminal />
        <ScrollExplore />
      </section>
      <section className="relative w-full px-4">
        <ExperienceTimeline />
      </section>
      <section className="bg-gray-900/50 px-4 py-20">
        <Connect />
      </section>
    </main>
  );
}
