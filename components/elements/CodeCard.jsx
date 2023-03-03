import { header, social } from "/config";
import { ConvertBytes } from "/lib/utils";
import Link from "next/link";

export function CodeCard(userData) {
 return (
  <div className="card border-b-black/15 block w-full rounded-md border font-inter text-[15px] text-sm shadow-codeLight backdrop-blur-md transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-white/[15%] dark:bg-[#08152b]/30 dark:shadow-codeDark">
   <div className="w-fill border-b-dark/5 relative flex h-8 items-center gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]"></div>
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]"></div>
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]"></div>
    <div className="absolute top-0 bottom-0 flex w-full items-center justify-center">
     <span className="opacity-50" aria-hidden="true">
      Console
     </span>
    </div>
   </div>
   {userData && (
    <div className="min-h-[200px] overflow-x-hidden whitespace-nowrap p-4">
     <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
      →
     </span>{" "}
     <span className="font-semibold text-[#66e777]" aria-hidden="true">
      ~/{header.code.default.user}
     </span>{" "}
     <span className="font-semibold italic text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300" aria-hidden="true">
      $
     </span>{" "}
     <span className="italic" aria-label={`list github account ${social.github.username}`}>
      list github --user=
      <Link href={`https://github.com/${social.github.username}`} target="_blank" aria-label={`See ${social.github.user} github`}>
       <>"{social.github.username}"</>
      </Link>
     </span>
     <span className="leading-6">
      <div>
       <span aria-hidden="true"> + </span>
       <span className="font-semibold">{userData.userPublicRepositoriesCount} Open Source</span> {userData.userPublicRepositoriesCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(userData.userPublicRepositoriesDiskUsage * 1000)})
      </div>
     </span>
     {header.code.lines.map((line, index) => (
      <div key={index}>
       <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
        →
       </span>{" "}
       <span className="font-semibold text-[#66e777]" aria-hidden="true">
        ~/{line.user}
       </span>{" "}
       <span className="font-semibold italic text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">$</span> <span className="italic">{line.command}</span>
       <div className="leading-6">{line.response}</div>
      </div>
     ))}
     <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
      →
     </span>{" "}
     <span className="font-semibold text-[#66e777]" aria-hidden="true">
      ~/{header.code.default.user}
     </span>{" "}
     <span className="italic">
      <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:animate-cursor after:text-[1em] after:not-italic after:content-['▌'] motion-reduce:transition-none dark:text-slate-300" aria-hidden="true">
       $
      </span>
     </span>
    </div>
   )}
  </div>
 );
}