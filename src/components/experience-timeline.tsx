import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaCheckCircle } from "react-icons/fa";

import { EXPERIENCE_TIMELINE } from "@/constants";

interface ExperienceTimelineProps {
  title: string;
  description: string;
  points: string[];
  projects?: string[];
}

export function ExperienceTimeline() {
  const data = EXPERIENCE_TIMELINE.map((item: ExperienceTimelineProps) => ({
    title: item.title,
    content: (
      <div className="mt-2" key={item.title}>
        {item.points.map((point, index) => (
          <div
            key={index}
            className="mb-4 flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
          >
            <span className="shrink-0">
              <FaCheckCircle color="green" className="size-4" />
            </span>
            {point}
          </div>
        ))}
        {/* {item?.projects && (
          <div className="mt-2">
            <span className="text-green-500">$ projects</span>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {item.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-sm border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400"
                >
                  {project}
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
