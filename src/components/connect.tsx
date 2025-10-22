import { FileIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";

export const Connect = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-lg"
        style={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-green-500/5 to-blue-500/5"></div>
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs md:text-base">
            <p className="mb-2 text-green-500">$ contact --info</p>
            <h2 className="mb-8 text-3xl font-bold text-gray-200">
              Let&apos;s connect!
            </h2>
            <p className="mt-8 mb-2 text-green-500">$ location --current</p>
            <div className="flex items-center gap-2 text-gray-300">
              <FaLocationDot className="text-green-400" />
              <span>Bangalore, India</span>
            </div>
            <p className="mt-8 mb-2 text-green-500">$ contact --email</p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-400 transition-colors hover:bg-green-500/20"
            >
              bhuvaneshkm441@gmail.com
            </a>
            <p className="mt-8 mb-2 text-green-500">$ cat resume.pdf</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-3 text-green-400 transition-colors hover:bg-green-500/20"
            >
              <FileIcon className="h-5 w-5 text-green-400" />
              <span>Download Resume</span>
            </a>
            <p className="mt-8 mb-2 text-green-500">$ ls ./social-links</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Bhuvanesh-km"
                className="group flex transform-none items-center gap-3 rounded-lg border border-gray-700/50 bg-gray-800/50 px-4 py-3 transition-colors hover:scale-105 hover:bg-gray-700/50"
              >
                <div className="rounded-lg bg-gray-700/50 p-2 transition-colors group-hover:bg-gray-600/50">
                  <FaGithub
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-200">GitHub</p>
                  <p className="text-sm text-gray-400">@bhuvanesh-km</p>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bhuvanesh-k-m-332747208/"
                className="group flex transform-none items-center gap-3 rounded-lg border border-gray-700/50 bg-gray-800/50 px-4 py-3 transition-colors hover:scale-105 hover:bg-gray-700/50"
              >
                <div className="rounded-lg bg-gray-700/50 p-2 transition-colors group-hover:bg-gray-600/50">
                  <FaLinkedin
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-200">LinkedIn</p>
                  <p className="text-sm text-gray-400">@bhuvanesh-k-m</p>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/Bhuvanesh_km"
                className="group flex transform-none items-center gap-3 rounded-lg border border-gray-700/50 bg-gray-800/50 px-4 py-3 transition-colors hover:scale-105 hover:bg-gray-700/50"
              >
                <div className="rounded-lg bg-gray-700/50 p-2 transition-colors group-hover:bg-gray-600/50">
                  <FaSquareXTwitter
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-200">Twitter</p>
                  <p className="text-sm text-gray-400">@bhuvanesh_km</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
