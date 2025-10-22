import { TERMINAL_SKILLS } from "@/constants";

export const Terminal = () => {
  return (
    <div className="relative z-10 mx-4 w-full max-w-4xl px-4">
      <div className="rounded-lg border border-gray-800 bg-black/50 p-6 backdrop-blur-lg">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-green-500">$ whoami</p>
          <h1 className="mt-2 mb-4 text-4xl font-bold md:text-5xl">
            Bhuvanesh KM
          </h1>
          <p className="mb-2 text-gray-400">Full Stack Developer</p>
          <p className="text-green-500">$ skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TERMINAL_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-sm border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
